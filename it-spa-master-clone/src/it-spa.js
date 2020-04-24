"use strict";

import database from "../database.json";
import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import $ from "jquery";
import { Router, routes } from "./router";
import { nav } from "./navigation/nav";
import { Cart } from "./cart/cart.js";
import { showBookings, showRooms, showHome, showTreatments } from "./views";
// import { showHome } from "./views/show-Home.js";
// import { showTreatments } from "./views/show-treatments.js";
// import { showBookings } from "./views/show-bookings.js";

console.log(`Clone`);
console.log("");

const main = $("main");
console.log(main);

const cart = new Cart(); //moje

const router = new Router(routes); //router.js
// console.log(router); //moje
main.before(nav);

//element main będzie 'outletem' na nasze widoki
router.mount(main); //router.js ---> po prostu wywołujemy metodę .mount() na router z pliku router.js class Router
// console.log(router.mount); //moje
// router.navigate("/rooms");

router.init(); //router.js ---> po prostu wywołujemy metodę init() na router z pliku router.js class Router
//przy uruchomieniu strony pierwszy raz nawigujemy do ścieżki z paska adresu
// console.log(router.mount(main));

// console.log(router.init());

// var oldHref = window.location.href;
// console.log(oldHref);
// var newHref = window.location;
// console.log(newHref);
console.log(window.location.origin); //Początkowy adres strony

showHome();
showRooms();
showTreatments();
showBookings();

$(window).on("click", () => {
  if (
    window.location.href.match(/\/$/) &&
    window.location.href.length - 1 === window.location.origin.length
  ) {
    // console.log("działa");
    //(window.location.href.match(/\/{1}$/))
    $("section").empty();
    return showHome();
  } else if (window.location.href.match(/\/rooms$/)) {
    $("section").empty();
    return showRooms();
  } else if (window.location.href.match(/\/treatments$/)) {
    $("section").empty();
    // let newHref = window.location.href;
    // console.log(newHref);
    // if (newHref !== oldHref) {
    return showTreatments();
  } else if (window.location.href.match(/\/bookings$/)) {
    $("section").empty();
    return showBookings();
  } else {
    // $("section").empty();
    return $("section").empty();
  }
  // console.log($("section"));
});

console.log(document.cookie);

console.log(document);

// var myInit = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   mode: "cors",
//   cache: "default",
// };

// let myRequest = new Request(
//   "C:/Users/PB/Desktop/repo-git/projekty-2020/it-spa-master-clone/src/database/database-json.json",
//   myInit
// );
// $.getJSON("./database/database-json.json", (data) => {
//   console.log(data);
// });
// let data = require("../database.json");

// fetch(database)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((answer) => console.log(answer));
// const jsonInfo = $.getJSON(
//   "C/:UsersPBDesktop/repo-git/projekty-2020/it-spa-master-clone/database.json"
// );

console.log(database.rooms[0].name);

// console.log(JSON.parse(jsonInfo));

// cart.setItSpaCart("abc");
// cart.setItSpaCart("abc");
// cart.setItSpaCart("def");

// console.log(document.cookie);

//----------

// cart.add();

// cart.setItSpaCart();

//----------

// console.log(cart.add());
