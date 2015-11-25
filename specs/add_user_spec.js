
describe('Contacts page should work', function() {

    var leftnav = require('../pages/leftnav.js');
    var contacts_page = require('../pages/contacts_page.js');
    var addIndividualForm = require('../pages/add_individual_form.js');
    var editContactNameForm = require('../pages/edit_contact_name_form.js');


    it('Should be able to add contact individual', function() {
		    leftnav.clickContacts();
		    contacts_page.addIndividual();
        addIndividualForm.completeAddIndividualForm();
		    expect(element(by.css
            ('#content > div > div.col-sm-10 > div.row > div.col-sm-8 > p > span:nth-child(1)'))
            .getText()).toEqual('Zeke');
	  });


    it('Should be able to edit name', function() {
        contacts_page.editName();
        editContactNameForm.editFirstName();
        expect(element(by.css
            ('#content > div > div.col-sm-10 > div.row > div.col-sm-8 > p > span:nth-child(1)'))
            .getText()).toEqual('Joe');
    });
});
