//edit contact name form

var editContactNameForm = function() {
    
    
    this.editFirstName = function() {
        element(by.model('vm.model.FirstName')).clear();        
        element(by.model('vm.model.FirstName')).sendKeys('Joe');           
		element(by.buttonText('Done')).click();        
    };    
};

module.exports = new editContactNameForm();