import $ from "jquery";
import { oops } from "../views/oops";
import { showTreatments } from "../views/show-treatments.js";

export class Router {
  constructor(routes) {
    this.routes = routes;
    this.outlet;
    this.body = $(document.body);
    // console.log(routes);
    // console.log(this.routes);
    // console.log(this.body);
    console.log("constructor");
  }

  mount(outlet) {
    //nie uruchamia się przy wczwytywaniu strony
    this.outlet = outlet;
    console.log(outlet);
    this.body.on("routechange", (event, detail) => {
      const { path } = detail;
      this.navigate(path); //przechowuje bierzącą ścieżkę
      // console.log(this.navigate(path)); //pokazuje dokładnie to samo co console.log(path); //np. /treatments czy /bookings
      // console.log(this.body);
      console.log("mount");
      console.log("");
    });
  }

  init() {
    //uruchamia się tylko przy wczytaniu strony
    const path = location.pathname; //przechowuje info o początkowej stronie
    this.navigate(path);
    // console.log(path); //adres typu /treatments
    console.log("init");
    console.log("");
  }

  get(path) {
    console.log("get");
    // console.log(this.routes); //musi być this.routes ---> samego routes nie widzi
    //znajduje ścieżkę o żądanym path lub zwraca undefined
    return this.routes.find((route) => route.path === path); //path to np. /bookings, czy /home, ---> Oops nie
    //---
    // return console.log(this.routes.find((route) => route.path === path));
  }

  has(path) {
    console.log("has");
    console.log(path);
    return this.get(path) !== undefined;
  }

  navigate(path, data = {}) {
    if (this.has(path)) {
      //obsługuję istniejącą ścieżkę
      const { component } = this.get(path);
      const html = component();
      console.log(html);
      //renderuje nowy widok  wewnątrz elementu 'outlet'
      this.outlet.empty().append(html);
    } else {
      //obsługuję nieistniejącą ścieżkę (oops...)
      // this.outlet.empty().append('<h1>Oops..brak strony!!!</h1>');
      const html = oops();
      this.outlet.empty().append(html);
    }

    history.pushState(data, "", path);
    // console.log(path); //np. /treatments czy /bookings
    console.log("navigate");
  }
}
