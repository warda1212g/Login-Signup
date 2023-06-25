function signIn(){
    var loginEmail = document.getElementById("email").value;
    var loginPass = document.getElementById("password").value;
    
    if (loginEmail == "hello@gmail.com" && loginPass == "123") {
        window.location.href="https://6497e601e8a7735c0eb0bc04--majestic-brioche-0f3624.netlify.app/"
        return true;

      }
      else if(loginEmail != "hello@gmail.com")
      {
        alert("Invalid email");
        return false;
      }
      else if(loginPass != "123"){
        alert("Invalid password");
        return false;
      }
      else {
       return false;
      }

      
    }
    function signUp(){
      const email = document.getElementById("signEmail").value;
      const password = document.getElementById("signPass").value;
      const uName = document.getElementById("signName").value;
      if(validateEmail(email) && validatePassword(password)&& validateName(uName)){
          const userDate = {
              email:email,
              password:password,
              username:uName,
          };
          saveToLocalStorage(userDate);
     
      } else {
         alert("Invalid credential");
      }
      console.log(email,password,uName);
  
  
  
  }
  
  
  function saveToLocalStorage(userDate){
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(userDate);
      localStorage.setItem("users",JSON.stringify(users));
  }
  // validation for emails
  
  function validateEmail(email){
      const emailRegex = /[!@#$%^&*()]/;
      return emailRegex.test(email);
  }
  // validation for passwords
  
  function validatePassword(password){
      const numRegex = /[0-9]/;
      const alphaRegex = /[a-zA-z]/;
      const symbolRegex = /[!@#$%^&*()]/;
  
      const hasNumber = numRegex.test(password);
      const hasAlpha = alphaRegex.test(password);
      const hasSymbol = symbolRegex.test(password);
  
      return  hasNumber && hasSymbol && hasAlpha && password.length >= 8;
  }
  // validation for usernames
  function validateName(uName){
      const nameRegex = /[a-zA-Z]/;
      const hasvalidatename = nameRegex.test(uName);
      const isNotEmpty = uName.trim().length > 0;
      
      return hasvalidatename && isNotEmpty;
      
  }
  
  
  document.getElementById("email").addEventListener("focus",function(){
      this.placeholder = "";
  })
  document.getElementById("email").addEventListener("blur",function(){
      this.placeholder = "Type you email";
  })
  document.getElementById("password").addEventListener("focus",function(){
      this.placeholder = "";
  
  })
  document.getElementById("password").addEventListener("blur",function(){
      this.placeholder = "Type your password";
  })
  

  
  function signUpPage(){
  
      window.location.href = "signup.html";
  
  }
  
  function loginPage(){
  
      window.location.href="index.html";
  }
  
  

