describe('todo List feature', function() {
  var newItemBox = element(by.model('todoCtrl.newItem'));
  var addItemButton = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('adds an item to the list', function() {
    newItemBox.sendKeys('Buy some milk');
    addItemButton.click();

    var items = element.all(by.repeater(''));
    expect(items.get(0).getText()).toEqual('Buy some milk');
  });
});
