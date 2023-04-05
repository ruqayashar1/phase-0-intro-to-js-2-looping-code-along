// Code your solutions in this file
const gifts = ["Guadalupe", "Ollie" ,"Aki"];

function writeCards(){
    const response = []
    let i;
    for(i= 0; i <gifts.length; i++){
response[i] = `Thank you, ${gifts[i]}, for the wonderful surprise gift!`
    }
    return response;
}

function countDown(){
    let i = 10;
    while (i>=0)
    console.log(i--);
}
countDown()