Ext.define('contactlist.controller.IM',{
	extend:'Ext.app.Controller',
	myPic:'',
	yourPic:'',
	config:{
		refs:{
			'im':{
				selector:'im',
				xtype:'im',
				autoCreate:true
			},
			'send':'#send',
			'words':'#words',
			'face':'#face'
		},
		control:{
			'im button[name=viewOnLines]':{
				tap:'showOnLineContact'
			},
			im:{
				show:function(){
					if(Ext.getCmp('facePanel'))
					{
						Ext.getCmp('facePanel').hide();
					}
				},
				sendMessage:function(data){
					Ext.Msg.alert('系统提示',data);
				},
				sendMsg:function(){
					var msg = $('#msg').val();
					if('' == Ext.String.trim(msg))
					{
						Ext.Msg.alert('系统提示','不能发送空消息');
						return false;
					}
					//console.log(this.uid+msg);
					var date = new Date();
					var time = date.getHours()+':'+date.getMinutes();
					content = msg.replace(/<emt>(\d+)<\/emt>/g,"<img src='resources/images/face/$1.gif' />");
					Ext.socket.emit('msg',{id:this.uid,content:msg});
					var content = '<div class="chatItem me"><div class="time"><span class="timeBg left"></span>'+time+'<span class="timeBg right"></span></div><div class="chatItemContent"><img onerror="this.src=\'resources/images/ic_list_head.png\'" src="'+Ext.myPic+'" class="avatar  headPic"><div class="cloud cloudText"><div style="" class="cloudPannel"> <div class="sendStatus"></div><div class="cloudBody"><div class="cloudContent"><pre style="white-space:pre-wrap">'+content+'</pre></div></div><div class="cloudArrow "></div></div></div></div></div>';
					Ext.DomHelper.append('chat_chatmsglist',content);
					$('#msg').val('');		
					if(Ext.getCmp('facePanel')) $('#facePanel').hide();
					var scroller = this.getIm().getScrollable().getScroller();
			        var size    = scroller.getSize(),
		            	cntSize = scroller.getContainerSize(),
		            	height = 150,
		            	num = parseInt(size.y/85),
		            	dif = parseInt(size.y - cntSize.y);
			        if($('.chatItem').length-1 < num)
		        	{
			        	height = 0;
		        	}
					scroller.scrollTo(size.x - cntSize.x, dif + height);
					//this.getIm().getScrollable().getScroller().scrollTo(0,550,{type:'slide',direction:'down'});
				},
				showFacePanel:function() {
					if(Ext.getCmp('facePanel')){
						$('#facePanel').toggle();
						return;
			        }
			        var html = '<div class="Content"><ul>';
			        for(var i=1;i<=60;++i)
			        {
						html +=	'<li style="display: inline-block;width: 25px;height: 25px;padding: 2px;border: 1px solid #f8f8f8;float: left;"><img class="face" src="resources/images/face/'+i+'.gif" face="<emt>'+i+'</emt>"></li>';
			        }
					html += '</ul></div>';
					var panel = Ext.create('Ext.Container',{
						id:'facePanel',
						docked:'bottom',
						height:'100px',
						width:'100%',
						scrollable:true,
						style:{
							background:'#fff'
						},
						html:html
					});	
					Ext.getCmp('im').add(panel);
					$(".Content img").click(function(){
						var face = $(this).attr("face");
						var text = $('#msg').val();
						$('#msg').focus();
						$('#msg').val(text+face);
				
					});
					panel.show();
				},
				words:function(){
					var actionSheet = Ext.create('Ext.ActionSheet', {
						hideOnMaskTap:true,
					    items: [
					        {
					            text: '非常认同您的意见。',
					            handler:function(){
					            	$('#msg').val(this.getText());
					            	this.up('actionsheet').hide();
					            }
					        },
					        {
					            text: '感谢您的辛勤工作。',
					            handler:function(){
					            	$('#msg').val(this.getText());
					            	this.up('actionsheet').hide();
					            }
					        },
					        {
					            text: '我现在需要考虑一下再回复您。',
					            handler:function(){
					            	$('#msg').val(this.getText());
					            	this.up('actionsheet').hide();
					            }
					        },
					        {
					            text: '好的，我会尽快给您答复。',
					            handler:function(){
					            	$('#msg').val(this.getText());
					            	this.up('actionsheet').hide();
					            }
					        },
					        {
					            text: '我现在在开会，稍后联系您。',
					            handler:function(){
					            	$('#msg').val(this.getText());
					            	this.up('actionsheet').hide();
					            }
					        },
					        {
					        	text:'取消',
					        	handler:function(){
					        		this.up('actionsheet').hide();
					        	}
					        }
					    ],
					    listeners:{
					    	hide:function(){
					    		this.destroy();
					    	}
					    }
					});					
					Ext.Viewport.add(actionSheet);
					actionSheet.show();
				}
			}
		},
		routes:{
			'im/:id/:cid':'showIM'
		}
	},
	showIM:function(id,cid){
		var im = this.getIm(),me = this;
		Ext.myPic = '';
		Ext.yourPic = '';
		Ext.Viewport.animateActiveItem(im,{type:'slide',direction:'left'});
		/*
		if('undefined' != typeof(me.socket))
		{
			var userid = cid,
				yourid = id;
			//console.log(userid+'==='+yourid);
			me.socket.emit('initClient',{userid:userid,yourid:yourid});
			if(this.uid == id) return;			
			//$('#chat_chatmsglist').html('可以开始聊天了'+'<p>');
			$('#chat_chatmsglist').html('');
			this.uid = id;
			return;
		}
		*/
		this.uid = id;

			Ext.socket.on('users', function (data) {
				$("#num").html(data.num);
			});
			Ext.socket.on('init', function (data) {
				//console.log(data);
				Ext.myPic = me.filterImg(data[0]['pic']);
				Ext.yourPic = me.filterImg(data[1]['pic']);
				//console.log(data);
				Ext.getCmp('im').down(' toolbar').setTitle(data[1]['name']);
			});
			Ext.socket.on('logout', function (data) {
//				var msg = data.userid+'退出登录!'+'<p>';
				$("#num").html(data.num);
//				Ext.DomHelper.append('chat_chatmsglist',msg);
			});	
			Ext.socket.on('message', function (data) {
				var date = new Date();
				var time = date.getHours()+':'+date.getMinutes();
				//console.log(data);
				content = data.replace(/<emt>(\d+)<\/emt>/g,"<img src='resources/images/face/$1.gif' />");
				var content = '<div class="chatItem you"><div class="time"><span class="timeBg left"></span>'+time+'<span class="timeBg right"></span></div><div class="chatItemContent"><img onerror="this.src=\'resources/images/ic_list_head.png\'" src="'+Ext.yourPic+'" class="avatar headPic" style="margin-left:10px;"><div class="cloud cloudText"><div style="" class="cloudPannel"> <div class="sendStatus"></div><div class="cloudBody"><div class="cloudContent"><pre style="white-space:pre-wrap">'+content+'</pre></div></div><div class="cloudArrow "></div></div></div></div></div>';
				Ext.DomHelper.append('chat_chatmsglist',content);
				var scroller = im.getScrollable().getScroller();
		        var size    = scroller.getSize(),
	            	cntSize = scroller.getContainerSize(),
	            	height  = 150,
	            	num = parseInt(size.y/85),
	            	dif = parseInt(size.y - cntSize.y);
		        if($('.chatItem').length-1 < num)
	        	{
		        	height = 0;
	        	}
				scroller.scrollTo(size.x - cntSize.x, dif + height);
			});
		//},function(){
		//	Ext.Msg.alert('系统提示','加载文件错误，可能服务器停止服务!');
	//	});
		this.socket = me.socket;
	},
	showOnLineContact:function(){
		this.redirectTo('onLineContact');
	},
	filterImg:function(pic){
		if('' == pic || null == pic) return "resources/images/ic_list_head.png";
		else if(-1 != pic.indexOf('data:image/png;base64')) return pic;
		else return Ext.customURL+'../'+pic;			
	}
});