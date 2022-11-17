const randomQuote = () => {
    const quote = [];
    const quoteSelector = Math.floor(Math.random() * 6);
    console.log(quoteSelector);
    if (quoteSelector === 0) {
        quote.push("“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein");
    } else if (quoteSelector === 1) {
        quote.push("“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi");
    } else if (quoteSelector === 2) {
        quote.push("“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain");
    } else if (quoteSelector === 3) {
        quote.push("“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt");
    } else if (quoteSelector === 4) {
        quote.push("“When you change your thoughts, remember to also change your world.”— Norman Vincent Peale");
    } else if (quoteSelector === 5) {
        quote.push("“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. — Walter Anderson");
    }
    return quote.join(" ");
}