function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "silahkan Mendaftar";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  //   //Nama User //
  var form = document.createElement("FORM");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "@ku2h_wicaksono";
  form.appendChild(input_username);

  //   //Nomor Handphone //
  var form = document.createElement("FORM");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Nomor Handphone";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.placeholder = "Nomor Handphone..";
  input_username.type = "tel";
  input_username.name = "username";
  input_username.className = "form_login";
  form.appendChild(input_username);

  
  //   //email//
  var form = document.createElement("FORM");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Email";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.placeholder = "Email..";
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";

  form.appendChild(input_username);
  
   //   //Alamat//
  var form = document.createElement("FORM");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML = "Alamat";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.placeholder = "Alamat..";
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";

  form.appendChild(input_username);

  //   //Password//
  var label2 = document.createElement("label");
  label2.innerHTML = "Password";
  form.appendChild(label2);
  var input_password = document.createElement("input");
  input_password.placeholder = "password";
  input_password.id="pw1"
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  form.appendChild(input_password);
  //   //Password//
  var label2 = document.createElement("label");
  label2.innerHTML = "Repassword";
  form.appendChild(label2);
  var input_password = document.createElement("input");
  input_password.placeholder = "repassword";
  input_password.id="pw2"
  input_password.type = "password";
  input_password.name = "password2";
  input_password.className = "form_login";
  form.appendChild(input_password);
  //   //tombol submit//
  var tombol = document.createElement("button");
  tombol.type = "submit";
  tombol.innerHTML = "submit";
  tombol.className = "tombol_login";

  form.appendChild(tombol);

}
