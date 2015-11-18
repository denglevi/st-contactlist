Ext.define('contactlist.controller.Login',{
	extend:'Ext.app.Controller',
	config:{
		refs:{
			login:{
				autoCreate:true,
				selector:'login',
				xtype:'login'
			},
			loginBtn:'#loginbtn',
			mainBtn:'#mainbtn'
		},
		control:{
			mainBtn:{
				tap:function(){
					this.redirectTo('main');
				}
			},
			loginBtn:{
				tap:function(){
					var me = this;
					var username = Ext.getCmp('username').getValue();
					var password = Ext.getCmp('password').getValue();
				    Ext.data.JsonP.request({
			            url:Ext.customURL+'api.php/login',
			            params:{
			            	username:username,
			            	password:password,
			            	dosubmit:'yes'
			            },
						success: function(response) {
							console.log(response.code);
							if(1 == response.code)
							{
								me.redirectTo('main');
							}
							else
							{
								Ext.Msg.alert('系统提示','登录用户名或密码错误');
							}
							
						},
						failure: function() {
							Ext.Msg.alert("数据获取失败!");
							return;
						}
			        });
				}
			}
		},
		routes:{
			'login':'showLogin'
		}
	},
	showLogin:function(){
		Ext.Viewport.animateActiveItem(this.getLogin(),{type:'slide',direction:'left'});
	}
})