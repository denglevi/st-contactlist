Ext.define('contactlist.view.MyGroup',{
	extend:'Ext.Container',
	xtype:'mygroup',
	config:{
		items:[
			{
				xtype:'toolbar',
				title:'我的群组',
				items:[
				{
					text:'返回',
					handler:function(){
						history.go(-1);
					}
				}
				]
			}			
		],
		tpl:new Ext.XTemplate(
			'<tpl for=".">',
			'<div style="margin:10px 20px;" class="contact" uid={id}>',
	        '<img style="width:55px; height:55px;margin-bottom:-5px;"  src="resources/images/ic_list_head.png" onerror="this.src=\'resources/images/ic_list_head.png\'">',
	        '<span class="contactName" >{name}</span>',
	        '</div>',
			'</tpl>'
		),
		listeners:[
			{
	            element: 'element',
	            delegate: 'div.contact',
	            event: 'tap',
	            fn:'showContactDetail'
			}
		]
	},
	showGroupDetail:function(el){
		var target = Ext.get(el.getTarget());
		var uid = target.getAttribute('uid');
		this.fireEvent('showContactDetail',uid);
	}
});