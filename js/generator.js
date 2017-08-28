// const lyrics = require('./lyrics');

function randomParagraphSize(avgParagraphSize) {
  return Math.floor(Math.random() * (avgParagraphSize * 2 - 1)) + 1;
}

function randomLyric(lyrics) {
  if (lyrics.length == 0) {
    return "";
  }
  var index = Math.floor(Math.random() * lyrics.length);
  return lyrics.splice(index, 1)[0];
}

function generateParagraph(lyrics, avgParagraphSize, options) {
  let paragraphSize = randomParagraphSize(avgParagraphSize);
  let text = '';
  if (options.paragraphPre) {
    text = text + options.paragraphPre;
  }
  text += randomLyric(lyrics);
  for (let i=1; i<paragraphSize; ++i) {
    text += ' ' + randomLyric(lyrics);
  }
  if (options.paragraphPost) {
    text += options.paragraphPost;
  }
  return text;
}

function generateText(lyrics, paragraphs, avgParagraphSize, options) {
  let text = '';
  if (options.pre) {
    text += options.pre;
  }
  text += generateParagraph(lyrics, avgParagraphSize, options);
  for (let i=1; i<paragraphs; ++i) {
    if (options.paragraphBetween) {
      text += options.paragraphBetween;
    }
    text += generateParagraph(lyrics, avgParagraphSize, options);
  }
  if (options.post) {
    text += options.post;
  }
  return text;
}

function getLyricCopy() {
  return lyrics.slice();
}

function generateHtml(paragraphs, avgParagraphSize) {
  const options = {
    paragraphPre: '<p>',
    paragraphPost: '</p>\n',
  }
  return generateText(getLyricCopy(), paragraphs, avgParagraphSize, options);
}

function generatePreformatted(paragraphs, avgParagraphSize) {
  const options = {
    paragraphBetween: '\n\n',
    pre: '<pre>',
    post: '<post>',
  };
  return generateText(getLyricCopy(), paragraphs, avgParagraphSize, options);
}
