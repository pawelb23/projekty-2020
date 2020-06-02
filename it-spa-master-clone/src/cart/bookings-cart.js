import $ from "jquery";
// import database from "../../database.json";
// import { Router, routes } from "../router";
// import * as allFile from "../it-spa";
import { Cart } from "../cart/cart.js";
import { todayDate } from "../views/show-bookings.js";

//------------

const cart = new Cart(); //ciaskto do trzymania daty
//----------

// const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

// const currentCookieForInfo = JSON.parse(allCurrentCookiesInfo.slice(12));
// // console.log(currentCookieForDateInfo);

export const arrivalClick = () => {
  $(".click-arrival").click((e) => {
    e.stopPropagation();

    if ($("#input-arrival-date").val() < todayDate) {
      if ($(".input-arrival-error").hasClass("error-information")) {
        ("");
      } else {
        const inputArrivalError = $(
          '<div class="div-arrival-error"><span class="input-arrival-error error-information">UWAGA!!! *Data przyjazdu nie może być wcześniejsza od aktualnej daty</span></div>'
        );

        $(".arrival-info").append(inputArrivalError);
      }
    } else {
      // if (
      // $(".input-arrival-error").hasClass("error-information") &&
      //   $(".input-departure-error").hasClass("error-information");
      //  {
      $(".error-information").remove();
      // } else {
      //----------

      // Remove Disabled Departure

      $("#input-departure-date").removeAttr("disabled", true);
      $(".click-departure").removeAttr("disabled", true);
      $(".cancel-arrival-click").removeAttr("disabled", true);

      //----------

      //Hiden class input

      $(".cancel-arrival-click").addClass("hidden-cancel-arrival-date");

      $(".click-departure").addClass("hidden-departure-date-hover");

      //Current Cookies Info

      // const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

      // // console.log(cookiesRoomsInfo);

      // const currentCookieForDateInfo = JSON.parse(
      //   allCurrentCookiesInfo.slice(12)
      // );
      // console.log(currentCookieForDateInfo);

      let arrivalCookieDate;

      let arrivalDateObject = {};

      const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

      const currentCookieForInfo = JSON.parse(allCurrentCookiesInfo.slice(12));
      // console.log(currentCookieForDateInfo);

      console.log(currentCookieForInfo);

      for (let i = 0; currentCookieForInfo.length > i; i++) {
        if (currentCookieForInfo[i].hasOwnProperty("arrival")) {
          console.log(currentCookieForInfo[i]);
          console.log(document.cookie);
          // arrivalCookieDate = JSON.stringify(currentCookieForInfo[i]);
          cart.remove(currentCookieForInfo[i]);
          // console.log(arrivalCookieDate);
          // cart.remove(arrivalDateObject);
        } else {
          ("");
        }
      }

      // console.log(arrivalCookieDate);

      //   cart.remove(arrivalDateObject);

      console.log(document.cookie);

      // for (let i = 0; currentcookieForDateInfo.length > i; i++) {
      //   if (currentcookieForDateInfo[i] == arrivalDateObject) {
      //     cart.remove(arrivalDateObject);
      //     console.log("remove-arrival");
      //   } else {
      //   }
      // }

      // console.log(document.cookie[14]);
      // for (let i = 0; document.cookie.length > i; i++) {
      //   if (document.cookie[i] === arrivalCookieDate) {
      //     cart.remove(arrivalCookieDate);
      //   }
      // }
      //----------

      // One day

      const inputArrivalTomorrow = new Date($("#input-arrival-date").val());

      inputArrivalTomorrow.setDate(inputArrivalTomorrow.getDate() + 1);
      const ddForDepartureOneD = String(
        inputArrivalTomorrow.getDate()
      ).padStart(2, "0");
      const mmForDepartureOneD = String(
        inputArrivalTomorrow.getMonth() + 1
      ).padStart(2, "0");

      const yyyyForDepartureOneD = inputArrivalTomorrow.getFullYear();

      const inputDepartureMinimal = `${yyyyForDepartureOneD}-${mmForDepartureOneD}-${ddForDepartureOneD}`;

      $("#input-departure-date").attr("min", inputDepartureMinimal);

      //----------

      // 7 Days

      const inputArrivalSevenDays = new Date($("#input-arrival-date").val());

      inputArrivalSevenDays.setDate(inputArrivalSevenDays.getDate() + 7);
      const ddForDepartureSevenD = String(
        inputArrivalSevenDays.getDate()
      ).padStart(2, "0");
      const mmForDepartureSevenD = String(
        inputArrivalSevenDays.getMonth() + 1
      ).padStart(2, "0");

      const yyyyForDepartureSevenD = inputArrivalSevenDays.getFullYear();

      const inputDepartureNewValue = `${yyyyForDepartureSevenD}-${mmForDepartureSevenD}-${ddForDepartureSevenD}`;

      $("#input-departure-date").attr("value", inputDepartureNewValue);

      $("#input-departure-date").val(inputDepartureNewValue);

      //-------------

      // 365 Days

      const inputArrivalYearDays = new Date($("#input-arrival-date").val());

      inputArrivalYearDays.setDate(inputArrivalYearDays.getDate() + 365);
      const ddForDepartureYearD = String(
        inputArrivalYearDays.getDate()
      ).padStart(2, "0");
      const mmForDepartureYearD = String(
        inputArrivalYearDays.getMonth() + 1
      ).padStart(2, "0");

      const yyyyForDepartureYearD = inputArrivalYearDays.getFullYear();

      const inputDepartureMax = `${yyyyForDepartureYearD}-${mmForDepartureYearD}-${ddForDepartureYearD}`;

      $("#input-departure-date").attr("max", inputDepartureMax);

      //----------

      $(".div-for-info-bookings").empty();
      $(".div-for-info-bookings").addClass("hidden-border-bookings-in-info");

      const divAllInfo = $(
        `<div class="arrival-cart-info">Data przyjazdu do SPA: ${$(
          "#input-arrival-date"
        ).val()}</div>`
      );

      $(".div-for-info-bookings").append(divAllInfo);
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

      arrivalDateObject = {
        arrival: $("#input-arrival-date").val(),
      };

      // console.log(dateObject.arrivalDate);

      cart.add(arrivalDateObject);
      console.log(document.cookie);
      // cart.remove(arrivalDateObject);
    }
  });
};

export const cancelArrivalClick = () => {
  $(".cancel-arrival-click").click((e) => {
    e.stopPropagation();

    $(".error-information").remove();

    //Current Cookies Info

    // const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

    // console.log(cookiesRoomsInfo);

    // const currentcookieForDateInfo = JSON.parse(
    //   allCurrentCookiesInfo.slice(12)
    // );

    const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

    const currentCookieForInfo = JSON.parse(allCurrentCookiesInfo.slice(12));
    // console.log(currentCookieForDateInfo);

    for (let i = 0; currentCookieForInfo.length > i; i++) {
      if (currentCookieForInfo[i].hasOwnProperty("arrival")) {
        cart.remove(currentCookieForInfo[i]);
        // console.log("remove-arrival");
      } else {
        ("");
      }
    }

    for (let i = 0; currentCookieForInfo.length > i; i++) {
      if (currentCookieForInfo[i].hasOwnProperty("departure")) {
        cart.remove(currentCookieForInfo[i]);
        // console.log("remove-arrival");
      } else {
        ("");
      }
    }

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

    if (
      $(".div-for-info-rooms").html().length == 0 &&
      $(".div-for-info-treatments").html().length == 0 &&
      $(".div-for-info-bookings").html().length == 0
    ) {
      $("#info-section").removeClass("main-info-in-section");
      $(".info-main-heading").remove();
      $(".div-for-all-info").removeClass("hidden-class-in-div");
    }
  });
};

export const departureClick = () => {
  $(".click-departure").click((e) => {
    e.stopPropagation();

    $(".input-departure-error").remove();

    if (
      $("#input-departure-date").val() < $("#input-arrival-date").val() ||
      $("#input-arrival-date").val() < todayDate
    ) {
      if ($(".input-departure-error").hasClass("error-information")) {
        ("");
      } else {
        const inputDepartureError = $(
          '<div class="div-departure-error"><span class="input-departure-error error-information">UWAGA!!! *Data wyjazdu nie może być wcześniejsza od daty przyjazdu i od aktualnej daty. Data wyjazdu wymaga także ustawienia prawidłowej daty przyjazdu</span></div>'
        );

        $(".departure-info").append(inputDepartureError);
      }
    } else {
      if ($(".input-departure-error").hasClass("error-information")) {
        $(".input-departure-error").remove();
      } else {
        ("");
      }
      //----------

      // Remove Disabled Departure

      // $("#input-departure-date").removeAttr("disabled", true);
      // $(".submit-departure").removeAttr("disabled", true);
      // $(".cancel-arrival-submit").removeAttr("disabled", true);

      //----------

      //Hiden class input

      // $(".cancel-arrival-submit").addClass("hidden-cancel-arrival-date");

      // $(".submit-departure").addClass("hidden-departure-date-hover");

      $(".cancel-departure-click").removeAttr("disabled", true);

      $(".cancel-departure-click").addClass("hidden-cancel-departure-date");

      //Current Cookies Info

      // const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

      // // console.log(cookiesRoomsInfo);

      // const currentcookieForDateInfo = JSON.parse(
      //   allCurrentCookiesInfo.slice(12)
      // );
      console.log(document.cookie);

      const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

      const currentCookieForInfo = JSON.parse(allCurrentCookiesInfo.slice(12));
      // console.log(currentCookieForDateInfo);

      for (let i = 0; currentCookieForInfo.length > i; i++) {
        if (currentCookieForInfo[i].hasOwnProperty("departure")) {
          cart.remove(currentCookieForInfo[i]);
          console.log(currentCookieForInfo[i]);
        } else {
          ("");
        }
      }
      console.log(document.cookie);

      console.log();
      //----------

      if ($(".div-for-info-bookings div").hasClass("departure-cart-info")) {
        $(".departure-cart-info").remove();
      } else {
        ("");
      }

      // // One day

      // const inputArrivalTomorrow = new Date($("#input-arrival-date").val());

      // inputArrivalTomorrow.setDate(inputArrivalTomorrow.getDate() + 1);
      // const ddForDepartureOneD = String(inputArrivalTomorrow.getDate()).padStart(
      //   2,
      //   "0"
      // );
      // const mmForDepartureOneD = String(
      //   inputArrivalTomorrow.getMonth() + 1
      // ).padStart(2, "0");

      // const yyyyForDepartureOneD = inputArrivalTomorrow.getFullYear();

      // const inputDepartureMinimal = `${yyyyForDepartureOneD}-${mmForDepartureOneD}-${ddForDepartureOneD}`;

      // $("#input-departure-date").attr("min", inputDepartureMinimal);

      // //----------

      // // 7 Days

      // const inputArrivalSevenDays = new Date($("#input-arrival-date").val());

      // inputArrivalSevenDays.setDate(inputArrivalSevenDays.getDate() + 7);
      // const ddForDepartureSevenD = String(
      //   inputArrivalSevenDays.getDate()
      // ).padStart(2, "0");
      // const mmForDepartureSevenD = String(
      //   inputArrivalSevenDays.getMonth() + 1
      // ).padStart(2, "0");

      // const yyyyForDepartureSevenD = inputArrivalSevenDays.getFullYear();

      // const inputDepartureNewValue = `${yyyyForDepartureSevenD}-${mmForDepartureSevenD}-${ddForDepartureSevenD}`;

      // $("#input-departure-date").attr("value", inputDepartureNewValue);

      // $("#input-departure-date").val(inputDepartureNewValue);

      // //-------------

      // // 365 Days

      // const inputArrivalYearDays = new Date($("#input-arrival-date").val());

      // inputArrivalYearDays.setDate(inputArrivalYearDays.getDate() + 365);
      // const ddForDepartureYearD = String(inputArrivalYearDays.getDate()).padStart(
      //   2,
      //   "0"
      // );
      // const mmForDepartureYearD = String(
      //   inputArrivalYearDays.getMonth() + 1
      // ).padStart(2, "0");

      // const yyyyForDepartureYearD = inputArrivalYearDays.getFullYear();

      // const inputDepartureMax = `${yyyyForDepartureYearD}-${mmForDepartureYearD}-${ddForDepartureYearD}`;

      // $("#input-departure-date").attr("max", inputDepartureMax);

      //----------

      // $(".div-for-info-bookings").empty();
      // $(".div-for-info-bookings").addClass("hidden-border-bookings-in-info");

      const divAllInfo = $(
        `<div class="departure-cart-info">Data wyjazdu ze SPA: ${$(
          "#input-departure-date"
        ).val()}</div>`
      );

      $(".div-for-info-bookings").append(divAllInfo);
      // if ($("#info-section").hasClass("main-info-in-section")) {
      //   ("");
      // } else {
      //   $("#info-section").addClass("main-info-in-section");

      //   const infoHeading = $(
      //     '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      //   );

      //   $(".div-for-all-info").addClass("hidden-class-in-div");

      //   $(".div-for-all-info").before(infoHeading);
      // }

      const departureDateObject = {
        departure: $("#input-departure-date").val(),
      };

      // console.log(dateObject.arrivalDate);

      cart.add(departureDateObject);

      console.log(document.cookie);

      $("#input-departure-date").val($("#input-departure-date").val());
    }
  });
};

export const cancelDepartureClick = () => {
  $(".cancel-departure-click").click((e) => {
    e.stopPropagation();

    $(".input-departure-error").remove();

    if ($(".div-for-info-bookings div").hasClass("departure-cart-info")) {
      $(".departure-cart-info").remove();
    } else {
      ("");
    }

    // //Current Cookies Info

    // const allCurrentCookiesInfoDepart = JSON.parse(
    //   JSON.stringify(document.cookie)
    // );

    // // console.log(cookiesRoomsInfo);

    // const currentcookieForDateInfoDepart = JSON.parse(
    //   allCurrentCookiesInfoDepart.slice(12)
    // );

    console.log(document.cookie);

    const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

    const currentCookieForInfo = JSON.parse(allCurrentCookiesInfo.slice(12));
    // console.log(currentCookieForDateInfo);

    for (let i = 0; currentCookieForInfo.length > i; i++) {
      if (currentCookieForInfo[i].hasOwnProperty("departure")) {
        console.log(document.cookie);
        console.log(currentCookieForInfo[i]);

        cart.remove(currentCookieForInfo[i]);
        console.log(currentCookieForInfo[i]);
      } else {
        ("");
      }
    }

    console.log(document.cookie);

    // Add Disabled Departure

    $(".cancel-departure-click").attr("disabled", true);

    //Hiden class input

    $(".cancel-departure-click").removeClass("hidden-cancel-departure-date");

    console.log(document.cookie);
  });
};

//---------------

export const currentArrivalDepartureDateCookie = () => {
  //Current Cookies Info

  const allCurrentCookiesInfo = JSON.parse(JSON.stringify(document.cookie));

  // console.log(cookiesRoomsInfo);

  const currentCookieForInfo = JSON.parse(allCurrentCookiesInfo.slice(12));

  $(".div-for-info-bookings").empty();

  for (let i = 0; currentCookieForInfo.length > i; i++) {
    if (currentCookieForInfo[i].hasOwnProperty("arrival")) {
      // Remove Disabled Departure

      $("#input-departure-date").removeAttr("disabled", true);
      $(".click-departure").removeAttr("disabled", true);
      $(".cancel-arrival-click").removeAttr("disabled", true);

      //Hiden class input

      $(".cancel-arrival-click").addClass("hidden-cancel-arrival-date");

      $(".click-departure").addClass("hidden-departure-date-hover");

      $(".div-for-info-bookings").addClass("hidden-border-bookings-in-info");

      const divAllInfo = $(
        `<div class="arrival-cart-info">Data przyjazdu do SPA: ${currentCookieForInfo[i].arrivalDate}</div>`
      );

      $(".div-for-info-bookings").append(divAllInfo);
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
    } else {
      ("");
    }
  }
  if ($(".div-for-info-bookings div").hasClass("departure-cart-info")) {
    $(".departure-cart-info").remove();
  } else {
    ("");
  }

  //   const allCurrentCookiesInfoTwo = JSON.parse(JSON.stringify(document.cookie));

  //   // console.log(cookiesRoomsInfo);

  //   const currentCookieForDepartureDateInfo = JSON.parse(
  //     allCurrentCookiesInfoTwo.slice(12)
  //   );

  for (let i = 0; currentCookieForInfo.length > i; i++) {
    if (currentCookieForInfo[i].hasOwnProperty("departure")) {
      // Remove Disabled Departure

      $(".cancel-departure-click").removeAttr("disabled", true);

      //Hiden class input

      $(".cancel-arrival-click").addClass("hidden-cancel-arrival-date");

      $(".cancel-departure-click").addClass("hidden-cancel-departure-date");

      const divAllInfo = $(
        `<div class="departure-cart-info">Data wyjazdu ze SPA: ${currentCookieForInfo[i].departure}</div>`
      );

      $(".div-for-info-bookings").append(divAllInfo);
    } else {
      ("");
    }
  }
};
