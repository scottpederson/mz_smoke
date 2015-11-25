var addIndividualForm = function() {
var Chance = require('chance');
var chance = new Chance(); 
var firstName = chance.first();    
    
    this.completeAddIndividualForm = function() {
        element(by.model('vm.model.FirstName')).sendKeys('Zeke');
        element(by.model('vm.model.LastName')).sendKeys(chance.last());
        element(by.model('vm.model.CommonName')).sendKeys('Common');
        element(by.name('ContactListValue_0')).sendKeys(chance.email());
        element(by.model('itemAddresses.Address1')).sendKeys(chance.address());
        element(by.model('itemAddresses.City')).sendKeys(chance.city());
        element(by.model('itemAddresses.StateProvince')).sendKeys(chance.state());
        element(by.model('itemAddresses.PostalCode')).sendKeys(chance.zip());
        element(by.model('itemOrganizationsAndRoles.Name')).sendKeys(chance.domain());
		element(by.buttonText('Done')).click();        
    };    
};

module.exports = new addIndividualForm();

