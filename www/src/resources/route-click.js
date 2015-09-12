import {customAttribute, bindable} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';

@customAttribute('route-click')
@bindable({ name: 'route' })
@bindable({ name: 'params' })
@inject(Router, Element)
export class RouteClick {
    constructor(router, element) {
        this.router = router;
        this.element = element;
    }
    attached() {
        var self = this;
        $$(this.element).click(function() {
            self.router.navigateToRoute(self.route, self.params);
        });
    }
}