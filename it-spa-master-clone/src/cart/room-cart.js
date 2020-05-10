import database from "../../database.json";
import $ from "jquery";
import { Cart } from "./cart.js";
import { showBookings, showRooms, showHome, showTreatments } from "../views";

export const roomOneWithChanging = JSON.parse(
  JSON.stringify(database.rooms[0])
);

roomOneWithChanging.beds = 5;

// const cart = new Cart(); //uruchamiamy klasę kosz

//-----------

// Add

export const roomId1Add = () => {
  $(".button-add-room1").click((e) => {
    e.stopPropagation();
    // cart.add(database.rooms[0]);
    $("#rooms-container div").removeClass("room-hover-shadow");
    const divWall = $(`<div class="shadow-div"</div>`);
    $(".text-muted").after(divWall);
    $(".all-buttons").attr("disabled", "true");
    const personNumber1 = $(
      `<div class="not-empty"><div class="person-form form-id1"><input id="id1-for-label" class="person-input" value="1" type="number" min="1" max="${database.rooms[0].guests}"></input> <label class="label-warning" for="id1-for-label">Liczba osób</label> <span class="span-for-label-warning">(*Nie może ona przekroczyć<br>ilości wolnych miejsc)</span><button class="add-person-button button-add-id1">Zatwierdź</button><button class="remove-person-button button-remove-id1">Anuluj</button></div></div>`
    );
    if ($("div").hasClass("not-empty")) {
      return "";
    } else {
      $(".add-remove-room-id1").append(personNumber1);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId1();
      removeInsideRoomAddId1();
    }
  });
};

export const roomId2Add = () => {
  $(".button-add-room2").click((e) => {
    e.stopPropagation();
    $("#rooms-container div").removeClass("room-hover-shadow");
    const divWall = $(`<div class="shadow-div"</div>`);
    $(".text-muted").after(divWall);
    $(".all-buttons").attr("disabled", "true");
    const personNumber2 = $(
      `<div class="not-empty"><div class="person-form form-id2"><input id="id2-for-label" class="person-input" value="1" type="number" min="1" max="${database.rooms[1].guests}"></input> <label class="label-warning" for="id2-for-label">Liczba osób</label> <span class="span-for-label-warning">(UWAGA! Nie może<br>przekroczyć ilości wolnych miejsc)</span><button class="add-person-button button-add-id2">Zatwierdź</button><button class="remove-person-button button-remove-id2">Anuluj</button></div></div>`
    );
    if ($("div").hasClass("not-empty")) {
      return "";
    } else {
      $(".add-remove-room-id2").append(personNumber2);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId2();
      removeInsideRoomAddId2();
    }
  });
};

export const roomId3Add = () => {
  $(".button-add-room3").click((e) => {
    e.stopPropagation();
    $("#rooms-container div").removeClass("room-hover-shadow");
    const divWall = $(`<div class="shadow-div"</div>`);
    $(".text-muted").after(divWall);
    $(".all-buttons").attr("disabled", "true");
    const personNumber3 = $(
      `<div class="not-empty"><div class="person-form form-id3"><input id="id3-for-label" class="person-input" value="1" type="number" min="1" max="${database.rooms[2].guests}"></input> <label class="label-warning" for="id3-for-label">Liczba osób</label> <span class="span-for-label-warning">(*Nie może ona przekroczyć<br>ilości wolnych miejsc)</span><button class="add-person-button button-add-id3">Zatwierdź</button><button class="remove-person-button button-remove-id3">Anuluj</button></div></div>`
    );
    if ($("div").hasClass("not-empty")) {
      return "";
    } else {
      $(".add-remove-room-id3").append(personNumber3);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId3();
      removeInsideRoomAddId3();
    }
  });
};

export const roomId4Add = () => {
  $(".button-add-room4").click((e) => {
    e.stopPropagation();
    $("#rooms-container div").removeClass("room-hover-shadow");
    const divWall = $(`<div class="shadow-div"</div>`);
    $(".text-muted").after(divWall);
    $(".all-buttons").attr("disabled", "true");
    const personNumber4 = $(
      `<div class="not-empty"><div class="person-form form-id4"><input id="id4-for-label" class="person-input" value="1" type="number" min="1" max="${database.rooms[3].guests}"></input> <label class="label-warning" for="id4-for-label">Liczba osób</label> <span class="span-for-label-warning">(*Nie może ona przekroczyć<br>ilości wolnych miejsc)</span><button class="add-person-button button-add-id4">Zatwierdź</button><button class="remove-person-button button-remove-id4">Anuluj</button></div></div>`
    );
    if ($("div").hasClass("not-empty")) {
      return "";
    } else {
      $(".add-remove-room-id4").append(personNumber4);
      $(".person-form").addClass("form-shadow");
      addInsideRoomAddId4();
      removeInsideRoomAddId4();
    }
  });
};

//----------

//Add inside Add

const addInsideRoomAddId1 = () => {
  $(".button-add-id1").click((e) => {
    e.stopPropagation();
    $(".button-remove-room1").addClass("all-remove-buttons-hover");
    $(".button-remove-room1").removeAttr("disabled", true);
    $(".not-empty").remove();
    $(".shadow-div").remove();
    // console.log($("#info-section div:empty").length);

    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
    }
    if ($("#info-section").hasClass("info-section-information")) {
      return "";
    } else if ($("#info-section div").hasClass("room1-cart-info")) {
      console.log("jest");
      return "";
    } else {
      const divAllInfo = $('<div class="room1-cart-info">Div1</div>');

      $("#info-section").append(divAllInfo);

      // const divSectionText = () => {
      //   $("#info-section").unload((e) => {
      //     e.stopPropagation();
      //     const addText = $("<div>ABC</div>");

      //     $("#info-section").append(addText);
      //   });
      // };
      // divSectionText();
    }

    // console.log($("#info-section div:empty").length);
    // console.log($("#info-section div").length);
  });
};

const addInsideRoomAddId2 = () => {
  $(".button-add-id2").click((e) => {
    e.stopPropagation();
    $(".button-remove-room2").addClass("all-remove-buttons-hover");
    $(".button-remove-room2").removeAttr("disabled", true);
    $(".not-empty").remove();
    $(".shadow-div").remove();
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
    }
    if ($("#info-section").hasClass("add-information-to-info-section")) {
      console.log("jest");
      return "";
    } else {
      $("#info-section").addClass("add-information-to-info-section");

      const divAllInfo = $('<div class="room2-cart-info">Div2</div>');

      $("#info-section").append(divAllInfo);
    }
  });
};

const addInsideRoomAddId3 = () => {
  $(".button-add-id3").click((e) => {
    e.stopPropagation();
    $(".button-remove-room3").addClass("all-remove-buttons-hover");
    $(".button-remove-room3").removeAttr("disabled", true);
    $(".not-empty").remove();
    $(".shadow-div").remove();
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
      // console.log(`Usuwamy shadow i div 'not-empty'`);
    }
  });
};

const addInsideRoomAddId4 = () => {
  $(".button-add-id4").click((e) => {
    e.stopPropagation();
    $(".button-remove-room4").addClass("all-remove-buttons-hover");
    $(".button-remove-room4").removeAttr("disabled", true);
    $(".not-empty").remove();
    $(".shadow-div").remove();
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
      // console.log(`Usuwamy shadow i div 'not-empty'`);
    }
  });
};

//----------

//Remove inside Add

const removeInsideRoomAddId1 = () => {
  $(".button-remove-id1").click((e) => {
    e.stopPropagation();
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room1").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
      // console.log(`Usuwamy shadow i div 'not-empty'`);
    }
  });
};

const removeInsideRoomAddId2 = () => {
  $(".button-remove-id2").click((e) => {
    e.stopPropagation();
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room2").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
      // console.log(`Usuwamy shadow i div 'not-empty'`);
    }
  });
};

const removeInsideRoomAddId3 = () => {
  $(".button-remove-id3").click((e) => {
    e.stopPropagation();
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room3").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
      // console.log(`Usuwamy shadow i div 'not-empty'`);
    }
  });
};

const removeInsideRoomAddId4 = () => {
  $(".button-remove-id4").click((e) => {
    e.stopPropagation();
    $(".not-empty").remove();
    $(".shadow-div").remove();
    $(".button-remove-room4").removeClass("all-remove-buttons-hover");
    for (let i = 0; database.rooms.length > i; i++) {
      if (database.rooms[i].guests === 0) {
        $(`.button-add-room${i + 1}`).attr("disabled", "true");
        $(`.button-add-room${i + 1}`).removeClass("all-add-buttons-hover");
      } else {
        $(`.button-add-room${i + 1}`).removeAttr("disabled", true);
      }
      // console.log(`Usuwamy shadow i div 'not-empty'`);
    }
  });
};
// Remove

export const roomId1Remove = () => {
  $(".button-remove-room1").click((e) => {
    e.stopPropagation();
    // cart.remove(database.rooms[0]);
  });
};

export const roomId2Remove = () => {
  $(".button-remove-room2").click((e) => {
    e.stopPropagation();
    // cart.remove(database.rooms[1]);
  });
};

export const roomId3Remove = () => {
  $(".button-remove-room3").click((e) => {
    e.stopPropagation();
    // cart.remove(database.rooms[2]);
  });
};

export const roomId4Remove = () => {
  $(".button-remove-room4").click((e) => {
    e.stopPropagation();
    // cart.remove(database.rooms[3]);
  });
};
//----------
