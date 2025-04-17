export function lazyLoading(selector) {
  const cards = document.querySelectorAll(selector);

  const callBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // const img = entry.target.querySelector('img[data-src]');
        // img.src = img.dataset.src;

        const element = entry.target;
        element.classList.add('loaded');

        // img.removeAttribute('data-src');
        observer.unobserve(entry.target);
      }
    })
  }

  const options = {
    rootMargin: '0px 0px 70px 0px',
    threshold: 0,
  }

  const observer = new IntersectionObserver(callBack, options)
  cards.forEach((card) => observer.observe(card))

}


lazyLoading('.card-tour');





