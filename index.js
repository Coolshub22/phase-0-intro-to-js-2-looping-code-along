// // Code your solutions in this file
// for (let age =30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);


function writeCards(cards, event) {
    let messages = [];
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
writeCards(cards, "birthday");
console.log(messages)


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--; // Decrease the number in each iteration
    }
}