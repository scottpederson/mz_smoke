var leftnav = function() {
    
    this.clickDashboard = function() {
        element(by.css('#nav > li:nth-child(1) > a > span')).click();
    };
    
    this.clickContacts = function() {
        element(by.css('#nav > li:nth-child(2) > a > span')).click();
    };
    
    this.clickLists = function() {
        element(by.css('#nav > li:nth-child(3) > a > span')).click();
    };
    
    this.clickMembership = function() {
        element(by.css('#nav > li:nth-child(4) > a > span')).click();
    };
    
    this.clickCommunication = function() {
        element(by.css('#nav > li:nth-child(5) > a > span')).click();
    };
    
    this.clickEvents = function() {
        element(by.css('#nav > li:nth-child(6) > a > span')).click();
    };
    
    this.clickWeb = function() {
        element(by.css('#nav > li:nth-child(7) > a > span')).click();
    };
    
    this.clickProjects = function() {
        element(by.css('#nav > li:nth-child(8) > a > span')).click();
    };
    
    this.clickSales = function() {
        element(by.css('#nav > li:nth-child(9) > a > span')).click();
    };
    
    this.clickBilling = function() {
        element(by.css('#nav > li:nth-child(10) > a > span')).click();
    };
    
    this.clickReports = function() {
        element(by.css('#nav > li:nth-child(11) > a > span')).click();
    };
    
    this.clickCloud = function() {
        element(by.css('#nav > li:nth-child(12) > a > span')).click();
    };
    
    this.clickRequests = function() {
        element(by.css('#nav > li:nth-child(13) > a > span')).click();
    };
    
    this.clickSetup = function() {
        element(by.css('#nav > li:nth-child(14) > a > span')).click();
    };
    
};
module.exports = new leftnav();

