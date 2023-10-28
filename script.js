$(document).ready(function () {
  const paragraph = $("#paragraph");
  const words = paragraph.text().split(" ");
  //1
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
      words[i] = `<span class="highlighted">${words[i]}</span>`;
    }
  }
  paragraph.html(words.join(" "));

  //2
  $('p').after('<a href="https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html">Link</a>');

  //5
  $('#paragraph').html(function(index, html) {
    return html.replace(/\?/g, '   �.   ').replace(/!/g, '   �.   ');
  });

  //3
  const sentences = paragraph.text().split(". ");
  paragraph.html(sentences.join(".<br>"));

  //4
  $('h1').after(words.length);
});
