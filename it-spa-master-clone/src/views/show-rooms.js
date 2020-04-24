import database from "../../database.json";
import $ from "jquery";
// import JSON from "../database.json";

export const showRooms = () => {
  if (window.location.href.match(/\/rooms$/)) {
    // const fragment = $(new DocumentFragment());
    // console.log("działa tu");
    const showAllRooms = $('<div id="rooms-contener"></div>'); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("section").append(showAllRooms);

    showAllRooms.text(database.rooms[0].name);

    // return fragment;
  }
};

// JSON.stringify(database);

// console.log()

// console.log(database.rooms[0].name);
