Ext.define('contactlist.view.Departments',{
	extend:'Ext.Container',
	xtype:'department-list',
	config:{
		flex:1,
		id:'departmentlist',
		scrollable:true,
		items:[
			{
				xtype:'toolbar',
				docked:'top',
				title:'公司部门',
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
			    		handler:function() {
			    			history.go(-1);
			    		}
					}
				]
			}
		],
		tpl:new Ext.XTemplate(	
		/*
			'<div style="margin:10px 20px;" class="mygroup">',
		        '<img style="width:55px; height:55px;margin-bottom:-5px;"  src="resources/images/ic_list_head.png" onerror="this.src=\'resources/images/ic_list_head.png\'">',
		        '<span class="contactName">我的群组</span>',
	        '</div>',
	        '<div style="height:30px;background-color:#AFB6BD;color:#fff;padding-left:20px;padding-top:5px;padding-bottom:5px;">公司部门</div>',
		*/
	        '<tpl for="data.organization">',
		        '<div style="padding:5px 10px;background:#f7f7f7;" class="department" name={name} dpmtid={id} hasChild={hasChild}>',
			        '<img style="width:45px; height:45px;margin-bottom:-5px;"  src="resources/images/ic_list_head.png" onerror="this.src=\'resources/images/ic_list_head.png\'">',
			        '<span class="contactName" style="font-size:15px;color:#777;">{name}</span>',
	        	'</div><div style="border-bottom:1px solid #d7d7d7;"></div>',
	        '</tpl>'
        ),
        listeners:[
        	{
	            element: 'element',
	            delegate: 'div.department',
	            event: 'tap',
	            fn:'showDepartmentDetail'
            },
        	{
	            element: 'element',
	            delegate: 'div.mygroup',
	            event: 'tap',
	            fn:'showMyGroup'
            }
		]
	},
	showDepartmentDetail:function(el){
		var target = Ext.get(el.getTarget());
		var name = target.getAttribute('name');
		var dpmtid = target.getAttribute('dpmtid');
		var hasChild = target.getAttribute('hasChild');
		this.fireEvent('showDepartmentDetail',name,dpmtid,hasChild);
	},
	showGroupDetail:function(){
    	this.fireEvent('showGroupDetail');
    },
    showContactDetail:function(el){
    	var uid = Ext.get(el.getTarget()).getAttribute('uid');
    	this.fireEvent('showContactDetail',uid);
    },
    showMyGroup:function(){
    	this.fireEvent('showMyGroup');
    }
});