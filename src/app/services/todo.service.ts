import {Injectable} from '@angular/core';
import {ListModel} from '../models/list.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    lists: Array<ListModel> = [];

    constructor() {
    }


}
