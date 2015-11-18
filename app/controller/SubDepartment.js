Ext.define('contactlist.controller.SubDepartment',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			subDepartment:{
				autoCreate:true,
				xtype:'subdepartment',
				selector:'subdepartment'
			}
		},
		control:{
			subDepartment:{
				showSubDepartment:'showSubDepartment',
				showContactDetail:'showContactDetail',
				showMyGroup:'showMyGroup',
				showDepartmentDetail:'showDepartmentDetail'
			}
		},
		routes:{
			'subDepartment/:name/:dpmtid/:hasChild':{
				conditions: {
				    ':name': ".*",
				    ':dpmtid':".*",
				    ':hasChild':'.*'
				},
				action:'showSubDepartment'
			}
		}
	},
	showSubDepartment:function(name,dpmtid,hasChild){
		var subDepartment = this.getSubDepartment();
		var name = Ext.decode(name),title='',URL='';
		if(0 == hasChild)
		{
			title = '下属员工';
			URL = Ext.customURL+'api.php/getContactList';
		}
		else
		{
			title = '下属部门';
			URL = Ext.customURL+'api.php/getOrganization';
		}
		subDepartment.down('titlebar').setTitle(name+title);
		Ext.util.JSONP.request({
		    url:URL,
		    params: {
		        dpmtid: dpmtid
		    },
		    success: function(response){
		    	response.hasChild = hasChild;
		    	if(0 == hasChild) subDepartment.setData(response.data);
		        else subDepartment.setData(response);
		    }
		});
		Ext.Viewport.animateActiveItem(subDepartment,{type:'slide',direction:'left'});
	},
	showContactDetail:function(uid){
		this.redirectTo('contactDetail/'+uid);
	},
	showMyGroup:function(){
		this.redirectTo('contactDetail/'+uid);
	},
	showDepartmentDetail:function(name,dpmtid,hasChild){
		this.redirectTo('subDepartment/'+name+'/'+dpmtid+'/'+hasChild);
	}
});