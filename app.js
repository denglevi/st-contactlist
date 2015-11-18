/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
var latitudeP, longitudeP;
navigator.geolocation.getCurrentPosition(function(position) {
	latitudeP = position.coords.latitude;
	longitudeP = position.coords.longitude;
	console.log("当前返回的精度： " + position.coords.accuracy);
	console.log("longitudeP -------- >>>  " + longitudeP);
	console.log("latitudeP ----- >>>  " + latitudeP);
}, function(error) {
    var errorType = ['位置服务被拒绝', '获取不到位置信息', '获取信息超时'];
    alert(errorType[error.code - 1]);
}, {maximumAge: 60 * 1000 * 5, timeout: 6000});

Ext.application({
    name: 'contactlist',

    requires: [
        'Ext.MessageBox'
    ],
	controllers:[
		'Communication','AddGroupUser','GroupDetail','GroupIM','MyGroup','OnLineContact','Main','Departments','GroupDetail','AddGroup','Communication','ContactDetail','Contacts','IM','SubDepartment'
	],
    views: [
        'Communication','AddGroupUser','BaiduMap','GroupDetail','GroupIM','MyGroup','OnLineContact','Main','GroupDetail','AddGroup','ContactDetail','Contacts','IM','Departments','SubDepartment'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        window.clearInterval(timeId);
        Ext.Viewport.addAfterListener('activeitemchange',function(card,newItem,oldItem,opts){
			Ext.layoutId = newItem.id;
        	if(oldItem) card.remove(oldItem,false);
        	//console.log('dom:'+document.getElementsByTagName("*").length+',items:'+Ext.Viewport.getItems().length);
        });
        Ext.customURL = 'http://test.kingnode.com/ecmv2/mobile/';
        Ext.currentUserId = '';
        Ext.expireTime = 3600*24;   //过期时间:1天
		var host = 'test.kingnode.com';
		Ext.myPic = '';
		Ext.groupImId = '';
		Ext.imId = '';
		Ext.socket = io.connect('http://'+host+':8011?');
		Ext.socket.on('connect',function(data){
		//此处传入UID进去，标记用户的状态
		//此处传入UID进去，标记用户的状态
			console.log('连接成功');
			if('null' == localStorage.getItem("username")) var userid = 341;
			else userid = localStorage.getItem("username");
			Ext.socket.emit('userid',{userid:userid,yourid:0});
		});
		Ext.socket.on('message',function(data){
			if('im' == Ext.layoutId && data.imId == Ext.imId)
			{
				//更新单个人的聊天界面
				console.log('更新单个人的聊天界面');
				Ext.getCmp('im').setHtml(data);
			}
			else
			{
				console.log('更新最近沟通');
			}
		});
		Ext.socket.on('groupMessage',function(data){
			if('groupim' == Ext.layoutId && data.groupImId == Ext.groupImId)
			{
				//更新群组的聊天界面
				console.log('更新群组的聊天界面');
				Ext.getCmp('groupim').setHtml(data);
			}
			else
			{
				console.log('更新最近沟通');
			}
		});

        //localStorage.setItem("username",'knd1');
        // Initialize the main view
        Ext.Viewport.add(Ext.create('contactlist.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "应用程序更新",
            "此应用已经更新到最新版，现在要重新加载吗？",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
	stopRecord:function(){	
		Ext.getCmp('im').stopRecord();
	},
	stopUpload:function(){
		Ext.getCmp('im').stopUpload();
	}
});
