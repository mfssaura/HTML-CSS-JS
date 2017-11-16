function Submit() {
    var flag=true;
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var passwordRegex= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    var fname = document.form.FirstName.value;
    var lname = document.form.LastName.value;
    var femail = document.form.Email.value;
    var fpassword = document.form.Password.value;
    var rfpassword = document.form.re_enter_Password.value;
    //var fcountry = document.form.Country.value;
    if(fname=="" && lname=="" && femail=="" && fpassword=="" && rfpassword=="") {
      document.getElementById("e1").innerHTML="Please enter your first name!";
      document.getElementById("e2").innerHTML="Please enter your last name!";
      document.getElementById("e3").innerHTML="Please enter your email!";
      document.getElementById("e4").innerHTML="Please enter a password with a min 6 characters!";
      document.getElementById("e5").innerHTML="Please re-enter password!";
    }
    else if(fname=="" || lname=="" || femail=="" || fpassword=="" || rfpassword=="") {
        if(fname=="") {
          document.getElementById("e1").innerHTML="Please enter your first name!";
        }
        if(lname=="") {
          document.getElementById("e2").innerHTML="Please enter your last name!";
        }
        if(femail=="") {
          document.getElementById("e3").innerHTML="Please enter your email!";
        }
        if(fpassword=="") {
          document.getElementById("e4").innerHTML="Please enter a password with a min 6 characters!";
        }
        if(rfpassword=="") {
          document.getElementById("e5").innerHTML="Please re-enter password!";
        }
    }
    if(fname == "" ) {
      document.getElementById("e1").innerHTML="Please enter your first name!";
      flag=false;
      return false;
    }
    if(fname.length < 3 || fname.length > 20) {
        document.getElementById("e1").innerHTML="First name must be at least 3 characters and at-most 20 characters long!";
        flag=false;
        return false;
    }
    if(flag) {
      document.getElementById("e1").innerHTML="";
    }
    if(lname == "" ) {
    document.getElementById("e2").innerHTML="Please enter your last name!";
    flag=false;
      return false;
    }
    if(lname.length < 3 || lname.length > 20) {
        document.getElementById("e2").innerHTML="Last name must be at least 3 characters and at-most 20 characters long!";
        flag=false;
        return false;
    }
    if(flag) {
      document.getElementById("e2").innerHTML="";
    }
    if(femail == "" ) {
    document.getElementById("e3").innerHTML="Please enter your email!";
    flag=false;
      return false;
    }
    if(!emailRegex.test(femail)){
        document.getElementById("e3").innerHTML="Please enter a valid email!";
        flag=false;
          return false;
     }
    if(flag) {
      document.getElementById("e3").innerHTML="";
    }
    if(fpassword == "") {
      document.getElementById("e4").innerHTML="Please enter a password with a min 6 characters!";
      flag=false;
      return false;
    }
    if(!passwordRegex.test(fpassword)) {
        document.getElementById("e4").innerHTML="*password must contain at least an alphabet,one number, and a special char!";
        flag=false;
        return false;
    }
    if(flag) {
      document.getElementById("e4").innerHTML="";
    }
    if(rfpassword == "") {
      if(fpassword == "")
        document.getElementById("e4").innerHTML="Please enter password!";
      else
        document.getElementById("e5").innerHTML="Please re-enter password!";
        flag=false;
      return false;
    }
    if(rfpassword!=fpassword) {
        document.getElementById("e5").innerHTML="*passwords didnot match!, try again";
        flag=false;
        return false;
    }
    if(flag) {
      document.getElementById("e6").innerHTML="";
    }   
    if(flag) {
      alert("form successfully submitted!");
      return true;
    }  
    else
      return false;
}
function myfun(x,id) {
  if(document.getElementById(id).value=="")
    document.getElementById(x).innerHTML="Enter text";
  if(document.getElementById(id).value.length>=2)
    document.getElementById(x).innerHTML="";
}
function check(x,id) {
  document.getElementById(x).innerHTML="";
  if(document.getElementById(id).value.length<2)
    myfun(x,id);
}
