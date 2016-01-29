describe('todo List feature', function() {
  var newItemBox = element(by.model('todoCtrl.newItem'));
  var addItemButton = element(by.className('btn'));
  var submitItem = function() {
    newItemBox.sendKeys('Buy some milk');
    addItemButton.click();
  };

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('adds an item to the list', function() {
    submitItem();
    var items = element.all(by.repeater(''));
    expect(items.get(0).getText()).toEqual('Buy some milk');
  });


  it('clears the previous item after it has been added', function() {
    submitItem();
    expect(element(by.model('todoCtrl.newItem')).getAttribute('value')).toEqual("");
  });


  it('allows the same item to be added more than once', function() {
    submitItem();
    submitItem();
    var items = element.all(by.repeater(''));
    expect(items.get(1).getText()).toEqual('Buy some milk');
  });

});
