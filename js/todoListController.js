todoList.controller("TodoListController", [function(){
  var self = this;
  var activeItemIndex = 0;
  self.items = [];

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

  self.markIncomplete = function(item) {
    self.items[_position(item)].complete = false;
  };

  self.countComplete = function(){
    var count = 0;
    for (i = 0; i < self.items.length; i++) {
      if(self.items[i].complete === true){
          count += 1;
      }
    }
    return count;
  };

  self.count = function() {
    return self.items.length;
  };

  self.nothingToDo = function() {
    return (self.count() - self.countComplete()) === 0;
  };

  function _position(item) {
    return self.items.indexOf(item);
  }
}]);
