import $ from "jquery";

//------------

// Current Date

const today = new Date();

const dd = String(today.getDate()).padStart(2, "0");

const mm = String(today.getMonth() + 1).padStart(2, "0");

const yyyy = today.getFullYear();

const todayDate = `${yyyy}-${mm}-${dd}`;

//----------

// Tomorrow

const tomorrowDateAdd = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

const ddTomorrow = String(tomorrowDateAdd.getDate()).padStart(2, "0");

const mmTomorrow = String(tomorrowDateAdd.getMonth() + 1).padStart(2, "0");

const yyyyTomorrow = tomorrowDateAdd.getFullYear();

const tomorrowFullDate = `${yyyyTomorrow}-${mmTomorrow}-${ddTomorrow}`;

//----------

// 7 Days

const sevenDaysAdd = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

const dd7 = String(sevenDaysAdd.getDate()).padStart(2, "0");

const mm7 = String(sevenDaysAdd.getMonth() + 1).padStart(2, "0");

const yyyy7 = sevenDaysAdd.getFullYear();

const dateInSeven = `${yyyy7}-${mm7}-${dd7}`;

//----------

// 360 Days

const yearDateAdd = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

const ddNextYear = String(yearDateAdd.getDate()).padStart(2, "0");

const mmNextYear = String(yearDateAdd.getMonth() + 1).padStart(2, "0");

const yyyyNextYear = yearDateAdd.getFullYear();

const nextYearDate = `${yyyyNextYear}-${mmNextYear}-${ddNextYear}`;

//----------

export const showBookings = () => {
  if (window.location.href.match(/\/bookings$/)) {
    const showAllBookings = $(
      `<div id="bookings-container"><div class="arrival-date-container"><div class="arrival-info"><h4 class="arrival-heading-info">Data przyjazdu</h4></div><div class="arrival-div"><input id="input-arrival-date" type="date" value=${todayDate} min=${todayDate}><button class="click-arrival">Zatwierdź</button></div><div class="cancel-arrival-date"><button class="cancel-arrival-click" disabled=true>Anuluj</button></div></div><div class="departure-date-container"><div class="departure-info"><h4 class="departure-heading-info">Data wyjazdu</h4></div><div class="departure-div"><input id="input-departure-date" type="date" value=${dateInSeven} min=${tomorrowFullDate} max=${nextYearDate} disabled=true><button class="click-departure" disabled=true>Zatwierdź</button></div><div class="cancel-departure-date"><button class="cancel-departure-click" disabled=true>Anuluj</button></div></div><div class="summary-whole-basket"><div class="summary-flex"><div class="summary-information-div"><span class="summary-span-information">*Aby przejść do podsumowania musisz się zarejestrować lub zalogować oraz wybrać pokoje (przynajmniej jeden), zabiegi (przynajmniej jeden), a także datę przyjazdu i wyjazdu.</span></div></div><button class="button-basket-summary" disabled=true>Podsumowanie</button></div></div>`
    );

    $("#main-section").append(showAllBookings);
  }
};

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
      $(".error-information").remove();
      //----------

      // Remove Disabled Departure

      $("#input-departure-date").removeAttr("disabled", true);
      $(".click-departure").removeAttr("disabled", true);
      $(".cancel-arrival-click").removeAttr("disabled", true);

      //----------

      //Hiden class input

      $(".cancel-arrival-click").addClass("hidden-cancel-arrival-date");

      $(".click-departure").addClass("hidden-departure-date-hover");

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

      const arrivalValue = $("#input-arrival-date").val();

      const ddArrivalInput = arrivalValue.substring(8, 10);

      const mmArrivalInput = arrivalValue.substring(5, 7);

      const yyyyArrivalInput = arrivalValue.substring(0, 4);

      const arrivalOrderDate = `${ddArrivalInput}-${mmArrivalInput}-${yyyyArrivalInput}`;

      const divAllInfo = $(
        `<div class="arrival-cart-info"><span class="arrival-from-input-info">Data przyjazdu do SPA: </span><span class="arrival-from-input-value">${arrivalOrderDate}</span></div>`
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
    }
    if ($(".div-for-info-bookings div").hasClass("departure-cart-info")) {
      ("");
    } else {
      $(".cancel-departure-click").attr("disabled", true);
      $(".cancel-departure-click").removeClass("hidden-cancel-departure-date");
    }

    summaryButton();
  });
};

export const cancelArrivalClick = () => {
  $(".cancel-arrival-click").click((e) => {
    e.stopPropagation();

    $(".error-information").remove();

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

    summaryButton();
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

      $(".cancel-departure-click").removeAttr("disabled", true);

      $(".cancel-departure-click").addClass("hidden-cancel-departure-date");

      //----------

      if ($(".div-for-info-bookings div").hasClass("departure-cart-info")) {
        $(".departure-cart-info").remove();
      } else {
        ("");
      }

      const departureValue = $("#input-departure-date").val();

      const ddDepartureInput = departureValue.substring(8, 10);

      const mmDepartureInput = departureValue.substring(5, 7);

      const yyyyDepartureInput = departureValue.substring(0, 4);

      const departureOrderDate = `${ddDepartureInput}-${mmDepartureInput}-${yyyyDepartureInput}`;

      const divAllInfo = $(
        `<div class="departure-cart-info"><span class="departure-from-input-info">Data wyjazdu ze SPA: </span><span class="departure-from-input-value">${departureOrderDate}</span></div>`
      );

      $(".div-for-info-bookings").append(divAllInfo);

      $("#input-departure-date").val($("#input-departure-date").val());
    }

    summaryButton();
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

    // Add Disabled Departure

    $(".cancel-departure-click").attr("disabled", true);

    //Hiden class input

    $(".cancel-departure-click").removeClass("hidden-cancel-departure-date");

    summaryButton();
  });
};

export const currentArrivalDepartureDateInfo = () => {
  if (
    $(".div-for-info-bookings div").hasClass("arrival-cart-info") &&
    $(".div-for-info-bookings div").hasClass("departure-cart-info")
  ) {
    // Remove Disabled Departure

    $(".cancel-arrival-click").removeAttr("disabled", true);
    $("#input-departure-date").removeAttr("disabled", true);
    $(".click-departure").removeAttr("disabled", true);
    $(".cancel-departure-click").removeAttr("disabled", true);

    //----------

    //Hiden class input

    $(".cancel-arrival-click").addClass("hidden-cancel-arrival-date");

    $(".click-departure").addClass("hidden-departure-date-hover");
    $(".cancel-departure-click").addClass("hidden-cancel-departure-date");
  } else if ($(".div-for-info-bookings div").hasClass("arrival-cart-info")) {
    $(".cancel-arrival-click").removeAttr("disabled", true);
    $("#input-departure-date").removeAttr("disabled", true);
    $(".click-departure").removeAttr("disabled", true);

    $(".cancel-arrival-click").addClass("hidden-cancel-arrival-date");
    $(".click-departure").addClass("hidden-departure-date-hover");
  }
};

export const summaryButton = () => {
  if (
    $(".navbar div").hasClass("nickname-login-info") &&
    $(".div-for-info-rooms").html().length !== 0 &&
    $(".div-for-info-treatments").html().length !== 0 &&
    $(".div-for-info-bookings div").hasClass("arrival-cart-info") &&
    $(".div-for-info-bookings div").hasClass("departure-cart-info")
  ) {
    $(".button-basket-summary").removeAttr("disabled", true);
    $(".button-basket-summary").addClass("hover-button-summary");
  } else {
    $(".button-basket-summary").attr("disabled", true);
    $(".button-basket-summary").removeClass("hover-button-summary");
  }
};

//---------------
