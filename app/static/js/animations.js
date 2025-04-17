function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}

let blocks = document.querySelectorAll(".animated");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let observer = new IntersectionObserver(handleIntersection, options);

blocks.forEach(function (item) {
  observer.observe(item);
});
