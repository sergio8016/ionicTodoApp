import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

    constructor(
        private todoService: TodoService,
    ) {
    }

}
