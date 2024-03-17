var tagH3 = document.getElementById("title");

//.innerHTML: phần nội dung ở giữa hai thẻ html đóng mở
tagH3.innerHTML = "Cybersoft.edu.vn";

//.value: phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById("txt");

tagInput.value = "hello Thien An Cybersoft";

//truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById("number");

console.log(tagInputNumber.value);
alert(tagInputNumber.value);

var tagImg = document.getElementById("hinhAnh");

tagImg.src = "./img/hiinh2.jpeg";

// function hienThiThongTin() {
//   //lấy giá trị nhập khi sử dụng hàm hiển thị thông tin
//   //input
//   var input = document.getElementById("giaTriNhap");
//   console.log(input.value);
// }

function hienThiThongTin() {
  //lấy giá trị nhập khi gọi hàm hiển thị thông tin
  //input: luôn là string
  var input = document.getElementById("giaTriNhap");
  //   console.log(input.value);

  var output = "";
  //progress
  output = input.value;
  //Xử lý kết quả hiển thị lên giao diện
  var tagSpanKetQua = document.getElementById("ketQuaHienThi");
  tagSpanKetQua.innerHTML = output;
}

/**
 * Ví dụ 2: Nhập vào số tiền lương(1h) và số giờ làm in ra
 * tổng lương bằng số giờ nhân tiền lương
 */

// function tinhTongLuong() {
//   //input: tienLuong1h:number, soGioLam:number.
//   var tienLuong = document.getElementById("tienLuong1h").value;
//   var soGioLam = document.getElementById("soGioLam").value;

//   //kiểm tra input
//   // console.log("tienLuong", tienLuong);
//   // console.log("soGioLam", soGioLam);
//   var tongLuong = 0;
//   //progress:
//   tongLuong = tienLuong * soGioLam;

//   document.getElementById("tongLuong").innerHTML = tongLuong;
// }

function tinhTongLuong() {
  var tienLuong = document.getElementById("tienLuong1h").value;
  var soGioLam = document.getElementById("soGioLam").value;

  var tongLuong = 0;
  //progress
  tongLuong = tienLuong * soGioLam;

  // document.getElementById("tongLuong").innerHTML = tongLuong;

  document.getElementById("tongLuong").innerHTML = tongLuong;
}

/**
 * Ví dụ 3: Xây dựng form bằng thông báo đăng nhập
 */

var btnDangNhap = document.getElementById("btnDangNhap");
btnDangNhap.onclick = function () {
  //anonymous function
  //input: tài khoản: string, matkhau: string
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;
  //output: thongBao: string
  let thongBao = "";
  //progress
  thongBao = "Tài khoản: " + taiKhoan + "- Mật khẩu: " + matKhau;
  // alt + z hoac option + z => xuống dòng

  var tagKetQua = document.getElementById("ketQuaDangNhap");

  tagKetQua.innerHTML = thongBao;
  //thay đổi màu sắc
  // tagKetQua.style.backgroundColor = "green";
  // tagKetQua.style.padding = "15px";
  // tagKetQua.style.color = "#FFF";
  // tagKetQua.style.margin = "15px";
  tagKetQua.className = "bg-success p-2 m-2 text-white";
};
