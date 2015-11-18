Ext.define('contactlist.view.Contacts',{
	extend:'Ext.List',
	xtype:'contact-list',
	config:{
		flex:1,
		id:'workmatelist',
		grouped:true,
		indexBar:true,
		infinite:true,
		itemHeight:42,
		pressedDelay:0,
		preventSelectionOnDisclose:false,
		selectedCls:'',
		pressedCls:false,
		selectedCls:false,
		disableSelection:true,
		inline:true,
		bufferSize:5,
		loadingText:'数据正努力加载中...',
		scrollToTopOnRefresh:false,
		variableHeights:true,
		itemCls:'contactItemCls',
		itemTpl:new Ext.XTemplate(
			'<div style="width:100%;font-weight: normal;">',
			'	<div style="float:left;height:36px;width:36px;margin-left: 5px;">',
					'<img <tpl if="this.isOther(name) == 1"> src="resources/images/ic_72_lately.png"',
					'<tpl elseif="this.isOther(name) == 2"> src="resources/images/ic_72_company.png"',
					'<tpl else> src="{[this.image(values.pic)]}"</tpl> ',
					'onerror="this.src=\'resources/images/ic_list_head.png\'" width="36" height="36" />',
			'    </div>',
			'    <div style="height:36px;line-height:36px;font-size:14px;">',
			'    	<div style="float:left;margin-left: 5px;margin-top:-3px;">{name}</div>',
			'       <div style="height:27px; line-height:27px;margin-top:5px;margin-right:20px;float:right;">',
			'       	<img src="resources/images/icon_jt.png" width="15" height="15" />',
			'       </div>',
			'       <tpl if="this.isOther(name) == 1"><div class="min_reminder">3</div>',
			'		<tpl elseif="this.isOther(name) == 2"><div class="middle_reminder">13</div></tpl>',
			'    </div>',
			'</div>',
/*	        itemTpl:new Ext.XTemplate(
	        		'<img class="contactPic headPic" ',
	        		'<tpl if="this.isOther(name) == 1"> src="resources/images/ic_72_lately.png"',
	        		'<tpl elseif="this.isOther(name) == 2"> src="resources/images/ic_72_company.png"',
	        		'<tpl else> src="{[this.image(values.pic)]}"</tpl> ',
	        		'onerror="this.src=\'resources/images/ic_list_head.png\'">',
	        		'<span class="contactName" >{name}</span>',*/
	        {
	        	image:function(pic){
	        		if('' == pic || null == pic) return "resources/images/ic_list_head.png";
	        		else if(-1 != pic.indexOf('data:image/png;base64')) return pic;
	        		else return Ext.customURL+'../'+pic;	        		
	        	},
	        	isOther:function(name) {
	        		if(name === "最近沟通") {
	        			return 1;
	        		} else if(name === "公司部门") {
	        			return 2;
	        		} else {
	        			return false;
	        		}
	        	}
	        }
        ),
		items:[
			{
				xtype:'toolbar',
				cls:'common_toolbar',
				title:'沟通',
				docked:'top',
				items:[
		      		{
			    		xtype:'button',
			    		iconMask: true,
			    		pressedCls:false,
	                    ui:'plain',
		    			icon:'resources/images/toolbar/ic_navbar_logout.png',
		    			iconCls:'toollbar_icon',
		    			cls:'toollbar_btn',
		    			handler:function() {
		    				console.log(this.up('contact-list').getStore());
		    				console.log(this.up('contact-list').getStore().getData());
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
		    			icon:'resources/images/toolbar/ic_navbar_faqi.png',
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
		})
	}
});