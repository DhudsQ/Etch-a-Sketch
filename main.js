const container=document.querySelector(".paint-container")
const reset=document.querySelector(".clean")
const newPanel=document.querySelector(".reset")
const rainbow=document.querySelector(".random")
const range=document.getElementById("range")
const rangeLabel=document.querySelector(".rangeText")
const tools=document.querySelectorAll(".tool-choice")
let color="#e66465"
let eraser=false;
let drawing=false
let random=false
const colorPicker=document.getElementById("background")
tools.forEach(boton=>{
        boton.addEventListener("click",()=>{
            tools.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");
        })
    })
rainbow.addEventListener("click",()=>{
    random=!random;
    rainbow.classList.toggle('active')
})
rangeLabel.textContent=`${range.value} x ${range.value}`
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function paintWall(wall){
    const choicenTool=document.querySelector(".tool-choice.active")
    if(choicenTool.dataset.info=='pencil'){
        if(random===true){
        colorPicker.value=getRandomColor();
    }
    wall.style.backgroundColor = colorPicker.value;
    }else{
        wall.style.backgroundColor="transparent"
    }
}
function createWalls(){
    rangeLabel.textContent=`${range.value} x ${range.value}`

    container.innerHTML = "";
    for(let i=0;i<range.value;i++){
    const rowTemp=document.createElement("div")
    rowTemp.classList.add("row-div")
    for(let j=0;j<range.value;j++){
        const temp=document.createElement("div")
        temp.classList.add("paint-wall")
        rowTemp.appendChild(temp)
    }
    container.appendChild(rowTemp)
}

const walls=document.querySelectorAll(".paint-wall")
walls.forEach(element => {
    element.addEventListener("mousedown",()=>{
    drawing=true;
    paintWall(element)
    });
    element.addEventListener("mouseover",()=>{
        if(drawing){
            paintWall(element)
        }
    });
   
});
reset.addEventListener("click",()=>{
    walls.forEach(element=>{
        element.style.backgroundColor="transparent";
    })
})
document.addEventListener("mouseup",()=>{
    drawing=false;
})
}

range.addEventListener("input",createWalls)
createWalls()