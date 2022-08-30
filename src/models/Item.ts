import {v4 as uuid} from 'uuid';
export class Item{

    id: string = uuid();
    name: string;
    done: boolean = false;
    when: string;

    constructor(name: string, when: string) {
        this.name = name;
        this.when = when;
    }
}