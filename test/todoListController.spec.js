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
    var description1 = "make appointment";
    var description2 = "have a nice bath";
    var item1 = { description: description1 };
    var item2 = { description: description2 };
    var todos = [ item1, item2 ];

    it('displays a list of todos', function() {
      ctrl.newItem = description1;
      ctrl.addItem();
      ctrl.newItem = description2;
      ctrl.addItem();
      expect(ctrl.items).toEqual(todos);
    });

    it('saves a new edited description back into the array', function() {
      ctrl.items = [item1, item2];
      ctrl.edit(item2);
      ctrl.newDescription = "Do something else";
      ctrl.submitEdit();
      expect(ctrl.items[1].description).toEqual("Do something else");
    });

    it('marks an item as complete', function() {
      ctrl.items = [item1];
      ctrl.markComplete(item1);
      expect(ctrl.items[0].complete).toEqual(true);
    });
  });
});
