import $ from "jquery";
// import { Router, routes } from "../router";
// import * as allFile from "../it-spa";

export const showBookings = () => {
  if (window.location.href.match(/\/bookings$/)) {
    // const fragment = $(new DocumentFragment());
    const showAllBookings = $(
      '<div id="bookings-contener">Bookings text!!!</div>'
    ); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("section").append(showAllBookings);

    // return fragment;
  }
};
