let input = prompt("Please enter a positive number: ")
if (!isNaN(input) && input>0 && input.trim !==" "){
    let odd=1
    let number_rec = []
    for (let i = 0; i < input; i++){
        number_rec.push(odd)
        console.log(number_rec.join(" "));
        odd +=2
        
    }
}
else{
    console.log("Invalid input")
}