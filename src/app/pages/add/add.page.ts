import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ActivatedRoute} from '@angular/router';
import {ListModel} from '../../models/list.model';
import {FormBuilder} from '@angular/forms';
import {ItemList} from '../../models/item-list';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    list: ListModel;
    form = this.formBuilder.group({
        newTask: [''],
    });

    constructor(
        private todoService: TodoService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.list = this.todoService.getList(id);
    }

    addTask(): void {
        const value = this.form.get('newTask').value;
        if (!value) {
            return;
        }
        const newItem = new ItemList(value);
        this.list.items.push(newItem);
        this.checkListDoneStatus();
        this.todoService.saveList();
        this.form.reset();
    }

    toggleTaskStatus(value: boolean, index: number): void {
        this.list.items[index].completed = value;
        this.checkListDoneStatus();
        this.todoService.saveList();
    }

    deleteTask(index: number): void {
        this.list.items.splice(index, 1);
        this.checkListDoneStatus();
        this.todoService.saveList();
    }

    checkListDoneStatus(): void {
        const pending = this.list.items.filter(el => el.completed === false);
        if (pending.length === 0) {
            this.list.done = true;
            this.list.finishedAt = new Date();
        } else {
            this.list.done = false;
            this.list.finishedAt = null;
        }
    }
}
