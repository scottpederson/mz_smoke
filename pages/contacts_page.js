var contacts_page = function() {
    
    this.addOrganization = function() {
        element(by.buttonText('Add Organization')).click();
    };
    
    this.addIndividual = function() {
        element(by.buttonText('Add Individual')).click();
    };   
    
     this.editName = function() {
        element(by.linkText('Edit Name')).click(); 
    }; 
    
     this.sendEmail = function() {
        element(by.buttonText('Send Email')).click();
    }; 
    
     this.logNote = function() {
        element(by.buttonText('Log Note')).click();
    }; 
    
     this.deleteContact = function() {
        element(by.buttonText('Delete Contact')).click();
    }; 
};

module.exports = new contacts_page();



