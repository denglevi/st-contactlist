Ext.define('contactlist.view.BaiduMap', {
	extend: 'Ext.Container',
    xtype: 'main',
    style:'background:#ffffff;padding:0px !important;',
    config: {
    	layout:'vbox',
        styleHtmlCls:true,
        items:[
			{
			    xtype: 'toolbar',
			    docked:'top',
			    title: '位置',
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
			    			Ext.Viewport.animateActiveItem(Ext.ComponentQuery.query('im')[0],{type:'slide',direction:'right'});
			    		}
			        },
			        {
			        	xtype:'spacer'
			        },
			        {
			    		xtype:'button',
			    		pressedCls:false,
					    text:'发送',
					    cls:'toollbar_finishBtn',
					    labelCls:'toolbar_finishBtn_label',
					    ui:'plain',
					    handler:function() {
					    	console.log(map.getCenter().lng);
					    	console.log(map.getCenter().lat);
					    }
			    	}
			    ]
			},
			{
	            xtype:'panel',
	            id:'baiduMap',
	            flex:7
			}
//			,
//			{
//				xtype:'img',
//				id:'myImage',
//				flex:3
//			}
        ]
    }
	
});