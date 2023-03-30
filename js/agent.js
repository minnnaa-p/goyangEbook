let smartPhones=['iphone','ipod','ipad','android','opera mini', 'orpera mobi',
'nokia', 'webos','windows ce','blackberry','iemobile','sonyericssion'];
// 스마트폰 구분
for(let i in smartPhones) {
    if(navigator.userAgent.toLocaleLowerCase().match(new RegExp(smartPhones[i]))){
        //브라우저 주소창을 의미함
        document.location='http://minayam.dothome.co.kr/mindex.html';
    }
}