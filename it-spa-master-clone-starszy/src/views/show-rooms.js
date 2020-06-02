import database from "../../database.json";
import $ from "jquery";
import * as allRoomsContent from "../cart/room-cart.js";
// import JSON from "../database.json";

export let actuallGuestsNumber = 0;

export const showRooms = () => {
  if (window.location.href.match(/\/rooms$/)) {
    // const fragment = $(new DocumentFragment());
    // console.log("działa tu");
    const showAllRooms = $('<div id="rooms-container"></div>'); //kod utworzy nowy element div z tekstem Hello World! i doda go do elementu body strony.

    $("#main-section").append(showAllRooms);

    const databaseStringify = JSON.stringify(database);

    const databaseParse = JSON.parse(databaseStringify);

    console.log(databaseParse);

    //----------

    // All guests

    // const roomsInformations = database.rooms.filter((room) => {
    //   console.log(room);
    //   showAllRooms.text(`działa!!! ${room.name}`);
    // });
    // console.log(databaseParse);
    // console.log(roomsInformations);

    // console.log(databaseParse.rooms.length);

    // const showMeRoom = roomsInformations.map((showAll) => {
    //   return showAll;
    // });

    // console.log(showMeRoom);

    for (let i = 0; database.rooms.length > i; i++) {
      const showOneRoom = $(
        `<div class="room room-hover-shadow room-id${database.rooms[i].id}"></div>`
      );

      showAllRooms.append(showOneRoom);

      const oneRoomInfo = $(`<div class="one-room-info"></div>`);

      showOneRoom.append(oneRoomInfo);

      oneRoomInfo.html(`<span class="room-key">Nazwa:</span> <span class="room-value">${database.rooms[i].name}</span><br>
      <span class="room-key">Ilość łóżek:</span> <span class="room-value">${database.rooms[i].beds}</span><br>
      <span class="room-key">Ilość miejsc:</span> <span class="room-value room-guests-value${database.rooms[i].id}">${database.rooms[i].guests}</span><br>
      <span class="room-key">Cena (za jedną osobę):</span> <span class="room-value">${database.rooms[i].price}</span>`);

      const addMinusRoom = $(
        `<div class="add-and-remove add-remove-room-id${database.rooms[i].id}"></div>`
      );

      showOneRoom.append(addMinusRoom);

      const buttonRoom = $(
        `<button class="all-buttons all-add-buttons-hover all-buttons-add-rooms button-add-room${database.rooms[i].id}">Dodaj</button><button class="all-buttons all-buttons-remove-rooms button-remove-room${database.rooms[i].id}">Usuń</button>`
      );

      addMinusRoom.append(buttonRoom);

      $(".all-buttons-remove-rooms").attr("disabled", true);

      $(".room-guests-value1").text(allRoomsContent.roomOneWithChanging.guests);

      $(".room-guests-value2").text(allRoomsContent.roomTwoWithChanging.guests);

      $(".room-guests-value3").text(
        allRoomsContent.roomThreeWithChanging.guests
      );

      $(".room-guests-value4").text(
        allRoomsContent.roomFourWithChanging.guests
      );
    }
  }
};
