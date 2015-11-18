Ext.define('contactlist.view.GroupDetail',{
	extend:'Ext.Container',
	xtype:'groupdetail',
	config:{
		fullscreen:true,
		items:[
			{
				xtype:'toolbar',
				title:'群组信息',
				items:[
					{
						text:'返回',
						pressedCls:false,
						handler:function(){
							history.go(-1);
						}
					}
				]
			}
		],
		data:[{groupName:'xxx',users:'1,2,3,4,5'}],
		tpl:new Ext.XTemplate(
				'<tpl for=".">',
				'<div style="margin:20px;">',
					'<div>群名称:{groupName}</div>',
					'<div>群组成员</div>',
					'<div>',
					'<tpl for="users">',
						'{uid},',
					'</tpl>',
					'<span class="add" gid="{gid}">+</span></div>',
				'</div>',
				'<div class="info_table_div" style="margin:20px;background:-webkit-gradient(linear, 0 0, 0 100%, from(#FF6E72), to(#FF0006));"><div id="exitGroup" style="text-align:center;font-weight:bold;">退出群组</div>',
				'</tpl>'
		),
		listeners:[
	           {
	   	            element: 'element',
	   	            delegate: 'span.add',
	   	            event: 'tap',
	   	            fn:'addGroupUser'	        	   
	           }
		]
	},
	addGroupUser:function(el){
		var gid = Ext.get(el.getTarget()).getAttribute('gid');
		this.fireEvent('addGroupUser',1,gid);
	}
});