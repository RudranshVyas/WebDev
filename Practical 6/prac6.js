function validateForm(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('uemail').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;

   if(fname.match(/[0-9]/g)||lname.match(/[0-9]/g)){
       window.alert("Name should contain only letters")
       return;
   }
   if(fname == '' || lname == '' )
   {
       alert("Name field should not be empty")
       return;
   }
   if (email.search(/[0-9]{2}[a-zA-Z]{3}[0-9]{3}@nirmauni.ac.in/g)){
       window.alert("Email format should be DDCCCDDD@nirmauni.ac.in (e.g 19bce228@nirmauni.ac.in)")
       return;
   }
   if (password.length<8){
       window.alert("Password must be eight charcter long")
       return;
   }
   if (!(password.match(/[A-Z]/g) && password.match(/[a-z]/g) && password.match(/[0-9]/g))) {
       window.alert("Password must be a combination of uppercase letter, lowercase letter, and digits")
       return;
    }
   if (password!=password2) {
       window.alert("Passwords do not match")
       return;
   }
   document.getElementById("form").submit();
   return;
}
