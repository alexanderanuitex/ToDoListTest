var app = angular.module("app", []);
var ToDoListController = /** @class */ (function () {
    function ToDoListController() {
        this.list = [];
        this.selectedList = [];
        this.init();
    }
    ToDoListController.prototype.init = function () {
        for (var i = 0; i < 5; i++) {
            var item = {
                name: "Task " + (i + 1),
                checked: false
            };
            this.list.push(item);
        }
        this.selectedList = angular.copy(this.list);
    };
    ToDoListController.prototype.showAll = function () {
        this.selectedList = angular.copy(this.list);
    };
    ToDoListController.prototype.showSelectedTasks = function () {
        for (var i = 0; i < this.selectedList.length; i++) {
            if (this.selectedList[i].checked) {
                continue;
            }
            this.deleteTask(i);
            i--;
        }
    };
    ToDoListController.prototype.deleteTask = function (index) {
        this.selectedList.splice(index, 1);
    };
    ToDoListController.prototype.deleteSelectedTasks = function () {
        for (var i = 0; i < this.selectedList.length; i++) {
            if (!this.selectedList[i].checked) {
                continue;
            }
            this.deleteTask(i);
            i--;
        }
    };
    ToDoListController.prototype.addTask = function () {
        if (!this.newTaskName) {
            return;
        }
        var item = {
            name: this.newTaskName,
            checked: false
        };
        this.list.push(item);
        this.selectedList.push(item);
        this.newTaskName = "";
    };
    return ToDoListController;
}());
var TaskViewItem = /** @class */ (function () {
    function TaskViewItem() {
    }
    return TaskViewItem;
}());
app.controller('ToDoListController', ToDoListController);
//# sourceMappingURL=app.js.map