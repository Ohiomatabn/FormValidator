//Variable
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const indicator = document.getElementById('indicator');

// Login Form Function
function login(){
  //Translate login form and signup form in the X axis to 0 when login function is called

  loginForm.style.transform = 'translateX(0)';
  signupForm.style.transform = 'translateX(0)';

  //Translate indicator form in the X axis to 0 when login function is called
  indicator.style.transform = 'translateX(0px)';
}

function register(){
  //Translate login form and signup form  in the X axis to -300px when login function is called

  loginForm.style.transform = 'translateX(-300px)';
  signupForm.style.transform = 'translateX(-300px)';

  //Translate indicator form in the X axis to 115px when indicator function is called
  indicator.style.transform = 'translateX(115px)';
}

//Click Event Handlers
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);