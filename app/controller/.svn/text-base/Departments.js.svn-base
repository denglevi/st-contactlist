Ext.define('contactlist.controller.Departments',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			departments:{
				autoCreate:true,
				selector:'department-list',
				xtype:'department-list'
			}
		},
		control:{
			'departments':{
				itemtap:'showMyGroup',
				showMyGroup:'showMyGroup',
				showGroupDetail:'showGroupDetail',
				showContactDetail:'showContactDetail',
				showDepartmentDetail:'showDepartmentDetail'
			},
			'#myGroup':{
				tap:'showMyGroups'
			}
		},
		routes:{
			'department-list':'showDepartments'
		}
	},
	showDepartments:function(){
		var departments = this.getDepartments();
		Ext.data.JsonP.request({
            url:Ext.customURL+'api.php/getOrganization',
			success: function(response){
				if('null' == response){
					Ext.Msg.alert("数据获取失败!");
					return;
				}
				var data = response;
				departments.setData(data);	
				Ext.Viewport.animateActiveItem(departments,{type:'slide',direction:'left'});
			},
			failure: function(){
				Ext.Msg.alert("数据获取失败!");
				return;
			}
        });	
	},
	showMyGroup:function(){
		this.redirectTo('myGroup');
	},
	showMyGroups:function(){
		console.log(321);
	},
	showGroupDetail:function(){
		this.redirectTo('groupDetail');
	},
	showContactDetail:function(uid){
		this.redirectTo('contactDetail/'+uid);
	},
	showDepartmentDetail:function(name,dpmtid,hasChild){
		var name = Ext.encode(name);
		this.redirectTo('subDepartment/'+name+'/'+dpmtid+'/'+hasChild);
	}
});