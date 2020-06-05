let first = []
first.push(document.getElementById("b-first"));
first.push(document.getElementById("b-second"));
first.push(document.getElementById("b-third"));
first.push(document.getElementById("b-fourth"));


const colorBars = document.getElementsByClassName("color-bar");
const resetButton = document.getElementById('reset');
let clickedButtons = [];

let index = 3;

let canChange = [1,1,1,1,1,1];

const changeColor = (color,inx)=>{

    return function(){
        if (canChange[inx]){
            colorBars.item(inx).style.backgroundColor = color;
        }
    }

    
}

const restoreColor = (inx)=>{

    return ()=>{
        if (canChange[inx]){
            colorBars.item(inx).style.backgroundColor = 'grey';
        }
    }


}

const setColor = (color,inx)=>{

    return function (e){
        colorBars.item(inx).style.backgroundColor = color;
        canChange[inx] = 0;
        e.target.style.border = '6px solid red'
        clickedButtons.push(e.target);
    }

}



for (let i=0;i<first.length;i++){
    first[i].addEventListener('mouseover',changeColor('black',i));
    first[i].addEventListener('mouseout',restoreColor(i));
    first[i].addEventListener('click',setColor('black',i));
}

resetButton.addEventListener('click',()=>{
    canChange = [1,1,1,1,1,1];
    const len = colorBars.length;

    for(let i=0;i<len;i++){
        colorBars.item(i).style.backgroundColor = 'grey';
    }

    clickedButtons.forEach((element)=>{element.style.border=""});
})
