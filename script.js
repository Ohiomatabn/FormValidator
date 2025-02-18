//Variable
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const indicator = document.getElementById('indicator');
const loginPassword = document.getElementById('loginPassword');
const registerPassword1 = document.getElementById('password1');
const registerPassword2 = document.getElementById('password2');
const passwordVisibilityLogin = document.querySelector('.login-password-toggle');
const passwordVisibilityregister = document.querySelector('.register-password-toggle');

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

//Click Event Handlers
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);
passwordVisibilityLogin.addEventListener('click', loginPasswordToggle);
passwordVisibilityregister.addEventListener('click', registerPasswordToggle);