
describe('Lists page should work', function() {

    var leftnav = require('../pages/leftnav.js');
    var lists_page = require('../pages/lists_page.js');


    it('Should create a new list', function() {
		    leftnav.clickLists();
		    lists_page.addList();
        lists_page.completeAddListForm();
        expect(browser.getCurrentUrl()).toEqual
                ('http://dev.memberzone.org/a#/Groups/');
	  });
});
