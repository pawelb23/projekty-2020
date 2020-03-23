import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import $ from "jquery";
import { Router, routes } from "./router";
import { nav } from "./navigation/nav";
import { Cart } from "./cart/cart.js";

console.log(`Clone`);

const main = $("main");

const router = new Router(routes);

main.before(nav);

//element main będzie 'outletem' na nasze widoki
router.mount(main);

// router.navigate("/rooms");

//przy uruchomieniu strony pierwszy raz nawigujemy do ścieżki z paska adresu
router.init();
