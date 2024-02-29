// Bai 1
var y=["thu 2","thu 3", "thu4","thu 5","thu 6", "thu 7"," chủ nhật"]
var x = 3; 
console.log(y=(x-2));
switch (x) {
  case 2:
    console.log("ThU  2");
    break;
  case 3:
    console.log("ThU  3");
    break;
  case 4:
    console.log("ThU  4");
    break;
  case 5:
    console.log("THU  5");
    break;
  default:
    console.log("The x is not 2, 3, 4, or 5");
    break;
}
// Bai 2 Ham kt so ngto
function array1(n) {
  if (n <= 1) {
      return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return n>1;
}

var numberToCheck = 10;
if (array1(numberToCheck)) {
  console.log(numberToCheck + ' là số nguyên tố.');
} else {
  console.log(numberToCheck + ' không phải là số nguyên tố.');
}
// Bai 3
var a=[[1,1,1],[1,0,0],[0,1,0],[0,0,1]];
for (var i=0;i<4;i++){
    for( var j=0 ; j<3;j++){
        document.write(a[i][j] + " " );
    }
     document.write("<br/>")
}
// Bai 4
function CheckDangNhapEmail(){
  var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
  var email = document.getElementById("email").value;
  if (regExp.test(email)) 
      alert('Tên đăng nhập hợp lệ!'); 
    else 
        alert('Tên đăng nhập không hợp lệ!');
}
  /*regex dưới đây sẽ check xem email có thỏa mãn các điều kiện:
  bắt đầu bằng chữ cái
  phần username của email phải dài hơn 1 ký tự và chỉ được có chữ cái, số, dấu chấm hoặc ký tự $, _
  email phải có @ và có kết thúc là đuôi tên miền (.com, .vn, …)
  Ở đây đuôi tên miền là bất kỳ được tạo thành từ \w+: a-z, A-Z, 0-9 và _
  */
function CheckDangNhapPass(){
  var regExp = /^[A-Za-z] [0-9]/;
  var password = document.getElementById("password").value;
  if (regExp.test(password)) 
      alert('Mật khẩu hợp lệ!'); 
    else 
        alert('Mật khẩu nhập không hợp lệ!');
}
