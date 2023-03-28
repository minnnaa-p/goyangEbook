let ebookList = [
    {
        url: '#',
        src: 'images/best/0',
        pop: 1,
        chkout: 10,
        total: 10,
        reserv: 30,
        cate: 'ebook',
        title: '불편한 편의점',
        author: '김호연',
        publisher: '나무옆의자',
        date: '20210420',
        desc: '원 플러스 원의 기쁨, 삼각김밥 모양의 슬픔, 만 원에 네 번의 폭소가 터지는 곳! 힘겨운 시대를 살아가는 우리들에게 다가온 조금 특별한 편의점 이야기'
    },
    {
        url: '#',
        src: 'images/best/1',
        pop: 2,
        chkout: 5,
        total: 5,
        reserv: 26,
        cate: 'ebook',
        title: '밝은 밤',
        author: '최은영',
        publisher: '문학동네',
        date: '20210727',
        desc: '“슬픔을 위로하고 감싸주는 더 큰 슬픔의 힘” _오정희(소설가)백 년의 시간을 감싸안으며 이어지는 사랑과 숨의 기록 『쇼코의 미소』 『내게 무해한 사람』 최은영 첫 장편소설'
    },
    {
        url: '#',
        src: 'images/best/2',
        pop: 3,
        chkout: 5,
        total: 5,
        reserv: 30,
        cate: 'ebook',
        title: '하얼빈',
        author: '김훈',
        publisher : '문학동네',
        date: '20220803',
        desc: '『칼의 노래』를 넘어서는 깊이와 감동 김훈이 반드시 써내야만 했던 일생의 과업 ‘우리 시대 최고의 문장가’ ‘작가들의 작가’로 일컬어지는 소설가 김훈의 신작 장편소설 『하얼빈』이 출간되었다. 『하얼빈』은 김훈이 작가로 활동하는 내내 인생 과업으로 삼아왔던 특별한 작품이다. 작가는 청년 시절부터 안중근의 짧고 강렬했던 생애를 소설로 쓰려는 구상을 품고 있었고, 안중근의 움직임이 뿜어내는 에너지를 글로 감당하기 위해 오랜 시간을 들여 ‘인간 안중근’을 깊이 이해해나갔다. 그리고 2022년 여름, 치열하고 절박한 집필 끝에 드디어 그 결과물을 세상에 내놓게 되었다.'
    },
    {
        url: 'ebookContent.html',
        src: 'images/best/3',
        pop: 4,
        chkout: 5,
        total: 5,
        reserv: 29,
        cate: 'ebook',
        title: '파친코1',
        author: '이민진',
        publisher: '인플루엔셜',
        date: '20220805',
        desc: '“역사는 우리를 저버렸지만, 그래도 상관없다” 역사에 외면당한 재일조선인 가족의 대서사극 전 세계를 감동시킨 이민진 작가 화제작 《파친코》 새롭게 출간! “내게 ‘한국인’은 이야기의 주인공이 될 가치가 있는 이들이다. 나는 가능한 한 오래 한국인 이야기를 쓰고 싶다.” - ‘한국 독자들에게’ 중에서'
    },
    {
        url: '#',
        src: 'images/best/4',
        pop: 5,
        chkout: 5,
        total: 5,
        reserv: 19,
        cate: 'ebook',
        title: '작별인사',
        author: '이영하',
        publisher: '복복서가',
        date: '20220502',
        desc: '누구도 도와줄 수 없는 상황, 혼자 헤쳐나가야 한다 지켜야 할 약속, 붙잡고 싶은 온기 김영하가 『살인자의 기억법』 이후 9 년 만에 내놓는 장편소설 『작별인사』는 그리 멀지 않은 미래를 배경으로, 별안간 삶이 송두리째 뒤흔들린 한 소년의 여정을 좇는다. 유명한 IT 기업의 연구원인 아버지와 쾌적하고 평화롭게 살아가던 철이는 어느날 갑자기 수용소로 끌려가 난생처음 날것의 감정으로 가득한 혼돈의 세계에 맞닥뜨리게 되면서 정신적, 신체적 위기에 직면한다. 동시에 자신처럼 사회에서 배제된 자들을 만나 처음으로 생생한 소속감을 느끼고 따뜻한 우정도 싹틔운다. 철이는 그들과 함께 수용소를 탈출하여 집으로 돌아가기 위해 길을 떠나지만 그 여정에는 피할 수 없는 질문이 기다리고 있다.'
    },
    {
        url: '#',
        src: 'images/best/5',
        pop: 6,
        chkout: 5,
        total: 5,
        reserv: 14,
        cate: 'ebook',
        title: '미드나잇 라이브러리',
        author: '매트 헤이그',
        publisher: '인플루엔셜',
        date: '20210428',
        desc: '밤 12시, 죽기 바로 전에만 열리는 마법의 도서관에서 인생의 두 번째 기회를 드립니다 ★ 영국 아마존 종합 베스트셀러 1위 ★ 미국 아마존, 《뉴욕타임스》, 《선데이타임스》 장기 베스트셀러 ★ 전 세계 42개국 번역 출간 계약! ★〈어바웃 타임〉 제작사 영화화 확정!'
    },
    {
        url: '#',
        src: 'images/best/6',
        pop: 7,
        chkout: 5,
        total: 5,
        reserv: 7,
        cate: 'ebook',
        title: '친밀한 이방인',
        author: '정한아',
        publisher: '문학동네',
        date: '20171013',
        desc: '때로는 삶의 조건을 쟁취하기 위해, 때로는 목숨을 부지하기 위해 삶을 뒤엎는 한 인물의 일생을 추적하다! 《달의 바다》로 제12회 문학동네작가상을 수상한 이래 서정적인 문체로 동세대 인간 군상의 생을 연민하고 긍정해온 소설가 정한아의 세 번째 장편소설 『친밀한 이방인』. 한 소설가가 자신의 소설을 훔친 비밀스러운 인물의 행적을 추적해나가는 과정을 그린 이 작품이다. 우리 모두가 필연적으로 속해 있지만 대개는 불완전한 형태일 수밖에 없는 가족이라는 틀에 대해 오랜 시간 사유해온 저자는 이번 작품에서 그 천착의 결과를 미스터리 서사로 풀어내는 새로운 도전을 성공적으로 완수했다.'
    },
    {
        url: '#',
        src: 'images/best/7',
        pop: 8,
        chkout: 5,
        total: 5,
        reserv: 8,
        cate: 'ebook',
        title: '파친코 2',
        author: '이민진',
        publisher: '인플루엔셜',
        date: '20220825',
        desc: '“역사는 우리를 저버렸지만, 그래도 상관없다” 역사에 외면당한 재일조선인 가족의 대서사극 전 세계를 감동시킨 이민진 작가 화제작 《파친코》 새롭게 출간! '
    },
    {
        url: '#',
        src: 'images/best/8',
        pop: 9,
        chkout: 5,
        total: 5,
        reserv: 7,
        cate: 'ebook',
        title: '1Q84. 1',
        author: '무라카미 하루키',
        publisher: '문학동네',
        date: '20090825',
        desc: "당신의 하늘에는 몇 개의 달이 떠 있습니까? 무라카미 하루키가 <어둠의 저편> 이후 5년 만에 펴낸 장편소설『1Q84』제1권. 해마다 노벨상 후보에 거론되며, 일본은 물론 세계적으로 많은 사랑을 받고 있는 작가 무라카미 하루키. 그가 이번에는 두 남녀의 아련한 첫사랑 이야기인 동시에 '1Q84'를 헤쳐나가며 겪게 되는 환상적인 이야기를 그렸다. 압도적인 이야기의 강렬함과 흡인력이 돋보인다."
    },
    {
        url: '#',
        src: 'images/best/9',
        pop: 10,
        chkout: 5,
        total: 5,
        reserv: 22,
        cate: 'ebook',
        title: 'H마트에서 울다',
        author: '미셸 자우너',
        publisher: '문학동네',
        date: '20220228',
        desc: '“엄마가 이제 내 곁에 없는데 내가 한국인일 수 있을까?” 2021 뉴욕 타임스, 타임, 아마존, 굿리즈 올해의 책 버락 오바마 추천도서 뉴욕 타임스 29주 이상 베스트셀러'
    },
    {
        url: '#',
        src: 'images/best/10',
        pop: 11,
        chkout: 5,
        total: 5,
        reserv: 5,
        cate: 'ebook',
        title: '달러구트 꿈 백화점. 2',
        author: '이미예',
        publisher: '팩토리나인',
        date: '20210727',
        desc: '100만 독자를 사로잡은 《달러구트 꿈 백화점》, 그 두 번째 이야기 어느덧 페니가 달러구트 꿈 백화점에서 일한 지도 1년이 넘었다. 재고가 부족한 꿈을 관리하고, 꿈값 창고에서 감정으로 가득 찬 병을 옮기고, 프런트의 수많은 눈꺼풀 저울을 관리하는 일에 능숙해진 페니는 자신감이 넘친다. 게다가 꿈 산업 종사자로 인정을 받아야만 드나들 수 있는 ‘컴퍼니 구역’에도 가게 된 페니는 기쁜 마음을 감출 수 없다.'
    },
    {
        url: '#',
        src: 'images/best/11',
        pop: 12,
        chkout: 5,
        total: 5,
        reserv: 5,
        cate: 'ebook',
        title: '긴긴밤',
        author: '루리',
        publisher: '문학동네',
        date: '20210203',
        desc: '제21회 문학동네어린이문학상 대상 수상작 『긴긴밤』 세상에 마지막 하나 남은 흰바위코뿔소와 코뿔소 품에서 태어난 어린 펭귄. 그땐 기적인 줄 몰랐다, 머리부터 발끝까지 모든 것이 다른 우리에게 서로밖에 없다는 게.'
    },
    {
        url: '#',
        src: 'images/best/12',
        pop: 13,
        chkout: 4,
        total: 5,
        reserv: 0,
        cate: 'ebook',
        title: '단순한 열정',
        author: '아니 에르노',
        publisher: '문학동네',
        date: '20150330',
        desc: '간결하고 꾸밈없는 아니 에르노의 열정적 로맨스! 연하의 외국인 유부남과의 사랑을 다룬 『단순한 열정』은 글쓰기의 소재와 방식, 기억과 기록을 탐구한다. 이 소설은 임상적 해부에 버금가는 철저하게 객관화된 시선으로 ‘나’라는 작가 개인의 열정이 아닌 일반적이고도 보편적인 열정을 분석한 ‘반 감정소설’에 속한다.'
    },
    {
        url: '#',
        src: 'images/best/13',
        pop: 14,
        chkout: 5,
        total: 5,
        reserv: 1,
        cate: 'ebook',
        title: '살인자의 기억법',
        author: '김영하',
        publisher: '문학동네',
        date: '20130725',
        desc: '김영하의 장편소설 『살인자의 기억법』. 《너의 목소리가 들려》 이후 일 년 반 만에 펴낸 장편소설로 알츠하이머에 걸려 점점 사라져가는 기억과 사투를 벌이는 은퇴한 연쇄살인범의 이야기를 담고 있다. 올해로 데뷔한 지 19년, 독보적인 스타일로 여전히 가장 젊은 작가라 불리는 저자의 이번 소설에서 아무렇지 않게 툭툭 던지는 잠언들, 돌발적인 유머와 위트, 마지막 결말의 반전까지 정교하고 치밀하게 설계된 모든 것들을 만나볼 수 있다.'
    },
    {
        url: '#',
        src: 'images/best/14',
        pop: 15,
        chkout: 5,
        total: 5,
        reserv: 2,
        cate: 'ebook',
        title: '매우 예민한 사람들을 위한 책',
        author: '전홍진',
        publisher: '글항아리',
        date: '20200723',
        desc: '예민한 사람들이 긴장과 걱정과 타인의 반응에서 벗어나는 방법 『매우 예민한 사람들을 위한 책』은 지난 10여 년간 삼성서울병원 정신건강의학과 전문의로서 1만 명 이상의 환자를 상담·치료해온 전홍진 교수가 펴낸 책이다.'
    },
    {
        url: '#',
        src: 'images/best/15',
        pop: 16,
        chkout: 5,
        total: 5,
        reserv: 14,
        cate: 'ebook',
        title: '이토록 평범한 미래',
        author: '김연수',
        publisher: '문학동네',
        date: '20221007',
        desc: '작가 김연수가 짧지 않은 침묵을 깨고 신작 소설집 『이토록 평범한 미래』를 출간한다. 『사월의 미, 칠월의 솔』(2013) 이후 9년 만에 펴내는 여섯번째 소설집이다.'
    },
    {
        url: '#',
        src: 'images/best/16',
        pop: 17,
        chkout: 5,
        total: 5,
        reserv: 0,
        cate: 'ebook',
        title: '오직 두 사람',
        author: '김영하',
        publisher: '문학동네',
        date: '20170525',
        desc: '모두 잃으며 살아가는 우리에게 김영하가 전하는 일곱 편의 이야기! 《무슨 일이 일어났는지 아무도》 이후 7년 만에 펴낸 김영하의 소설집 『오직 두 사람』. 다채로운 스펙트럼으로 한국문학의 지평을 확장해온, 이른바 ‘김영하 스타일’이 총망라된 작품집이다. '
    },
    {
        url: '#',
        src: 'images/best/17',
        pop: 18,
        chkout: 5,
        total: 5,
        reserv: 1,
        cate: 'ebook',
        title: '상관 없는 거 아닌가?',
        author: '장기하',
        publisher: '문학동네',
        date: '20200911',
        desc: '곰곰 ‘나’를 들여다보고, 조금씩 마음의 짐을 덜어내며, ‘나’답게 살기 위한 작은 노력들에 대하여 뮤지션 장기하 첫 산문집 『상관없는 거 아닌가?』. 재기발랄하고 아름다운 가사와 개성 있는 음악으로 사랑받아온 뮤지션 장기하의 첫 산문집이다. '
    },
    {
        url: '#',
        src: 'images/best/18',
        pop: 19,
        chkout: 5,
        total: 5,
        reserv: 3,
        cate: 'ebook',
        title: '무례한 사람에게 웃으며 대처 하는 법',
        author: '정문정',
        publisher: '가나출판사',
        date: '20170108',
        desc: '무례한 사람들에게 웃으면서 우아하게 경고하는 방법! 『무례한 사람에게 웃으며 대처하는 법』은 일상에서 만나는 무례한 사람들, 사람마다 관계마다 심리적 거리가 다르다는 점을 무시하고 갑자기 선을 훅 넘는 사람들에게 감정의 동요 없이 단호하면서도 센스 있게 할 수 있는 의사표현에 대해 이야기하는 책이다.'
    },
    {
        url: '#',
        src: 'images/best/19',
        pop: 20,
        chkout: 4,
        total: 5,
        reserv: 0,
        cate: 'ebook',
        title: '지구에서 한아뿐',
        author: '정세랑',
        publisher: '난다',
        date: '20190731',
        desc: '2만 광년을, 너와 있기 위해 왔어! 외계인 경민과 지구인 한아의 아주 희귀한 종류의 사랑 이야기 『지구에서 한아뿐』. 창비장편소설상, 한국일보문학상 수상 작가 정세랑의 두 번째 장편소설이다. '
        
    }
];
let audioBookList=[];


checkedFilters();

//필터가 변경될때 
$('input[type="radio"]').change(function(){
    checkedFilters();
});

//대출가능한 책 리스트 함수
function bAableBook(bookList){
    let ableBooks=[];
    for(let i=0; i<bookList.length; i++){
        if((bookList[i].total-bookList[i].chkout)>0) {
            ableBooks.push(bookList[i]);
        }
    }
    return ableBooks;
};

//대출가능+예약가능 책 리스트 함수
function allBook(ebookList,audioBookList) {
    let allbookList = ebookList.concat(audioBookList);
    return allbookList;
}


//체크된 필터 확인하는 함수
function checkedFilters(){
    let bookList1;
    let bookList2;
    let filter=$('input[name="filter"]:checked').val();
    let tabmenu=$('input[name="tabmenu"]:checked').val();
    if((filter=='all')) {
        if((tabmenu=='allbook')){
            bookList1=allBook(ebookList,audioBookList);
        } else if((tabmenu=='ebook')){
            bookList1=ebookList;
        } else {
            bookList1=audioBookList;
        }
    }else {
        if((tabmenu=='allbook')){
            bookList2=allBook(ebookList,audioBookList);
            bookList1=bAableBook(bookList2);
        } else if((tabmenu=='ebook')){
            bookList1=bAableBook(ebookList);
        } else {
            bookList1=bAableBook(audioBookList);
        }
    }
    if(bookList1.length>5) {
        display(bookList1,5);
    } else {
        display(bookList1,bookList1.length);
    }
}



//디스플레이하는 함수
function display(bookList,length) {
    let content='';
    $('.listInner>ul').html('');
    $('.listOuter>p>strong').html(bookList.length);
        for(let i=0; i<length; i++) {
            content+='<li><p class="pic"><a href="'+bookList[i].url+'" title="'+bookList[i].title+'페이지">';
            content+='<img src="'+bookList[i].src+'.jpg" alt="'+bookList[i].title+'표지">';
            content+='<span class="fold">&nbsp;</span></a></p><dl><dt><span class="icon">';
            content+='  <img src="images/kyobo.png" alt="교보문고아이콘"><img src="images/ebook.png" alt="전자책아이콘">';
            content+='<img src="images/smartphone.png" alt="스마트폰아이콘"><img src="images/tablet.png" alt="태블릿아이콘"></span>';
            content+='<p><a href="'+bookList[i].url+'" title="'+bookList[i].title+'페이지">'+bookList[i].title+'</a></p></dt>';
            content+='<dd><em>'+bookList[i].author+' [ '+bookList[i].publisher+' / ';
            content+=bookList[i].date.substring(0,4)+'-'+bookList[i].date.substring(4,6)+'-'+bookList[i].date.substring(6,8)+' ]';
            content+='</em><p>'+bookList[i].desc+'</p></dd></dl><div class="service">';
            content+='<ul><li><strong>대출 : </strong><span><strong>'+bookList[i].chkout+'</strong>';
            content+='/'+bookList[i].total+'</span></li><li><strong>예약 : </strong>';
            content+='<span>'+bookList[i].reserv+'</span></li></ul>';
            if((bookList[i].total-bookList[i].chkout)>0) {
                content+='<p class="btnBR btnB"><a href="#" title="대출하기">';
                content+='<em>대출하기</em></a></p>';
            } else {
                content+='<p class="btnBR btnR"><a href="#" title="예약">';
                content+='<em>예약하기</em></a></p>';
            }
        content+='</div></li>';
        }
    $('.listInner>ul').append(content);
    pageAlgo(bookList.length, bookList.length/5 , 5, 1);

}


//대출가능 도서 찾아주는 함수
function bAableBook(bookList){
    let ableBooks=[];
    for(let i=0; i<bookList.length; i++){
        if((bookList[i].total-bookList[i].chkout)>0) {
            ableBooks.push(bookList[i]);
        }
    }
    return ableBooks;
};

//최신순으로 정렬해주는 함수
function newestBook(bookList){
    bookList.sort((x,y)=>x.date-y.date)
    bookList.reverse();
    return bookList;
}
//제목순으로 정렬해주는 함수
function titleBook(bookList){
    return bookList.sort((x,y) => x.title.localeCompare(y.title));    
}
//인기도순으로 정렬해주는 함수
function popBook(bookList){
    return bookList.sort((x,y)=>x.pop-y.pop);
}

//페이지 수 보여주는 함수
function pageAlgo(total, bottomSize, listSize, cursor){
    //total = 총 갯수
    //bottomSize = 하단크기
    //listSize = 화면에서 보여줄 크기
    //cursor = 현재 나의 페이지
    let totalPageSize = Math.ceil(total / listSize)  //한 화면에 보여줄 갯수에서 구한 하단 총 갯수 
    let firstBottomNumber = cursor - cursor % bottomSize + 1;  //하단 최초 숫자
    let lastBottomNumber = cursor % bottomSize + bottomSize;  //하단 마지막 숫자
    if(lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize  //총 갯수보다 큰 경우 방지

    let content='';
    for(let i = firstBottomNumber; i <= lastBottomNumber; i++){
        content+='<span>'+i+'</span>';
    }
    $('.pasing').empty();
    $('.pasing').append(content);
    $('.pasing span').eq(cursor-1).css({
        color: '#80BF5C',
        fontWeight: 'bold',
        fontSize: '1.1em'
    });
}