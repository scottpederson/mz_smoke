
describe('Contacts page....', function() {

    var leftnav = require('../pages/leftnav.js');
    var contacts_page = require('../pages/contacts_page.js');
    var addIndividualForm = require('../pages/add_individual_form.js');
    var editContactNameForm = require('../pages/edit_contact_name_form.js');


    it('should be able to add individual contact', function() {
		    leftnav.clickContacts();
		    contacts_page.addIndividual();
            addIndividualForm.completeAddIndividualForm();
		    expect(element(by.css('p.contactName:nth-child(2) > span:nth-child(1)')).getText()).toEqual('Robot');
	  });


    it('should be able to edit individual contact', function() {
        contacts_page.editName();
        editContactNameForm.editFirstName();
        expect(element(by.css('p.contactName:nth-child(2) > span:nth-child(1)')).getText()).toEqual('Joe');
    });
});
