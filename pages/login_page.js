var login_page = function() {
    
    this.enterCredentials = function(username, password) {
        element(by.id('Username')).sendKeys(username);
        element(by.id('Password')).sendKeys(password);
    };
    
    this.clickLogin = function() {
        element(by.id('sign-up-button')).click();
    };
    
    this.get = function() {
        browser.get('http://dev.memberzone.org');
    };    
};
module.exports = new login_page();