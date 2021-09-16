let text = 'About me:'
let aboutMeItems = 'Married, two kids'

function animateText(id, text, i) {
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;

  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 300);
}

animateText("about_me", text, 0);
animateText('about_me_items', aboutMeItems, 0)
