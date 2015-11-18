Ext.define('contactlist.controller.AddGroupUser',{
	extend:'Ext.app.Controller',
	launch:function(){
		var contacts = this.getContacts();
		var username = localStorage.getItem('username');
		// if(null == username)
		// {
			// Ext.Msg.confirm('系统提示','获取用户错误!',function(btnid){
				// loadURL('goNative');				
			// });
			// return;
		// }
		// if(item = localStorage.getItem('contactlist')){
			// var contactlist = Ext.decode(item);

			// if((new Date()).valueOf()-contactlist.time < Ext.expireTime)
			// {
				// Ext.data.JsonP.request({
				    // url:Ext.customURL+'api.php/getCurrentUserInfo?username='+username,
				    // success: function(response){
				    	// Ext.currentUserId = response.id;	
				    // }
				// });
				// contacts.getStore().setData(contactlist.data);
				// return;
			// }
		// }

		Ext.data.JsonP.request({
		    url:Ext.customURL+'api.php/getContactList?username='+username,
		    success: function(response){
		    	response.time =  (new Date()).valueOf();
		    	localStorage.setItem('contactlist',Ext.encode(response));
		    	Ext.currentUserId = response.currentUserId;
				contacts.getStore().setData(response.data);
		    }
		});
	},
	config:{
		refs:{
			'contacts':{
				autoCreate:true,
				selector:'addgroupuser',
				xtype:'addgroupuser'
			},
			'searchword':'#searchword',
			'confirm':'#confirm'
		},
		control:{
			contacts:{
				itemtap:'showContactDetail'
			},
			confirm:{
				tap:'addGroupUser'
			},
			searchword:{
				keyup:'searchContact',
				clearicontap:function(){
					this.getContacts().getStore().clearFilter();
					return;
				}
			}
		},
		routes:{
			'addGroupUser':'showContact'
		}
	},
	showContact:function(id){
		this.getContacts().mark = id;
		//console.log(id);
		Ext.Viewport.animateActiveItem(this.getContacts(),{type:'slide'});
	},
	addGroupUser:function(){

	   var inputs = Ext.query('.selected'),
	   	   len = inputs.length,
	   	   num = [];
	   for(var i=0;i<len;i++)
	   {
		   num.push(Ext.get(inputs[i]).getAttribute('num'));
	   }
	   if(1 == this.getContacts().mark)
       {
		    var gid = this.getContacts().gid;
			Ext.Ajax.request({
			    //url:Ext.customURL+'api.php/editContact',
				url:'http://localhost/new_oa/mobile2/api.php/addGroupUser',
			    params: {
			        gid:gid,
			        users:num.join()
			    },
			    timeout:5000,
			    method:'POST',
			    success: function(response){
			    	console.log(response);
			    	history.go(-1);
			    	return;
			    }
		    });	
		    return;
       }

	   Ext.getCmp('groupUser').setHtml(num.join());
	   history.go(-1);
	},
	showContactDetail:function(list,index,target,record,evt,opts){
		if(document.getElementById("off_" + record.raw.id).className == "item_show") {
			target.element.down('img[id="off_'+ record.raw.id +'"]').removeCls('item_show').addCls('item_hide');
			target.element.down('img[id="no_'+ record.raw.id +'"]').removeCls('item_hide').addCls('item_show');
		} else {
			target.element.down('img[id="off_'+ record.raw.id +'"]').removeCls('item_hide').addCls('item_show');
			target.element.down('img[id="no_'+ record.raw.id +'"]').removeCls('item_show').addCls('item_hide');
		}
	},
	searchContact:function(field){	

        var value = field.getValue(),
            store = this.getContacts().getStore();

        store.clearFilter(!!value);
        if (value) {
            var searches = value.split(','),
                regexps = [],
                i, regex;
            for (i = 0; i < searches.length; i++) {

                if (!searches[i]) continue;
                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            store.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('py') + ' ' + record.get('name'));
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
	}
});