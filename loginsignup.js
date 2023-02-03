const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});

// Call API

// var url = "https://63b7e62c4f17e3a931df62b7.mockapi.io";
// function callAPI(method, body,endpoint) {
//   return axios({
//     url:`${url}/${endpoint}`,
//     method: method,
//     data: body,
//   }).catch((error) => {
//     console.log(">> this is error in callAPI:", error);
//   });
// }

// function login() {
//   var iemail = document.querySelector(".email").value;
//   var ipassword = document.querySelector(".password").value;
//   callAPI("get",null,'user').then(kq=>{
//     console.log("this is data user >>>>>>",data.data);
//   });

//   if (iemail == "" || ipassword == "") {
//     alert("Error ! You need to input your information.");
//   } else {
//     callAPI("get", null)
//       .then((res) => {
//         var users = res.data;
//         for (let i = 0; i < users.length; i++) {
//           if (iemail === users[i].email && ipassword === users[i].password) {
//             console.log("this is users", users[i]);
//             alert("thanh cong");
//           } else {
//             alert("loi");
//             console.log("users[i].email");
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(">> this is err:", err);
//       });
//   }
// }

// signup còn cần phải sưa đó là việc chèn dữ liệu vào localstorage nhưng chỉ chèn được một
//  dữ liệu. cần fix là  ==>> chèn cộng dồn được nhiều dữ liệu.

function signup() {
  var emails =frm.txt_email.value;
  var passwords =frm.txt_password.value;
  var passwordsa = frm.txt_passworda.value;
  
  if (emails ==="" || passwords ==="" || passwordsa===""){
    alert("You need input all of information!");
  } else if (passwords != passwordsa) {
    alert("Password isn't same");
  } else {
    var users = JSON.parse(localStorage.getItem('listUser'));
    console.log( "this is data user in localstorage now!!",users);
    var a = 0;
    for (let i in users) {
      if (emails === users[i].email) {
        a++;
        alert("This Email is already exist!");
        break;
      }
    }
    if (a === 0) {
      var datauser = [{
        email: emails,
        password: passwords
      }];
      alert("Thanh cong")
      localStorage.setItem("listUser", JSON.stringify(datauser));
      window.location.href="loginsignup.htm"
    } 


    var data = JSON.parse(localStorage.getItem('listUser'))
    console.log("this is all of data in localStorage...:",data)
  }
}

var user = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "admin1",
    name: "ADMIN",
  },

  {
    id: 2,
    email: "hoanbui@gmail.com",
    password: "hoanb1",
    name: "Hoan",
  },
];

function Save() {
  localStorage.setItem("listUser", JSON.stringify(user));
}
// //lấy sản phẩm
// function load() {
//   users = JSON.parse(localStorage.getItem("listUser"));
// }
// //xuất sản phẩm ra html
// if (localStorage.getItem("listUser") != null) {
//   load();
// }

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email != "" && password != "") {
    var users = JSON.parse(localStorage.getItem('listUser'));
    console.log("this is data in localstorage:>>> ", users);
    for (var i in users) {
      if (email == "admin" && password == "1") {
        window.location.href = "./admin.htm";
        console.log("<<<đã vào trang admin >>>")
        break;
      } if (email === users[i].email && password === users[i].password) {
        window.location.href = "userdn.htm";
        console.log(" <<<<<<got into  user page>>>>")
      }
    }
  } else {
    alert("Need to input the plank!")
  }
}
