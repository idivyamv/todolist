function validate(event){ 

     document.getElementById("Error").classList.add("d-none");
     var Username        = document.getElementById('Username');
     var pswd            = document.getElementById('Password');   
     if (!(Username.checkValidity())) {
         Username.reportValidity();
         return false;
       }
     else if(!(pswd.checkValidity())){
         pswd.reportValidity();
         return false;
     }
     else {
        event.preventDefault();
        username      = Username.value;
        password      = pswd.value;
        userValidate(username,password,userLogin);
        
     }
 
 }
 function userLogin(name) {
     window.location.href = "todolist.html";
   }
   
  function userValidate(Username, pswd, myCallback) {
  if(Username =='admin' && pswd =='12345')
        {   myCallback(Username);         
        }
    else {
        document.getElementById("Error").innerHTML="Invalid username or Password.Please try again..";
        document.getElementById("Error").classList.remove("d-none");
        return false;
    }
  }
   