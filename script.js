// Hàm cập nhật hình ảnh và văn bản khi di chuột/focus vào
function upDate(previewPic) {
    console.log("Event triggered: upDate");
    var displayBox = document.getElementById("image");

    // Đổi văn bản thành alt của ảnh
    displayBox.innerHTML = previewPic.alt;

    // Đổi ảnh nền thành src của ảnh
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm khôi phục trạng thái ban đầu khi rời chuột/blur khỏi
function unDo() {
    console.log("Event triggered: unDo");
    var displayBox = document.getElementById("image");

    // Khôi phục lại ảnh nền ban đầu
    displayBox.style.backgroundImage = "url('')";

    // Khôi phục lại văn bản ban đầu
    displayBox.innerHTML = "Hover over or tab to an image below to display here.";
}

// Yêu cầu 8 & 9: Hàm tự động thêm thuộc tính tabindex khi trang web tải xong
function addTabFocus() {
    // 9a. Log thông báo ra console để xác nhận hàm được kích hoạt
    console.log("Page fully loaded: addTabFocus() triggered successfully.");

    // Lấy danh sách tất cả các ảnh có class 'preview'
    var images = document.getElementsByClassName("preview");

    // 9b. Vòng lặp for duyệt qua từng hình ảnh
    for (var i = 0; i < images.length; i++) {
        // 9c. Thêm thuộc tính tabindex="0" để có thể nhấn phím TAB đến từng ảnh
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex='0' to image index " + i);
    }
}
