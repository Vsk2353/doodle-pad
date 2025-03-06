let sketchPad = document.querySelector(".container");
let bStart = document.querySelector("#one");

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
        grid.style.backgroundColor = "blue";
    })
})
})