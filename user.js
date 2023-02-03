var doctor = [
  {
    id: 1,
    img: "https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg",
    ten: "Nguyễn Trần Duy Thắng",
    tuoi: 21,
    chuyenkhoa: "Răng",
    giolamviec: "7 - 8 AM",
  },
  {
    id: 2,
    img: "https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg",
    ten: "Trần Văn Phát",
    tuoi: 32,
    chuyenkhoa: "Mắt",
    giolamviec: "10 - 11 AM",
  },
  {
    id: 3,
    img: "https://nhakhoathuyanh.com/wp-content/uploads/2019/07/bs.T.A.png",
    ten: "Phan Trần Thanh Tâm",
    tuoi: 26,
    chuyenkhoa: "Xương",
    giolamviec: "6 - 7 PM",
  },
  {
    id: 4,
    img: "https://nhakhoathuyanh.com/wp-content/uploads/2019/07/bs.T.A.png",
    ten: "Trần Thanh Tâm",
    tuoi: 26,
    chuyenkhoa: "Xương",
    giolamviec: "7 - 8 PM",
  },
];

var order = [];

function Save() {
  localStorage.setItem("listProduct", JSON.stringify(doctor));
}
//lấy sản phẩm
function load() {
  doctor = JSON.parse(localStorage.getItem("listProduct"));
}
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
  load();
}

// var listLocal = function () {
//   var listproduct = "";
//   for (var i in doctor) {
//     var data = JSON.parse(JSON.stringify(doctor[i]));

//     var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
//     listproduct += '<div class="card product p-2" styte="width:auto">';
//     listproduct +=
//       '<img class="card-img-top" src="' + data.img + '" alt="...">';
//     listproduct +=
//       '<div class="text-center h6 named">' + " Tên : " + data.ten + "</div>";
//     listproduct +=
//       '<div class="text-center khoad">' +
//       "Chuyên môn : " +
//       data.chuyenkhoa +
//       "</div>";
//     listproduct +=
//       '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' +
//       data.id +
//       " data-name=" +
//       data.chuyenkhoa +
//       " data-img=" +
//       data.img +
//       " data-price=" +
//       data.giolamviec +
//       // Render
//       " onclick=tks()>;";
//     listproduct += "<a>";
//     listproduct += '<i class="fas fa-cart-plus"></i>';
//     listproduct += "Đặt</span>";
//     listproduct += "</div>";
//     listproduct += "</div>";

//     document.getElementById("show").innerHTML += listproduct;
//   }
// };
// listLocal();

// function checkbs() {
//   var lbenh = document.getElementById("sl");
//   var benh = lbenh.options[lbenh.selectedIndex].text;
//   var lgio = document.getElementById("gio");
//   var gio = lgio.options[lgio.selectedIndex].text;
//   for (var i in doctor) {
//     var datadoc = JSON.parse(JSON.stringify(doctor[i]));
//     console.log(datadoc.chuyenkhoa);
//     console.log(datadoc.giolamviec);
//     console.log(benh);
//     console.log(gio);
//     if (datadoc.chuyenkhoa == benh && datadoc.giolamviec == gio) {
//       var listdoc = "";

//       var listdoc = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
//       listdoc += '<div class="card product p-2" styte="width:auto">';
//       listdoc +=
//         '<img class="card-img-top" src="' + datadoc.img + '" alt="...">';
//       listdoc += '<div class="price text-center h6">' + datadoc.ten + "</div>";
//       listdoc +=
//         '<button type="button" class="btn btn-success" onclick="book()">Đặt';
//       listdoc += "<a>";
//       listdoc += '<i class="fas fa-cart-plus"></i>';
//       listdoc += "</button>";
//       listdoc += "</div>";
//       listdoc += "</div>";

//       document.getElementById("test").innerHTML += listdoc;
//       document.getElementById("abc").style.display = "block";
//       document.getElementById("show").style.display = "none";
//     } else {
//       var listdc = "";

//       var listdc = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
//       listdc += '<div class="card product p-2" styte="width:auto">';
//       listdc +=
//         '<img class="card-img-top" src="' + datadoc.img + '" alt="...">';
//       listdc += '<div class="price text-center h6">' + datadoc.ten + "</div>";

//       listdc += '<button type="button" class="btn btn-danger">Đặt';
//       listdc += "<a>";
//       listdc += '<i class="fas fa-cart-plus"></i>';
//       listdc += "</button>";
//       listdc += "</div>";
//       listdc += "</div>";

//       document.getElementById("test").innerHTML += listdc;
//       document.getElementById("abc").style.display = "block";
//       document.getElementById("show").style.display = "none";
//     }
//   }
//   // Save();
//   // localStorage.clear();
//   console.log(doctor);
// }

function checkbs() {
  var a = "";
  for (var i in doctor) {
    var data = JSON.parse(JSON.stringify(doctor[i]));
    var lbenh = document.getElementById("sl");
    var benh = lbenh.options[lbenh.selectedIndex].text;
    var lgio = document.getElementById("gio");
    var gio = lgio.options[lgio.selectedIndex].text;
    if (data.chuyenkhoa == benh && data.giolamviec == gio) {
      a += `<div class="card" style="width:260px; margin-top : 40px; margin-left : 20px;">
  <img class="card-img-top" src="${data.img}" alt="Card image" style="width:100%;">
  <div class="card-body">
    <h4 class="card-title">${data.ten}</h4>
    <p class="card-text">${data.chuyenkhoa}</p>
    <a  class="btn btn-primary" href="#myModal" data-bs-toggle="modal">Detail</a>
      <a  class="btn btn-success" href="" data-bs-toggle="modal"  data-bs-target="#enterinfor" onclick="E()">order this doctor</a>
  </div>
</div>
<style>
.card-img-top{
  object-fit:scale-down;
}
</style>
<div id="myModal" class="modal fade">
  <div class="modal-dialog">
      <div class="modal-content" style="width:fit-content">
          <div class="card" style="width:300px; height:500px">
              <img class="card-img-top" src="${data.img}" alt="Card image" style="width:100%; height:50%;">
              <div class="card-body">
                <h4 class="card-title">${data.ten}</h4>
                <p class="card-text">Trình độ học vấn</p>
                <p class="card-text">${data.chuyenkhoa}</p>
                <p class="card-text">${data.giolamviec}</p>
                <p class="card-text">you can add more information...</p>
              </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancel</button>
              <button type="button" class="btn btn-success"  data-bs-target="#enterinfor" onclick="E()" >order this doctor</button>
          </div>
      </div>
  </div>
</div>`;
      document.getElementById("show").innerHTML = a;
    } else {
      a += `<div class="card" style="width:260px; margin-top : 40px; margin-left : 20px;">
    <img class="card-img-top" src="${data.img}" alt="Card image" style="width:100%;">
    <div class="card-body">
      <h4 class="card-title">${data.ten}</h4>
      <p class="card-text">${data.chuyenkhoa}</p>
      <a  class="btn btn-primary" href="#myModal" data-bs-toggle="modal">Detail</a>
        <a  class="btn btn-primary disabled" href="" data-bs-toggle="modal"  data-bs-target="#enterinfor" onclick="E()">order this doctor</a>
    </div>
  </div>
  <style>
  .card-img-top{
    object-fit:scale-down;
  }
  </style>
  <div id="myModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content" style="width:fit-content">
            <div class="card" style="width:300px; height:500px">
                <img class="card-img-top" src="${data.img}" alt="Card image" style="width:100%; height:50%;">
                <div class="card-body">
                  <h4 class="card-title">${data.ten}</h4>
                  <p class="card-text">Trình độ học vấn</p>
                  <p class="card-text">${data.chuyenkhoa}</p>
                  <p class="card-text">${data.giolamviec}</p>
                  <p class="card-text">you can add more information...</p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancel</button>
                <button type="button" class="btn btn-success"  data-bs-target="#enterinfor" onclick="E()" >order this doctor</button>
            </div>
        </div>
    </div>
  </div>`;
      document.getElementById("show").innerHTML = a;
    }
  }
  Save();
  load();
}

function E() {
  window.location.href = "http://127.0.0.1:5500/modal.htm";
}




// Phần của Kiều

var slideImg = document.getElementById("slideImg");
var images = new Array (
    "docter1.jpg",
    "docter2.jpg",
    "docter3.jpg"
);
var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
      i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}