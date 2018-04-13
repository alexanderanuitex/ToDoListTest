var app = angular.module("app", []);

class ToDoListController {
    public list: TaskViewItem[] = [];
    public newTaskName: string;
    public selectedList: TaskViewItem[] = [];

    constructor() {
        this.init();
    }

    public init(): void {
        for (let i = 0; i < 5; i++) {
            var item: TaskViewItem = {
                name: "Task " + (i + 1),
                checked: false
            }
            this.list.push(item);
        }
        this.selectedList = angular.copy(this.list);
    }

    public showAll(): void {
        this.selectedList = angular.copy(this.list);
    }

    public showSelectedTasks(): void {
        for (let i = 0; i < this.selectedList.length; i++) {
            if (this.selectedList[i].checked) {
                continue;
            }
            this.deleteTask(i);
            i--;
        }
    }

    public deleteTask(index: number): void {
        this.selectedList.splice(index, 1);
    }

    public deleteSelectedTasks(): void {
        for (let i = 0; i < this.selectedList.length; i++) {
            if (!this.selectedList[i].checked) {
                continue;
            }
            this.deleteTask(i);
            i--;
        }
    }

    public addTask(): void {
        if (!this.newTaskName) {
            return;
        }
        var item: TaskViewItem = {
            name: this.newTaskName,
            checked: false
        };
        this.list.push(item);
        this.selectedList.push(item);
        this.newTaskName = "";
    }
}

class TaskViewItem {
    name: string;
    checked: boolean;
}

app.controller('ToDoListController', ToDoListController);

