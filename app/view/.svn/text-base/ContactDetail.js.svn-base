Ext.define('contactlist.view.ContactDetail',{
	extend:'Ext.Container',
	xtype:'contactdetail-con',
	id:'contact-detail',
	config:{
		style:'background:#ffffff;',
		styleHtmlCls:true,
		scrollable:true,
		items:[
		    {
		    	xtype:'toolbar',
		    	title:'联系人信息',
		    	cls:'common_toolbar',
		    	docked:'top',
		    	items:[
		    	{
		    		xtype:'button',
		    		text:'返回',
		    		iconMask: true,
		    		pressedCls:false,
                    ui:'plain',
	    			icon:'resources/images/toolbar/ic_navbar_back.png',
	    			iconCls:'toolbar_backBtn_icon',
	    			cls:'toollbar_backBtn',
	    			labelCls:'toolbar_backBtn_label',
		    		handler:function() {
		    			history.go(-1);
		    		}
		    	},
//		    	{
//		    		xtype:'panel',
//		    		style:'margin-left:-4px;font-weight:normal;',
//		    		html:'返回'
//		    	},
		    	]
			},
			{
				xtype:'button',
				pressedCls:false,
				text:'发送消息',
				cls:'send_msg_btn',
				docked:'bottom',
				handler:function() {
					this.up('contactdetail-con').showIM();
				}
			}
		],
    	tpl:
    		new Ext.XTemplate(
//    			'<tpl if="currentUserId != id">',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;position:relative;"><img class="headPic" style="width:72px;height:72px;" src="{[this.image(values.pic)]}" onerror="this.src=\'resources/images/ic_list_head.png\'"><span class="ui_first_span">{name}</span><p class="spanlast">部门-{dept_name}<br>职位-{job_name}</p><span onclick=""><img class="im" style="float:right;width:31px;margin-top:-40px;" src="resources/images/icon_wechat56.png"/></span></div>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><span style="color:#2277FE;">手机</span><p id="phone" style="color:#808081;margin-top:10px;font-size:16px;">{phone}</p><a href="sms:{phone}"><img class="msg" style="height:42px;width:42px;float:right;margin-top:-40px;" src="resources/images/ic_list_sms.png"></a><a href="tel:{phone}"><img class="phone" style="height:42px;width:42px;margin-top:-40px;float:right;" src="resources/images/ic_list_call.png"></a></div>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><span style="color:#2277FE;">座机</span><p style="color:#808081;margin-top:10px;font-size:16px;"><a href="tel:{tel}">{tel}</a></p></div>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><span style="color:#2277FE;">邮箱</span><p style="color:#808081;margin-top:10px;font-size:16px;"><a href="mailto:{email}">{email}</a></p></div>',
//    			'<tpl else>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><img id="headPhoto" class="headPic" style="width:72px;height:72px;" src="{[this.image(values.pic)]}" onerror="this.src=\'resources/images/ic_list_head.png\'"><span class="ui_first_span">{name}</span><span class="ui_first_span takePhoto" style="font-size:14px;display:none;"><img style="margin-top:25px;float:right;width:42px;" src="resources/images/camera.png"/></span><p class="spanlast">部门-{dept_name}<br>职位-{job_name}</p></div>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><img style="width:42px;height:42px;float:left;margin-right:10px;margin-top:13px;" src="resources/images/ic_list_dalete.png"><span style="color:#2277FE;">手机</span><p style="color:#808081;font-size:16px;" class="text" id="phone">{phone}</p><br><input id="KNOWN_AS" class="edit_input" type="text" name="phone" value="{phone}" style="display:none;"></div>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><img style="width:42px;height:42px;float:left;margin-right:10px;margin-top:13px;" src="resources/images/ic_list_dalete.png"><span style="color:#2277FE;">座机</span><p style="color:#808081;font-size:16px;" class="text" id="tel">{tel}</p><br><input id="KNOWN_AS" class="edit_input" type="text" name="tel" value="{tel}" style="display:none;"></div>',
//    			'<div style="padding:20px;border-bottom:1px solid #BABCB7;"><img style="width:42px;height:42px;float:left;margin-right:10px;margin-top:13px;" src="resources/images/ic_list_dalete.png"><span style="color:#2277FE;">邮箱</span><p style="color:#808081;font-size:16px;" class="text" id="email">{email}</p><br><input id="KNOWN_AS" class="edit_input" type="text" name="email" value="{email}" style="display:none;"></div>',
//    			'</tpl>',
    			
    			
				'<div style="width:100%;height:100%;">',
    			'	<div style="border-bottom:1px solid #d9d9d9;height:100px;padding:25px 20px 20px 20px;">',
    			'		<img style="float:left;padding:2px;border:1px solid #dddddd;border-radius: 3px;" src="{[this.image(values.pic)]}" onerror="this.src=\'resources/images/ic_list_head.png\'" width="60" height="60"/>',
    			'		<div style="margin-left:80px;width:180px;margin-top:14px;color:#323232;font-weight:bold;font-size:15px;">{name}</div>',
    			'		<div style="margin-left:80px;width:180px;margin-top:2px;color:#767676;font-size:15px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{job_name}</div>',
    			'	</div>',
    			'	<div style="height:60px;padding:10px;border-bottom:1px solid #d9d9d9;">',
    			'		<div style="color:#0b6aff;font-size:13px;">个性签名</div>',
    			'		<div style="color:#636363;font-size:14px;">每天叫醒我的不是闹钟，而是梦想。</div>',
    			'	</div>',
    			'	<div style="height:60px;padding:10px;border-bottom:1px solid #d9d9d9;">',
    			'		<div style="width:50%;float:left;">',
    			'			<div style="color:#0b6aff;font-size:14px;">手机</div>',
    			'			<div style="color:#636363;font-size:15px;" id="phone">{phone}</div>',
    			'		</div>',
    			'		<div style="width:50%;float:right;">',
    			'			<div style="float:right;margin-right:-10px;">',
    			'				<a href="sms:{phone}"><img src="resources/images/call/ic_info_call.png" height="45" width="45" /></a>',
    			'			</div>',
    			'			<div style="float:right;">',
    			'				<a href="sms:{phone}"><img src="resources/images/call/ic_info_message.png" height="45" width="45" /></a>',
				'			</div>',
    			'		</div>',
    			'	</div>',
    			'	<div style="height:60px;padding:10px;border-bottom:1px solid #d9d9d9;">',
    			'		<div style="width:50%;float:left;">',
    			'			<div style="color:#0b6aff;font-size:14px;">座机</div>',
    			'			<div style="color:#636363;font-size:15px;" id="tel">{tel}</div>',
    			'		</div>',
    			'		<div style="width:50%;float:right;">',
    			'			<div style="float:right;margin-right:-10px;">',
    			'				<a href="tel:{tel}"><img src="resources/images/call/ic_info_call.png" height="45" width="45" /></a>',
				'			</div>',
    			'		</div>',
    			'	</div>',
    			'	<div style="height:60px;padding:10px;border-bottom:1px solid #d9d9d9;">',
    			'		<div style="width:70%;float:left;">',
    			'			<div style="color:#0b6aff;font-size:14px;">邮箱</div>',
    			'			<div style="color:#636363;font-size:15px;" id="email">{email}</div>',
    			'		</div>',
    			'		<div style="width:30%;float:right;">',
    			'			<div style="float:right;margin-right:-10px;">',
    			'				<a href="mailto:{email}"><img src="resources/images/call/ic_info_mail.png" height="45" width="45" /></a>',
				'			</div>',
    			'		</div>',
    			'	</div>',
    			'</div>',
    			
    			
    	        {
    	        	image:function(pic){
    	        		if('' == pic || null == pic) return "resources/images/ic_list_head.png";
    	        		else if(-1 != pic.indexOf('data:image/png;base64')) return pic;
    	        		else return Ext.customURL+'../'+pic;	        		
    	        	}
    	        }
    		),
		listeners:[
        	{
	            element: 'element',
	            delegate: 'img.im',
	            event: 'tap',
	            fn:'showIM'
            },
            {
            	element:'element',
            	delegate:'span.takePhoto',
            	event:'tap',
            	fn:'takePhoto'
            }
//        	,
//        	{
//	            element: 'element',
//	            delegate: 'img.msg1',
//	            event: 'tap',
//	            fn:function(){
//	            	var mobilephone = $('#phone').html();
//	            	if(!mobilephone){
//	            		Ext.Msg.alert('系统提示','缺少手机号码');
//	            		return;
//	            	}
//	            	window.location.href="http://test.kingnode.com/portal/crm/openMsg()"+mobilephone;	            	
//            	}
//            },
//            {
//	            element: 'element',
//	            delegate: 'img.phone1',
//	            event: 'tap',
//	            fn:function(){
//	            	var mobilephone = $('#phone').html();
//	            	if(!mobilephone){
//	            		Ext.Msg.alert('系统提示','缺少手机号码');
//	            		return;
//	            	}
//	            	window.location.href="http://test.kingnode.com/portal/crm/openPhone()"+mobilephone;
//	            }
//            }
		]
	},
	showIM:function(){
		var uid = this.getData().id;
		this.fireEvent('showIM',uid);
	},
	takePhoto:function(){
		this.fireEvent('takePhoto');
	}
});