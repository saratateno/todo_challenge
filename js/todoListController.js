todoList.controller("TodoListController", [function(){
  var self = this;
  this.items = [];


  self.addItem = function() {
    self.items.push(self.newItem);
    self.newItem = '';
  };
}]);
