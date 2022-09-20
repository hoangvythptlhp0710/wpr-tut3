let aI = (document.querySelector("#a"));
let bI = (document.querySelector("#b"));
let cI = (document.querySelector("#c"));

const get = document.querySelector("button");

get.addEventListener("click", solveQEquation);

function solveQEquation(e){
    e.preventDefault();
    let a = Number (aI.value);
    let b = Number (bI.value);
    let c = Number (cI.value);
    let result = quadraticEquations((a),(b),(c));
    const createDiv = document.createElement("div");

    createDiv.textContent = result;
    document.body.appendChild(createDiv);

}

function linearEquation(a, b){
    if (a == 0) {
        if (b != 0){
            return "No root";
        }
        else{
            return "Infinite root";
        }
    }
    let x = (-b)/a;
    return x;
}

function quadraticEquations(a, b, c){
    if (a == 0) {
        return linearEquation(b,c);
    }
    else if (a == 0 && b == 0){
        return "There's no exist root";
    }
    else {
        let delta = (b * b) - (4*a*c);
        if (delta < 0){
            return "There's no solution";
        }
        else if (delta == 0){
            let x = (-b)/(2*a);
            return "There's only 1 solution: x = " + x;
        }
        else{
            let x1 = (-b + Math.sqrt(delta)) / (2*a);
            let x2 = (-b - Math.sqrt(delta)) / (2*a);
            return `x1 = ${x1} \nx2 = ${x2}`   
      }
    }
}