Ext.define('contactlist.controller.ContactDetail',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			'contactDetail':{
				selector:'contactdetail-con',
				xtype:'contactdetail-con',
				autoCreate:true
			},
			'editBtn':'#editBtn'
		},
		control:{
			contactDetail:{
				showIM:'showIM',
				takePhoto:'takePhoto'
			},
			editBtn:{
				tap:'switchEdit'
			}
		},
		routes:{
			'contactDetail/:id':'showContactDetail'
		}
	},
	takePhoto:function(){
		if(Ext.os.is.iOS)
		{
			window.location.href="http://t.kingnode.com/portal/crm/goPhoto(true,1,1)";
			//window.location.href="http://test.kingnode.com/portal/crm/goPhoto()";
		}
		else if(Ext.os.is.Android)
		{
			window.capturefunc.goPhoto();
		}
		//photoFinish();
	},
	showContactDetail:function(id){
		var contactDetail = this.getContactDetail();
		if(Ext.isNumeric(id)) var record = Ext.getStore('contactlist').findRecord('id',id);
		else var record = Ext.getStore('contactlist').findRecord('py',id);
//		if(id == Ext.currentUserId) Ext.getCmp('editBtn').show();
//        else Ext.getCmp('editBtn').hide();
		if(id == Ext.currentUserId)
		{
			Ext.data.JsonP.request({
			    url:Ext.customURL+'api.php/getContactById',
			    params: {
			        uid:Ext.currentUserId
			    },
			    timeout:5000,
			    success: function(response){
			        var data = {
		            	'id':id,
		            	'name':record.get('name'),
		            	'job_name':record.get('job_name'),
		            	'dept_name':record.get('dept_name'),
		            	'tel':response.tel,
		            	'email':response.email,
		            	'phone':response.phone,
		            	'pic':record.get('pic'),
		            	'currentUserId': Ext.currentUserId
		            };
					contactDetail.setData(data);
					Ext.Viewport.animateActiveItem(contactDetail,{type:'slide',direction:'left'});
			    }
			});
			
		}
		else
		{
	        var data = {
	            	'id':id,
	            	'name':record.get('name'),
	            	'job_name':record.get('job_name'),
	            	'dept_name':record.get('dept_name'),
	            	'tel':record.get('tel'),
	            	'email':record.get('email'),
	            	'phone':record.get('phone'),
	            	'pic':record.get('pic'),
	            	'currentUserId': Ext.currentUserId
	            };
			contactDetail.setData(data);
			Ext.Viewport.animateActiveItem(contactDetail,{type:'slide',direction:'left'});
		}
	},
	showIM:function(uid){
		var currentUserId = Ext.currentUserId;
		//currentUserId = 1
		if('' == currentUserId){Ext.Msg.alert('系统提示','您可能还未登陆,无法和好友聊天!');return;}
		this.redirectTo('im/'+uid+'/'+currentUserId);
	},
	switchEdit:function(btn){
		var params = new Array();
		var contactDetail = this.getContactDetail();
		if('编辑' == btn.getText())
		{
			Ext.get(Ext.query('.takePhoto')).show();
			btn.setText('保存');
			Ext.each(Ext.query('.text','contact-detail'),function(el){
				Ext.get(el).hide();
			});
			Ext.each(Ext.query('.edit_input','contact-detail'),function(el){
				Ext.get(el).show();
			});
		}
		else
		{
			btn.setText('编辑');
			Ext.get(Ext.query('.takePhoto')).hide();
			Ext.each(Ext.query('.edit_input','contact-detail'),function(el){
				params[$(el).attr('name')] = $(el).val();
				Ext.get(el).hide();
			});
			var store = Ext.getStore('contactlist'),
				record = store.findRecord('id',Ext.currentUserId),
				pic = $('#headPhoto').attr('src');
			pic = pic.replace(Ext.customURL+'../','');
			console.log(pic);
			record.set('pic',pic);
			store.sync();
			localStorage.removeItem('contactlist');
			//console.log(pic);
			contactDetail.setMasked({xtype:'loadmask',message:'正在更新数据...',indicator:false});
			Ext.Ajax.request({
			    url:Ext.customURL+'api.php/editContact',
			    params: {
			        email:params['email'],
			        tel:params['tel'],
			        phone:params['phone'],
			        uid:Ext.currentUserId,
			        pic:pic
			    },
			    timeout:5000,
			    method:'POST',
			    success: function(response){
			        var text = Ext.decode(response.responseText);
			        
			        if(text.success)
			        {
			        	Ext.Msg.alert('系统提示','数据更新成功!');
			        	contactDetail.setData(text.data);			        	
			        }
			    }
			});
			Ext.each(Ext.query('.text','contact-detail'),function(el){
				Ext.get(el).show();
			});		
			contactDetail.setMasked(false);
		}
	}
});