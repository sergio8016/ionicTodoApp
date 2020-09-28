import {Component, Input, OnInit} from '@angular/core';
import {ListModel} from '../../models/list.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html',
    styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
    @Input() items: Array<ListModel> = [];
    @Input() tab: string;

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    goToList(listId: number) {
        this.router.navigateByUrl(`/tabs/${this.tab}/add/${listId}`);
    }

}
