//KEYBOARD EVENT

//1.KEYDOWN :- Fires when you press a key on the keyboard and it fires repetedly while you hold down a key

const example1 = document.getElementById("input_id");

example1.addEventListener("keydown", (ex) => {
    ex.target.style.backgroundColor = "blue"; 
})

//2.KEYUP :- fires when you relase key on keyboard

const example2 = document.getElementById("input_id1");

example2.addEventListener("keyup", (ex2) => {
    ex2.target.style.backgroundColor = "green"
})

//3.KEYPRESS :- fires when you press a character keyboard

const example3 = document.getElementById("input_id2");

example3.addEventListener("keypress" , (ex3) => {
    ex3.target.style.backgroundColor = "red"
})