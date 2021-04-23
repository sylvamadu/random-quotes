const quoteInfo = [
    {quote: 'If you don\'t have time to read, you don\'t have the time (or the tools) to write. Simple as that.',
    author: 'Stephen King'},
    {
        quote:'We write to taste life twice, in the moment and in retrospect.' ,
        author: 'Anaïs Nin'
    },
    {
        quote: 'Substitute \'damn\' every time you\'re inclined to write \'very;\' your editor will delete it and the writing will be just as it should be.',
        author: 'Mark Twain'
    },
    {
        quote: 'If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.',
        author: 'Toni Morrison'
    },
    {
        quote: 'One day I will find the right words, and they will be simple.',
        author: 'Jack Kerouac, The Dharma Bums'
    }
]

const qut = document.querySelector('q')

const auth = document.querySelector('h4')

const btn = document.querySelector('button')

const randNum =()=> Math.floor(Math.random() * quoteInfo.length)

btn.addEventListener('click', function(){
    let quoteInd = randNum()
    qut.textContent = quoteInfo[quoteInd].quote
    auth.textContent = quoteInfo[quoteInd].author
})