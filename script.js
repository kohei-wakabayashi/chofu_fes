document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slide_clone = slider.innerHTML; // スライダー内の画像を複製
    slider.innerHTML += slide_clone; // スライダーに追加
    const scroll = document.querySelector(".scroll");
    const scroll_clone = scroll.innerHTML; // スライダー内の画像を複製
    scroll.innerHTML += scroll_clone; // スライダーに追加
});