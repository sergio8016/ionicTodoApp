import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ListModel} from '../../models/list.model';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
    list: Array<ListModel> = [];

    constructor(
        private todoService: TodoService,
    ) {
        this.list = todoService.lists;
    }

}
