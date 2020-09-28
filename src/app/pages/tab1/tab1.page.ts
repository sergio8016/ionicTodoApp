import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

    constructor(
        public todoService: TodoService,
        private router: Router,
        public alertController: AlertController,
    ) {
    }

    async addList() {

        const alert = await this.alertController.create({
            header: 'New list',
            inputs: [
                {
                    name: 'title',
                    type: 'text',
                    placeholder: 'insert list name',
                },
            ],
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
            },
                {
                    text: 'Create',
                    handler: value => {
                        if (!value) {
                            return;
                        }
                        const listId = this.todoService.createList(value.title);
                        this.goToList(listId);
                    },
                },
            ],
        });

        await alert.present();
    }

    goToList(listId: number) {
        this.router.navigate(['/tabs/tab1/add', listId]);
    }

}
