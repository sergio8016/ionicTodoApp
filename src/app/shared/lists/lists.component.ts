import {Component, Input, OnInit} from '@angular/core';
import {ListModel} from '../../models/list.model';
import {Router} from '@angular/router';
import {TodoService} from '../../services/todo.service';
import {AlertController, IonItemSliding} from '@ionic/angular';

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
        private todoService: TodoService,
        private alertController: AlertController,
    ) {
    }

    ngOnInit() {
    }

    goToList(listId: number) {
        this.router.navigateByUrl(`/tabs/${this.tab}/add/${listId}`);
    }

    deleteList(item: ListModel) {
        this.todoService.deleteList(item);
    }

    async editListTitle(index: number, slidingItem: IonItemSliding) {

        const alert = await this.alertController.create({
            header: 'Edit title',
            inputs: [
                {
                    name: 'title',
                    type: 'text',
                    value: this.items[index].title,
                    placeholder: 'insert list name',
                },
            ],
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
            },
                {
                    text: 'Edit',
                    handler: value => {
                        if (!value) {
                            return;
                        }
                        this.items[index].title = value.title;
                        slidingItem.close();
                        this.todoService.saveList();
                    },
                },
            ],
        });

        await alert.present();
    }

}
