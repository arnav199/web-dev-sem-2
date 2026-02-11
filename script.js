const bnt=document.querySelector("button");
bnt.classList.add("bnt")




function print(){
    console.log("congrats to discover click");
}

bnt.addEventListener("click",print);
bnt.removeEventListener("Stop",print);