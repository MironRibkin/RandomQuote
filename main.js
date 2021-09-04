const mass = [
    {quote: "Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает... и никто не знает почему!", author: "Альберт Эйнштейн"},
    {quote: "Есть такие люди, к которым просто хочется подойти и поинтересоваться, сложно ли без мозгов жить.", author: "Фаина Раневская"},
    {quote: "Известно, что Раневская позволяла себе крепкие выражения, и когда ей сделали замечание, что в литературном русском языке нет слова «жопа», она ответила — странно, слова нет, а жопа есть...", author: "Фаина Раневская"},
    {quote: "— О, Господи!..\n" +
            "— Зови меня просто Дин.", author: "Сверхъестественное (Supernatural)"},
    {quote: "Меня вообще-то сложно удивить... О! Синяя машина!", author: "The Simpsons"}
]
const box = document.querySelectorAll(".quote")
const button = document.querySelector(".buttons");
var lastQuoteNumber = -1;
function randomQuote() {
    console.log(lastQuoteNumber);
    var i = Math.floor(Math.random() * mass.length );
    while (i===lastQuoteNumber){
        i = Math.floor(Math.random() * mass.length);
    }
    lastQuoteNumber = i;
    var quote = mass[i];
    return quote;
}
button.addEventListener("click", function () {
        for (let i = 0; i < box.length; i++) {
            var quote = randomQuote()
            box[i].getElementsByTagName("p")[0].textContent = quote.quote;
            document.querySelector(".author").textContent = quote.author;
        }
    }
)

