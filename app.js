const newQuote = document.querySelector('.confirm-btn')


newQuote.addEventListener('click', ()=>{
    console.log('button is click')
    let randomID = Math.floor(Math.random()*20)+1
    findQuote(randomID)
    
})

const findQuote = (generatedId)=>{
    ID= generatedId.toString()
    generatedQuote = Quotes.filter((q)=> q.id === ID)
    displayQuote(generatedQuote[0])
    console.log(`id: ${ID}`)
}

const displayQuote = (quote)=>{

    document.querySelector('.quote-master-contianer').innerHTML = `
    <div class="quote-container">
            <div class="quote-icon-up">
                <i class="fas fa-quote-left"></i>
            </div>
            <div class="quote-quote">
                <p> ${quote.quote}</p>
            </div>
            <div class="quote-icon-down">
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="quote-author">
                <p> ${quote.author} </p>
            </div>
        </div>`
}
// class Quote {
//     constructor(id, quote, author) {
//         this.id=id
//         this.quote=quote
//         this.author=author
//       }
// }

// const Q1 = new Quote('1', 'If you fail to plan, you are planning to fail', 'Ben Franklin')
// const Q2 = new Quote('2', 'Fail early, fail often, but always fail forward', 'John Maxwell')
// const Q3 = new Quote('3', 'All you need is the plan, the road map, and the courage to press on to your destination', 'Earl Nightinagle')

let Quotes = []
Quotes.push({
    id: '1',
    quote: 'If you fail to plan, you are planning to fail',
    author: 'Ben Franklin'
})

Quotes.push({
    id:'2',
    quote:'Fail early, fail often, but always fail forward',
    author:'John Maxwell'
})

Quotes.push({
    id:'3',
    quote:'All you need is the plan, the road map, and the courage to press on to your destination',
    author:'Earl Nightinagle'
})

Quotes.push({
    id:'4',
    quote:'Know exactly one thing you will do each day to make consistent progress towards your goal',
    author: 'Internet'
})

Quotes.push({
    id:'5',
    quote: 'A good plan violently executed now is better than a perfect plan execute next week',
    author:'George S Patton'
})

Quotes.push({
    id:'6',
    quote: 'How you do anything is how you do everything!',
    author: 'Internet'
})

Quotes.push({
    id:'7',
    quote: `Depressed: You are living in the past
    Anxious: You are living in the future
    Happiness: You are living in the present`,
    author: 'Internet'
})

Quotes.push({
    id:'8',
    quote: 'Begin to live out of glory of your imagination not your memory',
    author: 'Robin Sharma'
})

Quotes.push({
    id:'9',
    quote: 'We carry stress, fear and worry from yesterday with us into today. When we are presented opportunities, we should not access our past capability',
    author:'Internet'
})

Quotes.push({
    id:'10',
    quote: 'Where you are is a result of who you were. Where you go depends entirely on what you choose to be NOW',
    author: 'Internet'
})

Quotes.push({
    id:'11',
    quote: 'Old ways do not open a new door',
    author: 'Internet'
})

Quotes.push({
    id:'12',
    quote:'Life, after all, is not as good or as bad as we believe it to be',
    author: 'Guy de Maupassant'
})

Quotes.push({
    id: '13',
    quote:'Mindfulness gives you time, time give you choice, choice, skillfully made, lead you to freedom',
    author: 'Bhante H Gunaratana'
})

Quotes.push({
    id:'14',
    quote: 'May your heart full of love and mind full of goals',
    author: 'Internet'
})

Quotes.push({
    id:'15',
    quote: 'Change the way you look at things and the things you look at will change',
    author: 'Wayne Dye '
})

Quotes.push({
    id:'16',
    quote: 'When you forgive, you heal. When you let go, you grow',
    author:'Buddha'
})

Quotes.push({
    id:'17',
    quote: 'The journey of a thousand miles begins with one step',
    author:'Internet'
})

Quotes.push({
    id:'18',
    quote:'A smiling face is not a sign of a perfect life. It is a symbol of a hopeful one',
    author: 'Internet'
})

Quotes.push({
    id:'19',
    quote: 'Don’t let the world make you hard. Be soft. Don’t let pain make you hate. Don’t let the bitterness steal your sweetness',
    author: 'Kurt Vonnegut Jr.'
})

Quotes.push({
    id:'20',
    quote: 'If you believe in yourself and work hard, your dreams will come true',
    author:'Internet'
})