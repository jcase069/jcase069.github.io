const lyrics = [
  'The deepest solace lies in understanding. This ancient unseen stream, a shudder before the beautiful.',
  'Awake, oceanborn!',
  'Behold this force!',
  'Bring the outside in -- explode the self to epiphany.',
  'The very core of life, the soaring high of truth and light.',
  'The music of this awe -- deep silence between the notes -- deafens me with endless love.',
  'This vagrant Island Earth, a pilgrim shining bright, we are shuddering before the beautiful, before the plentiful -- we, the voyagers.',
  'Tales from the seas, cathedral of green.',
  'The unknown, the grand show, the choir of the stars.',
  'Interstellar theatre play, the nebulae curtain falls.',
  'Imagination, evolution, a species from the vale walks in wonder in search of the source of the tale.',
  `These stories given to us all are filled with sacrifice and robes of lust.`,
  `Dissonant choirs and downcast eyes, selfhood of a condescending ape.`,
  `Behold the crown of a heavenly spy, forged in blood of those who defy!`,
  `Kiss the ring, praise and sing: he loves you dwelling in fear and sin.`,
  `Fear is a choice you embrace.`,
  `Your only truth: tribal poetry, witchcraft filling your void, lust for fantasy, male necrocracy -- every child worthy of a better tale.`,
  `Pick your author from à la carte fantasy, filled with suffering and slavery.`,
  `You live only for the days to come, shoveling trash of the upper caste.`,
  `Smiling mouth in a rotting head, sucking dry the teat of the scared.`,
  `A storytelling breed we are -- a starving crew with show-off toys.`,
  `From words into war of the worlds, this one we forsake with scorn from lies the strength of our love: mother’s milk, laced with poison for this newborn.`,
  `Wake up child, I have a story to tell: "Once upon a time..."`,
  `Leave the sleep and let the springtime talk in tongues from the time before man.`,
  `Listen to a daffodil tell her tale.`,
  `Let the guest in, walk out, be the first to greet the morn.`,
  `The meadows of heaven await harvest.`,
  `The cliffs unjumped, cold waters untouched, the elsewhere creatures yet unseen.`,
  `Finally your number came up, free fall awaits the brave!`,
  `Come, taste the wine, race the blind -- they will guide you from the light.`,
  `Writing noughts till the end of time`,
  `Come, surf the clouds, race the dark -- it feeds from the runs undone.`,
  `Meet me where the cliff greets the sea.`,
  `The answer to the riddle before your eyes is in dead leaves and fleeting skies, returning swans and sedulous mice`,
  `Writings on the gardens book, in the minute of a lover’s look.`,
  `Building a sandcastle close to the shore -- a house of cards from a worn out deck.`,
  `A home from the fellowship, poise and calm.`,
  `Write a lyric for the song only you can understand.`,
  `Riding hard every shooting star come to life, open mind, have a laugh at the orthodox.`,
  `Come, drink deep, let the dam of mind seep.`,
  `Travel with great élan; dance a jig at the funeral.`,
  `Come!`,
];

function randomParagraphSize(avgParagraphSize) {
  return Math.floor(Math.random() * (avgParagraphSize * 2 - 1)) + 1;
}

function randomLyric() {
  return lyrics[Math.floor(Math.random() * lyrics.length)];
}

function generateParagraph(avgParagraphSize) {
  let paragraphSize = randomParagraphSize(avgParagraphSize);
  let text = '<pre>'+randomLyric();
  for (let i=1; i<paragraphSize; ++i) {
    text += ' ' + randomLyric();
  }
  return text+'</pre>';
}

module.exports = function(paragraphs, avgParagraphSize) {
  let text = generateParagraph(avgParagraphSize);
  for (let i=1; i<paragraphs; ++i) {
    text += '\n\n'+generateParagraph(avgParagraphSize);
  }
  return text;
}