let display=document.querySelector(".display")

function empt(){
    display.innerHTML=" "
}
function del(){
    let numb=display.innerHTML
    let entry=numb.toString().split("").slice(0, -1).join("")
    display.innerHTML=entry
}
function div(){
    let numb=display.innerHTML
    let entry=numb+" / "
    display.innerHTML=entry
}
// function div(){
//     let n1=display.innerHTML
//     display.innerHTML=""
//     let n2=display.innerHTML
//     let res=parseFloat(n1)/parseFloat(n2)
//     display.innerHTML=entry
//     function equal(){
//         display.innerHTML=res
//     }
// }
function one(){
     let numb=display.innerHTML
     let entry=numb+"1"
     display.innerHTML=entry
}
function two(){
    let numb=display.innerHTML
    let entry=numb+"2"
    display.innerHTML=entry
}
function three(){
    let numb=display.innerHTML
    let entry=numb+"3"
    display.innerHTML=entry
}
function mult(){
    let numb=display.innerHTML
    let entry=numb+" * "
    display.innerHTML=entry
}
function four(){
    let numb=display.innerHTML
    let entry=numb+"4"
    display.innerHTML=entry
}
function five(){
    let numb=display.innerHTML
    let entry=numb+"5"
    display.innerHTML=entry
}
function six(){
    let numb=display.innerHTML
    let entry=numb+"6"
    display.innerHTML=entry
}
function add(){
    let numb=display.innerHTML
    let entry=numb+" + "
    display.innerHTML=entry
}
function seven(){
    let numb=display.innerHTML
    let entry=numb+"7"
    display.innerHTML=entry
}
function eight(){
    let numb=display.innerHTML
    let entry=numb+"8"
    display.innerHTML=entry
}
function nine(){
    let numb=display.innerHTML
    let entry=numb+"9"
    display.innerHTML=entry
}
function sub(){
    let numb=display.innerHTML
    let entry=numb+" - "
    display.innerHTML=entry
}
function desi(){
    let numb=display.innerHTML
    let entry=numb+"."
    display.innerHTML=entry
}
function zero(){
    let numb=display.innerHTML
    let entry=numb+"0"
    display.innerHTML=entry
}
function equal(){
    let numb=display.innerHTML
    let result=numb.split(" ")
    if(result[0]==" " || result[0]=="."){
        display.innerHTML=" "
    }
    else{
        let cal=eval(result.join(""))
        console.log(cal)
        display.innerHTML=cal
    }
}
