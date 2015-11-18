Ext.define('contactlist.controller.Contacts',{
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
		    url:Ext.customURL+'api.php/getContactList?mark=1&username='+username,
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
				selector:'contact-list',
				xtype:'contact-list'
			},
			'searchword':'#searchword'
		},
		control:{
			contacts:{
				itemtap:'showContactDetail'
			},
			company:{
				tap:'showCompany'
			},
			communication:{
				tap:'showCommunication'
			},
			group:{
				tap:'showMyGroup'
			},
			searchword:{
				keyup:'searchContact',
				clearicontap:function(){
					this.getContacts().getStore().clearFilter();
					return;
				}
			}
		}
	},
	showContactDetail:function(list,index,target,record,evt,opts){	
		var job_name = record.data.job_name;
		if('communication' == job_name)
		{
			this.showCommunication();
		}
		else if('group' == job_name)
		{
			this.showMyGroup();
		}
		else if('company' == job_name)
		{
			this.showCompany();
		}
		else this.redirectTo('contactDetail/'+record.get('id'));
	},
	showCommunication:function(){
//		window.MediaFactory.addRecordMessage(String sql) 这是添加的函数
		var data = queryRecordMessage('select id,contacts_id,contacts_name,contacts_date,centent from msg_recently');
		alert(data);
		contacts.getStore().setData(data);
		this.redirectTo('communication');
	},
	showCompany:function(){
		console.log('company');
		this.redirectTo('department-list');
	},
	showMyGroup:function(){
		console.log('myGroup');
		this.redirectTo('myGroup');
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