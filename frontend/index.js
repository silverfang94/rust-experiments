import * as wasm from "rust-calculate";

document.querySelector('#addBtn').addEventListener('click', () => {
    let x = document.querySelector('#firstValue').value;
    let y = document.querySelector('#secondValue').value;
    if (!x && !y) {
     alert("please input values") 
     return
    } 
    let z = wasm.add(x, y)
    document.querySelector('#answerDisplay').innerHTML = z
 })
