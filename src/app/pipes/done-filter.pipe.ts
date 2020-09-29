import {Pipe, PipeTransform} from '@angular/core';
import {ListModel} from '../models/list.model';

@Pipe({
    name: 'doneFilter',
    pure: false,
})
export class DoneFilterPipe implements PipeTransform {

    transform(lists: Array<ListModel>, isDone: boolean = true): Array<ListModel> {
        return lists.filter(el => el.done === isDone);
    }

}
