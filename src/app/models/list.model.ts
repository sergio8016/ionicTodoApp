import {ItemList} from './item-list';

export class ListModel {
    id: number;
    title: string;
    createdAt: Date;
    finishedAt: Date;
    done: boolean;
    items: Array<ItemList>;

    constructor(title: string) {
        this.title = title;
        this.createdAt = new Date();
        this.done = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}
