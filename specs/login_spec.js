describe('The login page', function() {
    it('Should allow users to login with valid credentials', function() {
        var login_page = require('../pages/login_page.js');
        login_page.get();
        login_page.enterCredentials('*****', '*****');
		    login_page.clickLogin();
		    expect(browser.getCurrentUrl()).toEqual
            ('http://dev.memberzone.org/a#/Dashboard/Welcome');
	  });
});
