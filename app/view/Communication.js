Ext.define('contactlist.view.Communication',{
	extend:'Ext.List',
	xtype:'communication',
	config:{
		flex:1,
		mark:'',
		gid:'',
		infinite:true,
		pressedDelay:0,
		preventSelectionOnDisclose:false,
		pressedCls:false,
		selectedCls:false,
		disableSelection:true,
		inline:true,
		bufferSize:5,
		loadingText:'数据正努力加载中...',
		scrollToTopOnRefresh:false,
		variableHeights:true,
		style:'background:#dddddd;',
		itemTpl:'<tpl for=".">' +
				'<div style="width:100%;float:left;text-align:left;border-bottom:1px solid #d7d7d7;background:#f7f7f7;margin-top:-3px;">' +
			    	'<div style="height:62px;float:left;padding:6px;">' +
			        	'<img style="border-radius:5px;" src="resources/images/img_mm.png" height="50" width="50" />' +
			        '</div>' +
			        '<div style="height:62px;width:100%;padding:6px;">' +
			        	'<div style="height:25px;line-height:25px;">' +
			            	'<div style="font-size:15px;width:60%;font-weight:bold;float:left;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{title}</div>' +
			                '<div style="font-size:13px;font-weight:normal;float:right;color:#777;">上午9点</div>' +
			            '</div>' +
			            '<div style="height:25px;width:70%;line-height:25px;font-size:13px;font-weight:normal;float:left;color:#777;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">你老婆叫你回家吃饭了</div>' +
			        '</div>' +
			    '</div>' +
		        '</tpl>',
        store:Ext.create('Ext.data.Store',{
        	fields:['id','contacts_id','contacts_name','contacts_date','centent'],
			autoLoad:true,
			storeId:'communication'
		}),
		items:[
			{
				xtype:'toolbar',
				text:'最近沟通',
				cls:'common_toolbar',
				docked:'top',
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
		]
	}
});