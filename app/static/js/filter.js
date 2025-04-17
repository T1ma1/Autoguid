const filter = document.querySelector(".filter-tour");
const filter_open_button = document.querySelector(".filter__open-button");
const filter__close_button = document.querySelector(".filter__close-button");

filter_open_button.addEventListener("click", () => {
  filter.classList.add("filter_opened");
});

filter__close_button.addEventListener("click", () => {
  filter.classList.remove("filter_opened")
})

class ArrowFilter {
  constructor() {
    this.arrowEl = this.addToSvgTag(".svg1");
    this.arrowEl2 = this.addToSvgTag(".svg2");

    this.durationEl = document.querySelector(".duration");
    this.priceEl = document.querySelector(".price");

    if (this.arrowEl) {
      this.arrowEl.addEventListener(
        "click",
        this.click.bind(null, this.arrowEl, this.durationEl)
      );
    }
    if (this.arrowEl2) {
      this.arrowEl2.addEventListener(
        "click",
        this.click.bind(null, this.arrowEl2, this.priceEl)
      );
    }
  }

  createArrowEl() {
    const d =
      "M1.89139 8.99465L13.0924 1.99401C13.5786 1.69012 14.1956 1.69012 14.6818 1.99401L25.8829 8.99465";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", "#5C5C5C");
    path.setAttribute("stroke-width", "2.99894");
    path.setAttribute("stroke-linecap", "round");

    return path;
  }

  addToSvgTag(selector) {
    const svg = document.querySelector(selector);
    const path = this.createArrowEl();
    if (svg) {
      svg.append(path);
    }

    return svg;
  }

  click(element1, element2) {
    if (element1.classList.contains("activ")) {
      element1.classList.remove("activ");
      element2.style.maxHeight = "157px";
    } else {
      element1.classList.add("activ");
      element2.style.maxHeight = "30px";
    }
  }
}

const createArrow = new ArrowFilter();

export default ArrowFilter;
