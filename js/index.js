// 책 배열 객체 부분
let bestBookList = [
    {
        url: '#',
        title: '불편한 편의점',
        author: '김호연',
        publisher: '나무옆의자',
        date: '2021-04-20'

    },
    {
        url: '#',
        title: '밝은 밤',
        author: '최은영',
        publisher: '문학동네',
        date: '2021-07-27'
    },
    {
        url: '#',
        title: '하얼빈',
        author: '김훈',
        publisher : '문학동네',
        date: '2022-08-03'
    },
    {
        url: 'ebookContent.html',
        title: '파친코1',
        author: '이민진',
        publisher: '인플루엔셜',
        date: '2022-08-05'
    },
    {
        url: '#',
        title: '작별인사',
        author: '이영하',
        publisher: '복복서가',
        date: '2022-05-02'
    },
    {
        url: '#',
        title: '미드나잇 라이브러리',
        author: '매트 헤이그',
        publisher: '인플루엔셜',
        date: '2021-04-28'
    },
    {
        url: '#',
        title: '친밀한 이방인',
        author: '정한아',
        publisher: '문학동네',
        date: '2017-10-13'
    },
    {
        url: '#',
        title: '파친코 2',
        author: '이민진',
        publisher: '인플루엔셜',
        date: '2022-08-25'
    },
    {
        url: '#',
        title: '1Q84. 1',
        author: '무라카미 하루키',
        publisher: '문학동네',
        date: '2009-08-25'
    },
    {
        url: '#',
        title: 'H마트에서 울다',
        author: '미셸 자우너',
        publisher: '문학동네',
        date: '2022-02-28'
    },
    {
        url: '#',
        title: '달러구트 꿈 백화점. 2',
        author: '이미예',
        publisher: '팩토리나인',
        date: '2021-07-27'
    },
    {
        url: '#',
        title: '긴긴밤',
        author: '루리',
        publisher: '문학동네',
        date: '2021-02-03'
    },
    {
        url: '#',
        title: '단순한 열정',
        author: '아니 에르노',
        publisher: '문학동네',
        date: '2015-03-30'
    },
    {
        url: '#',
        title: '살인자의 기억법',
        author: '김영하',
        publisher: '문학동네',
        date: '2013-07-25'
    },
    {
        url: '#',
        title: '매우 예민한 사람들을 위한 책',
        author: '전홍진',
        publisher: '글항아리',
        date: '2020-07-23'
    },
    {
        url: '#',
        title: '이토록 평범한 미래',
        author: '김연수',
        publisher: '문학동네',
        date: '2022-10-07'
    },
    {
        url: '#',
        title: '오직 두 사람',
        author: '김영하',
        publisher: '문학동네',
        date: '2017-05-25'
    },
    {
        url: '#',
        title: '상관 없는 거 아닌가?',
        author: '장기하',
        publisher: '문학동네',
        date: '2020-09-11'
    },
    {
        url: '#',
        title: '무례한 사람에게 웃으며 대처 하는 법',
        author: '정문정',
        publisher: '가나출판사',
        date: '2017-01-08'
    },
    {
        url: '#',
        title: '지구에서 한아뿐',
        author: '정세랑',
        publisher: '난다',
        date: '2019-07-31'
    }
];

let newBookList = [
    {
        url: '#',
        title: '세상에서 가장 강력한 백신은 사람입니다',
        author: '김봉재',
        publisher: '설렘(SEOLREM0',
        date: '2023-03-07'
    },
    {
        url: '#',
        title: '무기력의 심리학',
        author: '브랫 프랭크',
        publisher: '흐름출판',
        date: '2023-02-13'
    },
    {
        url: '#',
        title: '초거대 위협',
        author: '누리엘 루비니',
        publisher: '한국경제신문',
        date: '2023-02-13'
    },
    {
        url: '#',
        title: '나도 모르는 내 마음의 심리법칙',
        author: '야오야오',
        publisher: '미디어숲',
        date: '2023-02-10'
    },
    {
        url: '#',
        title: '말이 힘이 될 때',
        author: '최동석',
        publisher: '클랩북스',
        date: '2023-02-10'
    },
    {
        url: '#',
        title: '리더의 태도',
        author: '문성후',
        publisher: '카시오페아',
        date: '2023-02-06'
    },
    {
        url: '#',
        title: '중국은 어떻게 실패하는가',
        author: '마이클 베클리',
        publisher: '부키',
        date: '2023-02-06'
    },
    {
        url: '#',
        title: '되는 사람',
        author: '도널드 밀러',
        publisher: '윌북',
        date: '2023-02-02'
    },
    {
        url: '#',
        title: '뭘 해도 되는 운명',
        author: '조 비테일',
        publisher: '유노북스',
        date: '2023-02-01'
    },
    {
        url: '#',
        title: '인생을 숙제처럼 살지 않기로 했다',
        author: '웃따',
        publisher: '다산북스',
        date: '2023-02-01'
    },
    {
        url: '#',
        title: '사랑하면 헷갈리게 하지 않는다',
        author: '마크 최',
        publisher: '포레스트북스',
        date: '2023-01-31'
    },
    {
        url: '#',
        title: '자발적 방관육아',
        author: '최은아',
        publisher: '쌤앤파커스',
        date: '2023-01-31'
    },
    {
        url: '#',
        title: '1퍼센트 부자의 법칙',
        author: '사이토 히토리',
        publisher: '나비스쿨',
        date: '2023-01-30'
    },
    {
        url: '#',
        title: '실리콘밸리의 실험실',
        author: '스테판 H.톰키',
        publisher: '한국경제신문',
        date: '2023-01-30'
    },
    {
        url: '#',
        title: '장사의 신(200쇄 기념 블랙에디션)',
        author: '우노 다카시',
        publisher: '쌤앤파커스',
        date: '2023-01-30'
    },
    {
        url: '#',
        title: '말의 힘, 글의 품격',
        author: '이승섭',
        publisher: '메이킹북스',
        date: '2023-01-27'
    },
    {
        url: '#',
        title: '기후위기 부의 대전환',
        author: '홍종호',
        publisher: '다산북스',
        date: '2023-01-26'
    },
    {
        url: '#',
        title: '나는 좌절의 스페셜리스트입니다',
        author: '백혜선',
        publisher: '다산북스',
        date: '2023-01-26'
    },
    {
        url: '#',
        title: '나는 해낼 수 있다',
        author: '보도 섀퍼',
        publisher: '소미미디어',
        date: '2023-01-26'
    },
    {
        url: '#',
        title: '운이란 무엇인가',
        author: '스티븐 D. 헤일스',
        publisher: '소소의책',
        date: '2023-01-26'
    }
];

let matchBook=[
    {
        url:'#',
        title:'맛있는 디자인 라이트룸 CC(기본편+활용편)',
        author: '김주원 지음 <span>한빛미디어</span>',
        info:'<span>라이트룸을 제대로 배우는 가장 완벽한 레시피!<br> 한 권으로 사진 보정 기초부터 활용까지! 쉽고 빠르게 익혀 바로 쓰는 사진 보정 입문서!</span></p>'
    }, {
        url:'#',
        title:'비전공이지만 개발자로 먹고삽니다',
        author:'반병헌, 이효석 저자 <span>생능북스</span>',
        info:'<span>“어떤 사람이 개발자가 될 수 있지?” <br> “개발자가 되려면 무엇을 배워야 하지?”<br>“나는 컴퓨터공학 전공자가 아닌데 또는 직장인인데 지금 개발자가 될 수 있을까?”</span>'
    },{
        url:'#',
        title:'웹소설 써서 먹고삽니다',
        author: '정무늬 저자 <span>길벗</span>',
        info: '<span>글 써서 먹고사는 가장 확실한 방법! <br>정답은 ‘웹소설’이다!<br><p>‘팔리는 글’ 쓰는 실전 스킬부터<br>실패하지 않는 계약 · 정산 꿀팁,<br>아무도 알려주지 않는 전업 작가 생활기까지!</span>'
    },{
        url:'#',
        title:'머신러닝 데이터 전처리 입문',
        author: '아다치 하루카 저자 <span>로드북<span>',
        info: '<span>이 책은 인공지능이 올바른 데이터를 입력 받아 의미 있는 결과를 도출하는 과정에서 필수적으로 거쳐야 할 데이터 전처리에 관한 ‘입문서’이다. 정형 데이터뿐만 아니라 이미지, 텍스트 데이터와 같은 비정형 데이터를 다루는 방법을 제공한다. 데이터를 처리하고 분석하기 위해 가장 많이 사용되는 파이썬 언어를 사용하고, NumPy, Pandas 등 라이브러리를 통해 어떠한 방법으로 데이터를 시각화하고, 의미를 도출할 수 있는지를 자세하게 배울 수 있다. 실습 위주의 책이며, 파이썬을 조금만 알아도 누구나 쉽게 따라해보면서 데이터 전처리의 개념과 방법 등에 관한 기초지식을 충분히 습득할 수 있다. 이것을 기초로 스스로 데이터 전처리 전문가가 되는 길을 찾을 수 있을 것이다.</span>'
    }
];

    //let bestBookImg=document.querySelector('.bookImg01');
    //bestBookImg.src='images/best/10.jpg'
    //alert(bestBookList[0].url);


    let mainImgSpan=document.querySelectorAll('.mainImage p>span');   //mainImage 문자열p/span tag 가져오는 변수
    let bestIdx=0;      //베스트책 이미지 슬라이더 idex
    let bannerIdx=1;    //배너이미지 슬라이더 index
    let auto;           //auto 이미지 슬라이드 setInterval function 변수

    //메인 이미지 애니메이션
    mainImageAnimation();
    setInterval(function(){
        mainImageAnimation();   
    },18000);




    //베스트도서 이미지슬라이드
    bestBooksSliderPanel();

    $('.fa-chevron-left').click(function(){
        if(bestIdx==0) {

        } else {
            bestIdx--;
            bestMoveSlide(bestIdx);
        }
    });
    $('.fa-chevron-right').click(function(){
        if(bestIdx==16) {
        } else {
            bestIdx++;
            bestMoveSlide(bestIdx);
        }
    });
    
    //신착도서 랜덤이미지
    newBookDisplay();

    //공지사항 이미지 슬라이더
    $('.banner_slide_panel').append($('.banner_img').first().clone());
    $('.banner_slide_panel').prepend($('.banner_img').eq(-2).clone());
    $('.banner_slide_panel').css('left',-300);

    bannerMoveSlide(bannerIdx);
    autoSlider();
    $('.control_btn').click(function(){
        bannerIdx=$(this).index();
        bannerMoveSlide(bannerIdx+1);
    });

    $('.imgBanner').hover(function(){
        clearInterval(auto); 
    },function(){
        autoSlider();   //마우스가 떠나면 autoSlide안에 setInterval을 다시 구현
    });

    //나만의 맞춤책 추천 영역
    $('.smallImg img').on('click',function(){
        let index=$(this).index();C:
        //alert(index);
        $('.smallImg img').css({
            opacity:0.6,
            border: 'none'
        });
        $(this).css({
            opacity:1,
            border:'4px solid #80BF5C'
        });

        $('.bigImg img').attr({
            src:'./images/match/'+index+'.jpg',
            alt: matchBook[index].title
        });
        $('.bigImg a').attr({
            href:matchBook[index].url,
            title:matchBook[index].title
        });
        $('.bookInfo dl dt').html('<a href="'+matchBook[index].url+'" title="'+matchBook[index].title+'">'+matchBook[index].title+'</a>')
        $('.bookInfo dd:nth-of-type(1)').html(matchBook[index].author);
        $('.bookInfo dd:nth-of-type(2)').html(matchBook[index].info);
    });

    $('.bigImg a').on('click',function(){
        chkLogin();
        alert('로그인이 필요합니다');
    });


    /* 함수 정의 영역*/ 
    //메인이미지 글씨 애니메이션
    function mainImageAnimation(){
        setTimeout(function(){
            for(let i=0; i<mainImgSpan.length; i++) {
                $(mainImgSpan[i]).delay(i*150).animate({
                    opacity:1
                },);
            }
        },2000);
    
        $('.mainImageTxt2').delay(500);
        $('.mainImageTxt2').fadeIn(3000);
        $('.mainImageTxt1').fadeIn(3000);

        //다시 지워주는 setinterval
        setTimeout(function(){
            $('.mainImageTxt1').fadeOut(1000);
            $('.mainImageTxt2').delay(500).fadeOut(1000);
            $('.mainImage p span').delay(1500).animate({
                opacity:0
            });
        },15000);
    }
    
    
    //로그인 되어있는지 체크하는 함수...
    function chkLogin(){

    }
    //bestBook 이미지슬라이드 패널 생성하는 함수
    function bestBooksSliderPanel(){
        for(let i=0; i<bestBookList.length; i++){
            let item='';
            item+='<div class="slide-content"><p class="bookPic"><a href="';
            item+=bestBookList[i].url+'" title="'+bestBookList[i].title+'">';
            item+='<img src="images/best/'+i+'.jpg" alt="'+bestBookList[i].title+'">';
            item+='<span class="fold">&nbsp;</span></a><span class="icon">';
            item+='<img src="images/ebook.png" alt="전자책아이콘"><span class="space">&nbsp;</span>';
            item+='<img src="images/mobile.png" alt="모바일아이콘"></span></p>';
            item+='<dl><a href="'+bestBookList[i].url+'" title="'+bestBookList[i].title+'">';
            item+='<dt>'+bestBookList[i].title+'</dt>';
            item+='<dd>'+bestBookList[i].author+'</dd></a></dl><div>';
            $('.slider-panel').append(item);
        }
        /*$('.slider-panel').append($('.slide-content').first().clone());
        $('.slider-panel').append($('.slide-content').eq(1).clone());
        $('.slider-panel').append($('.slide-content').eq(2).clone());
        $('.slider-panel').prepend($('.slide-content').eq(-4).clone());
        $('.slider-panel').prepend($('.slide-content').eq(-5).clone());
        $('.slider-panel').prepend($('.slide-content').eq(-6).clone());
        $('.slider-panel').css('left',-570);
        */
        bestMoveSlide(bestIdx);

    }

    function bestMoveSlide(bestIdx) {
        if(bestIdx<16&&bestIdx>0) { //16과 1사이일때 색상가능하게함
            $('.fa-solid').addClass('bestActive');
        }
        if(bestIdx==0) {
            $('.fa-solid').removeClass('bestActive');
            $('.btnEventPrev').css({
                cursor:'default',
                color:'#999'
            });
            $('.btnEventNext').css({
                cursor:'pointer',
                color:'#222'
            });
        }
        if(bestIdx==16) {
            $('.fa-solid').removeClass('bestActive');
            $('.btnEventNext').css({
                cursor:'default',
                color:'#999'
            });
            $('.btnEventPrev').css({
                cursor:'pointer',
                color:'#222'
            });
        }

        $('.slider-panel').animate({
            left: -(190*bestIdx)
        });
        
    }
    
    //신착 도서영역 함수
    function newBookDisplay(){
        let indxNumArr=ranArr(20);
        for(let i=0; i<indxNumArr.length; i++) {
            let item='';
            item+='<li><p class="bookPic">';
            item+='<a href="'+newBookList[indxNumArr[i]].url+'" title="'+newBookList[indxNumArr[i]].title+'">';
            item+='<img src="images/new/'+indxNumArr[i]+'.jpg" alt="'+newBookList[indxNumArr[i]].title+'">';
            item+='<span class="fold">&nbsp;</span></a>';
            item+='<span class="icon"><img src="images/ebook.png" alt="전자책아이콘"><span class="space">&nbsp;</span><img src="images/mobile.png" alt="모바일아이콘"></span></p>';
            item+='<dl><a href="'+newBookList[indxNumArr[i]].url+'" title="'+newBookList[indxNumArr[i]].title+'">';
            item+='<dt>'+newBookList[indxNumArr[i]].title+'</dt>';
            item+='<dd>'+newBookList[indxNumArr[i]].author+'</dd></a></dl></li>';
            $('.newBook').append(item);
        }
    }
    // 랜덤 숫자 함수
    function ranArr(num){  //num은 신착도서의 총 개수
        let arr=[];
        let ranNum;
        for(let i=0; i<5; i++){
            ranNum=Math.floor(Math.random()*num);
            if(arr.indexOf(ranNum)===-1) {
                arr.push(ranNum);
            } else {
                i--;
            }
        }
        return arr;
    }
    

    //오토 이미지 슬라이더
    function autoSlider(){
        auto=setInterval(function(){
            if(bannerIdx==1) {
                bannerIdx=2;
                bannerMoveSlide(bannerIdx);
            } else if(bannerIdx>1) {
                $('.banner_slide_panel').css('left',0);
                bannerIdx--;
                bannerMoveSlide(bannerIdx);
            } else if(bannerIdx<0){
                bannerIdx++;
                bannerMoveSlide(bannerIdx);
            } else{
                //$('.banner_slide_panel').css('left',600);
                bannerIdx++;
                bannerMoveSlide(bannerIdx);
            } //여기 문제 생김
        },4000);
    }

    //이미지 슬라이더 함수 
    function bannerMoveSlide(bannerIdx) {
        $('.banner_slide_panel').animate({
            left:-(300*bannerIdx)
        },'slow');
        $('.control_btn').removeClass('active');
        $('.control_btn').eq(bannerIdx-1).addClass('active');
    }