describe('todo List feature', function() {
  var newItemBox = element(by.model('todoCtrl.newItem'));
  var addItemButton = element(by.className('add'));
  var editButton = element(by.className('edit'));
  var editBox = element(by.model('todoCtrl.newDescription'));
  var submitEdit = element(by.className('submit-edit'));
  var completeCheck = element(by.className('glyphicon-unchecked'));
  var isCompleteIcon =  element(by.className('glyphicon-check'));
  var counter = element(by.binding('todoCtrl.count()'));
  var items = element.all(by.repeater(''));
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
    expect(items.get(0).getText()).toEqual('Buy some milk');
  });


  it('clears the previous item after it has been added', function() {
    expect(element(by.model('todoCtrl.newItem')).getAttribute('value')).toEqual("");
  });


  it('allows the same item to be added more than once', function() {
    submitItem();
    expect(items.get(1).getText()).toEqual('Buy some milk');
  });

  it('allows an item to be edited', function() {
    editButton.click();
    editBox.sendKeys("y bars");
    submitEdit.click();
    expect(items.get(0).getText()).toEqual('Buy some milky bars');
  });

  it('marks items as complete', function(){
    completeCheck.click();
    expect(isCompleteIcon.isDisplayed()).toBe(true);
  });

  it('unmarks items as complete', function(){
    completeCheck.click();
    isCompleteIcon.click();
    expect(completeCheck.isDisplayed()).toBe(true);
  });

  it('tracks the number of things to do', function() {
    expect(counter.getText()).toEqual("You have completed 0/1 things on your to do list");
  });
});
