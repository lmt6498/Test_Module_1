function phuongTrinhBacNhat(a, b) {
    if (a != 0) {
        return -b / a;
    } else if (a == 0) {
        if (b != 0) {
            return "Phương trình vô nghiệm";
        } else {
            return "Phương trình có vô số nghiệm";
        }
    }
}

console.log(phuongTrinhBacNhat(5, 8));