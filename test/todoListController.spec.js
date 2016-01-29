describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with an empty new todo field and nothing listed', function() {
    expect(ctrl.new).toBeUndefined();
    expect(ctrl.items).toEqual([]);
  });

  describe('when viewing a to do list', function() {
    var item1 = "get sloshed";
    var item2 = "have a nice bath";

    it('displays a list of todos', function() {
      ctrl.addItem(item1)
      ctrl.addItem(item2)
      expect(ctrl.items).toEqual([item1, item2]);
    });
  });
});
