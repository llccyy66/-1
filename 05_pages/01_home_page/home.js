
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');
const captions = [
    'Music <span class="low-opacity">for</span><br>Everyone',
    'Discover <span class="low-opacity">Your</span><br>Inner Talents',
    'Pick <span class="low-opacity">Your</span><br>Instrument'
];

// 显示指定索引的图片
function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    const captionElement = document.querySelector('.caption');
    captionElement.innerHTML = captions[currentIndex];
    captionElement.style.opacity = 1;
    updateDots();
}

// 重置动画
function resetAnimation(selector) {
    const element = document.querySelector(selector);
    element.style.animation = 'slide-in 1s forwards'; // 重新启动动画
}

// 更新圆点的样式
function updateDots() {
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = (index === currentIndex) ? 'white' : 'rgba(255, 255, 255, 0.5)';
    });
}

// 圆点点击事件
dots.forEach(dot => {
    dot.addEventListener('click', () => showImage(parseInt(dot.getAttribute('data-index')) - 1));
});



// 自动切换图片
setInterval(() => showImage(currentIndex + 1), 3000);



