var lists_page = function() {

    this.addList = function() {
        element(by.buttonText('Add List')).click();
    };

    this.completeAddListForm = function() {
        element(by.model('vm.model.Name')).sendKeys('List#-');
        var select = element(by.model('vm.model.GroupCategoryId'));
            select.$('[value="number:407"]').click();
    };
};
module.exports = new lists_page();
