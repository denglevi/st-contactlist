Ext.define('contactlist.view.SubDepartment',{
	extend:'Ext.Container',
	xtype:'subdepartment',
	config:{
		items:[
			{
				xtype:'titlebar',
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
			'<tpl if="hasChild != 0">',
				'<tpl for="data.organization">',
		        '<div style="padding:5px 10px;background:#f7f7f7;" class="department" name={name} dpmtid={id} hasChild={hasChild}>',
			        '<img class="headPic" style="width:45px; height:45px;margin-bottom:-5px;"  src="resources/images/ic_list_head.png" onerror="this.src=\'resources/images/ic_list_head.png\'">',
			        '<span class="contactName" style="font-size:15px;color:#777;">{name}</span>',
	        	'</div><div style="border-bottom:1px solid #d7d7d7;"></div>',
				'</tpl>',
			'<tpl else>',
				'<tpl for=".">',
				'<div style="padding:5px 10px;background:#f7f7f7;" class="contact" uid={py}>',
			        '<img class="headPic" style="width:45px; height:45px;margin-bottom:-5px;"  src="{[this.image(values.pic)]}" onerror="this.src=\'resources/images/ic_list_head.png\'">',
			        '<span class="contactName" style="font-size:15px;color:#777;">{name}</span>',
		        '</div><div style="border-bottom:1px solid #d7d7d7;"></div>',
				'</tpl>',
			'</tpl>',
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
            delegate: 'div.contact',
            event: 'tap',
            fn:'showContactDetail'
		},
    	{
            element: 'element',
            delegate: 'div.department',
            event: 'tap',
            fn:'showDepartmentDetail'
        }
		]
	},
	showContactDetail:function(el){
		var target = Ext.get(el.getTarget());
		var uid = target.getAttribute('uid');
		this.fireEvent('showContactDetail',uid);
	},
	showDepartmentDetail:function(el){
		var target = Ext.get(el.getTarget());
		var name = Ext.encode(target.getAttribute('name'));
		var dpmtid = target.getAttribute('dpmtid');
		var hasChild = target.getAttribute('hasChild');
		this.fireEvent('showDepartmentDetail',name,dpmtid,hasChild);
	}
});