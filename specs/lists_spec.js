
describe('Lists page...', function() {

    var leftnav = require('../pages/leftnav.js');
    var lists_page = require('../pages/lists_page.js');


    it('should be able to create a new list', function() {
		    leftnav.clickLists();
		    lists_page.addList();
            lists_page.completeAddListForm();
            expect(browser.getCurrentUrl()).toEqual
                ('http://dev.memberzone.org/a#/Groups/');
	  });
});
