import './style.css'

const curtain = document.getElementById('rain-curtain');

let clientHeight = curtain.clientHeight;
let clientWidth = curtain.clientWidth;

// 获取的雨幕窗口的最新的宽和高
window.addEventListener('load', () => {
    clientHeight = curtain.clientHeight;
    clientWidth = curtain.clientWidth;
})

// 每隔一段时间添加雨点
setInterval(() => {
    // 使用js的创建动态生成层方法，无需改变html代码创建一个div，并且赋值给常量rain
    const rain = document.createElement('div');

    // 用js添加新的类名写法，给上面定义的常量rain来创建一个 class 类名
    rain.classList.add('rain');

    // 返回定位元素的顶部位置
    rain.style.top = '0';

    // 利用random随机数，来随机刷新雨点的位置
    rain.style.left = Math.random() * clientWidth + 'px'

    // 随机雨点透明度
    rain.style.opacity = Math.random().toString();
    curtain.appendChild(rain);

    // 每隔一段时间雨点落下
    let race = 1;
    const timer = setInterval(() => {
        if (parseInt(rain.style.top) > clientHeight) {
            clearInterval(timer);
            curtain.removeChild(rain)
        }
        race++;
        rain.style.top = parseInt(rain.style.top) + race + 'px'
    }, 20);
}, 50);
