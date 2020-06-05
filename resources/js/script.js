const first = document.getElementsByClassName("black");
const colorBars = document.getElementsByClassName("color-bar");
const resetButton = document.getElementById('reset');
let clickedButtons = [];

let index = 0;

let canChange = [1,1,1,1,1,1];

const changeColor = (color)=>{

    return function(){
        if (canChange[index]){
            colorBars.item(index).style.backgroundColor = color;
        }
    }

    
}

const restoreColor = ()=>{

    if (canChange[index]){
        colorBars.item(index).style.backgroundColor = 'grey';
    }
}

const setColor = (color)=>{

    return function (e){
        colorBars.item(index).style.backgroundColor = color;
        canChange[index] = 0;
        e.target.style.border = '6px solid red'
        clickedButtons.push(e.target);
    }

}



for (let i=0;i<first.length;i++){
    first.item(i).addEventListener('mouseover',changeColor('black'));
    first.item(i).addEventListener('mouseout',restoreColor);
    first.item(i).addEventListener('click',setColor('black'));
}

resetButton.addEventListener('click',()=>{
    canChange = [1,1,1,1,1,1];
    const len = colorBars.length;

    for(let i=0;i<len;i++){
        colorBars.item(i).style.backgroundColor = 'grey';
    }

    clickedButtons.forEach((element)=>{element.style.border=""});
})
