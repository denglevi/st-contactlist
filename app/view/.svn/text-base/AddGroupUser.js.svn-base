Ext.define('contactlist.view.AddGroupUser',{
	extend:'Ext.List',
	xtype:'addgroupuser',
	requires:['Ext.Toolbar'],
	config:{
		flex:1,
		mark:'',
		gid:'',
		grouped:true,
		indexBar:true,
		infinite:true,
		itemHeight:45,
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
		itemTpl:new Ext.XTemplate(
				'<div style="width:100%; float:left;height:45px;">',
			    	'<div style="float:left;height:35px;line-height:35px;margin-top:5px;">',
			        '<img id="off_{id}" class="item_show" src="resources/images/ic_list_unchecked.png" height="35" width="35" style="margin-left:-2px;" />',
			        '<img id="no_{id}" class="item_hide" src="resources/images/ic_list_checked.png" height="35" width="35" style="margin-left:-2px;" />',
			        '<img src="{[this.image(values.pic)]}" onerror="this.src=\'resources/images/ic_list_head.png\'" width="35" height="35" /></div>',
			        '<div style="font-size:14px; color:#7777777; text-align:center;float:left;line-height:45px;margin-left:8px;">{name}</div>',
			    '</div>',
	        {
	        	image:function(pic){
	        		if('' == pic || null == pic) return "resources/images/ic_list_head.png";
	        		else if(-1 != pic.indexOf('data:image/png;base64')) return pic;
	        		else return Ext.customURL+'../'+pic;	        		
	        	}
	        }
        ),
		items:[
			{
				xtype:'toolbar',
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
				       },
				       {
				    	   xtype:'spacer'
				       },
				       {
							xtype:'button',
							iconMask: true,
							pressedCls:false,
		                    ui:'plain',
			    			icon:'resources/images/toolbar/ic_navbar_ok.png',
			    			iconCls:'toolbar_backBtn_icon',
			    			cls:'toollbar_finishBtn',
			    			name:'viewOnLines'
							
						}
				]
			},
			{
				xtype:'toolbar',
				docked:'top',
				cls:'search_toolbar',
				style:'background:#c4c4c4;border:none !important;',
				items:[
				    {
				    	xtype:'searchfield',
				    	inputCls:'searchFieldCls',
				    	clearIcon:false,
			    		flex:10,
		                placeHolder: '输入搜索内容...',
		                id:'searchword'
				    }
				]
			}
		],
		store:Ext.create('Ext.data.Store',{
			fields:['py','name','id','job_name','dept_name','email','phone','tel','szm','pic'],
			autoLoad:true,
			storeId:'contactlist',
			grouper:{
				groupFn:function(record){
					return record.get('szm');
				}
			}
		}),
		
		listeners:[
		    {
		    	element:'element',
		    	delegate:'img.show',
		    	fn:'unCheckUser',
		    	event:'tap'
		    },
		    {
		    	element:'element',
		    	delegate:'img.hide',
		    	fn:'CheckedUser',
		    	event:'tap'
		    }
		]
	},
	
	unCheckUser:function() {
		var el = this.element;
		console.log(el);
	},
	
	CheckedUser:function() {
		
	}
});