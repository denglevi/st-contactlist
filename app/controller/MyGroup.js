Ext.define('contactlist.controller.MyGroup',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			myGroup:{
				autoCreate:true,
				selector:'mygroup-list',
				xtype:'mygroup-list'
			},
			'groupIM':{
				autoCreate:true,
				selector:'groupim',
				xtype:'groupim'				
			},
			addbtn:'#addbtn'
		},
		control:{
			myGroup:{
				showGroupIM:'showGroupIM'
			},
			backbtn:{
				tap:function(){
					history.go(-1);
				}
			},
			addbtn:{
				tap:'showAddGroup'
			}
		},
		routes:{
			'myGroup':'showMyGroup'
		}
	},
	showMyGroup:function(){
		var myGroup = this.getMyGroup();
		Ext.Ajax.request({
		    //url:Ext.customURL+'api.php/editContact',
			url:'http://192.168.11.34/new_oa/mobile2/api.php/getGroupList',
		    params: {
		        uid:19,
		    },
		    timeout:5000,
		    method:'POST',
		    success: function(response){

		        var text = Ext.decode(response.responseText);
		        myGroup.setData(text);
		        Ext.Viewport.animateActiveItem(myGroup,{type:'slide',direction:'left'});
		    }
		});			
	},
	showAddGroup:function(){
		this.redirectTo('addGroup');
	},
	showGroupIM:function(gid,name,size){
		var title = name+'('+size+'人)';
		this.getGroupIM().gid = gid;
		this.getGroupIM().groupName = name;
		this.getGroupIM().down('toolbar').setTitle(title);
		this.redirectTo('groupIM/'+gid);
	}
});