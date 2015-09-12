import {customAttribute, bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

@customAttribute('navigate-click')
@bindable({ name: 'url' })
@bindable({ name: 'options' })
@inject(Router, Element)
export class NavigateClick {
    constructor(router, element) {
        this.router = router;
        this.element = element;
    }
    attached() {
        var self = this;
        $$(this.element).click(function() {
            self.router.navigate(self.url);
        });
    }
}