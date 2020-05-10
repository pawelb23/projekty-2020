import $ from "jquery";

export const home = () => {
  const fragment = $(new DocumentFragment());
  //DocumentFragment kontener służący do dostawiania elementów

  const h1 = $("<h1>Home - Strona główna</h1>");
  const p = $("<p>Witamy na stronie SPA dla programistów!!!</p>");

  fragment.append(h1).append(p);

  return fragment;
};
