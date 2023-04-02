const quotes = [
    {
        quote : "자신의 하루를 자신의 마지말 날이라고 생각하라.",
        author : "호라티우스"
    },
    {
        quote : "우리의 내일에는 두가지의 길로 나뉜다. 불안의 길과 믿음의 길. 우리는 그 둘중 하나의 길을 선택해야 한다.",
        author : "헨리 워드 비처"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
