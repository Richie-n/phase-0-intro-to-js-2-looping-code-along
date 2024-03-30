
let names = ["Charlie", "Samip", "Ali"]
function writeCards(names,event){
    let messages = []
    for (let i = 0; i < names.length; i++)
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    return messages
}
console.log(writeCards(names, "birthday"))

function countDown(num) {
    let count = num; 
    while (count >= 0) {
        console.log(count--); 
    }
}

countDown(10);




