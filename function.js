


// function yazdirMerhaba(){
// //   alert("Merhaba BT7")
// console.log("Merhaba BT7")
// }




// yazdirMerhaba()


// yazdirMerhaba()
// yazdirMerhaba()



function yazdirParametre(message,degiskenName = "GS"){
    //   alert("Merhaba BT7")
    console.log(message, degiskenName)
    }
    
    
    
    
    yazdirParametre("Hola","BT8")
    yazdirParametre("Salut","BT9")
    yazdirParametre("Hola","BT10")
    yazdirParametre("Halo")
    yazdirParametre("Ehlen")

function calculate(name, yob){
const age = new Date().getFullYear() - yob
console.log(`${name} is ${age} years old`)
return age
}
console.log(calculate("Ahmet", 1990) )
const ismetAge = calculate("İsmet", 1890)

function add(){

const result1 = add(3, 5)
const result2 = add(5, 9)
const result3 = addShort(5, 9)

console.log(result1, result2)
console.log(result3)
}



function isEvenOrOdd(num) {
if(num%2 === 0){
    return "EVEN"
}else {
return "ODD"
}}


const num = prompt("Please enter a number:")




console.log(`${num} is ${isEvenOrOdd(num)}`)