
let button = document.getElementById("myButton")
button.addEventListener("click", splitNumber)

function splitNumber(){
    const num = Number(document.getElementById("number").value)
    const numSplit = Number(document.getElementById("split").value)

    const output = document.getElementById("output")
    output.innerHTML = "";

    if(!num | !numSplit | num > 100 | numSplit <= 0){
        alert("Invalid input");
        return;
    }

    const baseNo = Math.floor(num/numSplit);
    const remainder = num%numSplit;

    const result = [];

    for(let i = 0; i < numSplit; i++){
        if(i < remainder){
            result.push(baseNo +1)
        }else{
            result.push(baseNo)
        }
    }
    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    let boxVal = Math.floor(100/num);


    result.forEach( value => {
        const box = document.createElement("div");
        box.style.flex = value;
        box.innerText = value;
        box.style.fontWeight = "bold";
        box.style.backgroundColor = randomColor();
        box.style.color = "white";
        box.style.width = (value*boxVal)+"%";
        box.style.height = "100%";
        box.className = "rounded d-flex justify-content-center align-items-center";

        output.appendChild(box);
    })
}