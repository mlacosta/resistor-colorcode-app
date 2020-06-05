let first = [];
first.push(document.getElementById("b-first"));
first.push(document.getElementById("b-second"));
first.push(document.getElementById("b-third"));
first.push(document.getElementById("b-fourth"));

let second = [];
second.push(document.getElementById("br-first"));
second.push(document.getElementById("br-second"));
second.push(document.getElementById("br-third"));
second.push(document.getElementById("br-fourth"));

let third = [];
third.push(document.getElementById("r-first"));
third.push(document.getElementById("r-second"));
third.push(document.getElementById("r-third"));
third.push(document.getElementById("r-fourth"));

let fourth = [];
fourth.push(document.getElementById("o-first"));
fourth.push(document.getElementById("o-second"));
fourth.push(document.getElementById("o-third"));
fourth.push(document.getElementById("o-fourth"));


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

        if (canChange[inx]){
            colorBars.item(inx).style.backgroundColor = color;
            canChange[inx] = 0;
            console.log(canChange)
            e.target.style.border = '6px solid red'
            clickedButtons.push(e.target);
        }

    }

}

function animate(list,color){
    for (let i=0;i<first.length;i++){
        list[i].addEventListener('mouseover',changeColor(color,i));
        list[i].addEventListener('mouseout',restoreColor(i));
        list[i].addEventListener('click',setColor(color,i));
    }

}

animate(first,'black');
animate(second,'brown');
animate(third,'red');
/*
for (let i=0;i<first.length;i++){
    first[i].addEventListener('mouseover',changeColor('black',i));
    first[i].addEventListener('mouseout',restoreColor(i));
    first[i].addEventListener('click',setColor('black',i));
}

for (let i=0;i<second.length;i++){
    second[i].addEventListener('mouseover',changeColor('brown',i));
    second[i].addEventListener('mouseout',restoreColor(i));
    second[i].addEventListener('click',setColor('brown',i));
}

for (let i=0;i<third.length;i++){
    third[i].addEventListener('mouseover',changeColor('red',i));
    third[i].addEventListener('mouseout',restoreColor(i));
    third[i].addEventListener('click',setColor('red',i));
}
*/
resetButton.addEventListener('click',()=>{
    canChange = [1,1,1,1,1,1];
    const len = colorBars.length;

    for(let i=0;i<len;i++){
        colorBars.item(i).style.backgroundColor = 'grey';
    }

    clickedButtons.forEach((element)=>{element.style.border=""});
})
