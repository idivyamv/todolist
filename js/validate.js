
function validate(event){ 
    // var mailformat    = '/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3}?)$/';
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
        Username = Username.value;
        userValidate(Username,pswd,userLogin);
        
     }
 
 }
 function userLogin(name) {
     window.location.href = "todolist.html";
   }
   
   function userValidate(Username, pswd, myCallback) {alert(Username+pswd);
    if(Username =='admin' && pswd =='12345')
         {   myCallback(Username);
            return false;
         }
     else {
         document.getElementById("Error").innerHTML="Invalid username or Password.Please try again..";
         document.getElementById("Error").classList.remove("d-none");
         return false;
     }
   }
   