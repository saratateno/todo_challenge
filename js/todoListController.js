todoList.controller("TodoListController", [function(){
  var self = this;
  var activeItemIndex = 0;
  this.items = [];


  self.addItem = function() {
    var item = { description: self.newItem };
    self.items.push(item);
    self.newItem = '';
  };

  self.edit = function(item) {
    activeItemIndex = _position(item);
    self.items[activeItemIndex].editMode = true;
    self.newDescription = item.description;
  };

  self.submitEdit = function(){
    self.items[activeItemIndex].description = self.newDescription;
    self.items[activeItemIndex].editMode = false;
  };

  self.markComplete = function(item) {
    self.items[_position(item)].complete = true;
  };

  function _position(item) {
    return self.items.indexOf(item);
  }
}]);
