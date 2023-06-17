// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts)


let thankYouLetter=["Guadalupe", "Ollie", "Aki"]
let birthday=0
let birthdayNotes=[]
function writeCards(thankYouLetter,birthday){
    for(birthday=0;birthday<thankYouLetter.length;birthday++){
        birthdayNotes[birthday]=`Thank you, ${thankYouLetter[birthday]}, for the wonderful surprise gift!`
        console.log(birthdayNotes[birthday])
    }
    return birthdayNotes
}
writeCards(thankYouLetter,birthday)


let n
function countDown(n){
   while(n>=0){
    console.log(n)
    n--
   } 
   return
}
countDown(n)