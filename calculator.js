// 1.Опрацювати анолог ховера через JSON;
// 2.Змінити координати кнопки
// 3.Змінити координати рандомно
// 4.Кнопки не мають виходити за межі екрану
// 5.Використати делегування подій
const conteiner = document.querySelector('.container');
const hoverHandler = (e) => {
  // достукалися до кнопок через e.target та деструкторизацію
  console.log("e.target", e.target);
  const { target: button } = e; 
  // задаємо рандомні, тобто випадкові координати кнопкам по ширині та висоті вінодов
  button.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  button.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
 console.log(window);
};
  



  // якщо нам потрібно навішати обробник подій на 5 елементів в контейнері
  // то вішаємо обробник на сам контейнер
  // mouseover подія аналог ховера(спрацьовую при наведенні)
 
  conteiner.addEventListener('mouseover',hoverHandler);
  
  
  