let btn = document.getElementById("btn");
let output = document.getElementById("output");

let quotes =
 [
    '“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein',
    '“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi',
    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain',
    '“When you change your thoughts, remember to also change your world.”—Norman Vincent Peale',
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '"It is better to fail in originality than to succeed in imitation." — Herman Melville',
    '"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
    '“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau',
    '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',
    '“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers',
    '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." — Winston Churchill',
    '“Don’t let yesterday take up too much of today.” — Will Rogers',
    '“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” — Unknown ',
    '“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs',
    '“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ―Vernon Sanders Law',
    '“Either you run the day or the day runs you.” — Jim Rohn',
    '“He who conquers himself is the mightiest warrior.” — Confucius ',
    '“Try not to become a man of success, but rather become a man of value.” – Albert Einstein',
    '“One man with courage makes a majority.” – Andrew Jackson',
    '“He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.” – Epictetus',
    "“Opportunities don't happen, you create them.” — Chris Grosser",
];

btn.addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
});