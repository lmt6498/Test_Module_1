var count = 0

function timKiem(n, arr) {

    for (var i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            count++;
        }
    }
    if (count > 0) {
        return (+n + " có trong mảng!");
    } else return "Không có giá trị nào trong mảng!";
}

var arr1 = [1, 2, 3, 4, 5, 6];
var n1 = parseInt(prompt("Nhập phần số cần tìm! "));
console.log(timKiem(n1, arr1));