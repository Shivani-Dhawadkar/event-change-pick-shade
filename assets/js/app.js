//alert("hello!");
let cl = console.log;

const selectColor = document.getElementById('selectColor');
//cl(selectColor)

const all = Array.from(document.querySelectorAll(".all"));

const onSelectColor = (eve) =>{
    
    let getclass ="."+eve.target.value;
    cl(getclass);
    all.forEach(div => div.classList.add('d-none'));

    let getDivs = [...document.querySelectorAll(getclass)];

    getDivs.forEach(div => div.classList.remove('d-none'));
};









selectColor.addEventListener('change', onSelectColor);