import $ from 'jquery';
import { oops } from '../views/oops';

export class Router {

    constructor(routes) {

        this.routes = routes;
        this.outlet;
        this.body = $(document.body);

    }

    mount(outlet) {

        this.outlet = outlet;
        this.body.on('routechange', (event, detail) => {
            const { path } = detail;
            this.navigate(path);
        })

    }

    init() {
        const path = location.pathname; //przechowuje
        this.navigate(path);
    }

    get(path) {
        //znajduje ścieżkę o żądanym path lub zwraca undefined
        return this.routes.find(route => route.path === path);

    }

    has(path) {

        return this.get(path) !== undefined;

    }

    navigate(path, data = {}) {

        if (this.has(path)) {
            //obsługuję istniejącą ścieżkę
            const { component } = this.get(path);
            const html = component();
            //renderuje nowy widok  wewnątrz elementu 'outlet'
            this.outlet.empty().append(html);

        } else {
            //obsługuję nieistniejącą ścieżkę (oops...)
            // this.outlet.empty().append('<h1>Oops..brak strony!!!</h1>');
            const html = oops();
            this.outlet.empty().append(html);

        }

        history.pushState(data, '', path);

    }

}

// new Router() - nie wiem czy to jest potrzebne