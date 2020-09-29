import {Injectable} from '@angular/core';
import {ListModel} from '../models/list.model';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    lists: Array<ListModel> = [];

    constructor(
        public toastController: ToastController,
    ) {
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

    getList(id: number | string): ListModel {
        return this.lists.find(item => item.id === Number(id));
    }

    saveList(): void {
        localStorage.setItem('list', JSON.stringify(this.lists));
    }

    loadList(): void {
        if (!localStorage.getItem('list')) {
            this.saveList();
        }

        this.lists = JSON.parse(localStorage.getItem('list'));
    }

    async deleteList(item: ListModel) {
        const index = this.lists.indexOf(item);
        this.lists.splice(index, 1);
        this.saveList();
        const toast = await this.toastController.create({
            message: 'List deleted',
            position: 'top',
            duration: 1500,
        });
        await toast.present();
    }
}
