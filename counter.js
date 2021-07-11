let increment = document.querySelector("#ADD_COUNT");
let decrement = document.querySelector("#LOWER_COUNT");
let countValue = document.querySelector("#countValue");

let count = 0;

increment.addEventListener("click" , ()=>{
    if(count <= 49) {
        count++;
    }
    countValue.innerText = count;
})
;
decrement.addEventListener("click" , ()=>{
    if(count >= 1) {
        count--;
    }
    countValue.innerText = count;
});
