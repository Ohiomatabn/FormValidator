//Variable
const loginBtn = document.getElementById('login-btn'),
      registerBtn = document.getElementById('register-btn'),
       loginForm = document.getElementById('loginForm'),
       signupForm = document.getElementById('signupForm'),
       indicator = document.getElementById('indicator'),
       loginPassword = document.getElementById('loginPassword'),
       registerPassword1 = document.getElementById('password1'),
       registerPassword2 = document.getElementById('password2'),
       passwordVisibilityLogin = document.querySelector('.login-password-toggle'),
       passwordVisibilityregister = document.querySelector('.register-password-toggle'),
       registrationSumbitBtn = document.getElementById('register-submit-btn');
       loginSumbitBtn = document.getElementById('login-submit-btn');

// Login Form Functions
function login(){
  //Translate login form and signup form in the X axis to 0 when login function is called

  loginForm.style.transform = 'translateX(0)';
  signupForm.style.transform = 'translateX(0)';

  //Translate indicator form in the X axis to 0 when login function is called
  indicator.style.transform = 'translateX(0px)';
}

function loginPasswordToggle(){
  //Check if password type is password and set the type to text or if the type is text set it to password
  const toggleContent = document.getElementById('login-toggle-content'); 

  if(loginPassword.type === "password"){
    loginPassword.type = 'text';
    toggleContent.innerText = 'Hide Password';
  }else if (loginPassword.type === "text"){
    loginPassword.type = 'Password';
    toggleContent.innerText = 'Show Password'
  }
}

//Register Form Functions
function register(){
  //Translate login form and signup form  in the X axis to -300px when login function is called

  loginForm.style.transform = 'translateX(-300px)';
  signupForm.style.transform = 'translateX(-300px)';

  //Translate indicator form in the X axis to 115px when indicator function is called
  indicator.style.transform = 'translateX(115px)';
}

function registerPasswordToggle(){
    //Check if password type is password and set the type to text or if the type is text set it to password
    const toggleContent = document.getElementById('register-toggle-content');
  if (registerPassword1.type === "password"){
    registerPassword1.type = 'text';
    registerPassword2.type = 'text';
    toggleContent.textContent = 'Hide password';
  } else if(registerPassword1.type === "text"){
    registerPassword1.type = 'password';
    registerPassword2.type = 'password';
    toggleContent.textContent = 'Show password';
  }
}

//Validate Email
function validateEmail(email){
  if (!email.value.match(/(@)/) || !email.value.match(/(.)/) || !email.value.match(/(com)/)){
    email.classList += ' error';
    email.classList.remove('success');
    return false;
  } else{
    email.classList.remove('error');
    email.classList += ' success';
    return true;
  }
}

//Validate Username
function validateUsername (){
  let username = document.getElementById('username');
  if(username.value === '' || username.value === ' '){
   username.classList += ' error';
   username.classList.remove('success');
   return false;
  } else{
    username.classList += ' success';
    username.classList.remove('error');
    return true;
  }
}

// validate Password
function validatePassword(password){
  if(password.value === '' || password.value === ' ' || password.value.length < 8){
    password.classList += ' error';
    password.classList.remove('success');
    return false;
  } else{
    password.classList += ' success';
    password.classList.remove('error');
    return true;
  }
}

function comparePasswords(){
  let password1 = document.getElementById('password1');
  let password2 = document.getElementById('password2');
  if(password1.value !== password2.value){
    password1.classList += ' error';
    password2.classList += ' error';
    password1.classList.remove('success');
    password2.classList.remove('success');
    return false;
  } else{
    password1.classList += ' success';
    password2.classList += ' success';
    password1.classList.remove('error');
    password2.classList.remove('error');
    return true;
  }
}

//Click Event Handlers
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);
passwordVisibilityLogin.addEventListener('click', loginPasswordToggle);
passwordVisibilityregister.addEventListener('click', registerPasswordToggle);
registrationSumbitBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  let email = document.getElementById('register-email');
  let password1 = document.getElementById('password1');
  let password2 = document.getElementById('password2');
  validateUsername();
  validateEmail(email);
  validatePassword(password1);
  validatePassword(password2);
  comparePasswords();
});

loginSumbitBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  let email = document.getElementById('login-email');
  let password = document.getElementById('loginPassword');
  validateEmail(email);
  validatePassword(password);
});