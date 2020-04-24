import $ from "jquery";
// import { Router, routes } from "../router";
// import * as allFile from "../it-spa";

export const showHome = () => {
  if (
    window.location.href.match(/\/$/) &&
    window.location.href.length - 1 === window.location.origin.length
  ) {
    // const fragment = $(new DocumentFragment());
    // console.log("działa tu");
    const showAllHome = $('<div id="home-contener">Home text!!!</div>'); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("section").append(showAllHome);

    // return fragment;
  }
};
