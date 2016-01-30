todoList.controller("TodoListController", [function(){
  var self = this;
  this.items = [];


  self.addItem = function() {
    var item = { description: self.newItem };
    self.items.push(item);
    self.newItem = '';
  };

  self.editingItem = function(item) {
    self.editMode = true;
    self.editingPosition = self.items.indexOf(item);
  };
}]);
