todoList.controller("TodoListController", [function(){
  var self = this;
  this.items = [];

  self.addItem = function(item) {
    self.items.push(item)
  };
}]);
