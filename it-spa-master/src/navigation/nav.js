import $ from "jquery";
import { routes } from "../router";
import { navItem } from "./nav-item";

export const nav = () => {
  const fragment = $(new DocumentFragment());

  const navBar = $(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
    <span class="navbar-brand">IT SPA</span> <ul class="navbar-nav mr-auto"></ul>
    </nav>`);

  //uzupełnij <ul> elementami <li>
  const navBarItems = routes.map((route) => navItem(route)); //navItem --> odnośnik do pliku nav-item.js//zwraca funkcję strzałkową, której parametrem jest route

  navBar.find("ul").append(navBarItems); //w navBar znajduje ul i dodaje elementy navBarItems

  fragment.append(navBar); //dodaje element navBar

  return fragment;
};
