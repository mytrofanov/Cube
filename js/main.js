let text = 'Junior Frontend Developer'

function animateText(id, text, i) {
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;
  if (i > text.length) i = 0;
  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
}

animateText('dynamic-text', text, 0  );
