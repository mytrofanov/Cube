let text = 'About me:'
let aboutMeItems = 'Budding Front-end Software Engineer '

function animateText(id, text, i) {
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;
  if (text!=aboutMeItems) {
    if (i>text.length) {
      id='about_me_items', text=aboutMeItems, i=0
    }
  }
  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
}

// animateText("about_me", text,0);
//можно показать весь текст сразу после побуквенного вывода заголовка


