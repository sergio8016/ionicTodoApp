import {Injectable} from '@angular/core';
import {ListModel} from '../models/list.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    lists: Array<ListModel> = [];

    constructor() {
        this.loadList();
    }

    createList(title: string): number {
        const newList = new ListModel(title);
        this.lists.push(
            newList,
        );
        this.saveList();
        return newList.id;
    }

    getList(id: number | string) {
        return this.lists.find(item => item.id === Number(id));
    }

    saveList() {
        localStorage.setItem('list', JSON.stringify(this.lists));
    }

    loadList() {
        if (!localStorage.getItem('list')) {
            this.saveList();
        }

        this.lists = JSON.parse(localStorage.getItem('list'));
    }
}
