const bookList = [
    {
        url: '#',
        src: './images/best/0',
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
        src: './images/best/1',
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
        src: './images/best/2',
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
        url: './ebookContent.html',
        src: './images/best/3',
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
        src: './images/best/4',
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
        src: './images/best/5',
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
        src: './images/best/6',
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
        src: './images/best/7',
        pop: 8,
        chkout: 5,
        total: 5,
        reserv: 8,
        title: '파친코 2',
        author: '이민진',
        publisher: '인플루엔셜',
        date: '20220825',
        desc: '“역사는 우리를 저버렸지만, 그래도 상관없다” 역사에 외면당한 재일조선인 가족의 대서사극 전 세계를 감동시킨 이민진 작가 화제작 《파친코》 새롭게 출간! '
    },
    {
        url: '#',
        src: './images/best/8',
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
        src: './images/best/9',
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
        src: './images/best/10',
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
        src: './images/best/11',
        pop: 12,
        chkout: 5,
        total: 5,
        reserv: 5,
        title: '긴긴밤',
        author: '루리',
        publisher: '문학동네',
        date: '20210203',
        desc: '제21회 문학동네어린이문학상 대상 수상작 『긴긴밤』 세상에 마지막 하나 남은 흰바위코뿔소와 코뿔소 품에서 태어난 어린 펭귄. 그땐 기적인 줄 몰랐다, 머리부터 발끝까지 모든 것이 다른 우리에게 서로밖에 없다는 게.'
    },
    {
        url: '#',
        src: './images/best/12',
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
        src: './images/best/13',
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
        src: './images/best/14',
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
        src: './images/best/15',
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
        src: './images/best/16',
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
        src: './images/best/17',
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
        src: './images/best/18',
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
        src: './images/best/19',
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
        
    },
    {
        url: '#',
        src: './images/new/0',
        pop: 21,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '세상에서 가장 강력한 백신은 사람입니다',
        author: '김봉재',
        publisher: '설렘(SEOLREM0',
        date: '20230307',
        desc: '이 책은 20년간 임상병리사로 살아온 저자가 보건의료 현장에서 느낀 따뜻한 삶의 이야기를 담아내었다. 코로나 팬데믹 이후 감염병의 시대에 살고 있는 현대인들에게 위로와 공감을 안겨주는 에세이가 될 것이다.'
    },
    {
        url: '#',
        src: './images/new/1',
        pop: 22,
        chkout: 2,
        total: 2,
        reserv: 5,
        cate: 'ebook',
        title: '무기력의 심리학',
        author: '브랫 프랭크',
        publisher: '흐름출판',
        date: '20230213',
        desc: '생생한 경험담과 최신 심리학 정보가 가득 담겼다. 저자가 걸어왔던 여정과 거기서 얻은 지혜를 용기 있게 공유한다는 점이 매우 기쁘다.”  ? 리처드 C. 슈워츠, 하버드대학교 의과대학 교수'
    },
    {
        url: '#',
        src: './images/new/2',
        pop: 23,
        chkout: 2,
        total: 2,
        reserv: 1,
        cate: 'ebook',
        title: '초거대 위협',
        author: '누리엘 루비니',
        publisher: '한국경제신문',
        date: '20230213',
        desc: '2008년 금융 위기를 예측한 것으로 잘 알려진 경제학자이자 가장 논쟁적인 예측가, ‘닥터 둠’ 누리엘 루비니가 돌아왔다. 전작 《위기 경제학》 이후 13년 만이다. 이번에는 《초거대 위협》(MegaThreats)이라는 제목대로 오늘날 전 세계에 드리운 ‘거대한 위협’ 10가지를 해부하고 앞으로 나아가야 할 방향을 모색한다. 한마디로 ‘우리의 미래를 위협하는 10가지 위기와 그 속에서 살아남는 방법’이라 할 수 있다.'
    },
    {
        url: '#',
        src: './images/new/3',
        pop: 24,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '나도 모르는 내 마음의 심리법칙',
        author: '야오야오',
        publisher: '미디어숲',
        date: '20230210',
        desc: '● 말 실수를 했다. 사랑하는 이에게 심한 말로 상처를 줬다. 그러지 말자고 그렇게 다짐하는데도 무언가가 나를 조종하는 것처럼 실수를 반복한다. ● 불안하다. 곰곰이 따져봐도 당장 뚜렷한 걱정거리가 없는데 가슴이 두근거리고 무언가 끔찍한 일이 벌어질 것만 같다.'
    },
    {
        url: '#',
        src: './images/new/4',
        pop: 25,
        chkout: 1,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '말이 힘이 될 때',
        author: '최동석',
        publisher: '클랩북스',
        date: '20230210',
        desc: '말에 대한 새로운 화두를 던지는 최동석 저자의 첫 책 상대에게 힘이 되는 말을 전하기 위해  ‘얕은 기술’보다 ‘진심의 깊이’를 고민할 것 ★★★ 국민 MC 신동엽 추천 ★★★ “나는 여전히, 깊게 고민한다. 누구도 불쾌하지 않지만, 모두가 유쾌할 수 있게 말하는 법을! 이 책을 만나 그 고민이 덜어졌다.” '
    },
    {
        url: '#',
        src: './images/new/5',
        pop: 26,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '리더의 태도',
        author: '문성후',
        publisher: '카시오페아',
        date: '20230206',
        desc: '“오래도록 존경받는 리더의 힘은 태도에서 나온다.” 국가공무원인재개발원 고공단 후보자 강의, 삼성그룹 차세대리더 리더십 강의 세계지식포럼(WKF) 평판 세션 연사, IMI 전경련 국제경영원 최우수 강연상 대한민국 No.1 리더 전문가 문성후 박사가 이야기하는 지속 가능한 리더의 비밀'
    },
    {
        url: '#',
        src: './images/new/6',
        pop: 27,
        chkout: 2,
        total: 2,
        reserv: 1,
        cate: 'ebook',
        title: '중국은 어떻게 실패하는가',
        author: '마이클 베클리',
        publisher: '부키',
        date: '20230206',
        desc: '한국 독자들에게 『중국은 어떻게 실패하는가』은 상당한 충격을 던진다. 세계는 지금 미중 패권 대결 사상 가장 위험한 10년 구간을 통과하고 있다. '
    },
    {
        url: '#',
        src: './images/new/7',
        pop: 28,
        chkout: 1,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '되는 사람',
        author: '도널드 밀러',
        publisher: '윌북',
        date: '20230202',
        desc: '‘잘되는 사람’이 되는 공식이 따로 있을까? 이 책은 ‘뭘 해도 안 된다’는 패배주의에 빠진 사람들에게 죽비 같은 깨달음을 주는 인생 공략 안내서다.'
    },
    {
        url: '#',
        src: './images/new/8',
        pop: 29,
        chkout: 2,
        total: 2,
        reserv: 1,
        cate: 'ebook',
        title: '뭘 해도 되는 운명',
        author: '조 비테일',
        publisher: '유노북스',
        date: '20230201',
        desc: '당신은 무엇을 갖고 싶은가? 당신은 무엇을 하고 싶은가? 당신은 어떻게 되고 싶은가? 하루의 목표부터 비장한 새해 목표, 오랫동안 꿈꿔 온 인생의 목표까지, 우리는 원하는 것을 이루기 위해 노력하지만 때때로 내면의 깊은 곳에서 불신 가득한 목소리를 마주한다. ‘내가 정말 이것들을 이룰 수 있을까?’'
    },
    {
        url: '#',
        src: './images/new/9',
        pop: 30,
        chkout: 0,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '인생을 숙제처럼 살지 않기로 했다',
        author: '웃따',
        publisher: '다산북스',
        date: '20230201',
        desc: '유쾌한 위로와 명쾌한 솔루션으로 유튜브에서 진한 감동을 전하고 있는 상담심리사 웃따가 첫 책을 출간했다. 아픔을 감추는 ‘가면성 우울’을 겪고 치유하는 과정을 솔직하게 그린 심리 에세이다.'
    },
    {
        url: '#',
        src: './images/new/10',
        pop: 31,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '사랑하면 헷갈리게 하지 않는다',
        author: '마크 최',
        publisher: '포레스트북스',
        date: '20230131',
        desc: '언제부턴가 연애하면서 우는 날이 늘어났다. 그가 내게 소홀해진 것 같고, 다툼이 잦아지는 등 관계가 삐걱거리지만 헤어지자는 말은 목구멍 안에서만 맴돈다.'
    },
    {
        url: '#',
        src: './images/new/11',
        pop: 32,
        chkout: 2,
        total: 2,
        reserv: 4,
        title: '자발적 방관육아',
        author: '최은아',
        publisher: '쌤앤파커스',
        date: '20230131',
        desc: '★★★★★ EBS 〈60분 부모〉 육아 멘토 이보연 소장 추천도서 ★★★★★ 육아 채널 〈베싸TV〉 박정은 대표 추천도서 ★★★★★ 0~3세, 4~7세, 8~10세 성장단계별 육아 솔루션 ★★★★★ 교사가 알려주는 초등 입학 전 체크리스트 수록'
    },
    {
        url: '#',
        src: './images/new/12',
        pop: 33,
        chkout: 2,
        total: 2,
        reserv: 12,
        cate: 'ebook',
        title: '1퍼센트 부자의 법칙',
        author: '사이토 히토리',
        publisher: '나비스쿨',
        date: '20230130',
        desc: '사이토 히토리는 매우 독특한 인물이다. 누적 납세액 1위라는 전대미문의 기록으로 일본 최고 부자의 자리에 올랐지만, 자신의 얼굴을 단 한 번도 공개한 적이 없다.'
    },
    {
        url: '#',
        src: './images/new/13',
        pop: 34,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '실리콘밸리의 실험실',
        author: '스테판 H.톰키',
        publisher: '한국경제신문',
        date: '20230130',
        desc: '신제품을 개발할 때, 새로운 아이디어가 수익 창출을 할 수 있을지 살펴볼 때, 비즈니스 모델을 수립할 때, 기업의 모든 리더는 자신이 올바른 결정을 내리길 원한다.'
    },
    {
        url: '#',
        src: './images/new/14',
        pop: 35,
        chkout: 2,
        total: 2,
        reserv: 1,
        cate: 'ebook',
        title: '장사의 신(200쇄 기념 블랙에디션)',
        author: '우노 다카시',
        publisher: '쌤앤파커스',
        date: '20230130',
        desc: '장사를 시작하려는 사람들은 물론이고 이미 장사를 하고 있는 사람들에게도 지난 10년 동안 큰 영감을 주며 길잡이가 되어준 책, 《장사의 신》이 200쇄 돌파 기념 블랙에디션으로 새롭게 출간되었다.'
    },
    {
        url: '#',
        src: './images/new/15',
        pop: 36,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '말의 힘, 글의 품격',
        author: '이승섭',
        publisher: '메이킹북스',
        date: '20230127',
        desc: '직장인이라면 누구나 윗사람으로부터 인정받고 회사에서도 잘 나가길 바랄 것이다. 많은 연봉을 받고, 승진에서도 남들보다 앞서고 싶어 한다. 하지만 이 같은 ‘로망(toman)’을 이루기는 그리 쉽지 않다.'
    },
    {
        url: '#',
        src: './images/new/16',
        pop: 37,
        chkout: 2,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '기후위기 부의 대전환',
        author: '홍종호',
        publisher: '다산북스',
        date: '20230126',
        desc: '20대부터 인간을 살리는 따뜻한 경제학, 기후경제학에 골몰해 온 국내 최고 권위의 기후경제학자 홍종호 교수가 지금까지 기후와 한국 경제를 위해 헌신한 30년의 연구 성과를 한 권으로 집대성했다.'
    },
    {
        url: '#',
        src: './images/new/17',
        pop: 38,
        chkout: 1,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '나는 좌절의 스페셜리스트입니다',
        author: '백혜선',
        publisher: '다산북스',
        date: '20230126',
        desc: '좌절 앞에서 주저앉을 것인가, 좌절을 다른 무언가로 승화할 것인가? 그에 대한 해답을 들려줄 수 있는 한 명의 음악가가 여기 있다.'
    },
    {
        url: '#',
        src: './images/new/18',
        pop: 39,
        chkout: 1,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '나는 해낼 수 있다',
        author: '보도 섀퍼',
        publisher: '소미미디어',
        date: '20230126',
        desc: '세계 최고의 머니 코치이자 경영 컨설턴트로 손꼽히는 보도 섀퍼. 그는 세계 전역에서 경제적 자유와 성공에 관한 강연을 이어나가며 청중들의 지지를 받고 있다. '
    },
    {
        url: '#',
        src: './images/new/19',
        pop: 40,
        chkout: 0,
        total: 2,
        reserv: 0,
        cate: 'ebook',
        title: '운이란 무엇인가',
        author: '스티븐 D. 헤일스',
        publisher: '소소의책',
        date: '20230126',
        desc: '운에 관한 서로 다른 관점과 이론을 파헤치고, 그 진실에 다가선다. 우리는 누구나 불운을 두려워하고 행운을 기대한다. 자신에게 벌어지는 일들과 주변 상황을 이해하려 들 때면 ‘운’이라는 잣대를 너무나 쉽게 들이댄다. 그렇다면 운이란 것이 대체 무엇이기에, 이토록 복잡하고 천차만별인 일들에 수시로 등장하여 인간의 삶을 헤집어놓을까?'
    }
];

checkedFilters();

$('input[type="radio"]').change(function(){
    checkedFilters();
});

//체크된 필터 확인하는 함수
function checkedFilters(){
    let bookList1;
    let bookList2;
    let filter=$('input[name="filter"]:checked').val();
    let tabmenu=$('input[name="tabmenu"]:checked').val();

    if((filter=='all')) {
        if((tabmenu=='new')){
            bookList1=newestBook(bookList);
        } else if((tabmenu=='pop')){
            bookList1=popBook(bookList);
        } else {
            bookList1=titleBook(bookList);
        }
    }else {
        bookList2=bAableBook(bookList);
        if((tabmenu=='new')){
            bookList1=newestBook(bookList2);
        } else if((tabmenu=='pop')){
            bookList1=popBook(bookList2);
        } else {
            bookList1=titleBook(bookList2);
        }
    }
    if(bookList.length>5) {
        display(bookList1,5);
    } else {
        display(bookList1,bookList1.length);
    }
}





//책 스플레이하는 함수
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