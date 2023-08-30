import $ from "jquery";
import { oops } from "../views/oops";

export class Router {
  constructor(routes) {
    this.routes = routes;
    this.outlet;
    this.body = $(document.body);
  }

  mount(outlet) {
    //nie uruchamia się przy wczwytywaniu strony
    this.outlet = outlet;
    this.body.on("routechange", (event, detail) => {
      const { path } = detail;
      this.navigate(path); //przechowuje bierzącą ścieżkę
    });
  }

  init() {
    //uruchamia się tylko przy wczytaniu strony
    const path = location.pathname; //przechowuje info o początkowej stronie
    this.navigate(path);
  }

  get(path) {
    // console.log(this.routes); //musi być this.routes ---> samego routes nie widzi
    //znajduje ścieżkę o żądanym path lub zwraca undefined
    return this.routes.find((route) => route.path === path); //path to np. /bookings, czy /home, ---> Oops nie
    //---
    // return console.log(this.routes.find((route) => route.path === path));
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

    history.pushState(data, "", path);
  }
}
