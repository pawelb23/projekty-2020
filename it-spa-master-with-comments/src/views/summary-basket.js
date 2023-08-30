import database from "../../database.json";
import $ from "jquery";
import { Cart } from "../cart/cart.js";
import * as allRoomsContent from "../cart/room-cart.js";

const cart = new Cart(); //uruchamiamy klasę kosz

export const showSummary = () => {
  $(".button-basket-summary").click((e) => {
    e.stopPropagation();

    console.log(document.cookie);

    const showAllSummary = $(
      `<section id="basket-summary"><h3 class="heading-summary">Podsumowanie wyboru z oferty naszego SPA!!!</h3><div class="full-summary-basket-container border-summary-basket"><div class="all-rooms-in-basket"></div><div class="all-treatments-in-basket"></div><div class="all-dates-in-basket"><div class="all-dates-flex arrival-choice"><div class="all-dates-settings-in-basket all-arrival-info"><span class="date-key">Data przyjazdu:</span> <span class="date-value arrival-value"></span></div><div class="single-button-remove"><button class="remove-single-choice-from-basket remove-item-arrival">Usuń</button></div></div><div class="all-dates-flex departure-choice"><div class="all-dates-settings-in-basket all-departure-info"><span class="date-key">Data wyjazdu ze:</span> <span class="date-value departure-value"></span></div><div class="single-button-remove"><button class="remove-single-choice-from-basket remove-item-departure">Usuń</button></div></div></div></div><div class="flex-for-cost-and-buttons"><div class="sum-price-div"><span class="sum-price-info">Całkowity koszt:</span><span class="full-cost"></span></div><div class="buttons-buy-cancel"><button class="buy-all hover-buy-all-button">Akceptuję!</button><button class="close-summary-card">Powrót</button></div></div></section>`
    );
    $("#info-section").after(showAllSummary);

    // Cookies Info

    let allCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

    let cookieForBasketInfo = JSON.parse(allCookiesInfo.slice(12));

    $(".text-muted").after(allRoomsContent.shadowDiv);

    //--------ROOMS--------

    for (let i = 0; cookieForBasketInfo.length > i; i++) {
      if (cookieForBasketInfo[i].hasOwnProperty("guests")) {
        console.log(cookieForBasketInfo[i]);
        const oneRoomInfo = $(`<div class="all-rooms-flex room${
          cookieForBasketInfo[i].id
        }-choice"><div class="all-rooms-settings-in-basket all-room${
          cookieForBasketInfo[i].id
        }-info"><span class="room-key">Nazwa:</span> <span class="room-value">${
          cookieForBasketInfo[i].name
        }</span><br>
      <span class="room-key">Ilość łóżek:</span> <span class="room-value">${
        cookieForBasketInfo[i].beds
      }</span><br>
      <span class="room-key">Wybrana ilość osób:</span> <span class="room-value room-guests-value">${
        cookieForBasketInfo[i].guests
      }</span><br>
      <span class="room-key">Cena (za jedną osobę):</span> <span class="room-value">${
        cookieForBasketInfo[i].price
      }</span><br>
      <span class="room-key">Cena (za wszystkie osoby):</span> <span class="room-value price-add">${
        cookieForBasketInfo[i].price * cookieForBasketInfo[i].guests
      }</span></div><div class="single-button-remove"><button class="remove-single-choice-from-basket remove-item-number${
          cookieForBasketInfo[i].id
        }-rooms">Usuń</button></div></div></div>`);

        if (
          $(".all-rooms-in-basket div").hasClass(
            `room${cookieForBasketInfo[i].id}-choice`
          )
        ) {
          ("");
        } else {
          $(".all-rooms-in-basket").append(oneRoomInfo);
        }
      } else {
        ("");
      }
    }

    //--------TREATMENTS--------

    for (let i = 0; cookieForBasketInfo.length > i; i++) {
      if (cookieForBasketInfo[i].hasOwnProperty("area")) {
        let polishAreaName;
        if (cookieForBasketInfo[i].area === "back") {
          polishAreaName = "Plecy";
        } else if (cookieForBasketInfo[i].area === "face") {
          polishAreaName = "Twarz";
        } else if (cookieForBasketInfo[i].area === "legs") {
          polishAreaName = "Nogi";
        } else if (cookieForBasketInfo[i].area === "hands") {
          polishAreaName = "Ręce";
        } else if (cookieForBasketInfo[i].area === "body") {
          polishAreaName = "Całe ciało";
        } else {
          polishAreaName = "Brak danych";
        }

        const oneTreatmentInfo = $(`<div class="all-treatments-flex treatment${cookieForBasketInfo[i].id}-choice"><div class="all-treatments-settings-in-basket all-treatment${cookieForBasketInfo[i].id}-info"><span class="treatment-key">Nazwa:</span> <span class="treatment-value">${cookieForBasketInfo[i].name}</span><br>
      <span class="treatment-key">Leczony obszar:</span> <span class="treatment-value treatment-polish-value">${polishAreaName}</span><br>
      <span class="room-key">Wybrana Czas:</span> <span class="room-value room-guests-value">${cookieForBasketInfo[i].time} min</span><br>
      <span class="room-key">Cena:</span> <span class="room-value price-add">${cookieForBasketInfo[i].price}</span></div><div class="single-button-remove"><button class="remove-single-choice-from-basket remove-item-number${cookieForBasketInfo[i].id}-treatments">Usuń</button></div></div></div>`);

        if (
          $(".all-treatments-in-basket div").hasClass(
            `treatment${cookieForBasketInfo[i].id}-choice`
          )
        ) {
          ("");
        } else {
          $(".all-treatments-in-basket").append(oneTreatmentInfo);
        }
      } else {
        ("");
      }
    }

    //--------DATES--------

    $(".arrival-value").text($(".arrival-from-input-value").text());

    $(".departure-value").text($(".departure-from-input-value").text());

    //-----------

    removeRoomId1Summary();
    removeRoomId2Summary();
    removeRoomId3Summary();
    removeRoomId4Summary();

    removeTreatmentId1Summary();
    removeTreatmentId2Summary();
    removeTreatmentId3Summary();
    removeTreatmentId4Summary();
    removeTreatmentId5Summary();
    removeTreatmentId6Summary();
    removeTreatmentId7Summary();

    removeArrivalDate();
    removeDepartureDate();

    buyAllSummary();
    closeCardSummary();

    addingPrice();

    // console.log(cookieForBasketInfo);

    // console.log(document.cookie);
  });
};

//--------ROOMS--------

// Remove Rooms Id 1

const removeRoomId1Summary = () => {
  $(".remove-item-number1-rooms").click((e) => {
    e.stopPropagation();

    $(".room1-choice").remove();

    $(".room1-cart-info").remove();

    allRoomsContent.roomOneWithChanging = JSON.parse(
      JSON.stringify(database.rooms[0])
    );

    $(".room-guests-value1").text(allRoomsContent.roomOneWithChanging.guests);

    $(".button-remove-room1").attr("disabled", true);

    $(`.button-remove-room1`).removeClass("all-remove-buttons-hover");

    if (allRoomsContent.roomOneWithChanging.guests !== 0) {
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

    const cookiesRoomsInfo = JSON.parse(JSON.stringify(document.cookie));

    const cookiesGusetsInfo = JSON.parse(cookiesRoomsInfo.slice(12));

    for (let i = 0; cookiesGusetsInfo.length > i; i++) {
      if (
        cookiesGusetsInfo[i].id == 1 &&
        cookiesGusetsInfo[i].hasOwnProperty("guests")
      ) {
        allRoomsContent.roomOneWithChanging.guests =
          database.rooms[0].guests - cookiesGusetsInfo[i].guests;
      } else {
        ("");
      }
    }

    allRoomsContent.findCookieRoom1();

    const roomOneWithGuestsInfo = JSON.parse(JSON.stringify(database.rooms[0]));

    const guestsNumber1 =
      database.rooms[0].guests - allRoomsContent.roomOneWithChanging.guests;

    roomOneWithGuestsInfo.guests = guestsNumber1;

    console.log(roomOneWithGuestsInfo);

    console.log(allRoomsContent.roomOneWithChanging);

    cart.remove(roomOneWithGuestsInfo);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Rooms Id 2

const removeRoomId2Summary = () => {
  $(".remove-item-number2-rooms").click((e) => {
    e.stopPropagation();

    $(".room2-choice").remove();

    $(".room2-cart-info").remove();

    allRoomsContent.roomTwoWithChanging = JSON.parse(
      JSON.stringify(database.rooms[1])
    );

    $(".room-guests-value2").text(allRoomsContent.roomTwoWithChanging.guests);

    $(".button-remove-room2").attr("disabled", true);

    $(`.button-remove-room2`).removeClass("all-remove-buttons-hover");

    if (allRoomsContent.roomTwoWithChanging.guests !== 0) {
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

    const guestsNumber2 =
      database.rooms[1].guests - allRoomsContent.roomTwoWithChanging.guests;

    roomTwoWithGuestsInfo.guests = guestsNumber2;

    cart.remove(roomTwoWithGuestsInfo);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Rooms Id 3

const removeRoomId3Summary = () => {
  $(".remove-item-number3-rooms").click((e) => {
    e.stopPropagation();

    $(".room3-choice").remove();

    $(".room3-cart-info").remove();

    allRoomsContent.roomThreeWithChanging = JSON.parse(
      JSON.stringify(database.rooms[2])
    );

    $(".room-guests-value3").text(allRoomsContent.roomThreeWithChanging.guests);

    $(".button-remove-room3").attr("disabled", true);

    $(`.button-remove-room3`).removeClass("all-remove-buttons-hover");

    if (allRoomsContent.roomThreeWithChanging.guests !== 0) {
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

    const guestsNumber3 =
      database.rooms[2].guests - allRoomsContent.roomThreeWithChanging.guests;

    roomThreeWithGuestsInfo.guests = guestsNumber3;

    cart.remove(roomThreeWithGuestsInfo);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Rooms Id 4

const removeRoomId4Summary = () => {
  $(".remove-item-number4-rooms").click((e) => {
    e.stopPropagation();

    $(".room4-choice").remove();

    $(".room4-cart-info").remove();

    allRoomsContent.roomFourWithChanging = JSON.parse(
      JSON.stringify(database.rooms[3])
    );

    $(".room-guests-value4").text(allRoomsContent.roomFourWithChanging.guests);

    $(".button-remove-room4").attr("disabled", true);

    $(`.button-remove-room4`).removeClass("all-remove-buttons-hover");

    if (allRoomsContent.roomFourWithChanging.guests !== 0) {
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
      database.rooms[3].guests - allRoomsContent.roomFourWithChanging.guests;

    roomFourWithGuestsInfo.guests = guestsNumber4;

    cart.remove(roomFourWithGuestsInfo);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

//--------TREATMENTS--------

// Remove Treatment Id 1

const removeTreatmentId1Summary = () => {
  $(".remove-item-number1-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment1-choice").remove();

    $(".treatment1-cart-info").remove();

    $(".button-remove-treatment1").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment1").removeAttr("disabled", true);

    $(".button-add-treatment1").addClass("all-add-buttons-treatments-hover");
    $(".treatment1-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[0]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Treatment Id 2

const removeTreatmentId2Summary = () => {
  $(".remove-item-number2-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment2-choice").remove();

    $(".treatment2-cart-info").remove();

    $(".button-remove-treatment2").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment2").removeAttr("disabled", true);

    $(".button-add-treatment2").addClass("all-add-buttons-treatments-hover");
    $(".treatment2-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[1]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Treatment Id 3

const removeTreatmentId3Summary = () => {
  $(".remove-item-number3-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment3-choice").remove();

    $(".treatment3-cart-info").remove();

    $(".button-remove-treatment3").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment3").removeAttr("disabled", true);

    $(".button-add-treatment3").addClass("all-add-buttons-treatments-hover");
    $(".treatment3-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[2]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Treatment Id 4

const removeTreatmentId4Summary = () => {
  $(".remove-item-number4-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment4-choice").remove();

    $(".treatment4-cart-info").remove();

    $(".button-remove-treatment4").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment4").removeAttr("disabled", true);

    $(".button-add-treatment4").addClass("all-add-buttons-treatments-hover");
    $(".treatment4-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[3]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Treatment Id 5

const removeTreatmentId5Summary = () => {
  $(".remove-item-number5-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment5-choice").remove();

    $(".treatment5-cart-info").remove();

    $(".button-remove-treatment5").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment5").removeAttr("disabled", true);

    $(".button-add-treatment5").addClass("all-add-buttons-treatments-hover");
    $(".treatment5-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[4]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Treatment Id 6

const removeTreatmentId6Summary = () => {
  $(".remove-item-number6-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment6-choice").remove();

    $(".treatment6-cart-info").remove();

    $(".button-remove-treatment6").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment6").removeAttr("disabled", true);

    $(".button-add-treatment6").addClass("all-add-buttons-treatments-hover");
    $(".treatment6-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[5]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

// Remove Treatment Id 7

const removeTreatmentId7Summary = () => {
  $(".remove-item-number7-treatments").click((e) => {
    e.stopPropagation();

    $(".treatment7-choice").remove();

    $(".treatment7-cart-info").remove();

    $(".button-remove-treatment7").removeClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment7").removeAttr("disabled", true);

    $(".button-add-treatment7").addClass("all-add-buttons-treatments-hover");
    $(".treatment7-cart-info").remove();

    if ($(".div-for-info-treatments").html().length == 0) {
      $(".div-for-info-treatments").removeClass(
        "hidden-border-treatments-in-info"
      );
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

    cart.remove(database.treatments[6]);

    acceptButtonSettings();

    $(".full-cost").empty();

    addingPrice();
  });
};

//--------DATES--------

// Arrival Remove

const removeArrivalDate = () => {
  $(".remove-item-arrival").click((e) => {
    e.stopPropagation();

    $(".arrival-choice").remove();

    $(".arrival-cart-info").remove();

    $(".departure-choice").remove();

    $(".departure-cart-info").remove();

    // Add Disabled Departure

    $(".cancel-arrival-click").attr("disabled", true);
    $("#input-departure-date").attr("disabled", true);
    $(".click-departure").attr("disabled", true);
    $(".cancel-departure-click").attr("disabled", true);

    //Hiden class input

    $(".cancel-arrival-click").removeClass("hidden-cancel-arrival-date");

    $(".click-departure").removeClass("hidden-departure-date-hover");

    $(".cancel-departure-click").removeClass("hidden-cancel-departure-date");

    $(".div-for-info-bookings").removeClass("hidden-border-bookings-in-info");
    $(".div-for-info-bookings").empty();

    acceptButtonSettings();

    if (
      $(".div-for-info-rooms").html().length == 0 &&
      $(".div-for-info-treatments").html().length == 0 &&
      $(".div-for-info-bookings div").length !== 2
    ) {
      $("#info-section").removeClass("main-info-in-section");
      $(".info-main-heading").remove();
    } else {
      ("");
    }
  });
};

// Departure Remove

const removeDepartureDate = () => {
  $(".remove-item-departure").click((e) => {
    e.stopPropagation();

    $(".departure-choice").remove();

    $(".departure-cart-info").remove();

    $(".departure-choice").remove();

    $(".departure-cart-info").remove();

    // Add Disabled Departure

    $(".cancel-departure-click").attr("disabled", true);

    //Hiden class input

    $(".cancel-departure-click").removeClass("hidden-cancel-departure-date");

    acceptButtonSettings();
  });
};

// Card Summary Buttons

const acceptButtonSettings = () => {
  if (
    $(".div-for-info-rooms").html().length == 0 ||
    $(".div-for-info-treatments").html().length == 0 ||
    $(".div-for-info-bookings div").length !== 2
  ) {
    $(".buy-all").attr("disabled", true);
    $(".buy-all").removeClass("hover-buy-all-button");
  } else {
    ("");
  }
};

export const buyAllSummary = () => {
  $(".buy-all").click((e) => {
    e.stopPropagation();

    allRoomsContent.shadowDiv.remove();
    $("#basket-summary").remove();

    alert(
      "Mission Complite!!! :). Gratulujemy udanych zakupów! Kosz został wyczyszczony."
    );

    cart.remove(database.rooms[0]);
    cart.remove(database.rooms[1]);
    cart.remove(database.rooms[2]);
    cart.remove(database.rooms[3]);

    cart.remove(database.treatments[0]);
    cart.remove(database.treatments[1]);
    cart.remove(database.treatments[2]);
    cart.remove(database.treatments[3]);
    cart.remove(database.treatments[4]);
    cart.remove(database.treatments[5]);
    cart.remove(database.treatments[6]);

    // Remove elements

    $(".info-main-heading").remove();

    $(".div-for-info-rooms").empty();
    $(".div-for-info-treatments").empty();
    $(".div-for-info-bookings").empty();

    // Remove Class

    $("#info-section").removeClass("main-info-in-section");

    $(".div-for-info-rooms").removeClass("hidden-border-rooms-in-info");
    $(".div-for-info-treatments").removeClass(
      "hidden-border-treatments-in-info"
    );
    $(".div-for-info-bookings").removeClass("hidden-border-bookings-in-info");

    $(".button-basket-summary").attr("disabled", true);
    $(".button-basket-summary").removeClass("hover-button-summary");
  });
};

export const closeCardSummary = () => {
  $(".close-summary-card").click((e) => {
    e.stopPropagation();

    if (
      $(".div-for-info-rooms").html().length == 0 ||
      $(".div-for-info-treatments").html().length == 0 ||
      $(".div-for-info-bookings div").length !== 2
    ) {
      $(".button-basket-summary").attr("disabled", true);
      $(".button-basket-summary").removeClass("hover-button-summary");

      allRoomsContent.shadowDiv.remove();
      $("#basket-summary").remove();
    } else {
      allRoomsContent.shadowDiv.remove();
      $("#basket-summary").remove();
    }
  });
};

const addingPrice = () => {
  const sumAllPrice = $(".price-add");

  console.log(sumAllPrice.length);

  //---------

  // Obliczamy cały koszt zakupów

  let finalCost = 0;
  $(sumAllPrice).each(function () {
    finalCost += parseFloat($(this).text());
  });

  $(".full-cost").append(`${finalCost}`);

  //----------
};
