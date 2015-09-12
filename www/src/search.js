import {bindable,inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router, Element)
export class search {
    constructor(rt, element) {
        this.rt = rt;
        this.element = element;
    }

    back() {
        this.rt.navigateBack();
    }

    smartSelect(event) {
        console.log(event);
    }
}