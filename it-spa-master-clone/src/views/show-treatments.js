import $ from "jquery";
// import { treatments } from "../views/treatments";
// import { Router, routes } from "../router";
// import * as allFile from "../it-spa";

export const showTreatments = () => {
  if (window.location.href.match(/\/treatments$/)) {
    // const fragment = $(new DocumentFragment());
    const showAllTreatments = $(
      '<div id="treatments-contener">Treatments text!!!</div>'
    ); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("section").append(showAllTreatments);

    // return fragment;
  }
};

// console.log(window.location.href);

// console.log($("body").has("main"));

// console.log(document.body.querySelector("main"));
