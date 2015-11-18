Ext.define('contactlist.view.OnLineContact',{
	extend:'Ext.Container',
	xtype:'onlinecontact',
	config:{
		scrollable:true,
		items:[
			{
				xtype:'toolbar',
				docked:'top',
				title:'群聊（6人）',
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
		    		   pressedCls:false,
					   handler:function(){
						   history.go(-1);
					   }
				   }
				]
			},
			{
				id : 'header_pics',
				cls:'header_pic',
				data:[{name:'1111', pic:''}],
				tpl:[
					'<tpl for=".">',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
						'<img src="resources/images/appendix_del.png" width="25" height="25" class="delete_icon show"/>',
						'<img src="{[this.image(values.pic)]}" onerror="this.src=\'resources/images/ic_list_head.png\'" width="64" height="64" />',
					    '<div style="font-size:14px;font-weight:normal;color:#7777777;text-align:center;margin-top:-2px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">小肚子小肚子小肚子小肚子小肚子</div>',
					'</div>',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
					'<img src="resources/images/appendix_del.png" width="25" height="25" class="delete_icon show"/>',
					'<img src="resources/images/img_mm.png" onerror="this.src=\'resources/images/ic_list_head.png\'" width="64" height="64" />',
					'<div style="font-size:14px;font-weight:normal;color:#7777777;text-align:center;margin-top:-2px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">小肚子小肚子小肚子</div>',
					'</div>',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
					'<img src="resources/images/appendix_del.png" width="25" height="25" class="delete_icon hide"/>',
					'<img src="resources/images/img_mm.png" onerror="this.src=\'resources/images/ic_list_head.png\'" width="64" height="64" />',
					'<div style="font-size:14px;font-weight:normal;color:#7777777;text-align:center;margin-top:-2px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">小肚子</div>',
					'</div>',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
					'<img src="resources/images/appendix_del.png" width="25" height="25" class="delete_icon hide"/>',
					'<img src="resources/images/img_mm.png" onerror="this.src=\'resources/images/ic_list_head.png\'" width="64" height="64" />',
					'<div style="font-size:14px;font-weight:normal;color:#7777777;text-align:center;margin-top:-2px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">小肚子</div>',
					'</div>',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
					'<img src="resources/images/appendix_del.png" width="25" height="25" class="delete_icon hide"/>',
					'<img src="resources/images/img_mm.png" onerror="this.src=\'resources/images/ic_list_head.png\'" width="64" height="64" />',
					'<div style="font-size:14px;font-weight:normal;color:#7777777;text-align:center;margin-top:-2px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">小肚子</div>',
					'</div>',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
					    '<img id="groupchatAdd" src="resources/images/ic_groupchat_plus.png" width="64" height="64" />',
					'</div>',
					'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
					    '<img id="groupchatDelete" src="resources/images/ic_groupchat_delete.png" width="64" height="64" />',
					'</div>',
					'<tpl if="other">',
						'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
						    '<img id="groupchatAdd" src="resources/images/ic_groupchat_plus.png" width="64" height="64" />',
						'</div>',
						'<div style="width:68px; float:left;margin:10px 8px;height:85px;text-align:center;">',
						    '<img id="groupchatDelete" src="resources/images/ic_groupchat_delete.png" width="64" height="64" />',
						'</div>',
					'</tpl>',
					'</tpl>',
					{
			        	image:function(pic){
			        		if('' == pic || null == pic) return "resources/images/ic_list_head.png";
			        		else if(-1 != pic.indexOf('data:image/png;base64')) return pic;
			        		else return Ext.customURL+'../'+pic;	        		
			        	}
			        }
	    	    ],
			},
			{
				xtype:'textfield',
				style:'margin-top:20px;',
				label:'群聊名称',
				cls:'testFieldCls',
				labelCls:'textFieldLabelCls',
				inputCls:'textFieldInputCls',
				readOnly:true,
				clearIcon:false,
				value:'通讯录项目组'
			},
			{
				xtype: 'togglefield',
				cls:'testFieldCls',
				labelCls:'textFieldLabelCls',
				minValueCls:'toggle_off',
				maxValueCls:'toggle_on',
			    name: 'awesome',
			    label: '新消息通知'
			},
			{
				xtype: 'togglefield',
				cls:'testFieldCls',
				labelCls:'textFieldLabelCls',
				minValueCls:'toggle_off',
				maxValueCls:'toggle_on',
			    name: 'awesome',
			    label: '顶置聊天'
			},
			{
				xtype:'textfield',
				cls:'testFieldCls',
				labelCls:'textFieldLabelCls',
				inputCls:'textFieldInputCls',
				readOnly:true,
				clearIcon:false,
				label:'清空聊天记录'
			},
			{
				xtype:'button',
				pressedCls:false,
				cls:'exit_groupchat',
				text:'退出群聊'
			}
		],
		listeners:[
		    {
		    	element:'element',
		    	delegate:'img.delete_icon',
		    	event:'tap',
		    	fn:'deleteUser'
		    },
	   		{
               element: 'element',
               delegate: 'div.onlinecontact',
               event: 'tap',
               fn:'showContactDetail'
	   		},
	   		{
	   			element:'element',
	   			delegate:'img#groupchatAdd',
	   			event:'tap',
	   			fn:'addGroupChat'
	   		},
	   		{
	   			element:'element',
	   			delegate:'img#groupchatDelete',
	   			event:'tap',
	   			fn:'deleteGroupChat'
	   		}
		]
	},
	deleteUser:function() {
		console.log("删除群聊人员...");
	},
	addGroupChat:function() {
		console.log("添加群聊...");
		this.fireEvent('addGroupUsers');
	},
	deleteGroupChat:function() {
		console.log("删除群聊...");
	},
	showContactDetail:function(el){
		var target = Ext.get(el.getTarget());
		var uid = target.getAttribute('uid');
		this.fireEvent('showContactDetail',uid);
	}
});