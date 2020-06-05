const first = document.getElementsByClassName("black");
const colorBars = document.getElementsByClassName("color-bar");
const resetButton = document.getElementById('reset');

let index = 0;
let color;
let canChange = [1,1,1,1,1,1];

const changeColor = (e)=>{

    color = 'black'; 
    
    if (canChange[index]){
        colorBars.item(index).style.backgroundColor = color;
    }
    
}

const restoreColor = ()=>{

    if (canChange[index]){
        colorBars.item(index).style.backgroundColor = 'grey';
    }
}

const setColor = (e)=>{
    colorBars.item(index).style.backgroundColor = 'green';
    canChange[index] = 0;
    e.target.style.border = '6px solid red'
}



for (let i=0;i<first.length;i++){
    first.item(i).addEventListener('mouseover',changeColor);
    first.item(i).addEventListener('mouseout',restoreColor);
    first.item(i).addEventListener('click',setColor);
}

resetButton.addEventListener('click',()=>{
    canChange = [1,1,1,1,1,1];
})
