Ext.define('contactlist.controller.Main',{
	extend:'Ext.app.Controller',
	launch:function(){
		//添加起始路径
		this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'main'
        }));
	},
	config:{
		refs:{
			'main':{
				autoCreate:true,
				xtype:'main',
				selector:'main'
			},
			'workmate':'#workmatebtn',
			'department':'#departmentbtn'
		},
		control:{
			workmate:{
				tap:'showWorkmate'
			},
			department:{
				tap:'showDepartment'
			}
		},
		routes:{
			'main':'showMain'
		}
	},
	showDepartment:function(){
		Ext.getCmp('workmatelist').hide();
		if(Ext.getCmp('departmentlist'))
		{
			//Ext.getCmp('departmentlist').getStore().load();
			Ext.getCmp('departmentlist').show();
			return;
		}
		
		var main = this.getMain()
	    Ext.data.JsonP.request({
            url:Ext.customURL+'api.php/getOrganization',
			success: function(response){
				if('null' == response){
					Ext.Msg.alert("数据获取失败!");
					return;
				}
				var data = response;
				main.add({xtype:'department-list',data:data});	
			},
			failure: function(){
				Ext.Msg.alert("数据获取失败!");
				return;
			}
        });	
	},
	showWorkmate:function(){
		if(Ext.getCmp('departmentlist'))
		{
			Ext.getCmp('departmentlist').hide();
		}
//		if(localStorage.getItem('contactlist')){
//			var contactlist = Ext.decode(localStorage.getItem('contactlist'));
//			console.log(contactlist.data);
//	    	Ext.currentUserId = contactlist.currentUserId;
//			contacts.getStore().setData(contactlist.data);	
//			return;
//		}
//		var store = Ext.getStore('contactlist');
//		store.setProxy({type:'jsonp',url:Ext.customURL+'api.php/getContactList'});
//		store.load();
		Ext.getCmp('workmatelist').show();
	},
	showMain:function(){	
		Ext.Viewport.animateActiveItem(this.getMain(),{type:'slide',direction:'left'});
	}
})