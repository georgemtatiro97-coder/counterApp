let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count

};
  let countString = document.getElementById("noEl")
function save (){
   countEl.innerText = 0

 countString.innerText+= count + " - "
 count = 0
 

}

function reset() {
   countString.innerText = "Previous Entries: "

}