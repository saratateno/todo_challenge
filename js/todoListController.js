todoList.controller("TodoListController", [function(){
  var self = this;
  this.items = [];


  self.addItem = function() {
    var item = { description: self.newItem };
    self.items.push(item);
    self.newItem = '';
  };

  self.edit = function(item) {
    self.editingPosition = self.items.indexOf(item);
    self.items[self.editingPosition].editMode = true;
    self.newDescription = item.description;
  };

  self.submitEdit = function(){
    self.items[self.editingPosition].description = self.newDescription;
    self.items[self.editingPosition].editMode = false;
  };

}]);
