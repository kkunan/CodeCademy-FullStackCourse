// receive name
// generate random dumbledore's quotes replaced name by
// such name
// print

const _dumbledoreQuotes = [
    'It is our choices, Harry, that show what we truly are, far more than our abilities.',
    'It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it.',
    'Do not pity the dead, Harry, pity the living. And above all, those who live without love.',
    'You can speak Parseltongue, Harry,’ said Dumbledore calmly, ‘because Lord Voldemort-who is the last remaining ancestor of Salazar Slytherin- can speak Parseltongue.',
    'What we need,’ said Dumbledore slowly, and his light blue eyes moved from Harry to Hermione, ‘is more time.',
    'You know Harry, in a way you did see your father last night... You found him inside yourself.',
    'Harry, suffering like this proves you are still a man! This pain is part of being human … the fact that you can feel pain like this is your greatest strength.',
    'Or perhaps, to confess that you yourself are worried and frightened? You need your friends, Harry. As you so rightly said, Sirius would not have wanted you to shut yourself away.',
    'We must try not to sink beneath our anguish, Harry, but battle on.',
    'Do not pity the dead, Harry, pity the living, and above all those who live without love.',
    'And now, Harry, let us step out into the night and pursue that flighty temptress, adventure.',
    'Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?',
    'For future reference, Harry, it is raspberry...although of course, if I were a Death Eater, I would have been sure to research my own jam preferences before impersonating myself.',
    ]

function getRandomQuote(name){
    let randomIndex = Math.floor(Math.random() * _dumbledoreQuotes.length)
    const selectedQuote = _dumbledoreQuotes[randomIndex]
    const newQuote = selectedQuote.replace("Harry", name)
    return newQuote
}

console.log(getRandomQuote('Komkrit'))

