Ext.define('contactlist.controller.OnLineContact',{
	extend:'Ext.app.Controller',
	mark:0,
	config:{
		refs:{
			onLineContact:{
				autoCreate:true,
				xtype:'onlinecontact',
				selector:'onlinecontact'
			}
		},
		control:{
			onLineContact:{
				showContactDetail:'showContactDetail',
				addGroupUsers:'addGroupUsers'
			}
		},
		routes:{
			'onLineContact':'showOnLineContact'
		}
	},
	showOnLineContact:function(){
		//console.log(Ext.socket);
		var onLineContact = this.getOnLineContact();
		Ext.socket.emit('onLineContactClient','');
		this.mark=1;
		var me = this;
		Ext.socket.on('onLineContactServer',function(data){
			
			if(1 == me.mark){
				onLineContact.getStore().setData(data.records);
				me.mark = 0;
			}
			//onLineContact.setData(data.data);
		});
		Ext.Viewport.animateActiveItem(onLineContact,{type:'flip'});

	},
	showContactDetail:function(uid){
		this.redirectTo('contactDetail/'+uid);
	},
	addGroupUsers:function() {
		this.redirectTo('addGroupUser');
	}
});