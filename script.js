let form=document.getElementById("validate");
let name=document.getElementById("name");
let email=document.getElementById("mail");
let pass=document.getElementById("pass");
let againPass=document.getElementById("againPass");
 
function showError(a,msg){
   let par=a.parentElement;
   par.className="userName form-control error"
   let span=par.querySelector("span");
   span.innerText=msg;
   let icon=par.querySelector(".fa-solid");
   icon.className="fa-solid fa-circle-exclamation";
}
 function showSuccess(a){
   let par=a.parentElement;
   par.className="userName form-control success"
 }
function formValidate(){
let fnameValue=name.value;
 let fmail=email.value;
 let fpass=pass.value;
 let fagainPass=againPass.value;
  if(fnameValue==""){
      showError(name,"name can't be blank");
  }else{
   showSuccess(name);
  }
  if(fmail==""){
   showError(email,"E-mail can't be blank");
}else{
showSuccess(email);
}
if(fpass==""){
   showError(pass,"Enter a valid password");
}

if(fagainPass==""){
   showError(againPass,"E-mail can't be blank");
}else if(fagainPass!==fpass){
showError(againPass,"Password Not match");
}else{
   showSuccess(againPass);
}
   
};



form.addEventListener("submit",(e)=>{
 e.preventDefault();
 formValidate();
})



























