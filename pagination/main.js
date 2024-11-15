const progress = document.getElementById('progress')
const pre_btn = document.getElementById('btn_pre')
const next_btn = document.getElementById('btn_next')
const circals = document.querySelectorAll('.circal')


currentValue = 1
next_btn.addEventListener('click',()=>{
    currentValue++
   if(currentValue > circals.length){
       currentValue = circals.length
   }
   Updata()
})
pre_btn.addEventListener('click',()=>{
    currentValue--
   if(currentValue > circals.length){
       currentValue = circals.length
   }
   Updata()   
})

function Updata(){
    circals.forEach((circal, idx)=>{
        if(idx < currentValue){
            circal.classList.add('active')
        }
        else{
            circal.classList.remove('active')
        }
    })
    
    const actives= document.querySelectorAll('.active')
    progress.style.width= (actives.length -1 )/(circals.length-1)*100 + '%' 
 if(currentValue== 1){
     pre_btn.disabled = true;

 }   
 else if(currentValue == circals.length){
    next_btn.disabled = true;
 }
 else{
     next_btn.disabled = false;
     pre_btn.disabled = false;
 }
}
