document.addEventListener("DOMContentLoaded", function(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener("click", () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
});
//đăng nhập
function login(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var users = localStorage.getItem("users");
    var rexname  = '/^[a-zA-Z0-9]{6,32}+$/';
    if(users==null){
        alert("Please register");
    }
    if ( email == "" || password == "")
        alert("Please enter complete information!!!");
    var data = JSON.parse(users);
    for (var i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
            alert("Log in successfully!");
            localStorage.setItem("currentUser", data[i].username);
            window.location.href = "../index.html";
            return;
        }
    }
    alert("This account is not currently registered, please register an account!!");
}
// đăng kí
function signup(e) {
    event.preventDefault();
    var username = document.getElementById("Name1").value;
    var email = document.getElementById("Email1").value;
    var rgexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    var password = document.getElementById("Password1").value;
    var rgexPass = /^.{6,}$/;

    // Regex để kiểm tra username chỉ chứa chữ cái
    var rgexName = /^[a-zA-Z\s]{6,32}$/;

    // Kiểm tra nhập liệu
    if (username == "" || email == "" || password == "") {
        alert("Please enter complete information!!!");
        return;
    }

    // Kiểm tra username
    if (!rgexName.test(username)) {
        alert("Username is invalid! It must contain only letters and be between 6 to 32 characters.");
        return;
    }

    // Kiểm tra email
    if (!rgexEmail.test(email)) {
        alert("Invalid email format!!!");
        return;
    }

    // Kiểm tra password
    if (!rgexPass.test(password)) {
        alert("Password is invalid! Must be 6 characters or more.");
        return;
    }

    // Xử lý lưu trữ người dùng
    var users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    } else {
        users = JSON.parse(users);
    }

    // Kiểm tra trùng email
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            alert("Email đã được sử dụng!");
            return;
        }
    }

    // Lưu người dùng mới
    var user = {
        username: username,
        email: email,
        password: password
    };
    users.push(user);
    var json = JSON.stringify(users);
    localStorage.setItem("users", json);
    alert("Registered successfully!! Please proceed to log in");
    window.location.href = "../html/login.html";
}