//convert string message to array message inorder to work on each letter.
let message = 'adab';
console.log( "meesage is "+ message)

let arrayMessage = [ ];
for (let i =0 ; i < message.length ; i++ ){
    arrayMessage.push(message[i])
}


let source = ["a","b","c","d","e","f","g","h"]
let key = Math.floor(Math.random()*5)

console.log("key:"+ key)


let codedMessageArray = arrayMessage.map( letter =>{
    let i = source.findIndex(element=>element === letter);
    let ci = i+key;
    let cl = source[ci]
    return cl;
})


let codedMessage="";
codedMessageArray.forEach(i=>{
    codedMessage+=i;
})
console.log(codedMessage)