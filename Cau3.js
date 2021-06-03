function demSoNguyenAm(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'o' || arr[i] == 'e' || arr[i] == 'u' || arr[i] == 'i')
            count++;
    }
    if (count <= 0) return false;
    else return count;
}

var arr1 = prompt("Nhập chuỗi bất kỳ: ");
console.log(demSoNguyenAm(arr1));