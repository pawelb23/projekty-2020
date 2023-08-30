import database from "../../database.json";
import $ from "jquery";
import { Cart } from "./cart.js";

const cart = new Cart(); //uruchamiamy klasę kosz

//-----------

// Cookies Treatmenst Info

const cookiesTreatmentsFullInfo = JSON.parse(JSON.stringify(document.cookie));

const cookiesTreatmentsInfo = JSON.parse(cookiesTreatmentsFullInfo.slice(12));

export const findCookieTreatment1 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 1 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment1").removeAttr("disabled", true);

      $(".button-remove-treatment1").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment1").attr("disabled", true);

      $(".button-add-treatment1").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment1-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment1-cart-info").text(
        `Dodano: ${database.treatments[0].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

export const findCookieTreatment2 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 2 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment2").removeAttr("disabled", true);

      $(".button-remove-treatment2").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment2").attr("disabled", true);

      $(".button-add-treatment2").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment2-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment2-cart-info").text(
        `Dodano: ${database.treatments[1].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

export const findCookieTreatment3 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 3 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment3").removeAttr("disabled", true);

      $(".button-remove-treatment3").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment3").attr("disabled", true);

      $(".button-add-treatment3").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment3-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment3-cart-info").text(
        `Dodano: ${database.treatments[2].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

export const findCookieTreatment4 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 4 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment4").removeAttr("disabled", true);

      $(".button-remove-treatment4").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment4").attr("disabled", true);

      $(".button-add-treatment4").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment4-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment4-cart-info").text(
        `Dodano: ${database.treatments[3].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

export const findCookieTreatment5 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 5 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment5").removeAttr("disabled", true);

      $(".button-remove-treatment5").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment5").attr("disabled", true);

      $(".button-add-treatment5").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment5-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment5-cart-info").text(
        `Dodano: ${database.treatments[4].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

export const findCookieTreatment6 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 6 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment6").removeAttr("disabled", true);

      $(".button-remove-treatment6").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment6").attr("disabled", true);

      $(".button-add-treatment6").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment6-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment6-cart-info").text(
        `Dodano: ${database.treatments[5].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

export const findCookieTreatment7 = () => {
  for (let i = 0; cookiesTreatmentsInfo.length > i; i++) {
    if (
      cookiesTreatmentsInfo[i].id == 7 &&
      cookiesTreatmentsInfo[i].hasOwnProperty("area")
    ) {
      $(".button-remove-treatment7").removeAttr("disabled", true);

      $(".button-remove-treatment7").addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(".button-add-treatment7").attr("disabled", true);

      $(".button-add-treatment7").removeClass(
        "all-add-buttons-treatments-hover"
      );

      const divAllInfo = $(`<div class="treatment7-cart-info"></div>`);

      $(".div-for-info-treatments").append(divAllInfo);

      $("#info-section").addClass("main-info-in-section");

      $(".div-for-all-info").addClass("hidden-class-in-div");

      $(".div-for-info-treatments").addClass(
        "hidden-border-treatments-in-info"
      );

      $(".treatment7-cart-info").text(
        `Dodano: ${database.treatments[6].name}!!!`
      );

      if ($("#info-section h6").hasClass("info-main-heading")) {
        ("");
      } else {
        const infoHeading = $(
          '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
        );
        $(".div-for-all-info").before(infoHeading);
      }
    } else {
      ("");
    }
  }
};

//----------

// Sprawdzamy stan wszystkich zabiegów (czy w koszu czy nie)

export const allstateTreatmentsInfo = () => {
  for (let i = 0; database.treatments.length > i; i++) {
    if (
      $(".div-for-info-treatments div").hasClass(`treatment${i + 1}-cart-info`)
    ) {
      $(`.button-remove-treatment${i + 1}`).removeAttr("disabled", true);

      $(`.button-remove-treatment${i + 1}`).addClass(
        "all-remove-buttons-treatments-hover"
      );

      $(`.button-add-treatment${i + 1}`).attr("disabled", true);

      $(`.button-add-treatment${i + 1}`).removeClass(
        "all-add-buttons-treatments-hover"
      );
    } else {
      ("");
    }
  }
};

// Add Treatments

export const addTreatment1 = () => {
  $(".button-add-treatment1").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment1").removeAttr("disabled", true);

    $(".button-remove-treatment1").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment1").attr("disabled", true);

    $(".button-add-treatment1").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment1-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment1-cart-info").text(
      `Dodano: ${database.treatments[0].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[0]);
  });
};

export const addTreatment2 = () => {
  $(".button-add-treatment2").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment2").removeAttr("disabled", true);

    $(".button-remove-treatment2").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment2").attr("disabled", true);

    $(".button-add-treatment2").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment2-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment2-cart-info").text(
      `Dodano: ${database.treatments[1].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[1]);
  });
};

export const addTreatment3 = () => {
  $(".button-add-treatment3").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment3").removeAttr("disabled", true);

    $(".button-remove-treatment3").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment3").attr("disabled", true);

    $(".button-add-treatment3").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment3-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment3-cart-info").text(
      `Dodano: ${database.treatments[2].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[2]);
  });
};

export const addTreatment4 = () => {
  $(".button-add-treatment4").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment4").removeAttr("disabled", true);

    $(".button-remove-treatment4").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment4").attr("disabled", true);

    $(".button-add-treatment4").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment4-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment4-cart-info").text(
      `Dodano: ${database.treatments[3].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[3]);
  });
};

export const addTreatment5 = () => {
  $(".button-add-treatment5").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment5").removeAttr("disabled", true);

    $(".button-remove-treatment5").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment5").attr("disabled", true);

    $(".button-add-treatment5").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment5-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment5-cart-info").text(
      `Dodano: ${database.treatments[4].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[4]);
  });
};

export const addTreatment6 = () => {
  $(".button-add-treatment6").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment6").removeAttr("disabled", true);

    $(".button-remove-treatment6").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment6").attr("disabled", true);

    $(".button-add-treatment6").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment6-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment6-cart-info").text(
      `Dodano: ${database.treatments[5].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[5]);
  });
};

export const addTreatment7 = () => {
  $(".button-add-treatment7").click((e) => {
    e.stopPropagation();

    $(".button-remove-treatment7").removeAttr("disabled", true);

    $(".button-remove-treatment7").addClass(
      "all-remove-buttons-treatments-hover"
    );

    $(".button-add-treatment7").attr("disabled", true);

    $(".button-add-treatment7").removeClass("all-add-buttons-treatments-hover");

    const divAllInfo = $(`<div class="treatment7-cart-info"></div>`);

    $(".div-for-info-treatments").append(divAllInfo);

    $("#info-section").addClass("main-info-in-section");

    $(".div-for-all-info").addClass("hidden-class-in-div");

    $(".div-for-info-treatments").addClass("hidden-border-treatments-in-info");

    $(".treatment7-cart-info").text(
      `Dodano: ${database.treatments[6].name}!!!`
    );

    if ($("#info-section h6").hasClass("info-main-heading")) {
      ("");
    } else {
      const infoHeading = $(
        '<h6 class="info-main-heading">Obecnie w koszu!!!</h6>'
      );
      $(".div-for-all-info").before(infoHeading);
    }

    cart.add(database.treatments[6]);
  });
};

//----------

// Remove Treatments

export const removeTreatment1 = () => {
  $(".button-remove-treatment1").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[0]);

    $(".button-remove-treatment1").attr("disabled", true);

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
  });
};

export const removeTreatment2 = () => {
  $(".button-remove-treatment2").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[1]);

    $(".button-remove-treatment2").attr("disabled", true);

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
  });
};

export const removeTreatment3 = () => {
  $(".button-remove-treatment3").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[2]);

    $(".button-remove-treatment3").attr("disabled", true);

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
  });
};

export const removeTreatment4 = () => {
  $(".button-remove-treatment4").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[3]);

    $(".button-remove-treatment4").attr("disabled", true);

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
  });
};

export const removeTreatment5 = () => {
  $(".button-remove-treatment5").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[4]);

    $(".button-remove-treatment5").attr("disabled", true);

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
  });
};

export const removeTreatment6 = () => {
  $(".button-remove-treatment6").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[5]);

    $(".button-remove-treatment6").attr("disabled", true);

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
  });
};

export const removeTreatment7 = () => {
  $(".button-remove-treatment7").click((e) => {
    e.stopPropagation();

    cart.remove(database.treatments[6]);

    $(".button-remove-treatment7").attr("disabled", true);

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
  });
};
