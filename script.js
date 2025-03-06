let sketchPad = document.querySelector(".container");
let bStart = document.querySelector("#one");
let bChoice = document.querySelector("#two");

bStart.addEventListener("click", function (){
    sketchPad.innerHTML="";
    for(let i=1;i<=16*16;i++){
        let square = document.createElement("div");
        square.classList.add("grid-square");
        sketchPad.appendChild(square);
    }

    let grids = document.querySelectorAll(".grid-square");

    grids.forEach(grid => {
        grid.addEventListener("mouseenter", function (){
        grid.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    })
})
})

bChoice.addEventListener("click", function (){
    let choice = prompt("Enter the number of squares per side for the new grid (min: 1, max:100)","");
    sketchPad.innerHTML = "";
    if(choice<1 || choice>100 || isNaN(choice)){
        alert("Enter within the limits");
        return;
    }
    for(let i=1;i<=choice*choice;i++){
        let square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `calc(100%/${choice})`;
        square.style.height = `calc(100%/${choice})`;
        sketchPad.appendChild(square)
    }
    let grids = document.querySelectorAll(".grid-square");

    grids.forEach(grid => {
        grid.addEventListener("mouseenter", function (){
        grid.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;})
})
})