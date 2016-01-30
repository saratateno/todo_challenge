describe('todo List feature', function() {
  var newItemBox = element(by.model('todoCtrl.newItem'));
  var addItemButton = element(by.className('add'));
  var editButton = element(by.className('edit'));
  var editBox = element(by.model('todoCtrl.newDescription'));
  var submitEdit = element(by.className('submit-edit'));
  var submitItem = function() {
    newItemBox.sendKeys('Buy some milk');
    addItemButton.click();
  };

  beforeEach(function(){
    browser.get('http://localhost:8080');
    submitItem();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('adds an item to the list', function() {
    var items = element.all(by.repeater(''));
    expect(items.get(0).getText()).toEqual('Buy some milk');
  });


  it('clears the previous item after it has been added', function() {
    expect(element(by.model('todoCtrl.newItem')).getAttribute('value')).toEqual("");
  });


  it('allows the same item to be added more than once', function() {
    submitItem();
    var items = element.all(by.repeater(''));
    expect(items.get(1).getText()).toEqual('Buy some milk');
  });

  it('allows an item to be edited', function() {
    editButton.click();
    editBox.sendKeys("y bars");
    submitEdit.click();
    var items = element.all(by.repeater(''));
    expect(items.get(0).getText()).toEqual('Buy some milky bars');
  });

});
