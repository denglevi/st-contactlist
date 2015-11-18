Ext.define('contactlist.view.MyGroup',{
	extend:'Ext.Container',
	xtype:'mygroup-list',
	config:{
		flex:1,
		scrollable:true,
		data:[{name:'xxxx',id:'xxxxx'}],
		tpl:new Ext.XTemplate(
	        '<tpl for=".">',
		        '<div class="group" gid="{id}" name="{name}" size="{size}" style="margin:10px;"><span>{name}</span></div><div style="border-bottom:1px solid #fff;"></div>',
	        '</tpl>'
        ),
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'我的群组',
				items:[
				{
					text:'新增',
					align:'right',
					id:'addbtn',
					pressedCls:false,
				},
				{
					text:'返回',
					align:'left',
					ui:'back',
					pressedCls:false,
					handler:function(){
						history.go(-1);
					}
				}
				]
			}
		],
        listeners:[
           	{
   	            element: 'element',
   	            delegate: 'div.group',
   	            event: 'tap',
   	            fn:'showGroupIM'
            }
   		]
	},
	showGroupIM:function(el){
		var group = Ext.get(el.getTarget()),
		    gid = group.getAttribute('gid'),
			name = group.getAttribute('name'),
			size = group.getAttribute('size');

		this.fireEvent('showGroupIM',gid,name,size);
	}
});