//컨텐츠 스크롤 위치 객체베열
let scrollPos=[{
    posY:392.79998779296875
},{
    posY:936
},{
    posYF:1172,
    posYT:1476
},{
    posYF:1325.5999755859375,
    posYT:1628
},{
    posFF: 1478.4000244140625,
    posTF: 1786.4000244140625,
    posFT: 3221.60009765625,
    posTT: 3546.39990234375 
}]



$(window).scroll(function () { 
	let scrollValue = $(document).scrollTop(); 

    if(scrollValue>400) {
        $('.bookInfoMenu').addClass('menuActive');
    } else {
        $('.bookInfoMenu').removeClass('menuActive');

    }
});

$('.bookInfoMenu>ul>li>span').click(function(){
    let index=$(this).parent().index();
    if((index==0)||(index==1)){
        $('html').animate({
            scrollTop : scrollPos[index].posY
        }, 400);
    }else if((index==2)||(index==3)) {
        if(toggleSW1) {
            $('html').animate({
                scrollTop : scrollPos[index].posYT
            }, 400);
        }else {
            $('html').animate({
                scrollTop : scrollPos[index].posYF
            }, 400);
        }
    } else {
        if((toggleSW1==false)&&(toggleSW2==false)){
            $('html').animate({
                scrollTop : scrollPos[index].posFF
            }, 400);
        } else if((toggleSW1==true)&&(toggleSW2==false)){
            $('html').animate({
                scrollTop : scrollPos[index].posTF
            }, 400);
        } else if((toggleSW1==false)&&(toggleSW2==true)){
            $('html').animate({
                scrollTop : scrollPos[index].posFT
            }, 400);
        } else {
            $('html').animate({
                scrollTop : scrollPos[index].posTT
            }, 400);
        }
    }
});


//컨텐츠 접기 펼치기 switch 변수
let toggleSW1=false;
let toggleSW2=false;

$('.toggleBtn1').click(function(){
    toggleBtn(toggleSW1,'작가소개');
});

$('.toggleBtn2').click(function(){
    toggleBtn(toggleSW2,'출판사서평');

});



//textarea 글자수 카운터
$('textarea').keyup(function(){
    let inputLength=$(this).val().length;
    if(inputLength>500) {
        inputLength.substring(0,500);
    } 
    $('.reviewInfo>p>span').html(inputLength+'/500');   
});

$('.txtReviewArea a').on('click',function(){
    chkLogin();
    alert('로그인이 필요합니다');
});


//컨텐츠 내용 접기 펼치기
function toggleBtn(toggleSW,text) {
    if(text=='작가소개'){
        toggleSW1=!toggleSW1;
        if(toggleSW1) {
            $('.toggleBtn1>.foldText').html('접기');
            $('.toggleBtn1>.foldIcon>i').removeClass('fa-angle-down');
            $('.toggleBtn1>.foldIcon>i').addClass('fa-angle-up');
            $('#authorInfo .overflowWrap').addClass('active');
        }else {
            $('.toggleBtn1>.foldText').html('펼치기');
            $('.toggleBtn1>.foldIcon>i').removeClass('fa-angle-up');
            $('.toggleBtn1>.foldIcon>i').addClass('fa-angle-down');
            $('#authorInfo .overflowWrap').removeClass('active');
        }
    } else {
        toggleSW2=!toggleSW2;
        if(toggleSW2) {
            $('.toggleBtn2>.foldText').html('접기');
            $('.toggleBtn2>.foldIcon>i').removeClass('fa-angle-down');
            $('.toggleBtn2>.foldIcon>i').addClass('fa-angle-up');
            $('#publisherReview .overflowWrap').addClass('active');
        }else {
            $('.toggleBtn2>.foldText').html('펼치기');
            $('.toggleBtn2>.foldIcon>i').removeClass('fa-angle-up');
            $('.toggleBtn2>.foldIcon>i').addClass('fa-angle-down');
            $('#publisherReview .overflowWrap').removeClass('active');
        }
    }
}

function chkLogin(){

}