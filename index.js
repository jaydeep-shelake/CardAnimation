const card = document.querySelector('.card');
const container = document.querySelector('.container');
const heading = document.querySelector('.heading');
const shoe = document.querySelector('.shoe img');
const buy = document.querySelector('.buy button');
const info = document.querySelector('.info h3');
const size = document.querySelector('.size');


container.addEventListener('mousemove',(e)=>{
//   console.log(e.pageX);
let xAxis = ((window.innerWidth/2)-e.pageX)/15;
let yAxis = ((window.innerHeight/2)-e.pageY)/15;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener('mouseenter',(e)=>{
card.style.transition ='none';
heading.style.transform='translateZ(150px)';
shoe.style.transform='translateZ(200px) rotateZ(-45deg)';
info.style.transform='translateZ(120px)';
size.style.transform='translateZ(100px)';
buy.style.transform='translateZ(75px)';
});

container.addEventListener('mouseleave',(e)=>{
  card.style.transition ='all 0.5s ease'
 card.style.transform =`rotateY(0deg) rotateX(0deg)`;
 heading.style.transform='translate(0px)';
 shoe.style.transform='translateZ(0px) rotateZ(0deg)';
 info.style.transform='translateZ(0px)';
size.style.transform='translateZ(0px)';
buy.style.transform='translateZ(0px)';
});// when i remove mouse form container we want to its in original position