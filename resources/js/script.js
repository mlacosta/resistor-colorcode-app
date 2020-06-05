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

let fifth = [];
fifth.push(document.getElementById("y-first"));
fifth.push(document.getElementById("y-second"));
fifth.push(document.getElementById("y-third"));
fifth.push(document.getElementById("y-fourth"));

let sixth = [];
sixth.push(document.getElementById("g-first"));
sixth.push(document.getElementById("g-second"));
sixth.push(document.getElementById("g-third"));
sixth.push(document.getElementById("g-fourth"));

let seventh = [];
seventh.push(document.getElementById("bl-first"));
seventh.push(document.getElementById("bl-second"));
seventh.push(document.getElementById("bl-third"));
seventh.push(document.getElementById("bl-fourth"));

let eighth = [];
eighth.push(document.getElementById("p-first"));
eighth.push(document.getElementById("p-second"));
eighth.push(document.getElementById("p-third"));
eighth.push(document.getElementById("p-fourth"));

let ninth = [];
ninth.push(document.getElementById("gy-first"));
ninth.push(document.getElementById("gy-second"));
ninth.push(document.getElementById("gy-third"));

let tenth = [];
tenth.push(document.getElementById("w-first"));
tenth.push(document.getElementById("w-second"));
tenth.push(document.getElementById("w-third"));

const colorBars = document.getElementsByClassName("color-bar");
const resetButton = document.getElementById('reset');
const display = document.getElementsByClassName("display").item(0);

let clickedButtons = [];

let index = 3;

let canChange = [1,1,1,1,1,1];

let resValue = 0;

const changeColor = (color,inx)=>{

    return function(){
        if (canChange[inx]){
            colorBars.item(inx).style.backgroundColor = color;
            calValue();
        }
    }

    
}

const restoreColor = (inx)=>{

    return ()=>{
        if (canChange[inx]){
            colorBars.item(inx).style.backgroundColor = 'black';
            calValue();
        }
    }


}

const setColor = (color,inx)=>{

    return function (e){

        if (canChange[inx]){
            colorBars.item(inx).style.backgroundColor = color;
            canChange[inx] = 0;
            console.log(canChange)
            e.target.style.border = '6px solid lightgreen'
            clickedButtons.push(e.target);
            calValue();
        }

        
    }

}

const animate = (list,color)=>{
    for (let i=0;i<list.length;i++){
        list[i].addEventListener('mouseover',changeColor(color,i));
        list[i].addEventListener('mouseout',restoreColor(i));
        list[i].addEventListener('click',setColor(color,i));
    }

}

const getVal = (bars)=>{

    let dig = 0;

    switch(bars.style.backgroundColor){
        case ('black'):
            dig = 0;
            break;
        case ('brown'):
            dig = 1;
            break;
        case ('red'):
            dig = 2;
            break;
        case ('orange'):
            dig = 3;
            break;
        case ('yellow'):
            dig = 4;
            break;
        case ('green'):
            dig = 5;
            break;
        case ('blue'):
            dig = 6;
            break;
        case ('purple'):
            dig = 7;
            break;
        case ('grey'):
            dig = 8;
            break;
        case ('honeydew'):
            dig = 9;
            break;
    }

    return dig;
}

const calValue = ()=>{
    let multiplier = 0;
    let dig3 = 0;
    let dig2 = 0;
    let dig1 = 0;

    dig1 = getVal(colorBars[0]);
    dig2 = getVal(colorBars[1]);
    dig3 = getVal(colorBars[2]);
    multiplier = Math.pow(10,getVal(colorBars[3]));

    resValue = dig1*100 + dig2*10 +dig3;
    display.innerHTML = `${resValue*multiplier}<span>OHMs</span>`;
}



animate(first,'black');
animate(second,'brown');
animate(third,'red');
animate(fourth,'orange');
animate(fifth,'yellow');
animate(sixth,'green');
animate(seventh,'blue');
animate(eighth,'purple');
animate(ninth,'grey');
animate(tenth,'honeydew')

resetButton.addEventListener('click',()=>{
    canChange = [1,1,1,1,1,1];
    const len = colorBars.length - 2; // I don't touch the last two bars for now

    for(let i=0;i<len;i++){
        colorBars.item(i).style.backgroundColor = 'black';
    }

    //colorBars.item(3).style.backgroundColor = 'black';

    clickedButtons.forEach((element)=>{element.style.border=""});
    display.innerHTML = 0 + '<span>OHMs</span>';

})

