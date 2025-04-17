const questions = document.querySelectorAll(".dropdown_questions");
const answers = document.querySelectorAll(".dropdown_questions p");

questions.forEach((ques, i) => {
  const ans = answers[i];
  const ansHeight = ans.offsetHeight;
  ans.style.height = 0 + "px";
  ans.style.opacity = 0;

  ques.addEventListener("click", () => {
    if (ans.offsetHeight === 0) {
      ans.style.height = ansHeight + "px";
      ans.style.marginTop = 40 + "px";
      ans.style.opacity = 1;
    } else {
      ans.style.height = 0 + "px";
      ans.style.marginTop = 0 + "px";
      ans.style.opacity = 0;
    }
  });
});
// const btnUp = {
//   el: document.querySelector(".btn-up"),
//   show() {
//     // удалим у кнопки класс btn-up_hide
//     this.el.classList.remove("btn-up_hide");
//   },
//   hide() {
//     // добавим к кнопке класс btn-up_hide
//     this.el.classList.add("btn-up_hide");
//   },
//   addEventListener() {
//     // при прокрутке содержимого страницы
//     window.addEventListener("scroll", () => {
//       // определяем величину прокрутки
//       const scrollY = window.scrollY || document.documentElement.scrollTop;
//       console.log(scrollY);
//       // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
//       scrollY > 400 || scrollY < document.body.offsetHeight
//         ? this.show()
//         : this.hide();
//     });
//     // при нажатии на кнопку .btn-up
//     document.querySelector(".btn-up").onclick = () => {
//       // переместим в начало страницы
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     };
//   },
// };

// btnUp.addEventListener();
