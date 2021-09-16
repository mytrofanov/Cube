let text = 'About me:'
let aboutMeItems = 'Married, two kids'

function animateText(id, text, i) {
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;
  if (text!=aboutMeItems) {
    if (i>text.length) {
      id='about_me_items', text=aboutMeItems, i=0
    }
  }
  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 300);
}

animateText("about_me", text,0);



