Ext.define('contactlist.view.IM',{
	extend:'Ext.Container',
	xtype:'im',
	config:{
		styleHtmlContent:true,
		scrollable:true,
		id:'im',
		items:[
			{
				xtype:'toolbar',
				docked:'top',
				title:'张小飞',
				cls:'common_toolbar',
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
					handler:function(){history.go(-1);}
				},
				{
					xtype:'spacer'
				},
				{
					xtype:'button',
					iconMask: true,
					pressedCls:false,
                    ui:'plain',
	    			icon:'resources/images/toolbar/ic_navbar_gourdchat.png',
	    			iconCls:'toolbar_backBtn_icon',
	    			cls:'toollbar_finishBtn',
	    			name:'viewOnLines'
				}
				]
			},
			{
				xtype:'carousel',
				id:'faceCarousel',
				height:150,
				hidden:true,
				docked:'bottom'
			},
			{
				xtype:'panel',
				height:150,
				id:'functionPanel',
				hidden:true,
				docked:'bottom',
				html:'<ul class="fun_menu">' +
				    	'<li id="camera"><a href="javascript:void(0);"><img src="resources/images/ic_more_photo.png" height="60" width="60"/><div>拍照</div></a></li>' +
				        '<li id="selectPhoto"><a href="javascript:void(0);"><img src="resources/images/ic_more_picture.png" height="60" width="60"/><div>图片</div></a></li>' +
				        '<li id="location"><a href="javascript:void(0);"><img src="resources/images/ic_more_logca.png" height="60" width="60"/><div>位置</div></a></li>' +
				     '</ul>',
			},
			{
				xtype:'toolbar',
				docked:'bottom',
				cls:'bottom_toolbar',
				id:'bottomtb',
				html:'<div style="height:42px;width:100%;float:left;">' +
					 '	<div style="height:42px;width:12%;float:left;text-align:center;padding-right:5px;margin-top:2px;">' +
					 '		<img id="forwordInput" class="show" height="42" width="30" src="resources/images/toolbar/btn_chat_voice_nomal.png" />' +
					 '		<img id="forwordSpeak" class="hide" height="42" width="30" src="resources/images/toolbar/btn_chat_text_nomal.png" />' +
//					 '		<img id="face" height="42" width="30" src="resources/images/toolbar/btn_chat_text_nomal.png" />' +
					 '	</div>' +
					 '	<div style="width:64%;float:left;margin-top:5px;">' +
					 '		<textarea id="msgContent" name="content" class="send_input_div show"></textarea>' +
//					 '		<div id="msgContent" contenteditable="true" class="send_input_div show" ></div>' +
					 '		<div id="pressSpeak" class="press_speak hide">按住&nbsp;说话</div>' +
					 '		<div id="pressStop" class="press_stop hide">松开&nbsp;结束</div>' +
					 '	</div>' +
					 '	<div id="addFunction" class="add_function"><img class="show" height="42" width="30" src="resources/images/toolbar/btn_chat_more_nomal.png" /></div>' +
					 '	<div id="sendMessageBtn" class="im_sendBtn hide">发送</div>' +
					 '	<div style="margin-top:2px;height:45px;width:11%;float:left;"><img id="selectFace" height="42" width="30" src="resources/images/toolbar/btn_chat_face_nomal.png" /></div>' +
//					 '	<div style="margin-top:2px;height:45px;width:11%;float:left;"><img id="send" height="42" width="30" src="resources/images/toolbar/btn_chat_face_nomal.png" /></div>' +
					 '</div>'
			}
		],
		html:'<div class="chatContent" id="chat_chatmsglist" ctrl="1"><div class="chatItem me"><div class="time">'+time+'</div><div class="chatItemContent"><img onerror="this.src=\'resources/images/ic_list_head.png\'" src="'+Ext.myPic+'" class="avatar  headPic"><div class="cloud cloudText"><div style="" class="cloudPannel"> <div class="sendStatus"></div><div class="cloudBody"><div class="cloudContent">' +
			 '<div class="img_message_content">' +
		    	'<img src="resources/images/map_located.png" width="100" height="100">' +
		        '<div class="img_font_title">我的位置</div>' +
				'<div class="img_font_content">请点击查看地图位置</div>' +
		     '</div>' +
		     '</div><div class="cloudArrow "></div></div></div></div></div><div style="height:1000px;"></div></div>',
		listeners:[
		    {
		    	element:'element',
		    	delegate:'img.face',
		    	fn:'getOneFace',
		    	event:'tap'
		    },
		    {
		    	element:'element',
		    	delegate:'textarea#msgContent',
		    	fn:'getContent',
		    	event:'keyup'
		    },
			{
				element:'element',
				delegate:'img#send',
				fn:'sendMsg',
				event:'tap'
			},
			{
				element:'element',
				delegate:'img#forwordSpeak',
				fn:'showSpeak',
				event:'tap'
			},
			{
				element:'element',
				delegate:'img#forwordInput',
				fn:'showInput',
				event:'tap'
			},
			{
				element:'element',
				delegate:'div#pressSpeak',
				fn:'holdRecord',
				event:'taphold'
			},
			// {
				// element:'element',
				// delegate:'div#pressSpeak',
				// fn:'stopRecord',
				// event:'touchend'
			// },
			{
				element:'element',
				delegate:'div#addFunction',
				fn:'showFunction',
				event:'tap'
			},
			{
				element:'element',
				delegate:'div#sendMessageBtn',
				fn:'sendMessage',
				event:'tap'
			},
			{
				element:'element',
				delegate:'li#camera',
				fn:'openCamera',
				event:'tap'
			},
			{
				element:'element',
				delegate:'li#selectPhoto',
				fn:'openImgStorage',
				event:'tap'
			},
			{
				element:'element',
				delegate:'li#location',
				fn:'openMap',
				event:'tap'
			},
			{
				element:'element',
				delegate:'img#selectFace',
				fn:'getFacesList',
				event:'tap'
			},
			{
				element:'element',
				delegate:'img#face',
				fn:'showFacePanel',
				event:'tap'
			},
			{
				element:'element',
				delegate:'img#words',
				fn:'words',
				event:'tap'
			}
		]
	},
	getOneFace:function(e) {
		document.getElementById('msgContent').focus();
		document.getElementById('msgContent').value = document.getElementById('msgContent').value + e.target.id;
		console.log(e.target.id);
//		_insertimg(e.target.id.toString());
		this.getContent();
	},
	getContent:function() {
		var el = this.element;
		if(document.getElementById('msgContent').value == "") {
			el.down('div[id=addFunction]').removeCls('hide');
			el.down('div[id=addFunction]').addCls('show');
			el.down('div[id=sendMessageBtn]').removeCls('show');
			el.down('div[id=sendMessageBtn]').addCls('hide');
		} else {
			el.down('div[id=addFunction]').removeCls('show');
			el.down('div[id=addFunction]').addCls('hide');
			el.down('div[id=sendMessageBtn]').removeCls('hide');
			el.down('div[id=sendMessageBtn]').addCls('show');
		}
	},
	showSpeak:function() {
		var el = this.element;
		el.down('img[id=forwordInput]').removeCls('hide');
		el.down('img[id=forwordInput]').addCls('show');
		el.down('img[id=forwordSpeak]').removeCls('show');
		el.down('img[id=forwordSpeak]').addCls('hide');
		el.down('div[id=pressSpeak]').removeCls('show');
		el.down('div[id=pressSpeak]').addCls('hide');
		el.down('textarea[id=msgContent]').removeCls('hide');
		el.down('textarea[id=msgContent]').addCls('show');
	},
	showInput:function() {
		Ext.getCmp('functionPanel').setHidden(true);
		Ext.getCmp('faceCarousel').setHidden(true);
		var el = this.element;
		el.down('img[id=forwordInput]').removeCls('show');
		el.down('img[id=forwordInput]').addCls('hide');
		el.down('img[id=forwordSpeak]').removeCls('hide');
		el.down('img[id=forwordSpeak]').addCls('show');
		el.down('div[id=pressSpeak]').removeCls('hide');
		el.down('div[id=pressSpeak]').addCls('show');
		el.down('textarea[id=msgContent]').removeCls('show');
		el.down('textarea[id=msgContent]').addCls('hide');
	},
	holdRecord:function() {
		var el = this.element;
		el.down('div[id=pressSpeak]').removeCls('show');
		el.down('div[id=pressSpeak]').addCls('hide');
		el.down('div[id=pressStop]').removeCls('hide');
		el.down('div[id=pressStop]').addCls('show');
	},
	stopRecord:function(data){
		var el = this.element;
		el.down('div[id=pressSpeak]').removeCls('hide');
		el.down('div[id=pressSpeak]').addCls('show');
		el.down('div[id=pressStop]').removeCls('show');
		el.down('div[id=pressStop]').addCls('hide');
		$('#pressSpeak').blur();
		//接受回调函数传入的文件地址的参数
		//this.fireEvent('sendMessage',data);
		//更新聊天界面
		var content = '<div class="chatItem me"><div class="time"><span class="timeBg left"></span>xxxx<span class="timeBg right"></span></div><div class="chatItemContent"><img onerror="this.src=\'resources/images/ic_list_head.png\'" src="" class="avatar  headPic"><div class="cloud cloudText"><div style="" class="cloudPannel"> <div class="sendStatus"></div><div class="cloudBody"><div class="cloudContent"><pre style="white-space:pre-wrap">'+data+'</pre></div></div><div class="cloudArrow "></div></div></div></div></div>';
		Ext.DomHelper.append('chat_chatmsglist',content);
	},
	sendMessage:function() {
		console.log("发送消息，消息内容 -->>：" + document.getElementById('msgContent').value);
		//发送之后  将内容清空
		document.getElementById('msgContent').value = "";
	},
	stopUpload:function(data){
		Ext.Msg.alert('上传结束',data);
		//Ext.socket.emit('msg',{id:this.uid,content:msg});
	},
	showFunction:function() {
		this.showSpeak();
		Ext.getCmp('faceCarousel').setHidden(true);
		if(!Ext.getCmp('functionPanel').getHidden()) {
			Ext.getCmp('functionPanel').setHidden(true);
		} else {
			Ext.getCmp('functionPanel').setHidden(false);
		}
	},
	
	getFaceItems:function() {
		/******* 添加表情 start *******/
		var itemStart = '<div style="margin:0 5px;text-align:center;"><ul>';
		var itemHtml = itemStart;
        var itemEnd = '</ul></div>';
        var item = '';
 	    var items = [];
		for ( var i = 1; i < 45; i++) {
			if(i == 25) {
				itemHtml += itemEnd;
				items.push({html:itemHtml});
				itemHtml = itemStart;
			} else if(i == 44) {
				itemHtml += itemEnd;
				items.push({html:itemHtml, style: 'background-color: #ebebeb'});
			}
			itemHtml += '<li style="display: inline-block;width: 25px;height: 25px;margin: 7px;float: left;"><img class="face" id="['+i+']" src="resources/images/face/['+i+'].png"></li>';
		}
		Ext.getCmp('faceCarousel').setItems(items);
		/******* 添加表情 end *******/
	},
	
	/** 打开相机拍照 **/
	openCamera:function() {
		console.log("打开相机拍照");
	},
	/** 打开图库  选择图片 **/
	openImgStorage:function() {
		console.log("打开图库  选择图片");
	},
	/** 打开地图 **/
	openMap:function() {
		Ext.Viewport.animateActiveItem(Ext.create('contactlist.view.BaiduMap'),{type:'slide',direction:'left'});
		//核心代码
		this.createMap();
	},
	getFacesList:function() {
		this.showSpeak();
		Ext.getCmp('functionPanel').setHidden(true);
		if(!Ext.getCmp('faceCarousel').getHidden()) {
			Ext.getCmp('faceCarousel').setHidden(true);
		} else {
			Ext.getCmp('faceCarousel').setHidden(false);
			if(Ext.getCmp('faceCarousel').getItems().length != 3) {
				this.getFaceItems();
			}
		}
	},
	sendMsg:function() {
		this.fireEvent('sendMsg');
	},
	showFacePanel:function() {
		this.fireEvent('showFacePanel');
	},
	words:function() {
		this.fireEvent('words');
	},
	//创建地图函数：
	createMap:function() {
		var opts = {
	      width : 100,     // 信息窗口宽度
	      height: 50     // 信息窗口高度
//          ,title : "盈诺德公司总部"  // 信息窗口标题
	    }
		var map = new BMap.Map("baiduMap");
		window.map = map;
//		var point = new BMap.Point(longitudeP , latitudeP);  // 创建点坐标  113.9431219  22.5420803
//		var point = new BMap.Point(longitudeP, latitudeP); //定义一个中心点坐标
		console.log(longitudeP + 0.0113431 + " ---- " + 113.954465);
		console.log(latitudeP + 0.0025597 + " ---- " + 22.54464);
		var point = new BMap.Point(113.954465, 22.54464); //定义一个中心点坐标
		map.centerAndZoom(point, 18);// 初始化地图，设置中心点坐标和地图级别  
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
//		BMap.Convertor.translate(point,0,function(point1) {
//			console.log(point1);
//			var marker1 = new BMap.Marker(point1);
//		    map.addOverlay(marker1);
//		    var label = new BMap.Label('联想研发中心',{"offset":new BMap.Size(9,-15)});
//		    marker1.setLabel(label);
//		    marker1.addEventListener("click", function(){this.openInfoWindow(new BMap.InfoWindow("盈诺德信息技术有限公司</br>电话:010-10000000<br/>地址：深圳市南山区科技园高新南一道联想研发中心一楼西南侧", opts));});
//		    marker1.openInfoWindow(new BMap.InfoWindow("盈诺德信息技术有限公司</br>电话:010-10000000</br>地址：深圳市南山区科技园高新南一道联想研发中心一楼西南侧", opts));
//		    map.setCenter(point1);
//		});
//        var map = new BMap.Map("baiduMap"); //在百度地图容器中创建一个地图
//        var point = new BMap.Point(longitudeP, latitudeP); //定义一个中心点坐标
//        map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
//        window.map = map; //将map变量存储在全局
//        向地图添加标注
//        var bounds = map.getBounds();
//        var point = new BMap.Point(longitudeP + 0.0113431, latitudeP + 0.0025597);//113.9431219  22.5420803
//        var point = new BMap.Point(113.954465, 22.54464);
//        
//        var marker = new BMap.Marker(point);
//        var label = new BMap.Label('联想研发中心',{"offset":new BMap.Size(9,-15)});
//        marker.setLabel(label);
//        map.addOverlay(marker);
//        marker.addEventListener("click", function(){this.openInfoWindow(new BMap.InfoWindow("盈诺德信息技术有限公司</br>电话:010-10000000<br/>地址：深圳市南山区科技园高新南一道联想研发中心一楼西南侧", opts));});
//		marker.openInfoWindow(new BMap.InfoWindow("盈诺德信息技术有限公司</br>电话:010-10000000</br>地址：深圳市南山区科技园高新南一道联想研发中心一楼西南侧", opts));
		
    }
});

//锁定编辑器中鼠标光标位置。。
function _insertimg(str) {
	var selection= window.getSelection ? window.getSelection() : document.selection;
	var range= selection.createRange ? selection.createRange() : selection.getRangeAt(0);
	if (!window.getSelection) {
		document.getElementById('msgContent').focus();
		var selection= window.getSelection ? window.getSelection() : document.selection;
		var range= selection.createRange ? selection.createRange() : selection.getRangeAt(0);
		range.pasteHTML(str);
		range.collapse(false);
		range.select();
	} else {
		document.getElementById('msgContent').focus();
		range.collapse(false);
		var hasR = range.createContextualFragment(str);
		var hasR_lastChild = hasR.lastChild;
		while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
			var e = hasR_lastChild;
			hasR_lastChild = hasR_lastChild.previousSibling;
			hasR.removeChild(e)
		}
		range.insertNode(hasR);
		if (hasR_lastChild) {
			range.setEndAfter(hasR_lastChild);
			range.setStartAfter(hasR_lastChild)
		}
		selection.removeAllRanges();
		selection.addRange(range)
	}
};