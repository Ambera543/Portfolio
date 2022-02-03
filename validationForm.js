var flag = 0;
function username() {
  user = loginForm.username.value;
  if (user == "") {
    document.getElementById("error0").innerHTML = "Enter Username";
    flag = 1;
  }
// else {document.getElementById("error0").reset();}
}
function password() {
  pass = loginForm.password.value;
  if (pass == "") {
    document.getElementById("error1").innerHTML = "Enter password";
    flag = 1;
  }
}

function check(form) {
  flag = 0;
  username();
  password();
  if (flag == 1) return false;
  else return true;
}
