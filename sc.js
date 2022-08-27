const themepad=document.querySelector('.themepad')
const body=document.getElementsByTagName("body")[0]
const caculator=document.querySelector('.calculator')
const title=document.querySelector('.title')
const calculatorback=document.querySelector('.btns')
const display=document.querySelector('.display')
const dot1=document.getElementById('dot1')
const dot2=document.getElementById('dot2')
const dot3=document.getElementById('dot3')
const numbers=document.querySelectorAll('.number')
const equal=document.querySelector('.equal')
const del=document.querySelector('.del')
const reset=document.getElementById('reset')
var currentnumber=document.querySelector('.current')
const result=document.getElementById('result')
const operations=document.querySelectorAll('.operation')
var firstnumber=""
var secondnumber=""
var operator=""
var last=false
var operatorlength=0
var st=operator.length
 var  writesecond=false;
var seconnumberwrote=false
function resetnumbers() {
currentnumber.innerHTML=""
result.innerHTML=""
firstnumber=""
secondnumber=""
operator=""
operatorlength=0


}
function deleteop(){

}
function deletenum() {
   currentnumber.innerHTML=currentnumber.innerHTML.slice(0,-1)
   if(seconnumberwrote){
secondnumber=secondnumber.slice(0,-1)
seconnumberwrote=false
   }
  


}



function addnumber(event)
 {  
   if(event.target.innerHTML=='.' && currentnumber.innerHTML.includes('.'))return
currentnumber.innerHTML+= event.target.innerHTML


}


function chooseoperation(operation) {


   if(isNaN(currentnumber.innerHTML.charAt(currentnumber.innerHTML.length-1)) )
   {
       console.log("notanumber")
      return;
    
   }
 
   currentnumber.innerHTML+= operation.target.innerHTML
operator+=operation.target.innerHTML
operatorlength=operatorlength+1

if(operatorlength>1)
{
  console.log(operator)
   let f=parseFloat(firstnumber)
let s=parseFloat(secondnumber)
  if(operatorlength==2 && operator.charAt(0)=='+' )
  {
  firstnumber=f+s
  console.log(firstnumber)
  currentnumber.innerHTML=firstnumber+operation.target.innerHTML
  operator=operation.target.innerHTML
  operatorlength=operatorlength-1
  secondnumber=""
  writesecond=true;
  console.log("sum")
 }

 
if(operatorlength==2 && operator.charAt(0)=='-')
{
firstnumber=f-s
console.log(firstnumber)
currentnumber.innerHTML=firstnumber+operation.target.innerHTML
operator=operation.target.innerHTML
operatorlength=operatorlength-1
secondnumber=""
writesecond=true;
console.log("mines")

}

  if(operatorlength==2 && operator.charAt(0)=='*')
{
   
firstnumber=f*s
console.log(firstnumber)
currentnumber.innerHTML=firstnumber+operation.target.innerHTML
operator=operation.target.innerHTML
operatorlength=operatorlength-1
secondnumber=""
writesecond=true;
console.log("sum")
lastnum=false
}  if(operatorlength==2 && operator.charAt(0)=='/' )
{
   
firstnumber=f/s
console.log(firstnumber)
currentnumber.innerHTML=firstnumber+operation.target.innerHTML
operator=operation.target.innerHTML
operatorlength=operatorlength-1
secondnumber=""
writesecond=true;
console.log("sum")
lastnum=false
 

  }  
} 
}
 




function calculate() {
let f=parseFloat(firstnumber)
let s=parseFloat(secondnumber)
   

   switch(operator)
   {
case '+':result.innerHTML=f+s ;break;
case '-':result.innerHTML=f-s ;break;
case '*':result.innerHTML=f*s ;break;
case '/':result.innerHTML=f/s ;break;

   }





}


function savenumbers(s){
  console.log(operator)
   if(operatorlength==0){
               
                firstnumber+=s.target.innerHTML
}
if(operatorlength==1){
secondnumber+=s.target.innerHTML
seconnumberwrote=true

}

}


function keepcalculating(){

}

function update(){
   if(isNaN(currentnumber.innerHTML.slice(-1)) )
   {
 operatorlength=operatorlength-1
     console.log(operatorlength)
    operator=operator.slice(0,-1)
     
   }
 



}
numbers.forEach(num=>{
num.addEventListener('click',addnumber);
  
})
numbers.forEach(num=>{
   num.addEventListener('click',savenumbers);
     
   })
   numbers.forEach(num=>{
      num.addEventListener('click',keepcalculating);
        
      })


operations.forEach(e=>{
   e.addEventListener('click',chooseoperation);
     
   })
  

   equal.addEventListener('click',()=>{
      
      calculate()
   })
    
   del.addEventListener('click',()=>{
      update()
      deletenum()
   })
   reset.addEventListener('click',()=>{
    resetnumbers()
   })
   dot2.addEventListener('click',()=>{
    reset.classList.add('theme2');
    del.classList.add('theme2')
    equal.classList.add('theme2')
    display.classList.add('theme2')
    calculatorback.classList.add('theme2')
    body.classList.add('theme2')
    caculator.classList.add('theme2')
    title.classList.add('theme2')
    themepad.classList.add('theme2')
     reset.classList.remove('theme3');
      del.classList.remove('theme3')
      equal.classList.remove('theme3')
      display.classList.remove('theme3')
      calculatorback.classList.remove('theme3')
      body.classList.remove('theme3')
      caculator.classList.remove('theme3')
      title.classList.remove('theme3')
      themepad.classList.remove('theme3')
      dot1.style.opacity='0'
      dot3.style.opacity='0'
      dot2.style.opacity='1'
   })
   dot3.addEventListener('click',()=>{
      reset.classList.add('theme3');
      del.classList.add('theme3')
      equal.classList.add('theme3')
      display.classList.add('theme3')
      calculatorback.classList.add('theme3')
      body.classList.add('theme3')
      caculator.classList.add('theme3')
      title.classList.add('theme3')
      themepad.classList.add('theme3')
      dot1.style.opacity='0'
      dot2.style.opacity='0'
      dot3.style.opacity='1'
     })
 dot1.addEventListener('click',()=>{
      reset.classList.remove('theme3');
      del.classList.remove('theme3')
      equal.classList.remove('theme3')
      display.classList.remove('theme3')
      calculatorback.classList.remove('theme3')
      body.classList.remove('theme3')
      caculator.classList.remove('theme3')
      title.classList.remove('theme3')
      themepad.classList.remove('theme3')
      reset.classList.remove('theme2');
      del.classList.remove('theme2')
      equal.classList.remove('theme2')
      display.classList.remove('theme2')
      calculatorback.classList.remove('theme2')
      body.classList.remove('theme2')
      caculator.classList.remove('theme2')
      title.classList.remove('theme2')
      themepad.classList.remove('theme2')
      dot2.style.opacity='0'
      dot3.style.opacity='0'
      dot1.style.opacity='1'
     })

