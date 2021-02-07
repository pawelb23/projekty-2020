"use strict";

import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import $ from "jquery";
import { Router, routes } from "./router";
import { nav } from "./navigation/nav";
import * as allRoomsContent from "./cart/room-cart.js";
import * as allTreatmentsContent from "./cart/treatments-cart.js";

import {
  showSummary,
  showBookings,
  arrivalClick,
  cancelArrivalClick,
  departureClick,
  cancelDepartureClick,
  currentArrivalDepartureDateInfo,
  summaryButton,
  showRooms,
  actuallGuestsInfo,
  showHome,
  showTreatments,
  showRegistrationForm,
  findCookieLogin,
  registrationLoginHoversOff,
  loginRemove,
  showLoginForm,
} from "./views";

console.log("Welcome! ---> to my IT SPA Aplication");

//--------------

// var finished = () => {
//   console.log("wysłane");
// };

// var fs = require("file-system");

// fs.appendFile("../database.json", infoPush, finished());

// var words = fs.readFile("../database.json");

// fs.writeFile("../database.json", infoPush, finished);

//--------------

const main = $("main");

const router = new Router(routes); //router.js

main.before(nav);

//element main będzie 'outletem' na nasze widoki
router.mount(main); //router.js ---> po prostu wywołujemy metodę .mount() na router z pliku router.js class Router

router.init(); //router.js ---> po prostu wywołujemy metodę init() na router z pliku router.js class Router
//przy uruchomieniu strony pierwszy raz nawigujemy do ścieżki z paska adresu

//----------------

// Podstrony

showHome(); //Podstrona
showRooms();
showTreatments(); //Podstrona (musi być przed findCookieTreatment)
showBookings(); //Podstrona

//----------------

//Home

showRegistrationForm();
showLoginForm();

findCookieLogin();
loginRemove();

//-----------

// Rooms

// Przy przaładowaniu strony wczytujemy wartości Rooms do kosza

allRoomsContent.findCookieRoom1();
allRoomsContent.findCookieRoom2();
allRoomsContent.findCookieRoom3();
allRoomsContent.findCookieRoom4();

actuallGuestsInfo();

//---dodawanie i odejmowanie osób (Rooms)

allRoomsContent.roomId1Add();
allRoomsContent.roomId2Add();
allRoomsContent.roomId3Add();
allRoomsContent.roomId4Add();

allRoomsContent.roomId1Remove();
allRoomsContent.roomId2Remove();
allRoomsContent.roomId3Remove();
allRoomsContent.roomId4Remove();

//-----------

allRoomsContent.room1ReloadInfo(); //info kosz grafika
allRoomsContent.room2ReloadInfo(); //info kosz grafika
allRoomsContent.room3ReloadInfo(); //info kosz grafika
allRoomsContent.room4ReloadInfo(); //info kosz grafika

allRoomsContent.allZeroRoomsDisabled(); //wyłączenia przy zerowej liczbie osób w database

//------------

allRoomsContent.allRoomsDisablesAndHovers(); //wszelkie hovery, wyłączenia przy wczytaniu strony

//------------

//Treatments

//------------
// Przy przaładowaniu strony wczytujemy wartości Treatments do kosza

allTreatmentsContent.findCookieTreatment1();
allTreatmentsContent.findCookieTreatment2();
allTreatmentsContent.findCookieTreatment3();
allTreatmentsContent.findCookieTreatment4();
allTreatmentsContent.findCookieTreatment5();
allTreatmentsContent.findCookieTreatment6();
allTreatmentsContent.findCookieTreatment7();

//-------------

//---dodawanie i odejmowanie zabiegów (Treatments)

allTreatmentsContent.addTreatment1();
allTreatmentsContent.addTreatment2();
allTreatmentsContent.addTreatment3();
allTreatmentsContent.addTreatment4();
allTreatmentsContent.addTreatment5();
allTreatmentsContent.addTreatment6();
allTreatmentsContent.addTreatment7();

allTreatmentsContent.removeTreatment1();
allTreatmentsContent.removeTreatment2();
allTreatmentsContent.removeTreatment3();
allTreatmentsContent.removeTreatment4();
allTreatmentsContent.removeTreatment5();
allTreatmentsContent.removeTreatment6();
allTreatmentsContent.removeTreatment7();

//-------------

//Bookings

arrivalClick();
cancelArrivalClick();
departureClick();
cancelDepartureClick();
showSummary();

//-------------

// Zdarzenia dla podstron wszystkich podstron

$(".text-light").on({
  click: () => {
    if (
      window.location.href.match(/\/$/) &&
      window.location.href.length - 1 === window.location.origin.length
    ) {
      $("#main-section").empty();
      showHome();

      showRegistrationForm();
      showLoginForm();
      registrationLoginHoversOff();
    } else if (window.location.href.match(/\/rooms$/)) {
      $("#main-section").empty();

      showRooms();

      allRoomsContent.findCookieRoom1();
      allRoomsContent.findCookieRoom2();
      allRoomsContent.findCookieRoom3();
      allRoomsContent.findCookieRoom4();

      actuallGuestsInfo();

      allRoomsContent.roomId1Add();
      allRoomsContent.roomId2Add();
      allRoomsContent.roomId3Add();
      allRoomsContent.roomId4Add();

      allRoomsContent.roomId1Remove();
      allRoomsContent.roomId2Remove();
      allRoomsContent.roomId3Remove();
      allRoomsContent.roomId4Remove();

      allRoomsContent.allZeroRoomsDisabled(); //wyłączenia przy zerowej liczbie osób w database (w Rooms)

      allRoomsContent.allRoomsDisablesAndHovers(); //wszelkie hovery, wyłączenia na przy wczytaniu strony (w Rooms)
    } else if (window.location.href.match(/\/treatments$/)) {
      $("#main-section").empty();
      showTreatments();

      allTreatmentsContent.addTreatment1();
      allTreatmentsContent.addTreatment2();
      allTreatmentsContent.addTreatment3();
      allTreatmentsContent.addTreatment4();
      allTreatmentsContent.addTreatment5();
      allTreatmentsContent.addTreatment6();
      allTreatmentsContent.addTreatment7();

      allTreatmentsContent.removeTreatment1();
      allTreatmentsContent.removeTreatment2();
      allTreatmentsContent.removeTreatment3();
      allTreatmentsContent.removeTreatment4();
      allTreatmentsContent.removeTreatment5();
      allTreatmentsContent.removeTreatment6();
      allTreatmentsContent.removeTreatment7();

      allTreatmentsContent.allstateTreatmentsInfo(); //ifnormacje przy zmianie zakładki co dodano co nie (do hoverów i aktywnych, nieaktywnych przycisków)
    } else if (window.location.href.match(/\/bookings$/)) {
      $("#main-section").empty();

      showBookings();

      arrivalClick();
      cancelArrivalClick();
      departureClick();
      cancelDepartureClick();
      currentArrivalDepartureDateInfo();
      summaryButton();
      showSummary();
    } else {
      $("#main-section").empty();
    }
  },
});

//------------

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

// fetch("local").then((response) => {
//   console.log("działa");
//   return response.json();
// });
//   .then((answer) => console.log(answer));
// const jsonInfo = $.getJSON(
//   "C/:UsersPBDesktop/repo-git/projekty-2020/it-spa-master-clone/database.json"
// );
