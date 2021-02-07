import database from "../../database.json";
import $ from "jquery";
// import img from "../../assets/pictures/flower-spa.jpg";

// import { Router, routes } from "../router";
// import * as allFile from "../it-spa";

export const showHome = () => {
  if (
    window.location.href.match(/\/$/) &&
    window.location.href.length - 1 === window.location.origin.length
  ) {
    // const fragment = $(new DocumentFragment());
    // console.log("działa tu");
    const showAllHome = $(
      '<div id="home-container"><div class="picture"><h1 class="span-home">Witamy!!!</h1></div></div>'
    ); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("#main-section").append(showAllHome);

    const registAndLogin =
      '<div class="registration-and-login"><button id="div-registration" class="hover-registration">Rejestracja</button><button id="div-login" class="hover-login">Logowanie</button></div>';

    $("main").append(registAndLogin);
    // const databaseStringify = JSON.stringify(database);

    // const databaseParse = JSON.parse(databaseStringify);

    // fetch("http://localhost:1234").then((response) => {
    //   console.log(response);
    //   return databaseParse;
    // });
    // const showMeHomeInfo = $(
    //   `<div class="home-info">${databaseParse.rooms}
    //   )}</div>`
    // );

    // showAllHome.append(showMeHomeInfo);

    // return fragment;
  }
};

// fetch("http://localhost:1234").then((response) => {
//   console.log(response.status);
//   console.log($("section div"));
// });

//-------------
//-------------

// registration

//login
