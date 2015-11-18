Ext.define('contactlist.controller.GroupIM',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			'groupIM':{
				autoCreate:true,
				selector:'groupim',
				xtype:'groupim'				
			},
			groupDetail:{
				autoCreate:true,
				selector:'groupdetail',
				xtype:'groupdetail'
			}
		},
		control:{
			'groupim button[name=viewGroupInfo]':{
				tap:'showGroupInfo'
			},
		},
		routes:{
			'groupIM/:id':'showGroupIM'
		}
	},
	showGroupIM:function(gid){
		Ext.groupImId = gid;
		console.log(gid);
		Ext.Viewport.animateActiveItem(this.getGroupIM(),{type:'slide'});
	},
	showGroupInfo:function(){
		var groupName = this.getGroupIM().groupName,
			gid = this.getGroupIM().gid,
			me = this,
			detail = this.getGroupDetail();
		Ext.Ajax.request({
		    //url:Ext.customURL+'api.php/editContact',
			url:'http://192.168.11.34/new_oa/mobile2/api.php/getGroupUser',
		    params: {
		        gid:gid,
		    },
		    timeout:5000,
		    method:'POST',
		    success: function(response){
		        var text = Ext.decode(response.responseText);
				var data = [{groupName:groupName,users:text,gid:gid}];
				detail.setData(data);
				me.redirectTo('groupDetail');		      
		    }
		});		
	}
});