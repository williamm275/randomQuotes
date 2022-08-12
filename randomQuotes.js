function randomMessage(num) {
    num = Math.floor(Math.random() * 5);
    if (num === 0) {
        return "“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein";
    }
    if (num === 1) {
        return "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi";
    }
    if (num === 2) {
        return "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain";
    }
    if (num === 3) {
        return "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt";
    }
    if (num === 4) {
        return "“When you change your thoughts, remember to also change your world.”— Norman Vincent Peale";
    }
    if (num === 5) {
        return "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson";
    }
}