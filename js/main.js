let text = 'Im an enthusiastic and detail-oriented Frontend Software Engineer' +
  ' seeking an entry-level position with Company to use my skills in coding, ' +
  'troubleshooting complex problems, and assisting in the timely completion of projects.'

function animateText(id, text, i) {
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;

  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
}


