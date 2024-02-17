let count = 0;
let result= document.getElementById('count-el');

function increment(){
    count++;
    
    result.innerText = count;
}

// DOM - means how to use JAVASCRIPT to modify a website

function save(){
    //difference between innerText and textContent
    previous_entries = document.getElementById("save-el");
    let variable = " "+count + " -" ;
    previous_entries.innerText += variable;

    count = 0;
    result.innerText = 0;
}

console.log("My points: " + 5 + 9)
//if one string then everthing else becomes string.
