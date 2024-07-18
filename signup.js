
const fname = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const confirmpass = document.querySelector("#confirmpass");
const button = document.querySelector(".button");
const error = document.querySelector(".error");
const icon = document.querySelector("i");
let arr =[fname,email,pass,confirmpass];
arr.forEach(e=>{
    e.addEventListener("input",function(){
        e.classList.remove('error');
        e.parentElement.children[0].classList.remove('err');
    })
})
let done=function(x){
   arr.forEach(e => {
        if(e.value ==='' || e.value == null){
            e.classList.add('error');
            e.parentElement.children[0].classList.add('err');
           x.preventDefault();
        }
       
    });
}
let passfun =function(x){
 if(pass.value !== confirmpass.value){
     let arr1=[pass,confirmpass];
     arr1.forEach(e=>{
         e.classList.add('error');
         e.parentElement.children[0].classList.add('err');
         x.preventDefault();
     })
 }
}    
    
    
button.addEventListener('click',done);
button.addEventListener('click', passfun);

    



