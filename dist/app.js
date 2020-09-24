var images = [
    src = 'images/{3D}1.jpg',
    src = 'images/3D View 51.jpg',
    src = 'images1/IMG_20200518_133725.jpg',
    src = 'images/IMG_20190718_193520_283.jpg',
    src = 'images/FB_IMG_1600324413879.jpg',
    src = 'images1/IMG_20200318_113744_5.jpg',
    src = 'images/seoview.jpg'
];

var num = 0;

function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

