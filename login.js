const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const button = document.querySelector('.button');
let arr =[email,pass];
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
button.addEventListener('click',done);