import {inject} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';
import weclome from './welcome';
export class App {
    constructor() {
        var isFirstStart = window.localStorage.getItem('firstStart');
        this.firstStart = !isFirstStart;
        this.header = '深圳';
    }

    configureRouter(config, router) {
        config.title = '老乡村';
        var routes = [
            {route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: '介绍'},
            {route: 'found', name: 'found', moduleId: './found', nav: true, title: 'found'},
            {route: 'news', name: 'news', moduleId: './news', nav: true, title: 'news'},
            {route: 'order', name: 'order', moduleId: './order', nav: true, title: 'order'},
            {route: 'me', name: 'me', moduleId: './me', nav: true, title: 'me'},
            {route: 'search', name: 'search', moduleId: './search', nav: true, title: 'search'}
        ];
        config.map(routes);
        this.router = router;
    }

    attached() {
        if (this.firstStart) {
            myApp.welcomescreen(weclome.slides, weclome.options);
        }
    }
}
class AuthorizeStep {
    run(routingContext, next) {
        // Check if the route has an "auth" key
        // The reason for using `nextInstructions` is because
        // this includes child routes.
        if (routingContext.nextInstructions.some(i => i.config.auth)) {
            var isLoggedIn = window.localStorage.getItem('authorize');
            if (!isLoggedIn) {
                return next.cancel(new Redirect('sigin'));
            }
        }
        return next();
    }
}