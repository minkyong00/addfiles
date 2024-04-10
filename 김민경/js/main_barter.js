//banner

//슬라이드 이미지 감싸고 있는 부모요소
let $bannerBox = $(".banner-box");
//슬라이드 이미지
let $bannerImgs = $(".banner-img");

//슬라이드 이미지 너비
let bannerWidth = 1518;
//슬라이드 이미지 인덱스 번호
let currentIdx = 0;
//총 슬라이드 이미지 수
let slideCnt = $bannerImgs.length;

console.log(`slideCnt : ${slideCnt}`);

$(".next").on("click", moveNext);
function moveNext() {
    console.log(`슬라이드 다음 클릭`);
    currentIdx++;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");

    updateSlideNumber();
}

function moveFirst() {
    currentIdx = 0;
    $bannerBox.css("transition", "none");
    $bannerBox.css("transition", "0.5s ease");
    $bannerBox.css("left", 0);

    updateSlideNumber();
}

$(".prev").on("click", function () {
    console.log(`슬라이드 이전 클릭`);
    currentIdx--;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");

    updateSlideNumber();
});

function autoChangeSlide() {
    if (currentIdx == slideCnt - 1) {
        moveFirst();
    } else {
        moveNext();
    }
}

updateSlideNumber();

setInterval(autoChangeSlide, 3000);
