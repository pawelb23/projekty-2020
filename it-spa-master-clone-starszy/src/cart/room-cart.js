import database from "../../database.json";
import $ from "jquery";
import { Cart } from "./cart.js";

const cart = new Cart(); //uruchamiamy klasę kosz

//-----------

export let roomOneWithChanging = JSON.parse(JSON.stringify(database.rooms[0]));

export let roomTwoWithChanging = JSON.parse(JSON.stringify(database.rooms[1]));

export let roomThreeWithChanging = JSON.parse(
  JSON.stringify(database.rooms[2])
);

export let roomFourWithChanging = JSON.parse(JSON.stringify(database.rooms[3]));

//-----------

// Texty informujące o dodaniu pokojów

const textInfoRoom1 = `Dodano: ${database.rooms[0].name}!!!`;

const textInfoRoom2 = `Dodano: ${database.rooms[1].name}!!!`;

const textInfoRoom3 = `Dodano: ${database.rooms[2].name}!!!`;

const textInfoRoom4 = `Dodano: ${database.rooms[3].name}!!!`;

//-----------

// Cookies Rooms Info

const cookiesRoomsInfo = JSON.parse(JSON.stringify(document.cookie));

console.log(cookiesRoomsInfo);

const cookiesGusetsInfo = JSON.parse(cookiesRoomsInfo.slice(12));

export const findCookieRoom1 = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 1 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      roomOneWithChanging.guests =
        database.rooms[0].guests - cookiesGusetsInfo[i].guests;
    } else {
      ("");
    }
  }
};

export const findCookieRoom2 = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 2 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      roomTwoWithChanging.guests =
        database.rooms[1].guests - cookiesGusetsInfo[i].guests;
    } else {
      ("");
    }
  }
};

export const findCookieRoom3 = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 3 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      roomThreeWithChanging.guests =
        database.rooms[2].guests - cookiesGusetsInfo[i].guests;
    } else {
      ("");
    }
  }
};

export const findCookieRoom4 = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 4 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      roomFourWithChanging.guests =
        database.rooms[3].guests - cookiesGusetsInfo[i].guests;
      console.log("działa");
    } else {
      ("");
    }
  }
};
//----------

// Add

export const roomId1Add = () => {
  $(".button-add-room1").click((e) => {
    e.stopPropagation();

    $("#rooms-container div.room").removeClass("room-hover-shadow");

    const divWall = $(`<div class="shadow-div"</div>`);

    $(".text-muted").after(divWall);

    $(".all-buttons").attr("disabled", "true");

    const personNumber1 = $(
      `<div class="not-empty"><div class="person-form form-id1"><input id="id1-for-label" class="person-input" value="1" type="number" min="1" max="${roomOneWithChanging.guests}"></input> <label class="label-warning" for="id1-for-label">Liczba osób</label> <span class="span-for-label-warning">(*Nie może ona przekroczyć<br>ilości wolnych miejsc)</span><button class="add-person-button button-add-id1">Zatwierdź</button><button class="remove-person-button button-remove-id1">Anuluj</button></div></div>`
    );

    if ($("div").hasClass("not-empty")) {
      ("");
    } else {
      $(".add-remove-room-id1").append(personNumber1);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId1();
      cancelInsideRoomAddId1();
    }
  });
};

export const roomId2Add = () => {
  $(".button-add-room2").click((e) => {
    e.stopPropagation();

    $("#rooms-container div.room").removeClass("room-hover-shadow");

    const divWall = $(`<div class="shadow-div"</div>`);

    $(".text-muted").after(divWall);

    $(".all-buttons").attr("disabled", "true");

    const personNumber2 = $(
      `<div class="not-empty"><div class="person-form form-id2"><input id="id2-for-label" class="person-input" value="1" type="number" min="1" max="${roomTwoWithChanging.guests}"></input> <label class="label-warning" for="id2-for-label">Liczba osób</label> <span class="span-for-label-warning">(UWAGA! Nie może<br>przekroczyć ilości wolnych miejsc)</span><button class="add-person-button button-add-id2">Zatwierdź</button><button class="remove-person-button button-remove-id2">Anuluj</button></div></div>`
    );

    if ($("div").hasClass("not-empty")) {
      ("");
    } else {
      $(".add-remove-room-id2").append(personNumber2);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId2();
      cancelInsideRoomAddId2();
    }
  });
};

export const roomId3Add = () => {
  $(".button-add-room3").click((e) => {
    e.stopPropagation();

    $("#rooms-container div.room").removeClass("room-hover-shadow");

    const divWall = $(`<div class="shadow-div"</div>`);

    $(".text-muted").after(divWall);

    $(".all-buttons").attr("disabled", "true");

    const personNumber3 = $(
      `<div class="not-empty"><div class="person-form form-id3"><input id="id3-for-label" class="person-input" value="1" type="number" min="1" max="${roomThreeWithChanging.guests}"></input> <label class="label-warning" for="id3-for-label">Liczba osób</label> <span class="span-for-label-warning">(*Nie może ona przekroczyć<br>ilości wolnych miejsc)</span><button class="add-person-button button-add-id3">Zatwierdź</button><button class="remove-person-button button-remove-id3">Anuluj</button></div></div>`
    );

    if ($("div").hasClass("not-empty")) {
      ("");
    } else {
      $(".add-remove-room-id3").append(personNumber3);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId3();
      cancelInsideRoomAddId3();
    }
  });
};

export const roomId4Add = () => {
  $(".button-add-room4").click((e) => {
    e.stopPropagation();

    $("#rooms-container div.room").removeClass("room-hover-shadow");

    const divWall = $(`<div class="shadow-div"</div>`);

    $(".text-muted").after(divWall);

    $(".all-buttons").attr("disabled", "true");

    const personNumber4 = $(
      `<div class="not-empty"><div class="person-form form-id4"><input id="id4-for-label" class="person-input" value="1" type="number" min="1" max="${roomFourWithChanging.guests}"></input> <label class="label-warning" for="id4-for-label">Liczba osób</label> <span class="span-for-label-warning">(*Nie może ona przekroczyć<br>ilości wolnych miejsc)</span><button class="add-person-button button-add-id4">Zatwierdź</button><button class="remove-person-button button-remove-id4">Anuluj</button></div></div>`
    );

    if ($("div").hasClass("not-empty")) {
      ("");
    } else {
      $(".add-remove-room-id4").append(personNumber4);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId4();
      cancelInsideRoomAddId4();
    }
  });
};

//----------

//Accept add inside add

const addInsideRoomAddId1 = () => {
  $(".button-add-id1").click((e) => {
    e.stopPropagation();

    $(".button-remove-room1").addClass("all-remove-buttons-hover");

    $(".button-remove-room1").removeAttr("disabled", true);

    $("#rooms-container div.room").addClass("room-hover-shadow");

    $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

    // if ($("#info-section").hasClass("info-section-information")) {
    //   ("");
    // } else
    if ($(".div-for-info-rooms div").hasClass("room1-cart-info")) {
      const roomOneWithGuestsInfoRemove = JSON.parse(
        JSON.stringify(database.rooms[0])
      );

      let guestsNumber1Remove =
        database.rooms[0].guests - roomOneWithChanging.guests;

      roomOneWithGuestsInfoRemove.guests = guestsNumber1Remove;
      cart.remove(roomOneWithGuestsInfoRemove);
    } else {
      const divAllInfo = $('<div class="room1-cart-info"></div>');

      $(".div-for-info-rooms").append(divAllInfo);
      if ($("#info-section").hasClass("main-info-in-section")) {
        ("");
      } else {
        $("#info-section").addClass("main-info-in-section");

        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );

        $(".div-for-all-info").addClass("hidden-class-in-div");

        $(".div-for-all-info").before(infoHeading);
      }
    }

    $(".room1-cart-info").text(textInfoRoom1);

    roomOneWithChanging.guests =
      roomOneWithChanging.guests - $("#id1-for-label").val();
    $(".room-guests-value1").text(roomOneWithChanging.guests);

    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else {
        ("");
      }
    }

    var roomOneWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[0]));

    let guestsNumber1 = database.rooms[0].guests - roomOneWithChanging.guests;

    roomOneWithGuestsInfo.guests = guestsNumber1;

    cart.add(roomOneWithGuestsInfo);

    console.log(document.cookie);

    $(".not-empty").remove();
    $(".shadow-div").remove();
  });
};

const addInsideRoomAddId2 = () => {
  $(".button-add-id2").click((e) => {
    e.stopPropagation();

    $(".button-remove-room2").addClass("all-remove-buttons-hover");

    $(".button-remove-room2").removeAttr("disabled", true);

    $("#rooms-container div.room").addClass("room-hover-shadow");

    $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

    // if ($("#info-section").hasClass("info-section-information")) {
    //   ("");
    // } else
    if ($(".div-for-info-rooms div").hasClass("room2-cart-info")) {
      const roomTwoWithGuestsInfoRemove = JSON.parse(
        JSON.stringify(database.rooms[1])
      );

      let guestsNumber2Remove =
        database.rooms[1].guests - roomTwoWithChanging.guests;

      roomTwoWithGuestsInfoRemove.guests = guestsNumber2Remove;
      cart.remove(roomTwoWithGuestsInfoRemove);
    } else {
      const divAllInfo = $('<div class="room2-cart-info"></div>');

      $(".div-for-info-rooms").append(divAllInfo);
      if ($("#info-section").hasClass("main-info-in-section")) {
        ("");
      } else {
        $("#info-section").addClass("main-info-in-section");

        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );

        $(".div-for-all-info").addClass("hidden-class-in-div");

        $(".div-for-all-info").before(infoHeading);
      }
    }

    $(".room2-cart-info").text(textInfoRoom2);

    roomTwoWithChanging.guests =
      roomTwoWithChanging.guests - $("#id2-for-label").val();
    $(".room-guests-value2").text(roomTwoWithChanging.guests);

    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else {
        ("");
      }
    }

    let roomTwoWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[1]));

    let guestsNumber2 = database.rooms[1].guests - roomTwoWithChanging.guests;

    roomTwoWithGuestsInfo.guests = guestsNumber2;

    cart.add(roomTwoWithGuestsInfo);

    console.log(document.cookie);

    $(".not-empty").remove();
    $(".shadow-div").remove();
  });
};

const addInsideRoomAddId3 = () => {
  $(".button-add-id3").click((e) => {
    e.stopPropagation();

    $(".button-remove-room3").addClass("all-remove-buttons-hover");

    $(".button-remove-room3").removeAttr("disabled", true);

    $("#rooms-container div.room").addClass("room-hover-shadow");

    $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

    // if ($("#info-section").hasClass("info-section-information")) {
    //   ("");
    // } else
    if ($("#info-section").hasClass("info-section-information")) {
      ("");
    } else if ($(".div-for-info-rooms div").hasClass("room3-cart-info")) {
      const roomThreeWithGuestsInfoRemove = JSON.parse(
        JSON.stringify(database.rooms[2])
      );

      let guestsNumber3Remove =
        database.rooms[2].guests - roomThreeWithChanging.guests;

      roomThreeWithGuestsInfoRemove.guests = guestsNumber3Remove;
      cart.remove(roomThreeWithGuestsInfoRemove);
    } else {
      const divAllInfo = $('<div class="room3-cart-info"></div>');

      $(".div-for-info-rooms").append(divAllInfo);
      if ($("#info-section").hasClass("main-info-in-section")) {
        ("");
      } else {
        $("#info-section").addClass("main-info-in-section");

        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );

        $(".div-for-all-info").addClass("hidden-class-in-div");

        $(".div-for-all-info").before(infoHeading);
      }
    }

    $(".room3-cart-info").text(textInfoRoom3);

    roomThreeWithChanging.guests =
      roomThreeWithChanging.guests - $("#id3-for-label").val();
    $(".room-guests-value3").text(roomThreeWithChanging.guests);

    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else {
        ("");
      }
    }

    var roomThreeWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[2]));

    let guestsNumber3 = database.rooms[2].guests - roomThreeWithChanging.guests;

    roomThreeWithGuestsInfo.guests = guestsNumber3;

    cart.add(roomThreeWithGuestsInfo);

    console.log(document.cookie);

    $(".not-empty").remove();
    $(".shadow-div").remove();
  });
};

const addInsideRoomAddId4 = () => {
  $(".button-add-id4").click((e) => {
    e.stopPropagation();

    $(".button-remove-room4").addClass("all-remove-buttons-hover");

    $(".button-remove-room4").removeAttr("disabled", true);

    $("#rooms-container div.room").addClass("room-hover-shadow");

    $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

    // if ($("#info-section").hasClass("info-section-information")) {
    //   ("");
    // } else
    if ($("#info-section").hasClass("info-section-information")) {
      ("");
    } else if ($(".div-for-info-rooms div").hasClass("room4-cart-info")) {
      const roomFourWithGuestsInfoRemove = JSON.parse(
        JSON.stringify(database.rooms[3])
      );

      let guestsNumber4Remove =
        database.rooms[3].guests - roomFourWithChanging.guests;

      roomFourWithGuestsInfoRemove.guests = guestsNumber4Remove;
      cart.remove(roomFourWithGuestsInfoRemove);
    } else {
      const divAllInfo = $('<div class="room4-cart-info"></div>');

      $(".div-for-info-rooms").append(divAllInfo);
      if ($("#info-section").hasClass("main-info-in-section")) {
        ("");
      } else {
        $("#info-section").addClass("main-info-in-section");

        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );

        $(".div-for-all-info").addClass("hidden-class-in-div");

        $(".div-for-all-info").before(infoHeading);
      }
    }

    $(".room4-cart-info").text(textInfoRoom4);

    roomFourWithChanging.guests =
      roomFourWithChanging.guests - $("#id4-for-label").val();
    $(".room-guests-value4").text(roomFourWithChanging.guests);

    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else {
        ("");
      }
    }

    var roomFourWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[3]));

    let guestsNumber4 = database.rooms[3].guests - roomFourWithChanging.guests;

    roomFourWithGuestsInfo.guests = guestsNumber4;

    cart.add(roomFourWithGuestsInfo);

    console.log(document.cookie);

    $(".not-empty").remove();
    $(".shadow-div").remove();
  });
};

//----------

//Cancel inside add

const cancelInsideRoomAddId1 = () => {
  $(".button-remove-id1").click((e) => {
    e.stopPropagation();
    $("#rooms-container div.room").addClass("room-hover-shadow");
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room1").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else {
        ("");
      }
    }
  });
};

const cancelInsideRoomAddId2 = () => {
  $(".button-remove-id2").click((e) => {
    e.stopPropagation();
    // console.log($(".div-for-info2").html().length);
    $("#rooms-container div.room").addClass("room-hover-shadow");
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room2").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
        // } else if (
        //   $(`.room-guests-value${i + 1}`).text() === 0 &&
        //   $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
        // ) {
        //   console.log("zero");
      } else {
        ("");
      }
    }
  });
};

const cancelInsideRoomAddId3 = () => {
  $(".button-remove-id3").click((e) => {
    e.stopPropagation();
    // console.log($(".div-for-info3").html().length);
    $("#rooms-container div.room").addClass("room-hover-shadow");
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room3").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
        // } else if (
        //   $(`.room-guests-value${i + 1}`).text() === 0 &&
        //   $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
        // ) {
        //   console.log("zero");
      } else {
        ("");
      }
    }
  });
};

const cancelInsideRoomAddId4 = () => {
  $(".button-remove-id4").click((e) => {
    e.stopPropagation();
    $("#rooms-container div.room").addClass("room-hover-shadow");
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room4").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        ("");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() == 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).attr("disabled", true);
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
      } else if (
        $(`.room-guests-value${i + 1}`).text() !== 0 &&
        $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
      ) {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
        $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
        $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
        // } else if (
        //   $(`.room-guests-value${i + 1}`).text() === 0 &&
        //   $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
        // ) {
        //   console.log("zero");
      } else {
        ("");
      }
    }
  });
};

//----------

// Remove

export const roomId1Remove = () => {
  $(".button-remove-room1").click((e) => {
    e.stopPropagation();

    $(".room1-cart-info").remove();

    roomOneWithChanging = JSON.parse(JSON.stringify(database.rooms[0]));

    $(".room-guests-value1").text(roomOneWithChanging.guests);

    $(".button-remove-room1").attr("disabled", true);

    $(`.button-remove-room1`).removeClass("all-remove-buttons-hover");

    if (roomOneWithChanging.guests !== 0) {
      $(`.button-add-room1`).addClass("all-add-buttons-hover");
      $(`.button-add-room1`).removeAttr("disabled", true);

      if ($(".div-for-info-rooms").html().length == 0) {
        $(".div-for-info-rooms").removeClass("hidden-border-rooms-in-info");
        if (
          $(".div-for-info-rooms").html().length == 0 &&
          $(".div-for-info-treatments").html().length == 0 &&
          $(".div-for-info-bookings").html().length == 0
        ) {
          $("#info-section").removeClass("main-info-in-section");
          $(".info-main-heading").remove();
          $(".div-for-all-info").removeClass("hidden-class-in-div");
        }
      }
    }

    const roomOneWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[0]));

    const guestsNumber1 = database.rooms[0].guests - roomOneWithChanging.guests;

    roomOneWithGuestsInfo.guests = guestsNumber1;

    cart.remove(roomOneWithGuestsInfo);
  });
};

export const roomId2Remove = () => {
  $(".button-remove-room2").click((e) => {
    e.stopPropagation();

    $(".room2-cart-info").remove();

    roomTwoWithChanging = JSON.parse(JSON.stringify(database.rooms[1]));

    $(".room-guests-value2").text(roomTwoWithChanging.guests);

    $(".button-remove-room2").attr("disabled", true);

    $(`.button-remove-room2`).removeClass("all-remove-buttons-hover");

    if (roomTwoWithChanging.guests !== 0) {
      $(`.button-add-room2`).addClass("all-add-buttons-hover");
      $(`.button-add-room2`).removeAttr("disabled", true);

      if ($(".div-for-info-rooms").html().length == 0) {
        $(".div-for-info-rooms").removeClass("hidden-border-rooms-in-info");
        if (
          $(".div-for-info-rooms").html().length == 0 &&
          $(".div-for-info-treatments").html().length == 0 &&
          $(".div-for-info-bookings").html().length == 0
        ) {
          $("#info-section").removeClass("main-info-in-section");
          $(".info-main-heading").remove();
          $(".div-for-all-info").removeClass("hidden-class-in-div");
        }
      }
    }

    const roomTwoWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[1]));

    const guestsNumber2 = database.rooms[1].guests - roomTwoWithChanging.guests;

    roomTwoWithGuestsInfo.guests = guestsNumber2;

    cart.remove(roomTwoWithGuestsInfo);
  });
};

export const roomId3Remove = () => {
  $(".button-remove-room3").click((e) => {
    e.stopPropagation();

    $(".room3-cart-info").remove();

    roomThreeWithChanging = JSON.parse(JSON.stringify(database.rooms[2]));

    $(".room-guests-value3").text(roomThreeWithChanging.guests);

    $(".button-remove-room3").attr("disabled", true);

    $(`.button-remove-room3`).removeClass("all-remove-buttons-hover");

    if (roomThreeWithChanging.guests !== 0) {
      $(`.button-add-room3`).addClass("all-add-buttons-hover");
      $(`.button-add-room3`).removeAttr("disabled", true);

      if ($(".div-for-info-rooms").html().length == 0) {
        $(".div-for-info-rooms").removeClass("hidden-border-rooms-in-info");
        if (
          $(".div-for-info-rooms").html().length == 0 &&
          $(".div-for-info-treatments").html().length == 0 &&
          $(".div-for-info-bookings").html().length == 0
        ) {
          $("#info-section").removeClass("main-info-in-section");
          $(".info-main-heading").remove();
          $(".div-for-all-info").removeClass("hidden-class-in-div");
        }
      }
    }

    const roomThreeWithGuestsInfo = JSON.parse(
      JSON.stringify(database.rooms[2])
    );

    const guestsNumber3 = database.rooms[2].guests - roomOneWithChanging.guests;

    roomThreeWithGuestsInfo.guests = guestsNumber3;

    cart.remove(roomThreeWithGuestsInfo);
  });
};

export const roomId4Remove = () => {
  $(".button-remove-room4").click((e) => {
    e.stopPropagation();

    $(".room4-cart-info").remove();

    roomFourWithChanging = JSON.parse(JSON.stringify(database.rooms[3]));

    $(".room-guests-value4").text(roomFourWithChanging.guests);

    $(".button-remove-room4").attr("disabled", true);

    $(`.button-remove-room4`).removeClass("all-remove-buttons-hover");

    if (roomFourWithChanging.guests !== 0) {
      $(`.button-add-room4`).addClass("all-add-buttons-hover");
      $(`.button-add-room4`).removeAttr("disabled", true);

      if ($(".div-for-info-rooms").html().length == 0) {
        $(".div-for-info-rooms").removeClass("hidden-border-rooms-in-info");
        if (
          $(".div-for-info-rooms").html().length == 0 &&
          $(".div-for-info-treatments").html().length == 0 &&
          $(".div-for-info-bookings").html().length == 0
        ) {
          $("#info-section").removeClass("main-info-in-section");
          $(".info-main-heading").remove();
          $(".div-for-all-info").removeClass("hidden-class-in-div");
        }
      }
    }

    const roomFourWithGuestsInfo = JSON.parse(
      JSON.stringify(database.rooms[3])
    );

    const guestsNumber4 =
      database.rooms[3].guests - roomFourWithChanging.guests;

    roomFourWithGuestsInfo.guests = guestsNumber4;

    cart.remove(roomFourWithGuestsInfo);
  });
};
//----------

export const allZeroRoomsDisabled = () => {
  for (let i = 0; database.rooms.length > i; i++) {
    if (database.rooms[i].guests === 0) {
      $(`.button-add-room${i + 1}`).attr("disabled", "true");
      $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
    }
  }
};

//------------

export const allRoomsDisablesAndHovers = () => {
  for (let i = 0; database.rooms.length > i; i++) {
    if (
      $(`.room-guests-value${i + 1}`).text() == 0 &&
      $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
    ) {
      ("");
    } else if (
      $(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests
    ) {
      $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
    } else if (
      $(`.room-guests-value${i + 1}`).text() == 0 &&
      $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
    ) {
      $(`.button-add-room${i + 1}`).attr("disabled", true);
      $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
      $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
    } else if (
      $(`.room-guests-value${i + 1}`).text() !== 0 &&
      $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
    ) {
      $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      $(`.button-add-room${i + 1}`).addClass("all-add-buttons-hover");
      $(`.button-remove-room${i + 1}`).removeAttr("disabled", true);
      $(`.button-remove-room${i + 1}`).addClass("all-remove-buttons-hover");
    } else {
      ("");
    }
  }
};

//----------

// Reload basket graphics

export const room1ReloadInfo = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 1 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      const divAllInfo = $(`<div class="room1-cart-info"></div>`);

      $(".div-for-info-rooms").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

      $(".room1-cart-info").text(textInfoRoom1);

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    }
  }
};

export const room2ReloadInfo = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 2 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      const divAllInfo = $(`<div class="room2-cart-info"></div>`);

      $(".div-for-info-rooms").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

      $(".room2-cart-info").text(textInfoRoom2);

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    }
  }
};

export const room3ReloadInfo = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 3 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      const divAllInfo = $(`<div class="room3-cart-info"></div>`);

      $(".div-for-info-rooms").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

      $(".room3-cart-info").text(textInfoRoom3);

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    }
  }
};

export const room4ReloadInfo = () => {
  for (let i = 0; cookiesGusetsInfo.length > i; i++) {
    if (
      cookiesGusetsInfo[i].id == 4 &&
      cookiesGusetsInfo[i].hasOwnProperty("guests")
    ) {
      const divAllInfo = $(`<div class="room4-cart-info"></div>`);

      $(".div-for-info-rooms").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-rooms").addClass("hidden-border-rooms-in-info");

      $(".room4-cart-info").text(textInfoRoom4);

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    }
  }
};

// cookiesGusetsInfo[i].id == 1 && cookiesGusetsInfo[i].hasOwnProperty("guests");

// export const allReloadInfo = () => {
//   for (let i = 0; database.rooms.length > i; i++) {
//     if ($(`.room-guests-value${i + 1}`).text() == database.rooms[i].guests) {
//       console.log("wynik");
//       ("");
//     } else if (
//       $(`.room-guests-value${i + 1}`).text() !== database.rooms[i].guests
//     ) {
//       console.log($(`.room-guests-value${i + 1}`).text());
//       const divAllInfo = $(`<div class="room${i + 1}-cart-info"></div>`);
//       $(".div-for-info-rooms").append(divAllInfo);

//       $("#info-section").addClass("main-info-in-section");

//       $(".div-for-all-info").addClass("hidden-class-in-div");

//       $(".room1-cart-info").text("Dodano pokój unarny!!!");
//       $(".room2-cart-info").text("Dodano pokój binarny!!!");
//       $(".room3-cart-info").text("Dodano pokój trójkowy!!!");
//       $(".room4-cart-info").text("Dodano pokój czwórkowy!!!");

//       if ($("#info-section h6").hasClass("info-main-heading")) {
//         ("");
//       } else {
//         const infoHeading = $(
//           '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
//         );
//         $(".div-for-all-info").before(infoHeading);
//         console.log("działaaaaaaaaaaaaaaaaaaaaaa");
//       }
//     }
//   }
// };
// if (
//   0
//   // cookiesGusetsInfo[i].id == i + 1 &&
//   // cookiesGusetsInfo[i].hasOwnProperty("guests")
// ) {
//   console.log(cookiesGusetsInfo[i].id);
//   $("room1-cart-info").text("Dodano pokój unarny!!!");
//   $("room2-cart-info").text("Dodano pokój binarny!!!");
//   $("room3-cart-info").text("Dodano pokój trójkowy!!!");
//   $("room4-cart-info").text("Dodano pokój czwórkowy!!!");
// }

//    if (
//     $("#info-section").hasClass("main-info-in-section") &&
//     $("#info-section h6").hasClass("info-main-heading") &&
//     $("#info-section div").hasClass("hidden-class-in-div")
//   ) {
//     if ($("div-for-info-rooms div").hasClass("room1-cart-info")) {
//       ("");
//     } else {
//       const divAllInfo = $('<div class="room1-cart-info"></div>');
//       $(".div-for-info-rooms").append(divAllInfo);
//       $(".room4-cart-info").text("Dodano pokój czwórkowy!!!");
//     }
//   } else {
//     const divAllInfo = $('<div class="room1-cart-info"></div>');
//     $(".div-for-info-rooms").append(divAllInfo);

//     $("#info-section").addClass("main-info-in-section");

//     const infoHeading = $(
//       '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
//     );

//     $(".div-for-all-info").addClass("hidden-class-in-div");

//     $(".div-for-all-info").before(infoHeading);

//     $(".room4-cart-info").text("Dodano pokój czwórkowy!!!");
//   }
// }
// $(".room4-cart-info").text("Dodano pokój czwórkowy!!!");

// else if (0) {
//   let guestsNumber2Remove =
//     database.rooms[1].guests - roomTwoWithChanging.guests;

//   roomTwoWithGuestsInfoRemove.guests = guestsNumber2Remove;
//   cart.remove(roomTwoWithGuestsInfoRemove);
// } else {
//   const divAllInfo = $('<div class="room1-cart-info"></div>');
//   $(".div-for-info-rooms").append(divAllInfo);

//     $("#info-section").addClass("main-info-in-section");

//     const infoHeading = $(
//       '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
//     );

//     $(".div-for-all-info").addClass("hidden-class-in-div");

//     $(".div-for-all-info").before(infoHeading);
//   }
