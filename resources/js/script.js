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
            e.target.style.border = '6px solid lightgreen'
            clickedButtons.push(e.target);
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
    const len = colorBars.length;

    for(let i=0;i<len;i++){
        colorBars.item(i).style.backgroundColor = 'grey';
    }

    clickedButtons.forEach((element)=>{element.style.border=""});
})
