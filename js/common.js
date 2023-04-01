$(function(){
    /* top menu 용 스크롤 */ 

    /*
    let scrollY;
    $(window).scroll(function () { 
        scrollY = $(document).scrollTop(); 
        viewTopbtn();
        if(scrollY>190) {
            $('.menuWrap').addClass('fixedActive');
            $('.mainConetns').addClass('addPaddingTop');
        } else {
            $('.menuWrap').removeClass('fixedActive');
            $('.mainConetns').removeClass('addPaddingTop');
        }
    });
    */
    let menuWrap=$('.menuWrap').offset();
    $(window).scroll(function(){
        let scrollY=$(document).scrollTop();
        if(scrollY>menuWrap.top){
            $('.menuWrap').addClass('fixedActive');
            $('.mainContents').addClass('addPaddingTop');
        } else {
            $('.menuWrap').removeClass('fixedActive');
            $('.mainContents').removeClass('addPaddingTop');
        }
    });



    let liIndx;
    let mainMenu=$('mainMenu>li>a');
    let subMenuName=['.subNotice','.subEbook','.subAudio','.subInfo'];

    $('.mainMenu>li').hover(function(){
        liIndx=$(this).index();
        showSubMenu(liIndx);
        //$(subMenuName[liIndx]).stop(true,true).slideDown(500);
    },function(){
        liIndx=$(this).index();
        hideSubMenu(liIndx);
    });
    /*
    $('.mainMenu>li>a').on({
        'focusin' : function(){
            liIndx=$(this).parent().index();
            showSubMenu(liIndx);
        },
        'focusout' : function() {
            liIndx=$(this).parent().index();
            hideSubMenu(liIndx);
        }

    });
    $('.subMenu a').on({
        'focusin' : function(){
            console.log('aa');
            showSubMenu(liIndx);
        },
        'focusout' : function() {
            hideSubMenu(liIndx);
        }
    })
    */
    /*
    $('.mainMenu>li>a').focusin(function(){
        console.log('dd');
        liIndx=$(this).parent().index();
        showSubMenu(liIndx);
        //$(subMenuName[liIndx]).stop(true,true).slideDown(500);
    });
    $('.mainMenu>li>a').focusout(function(){

        hideSubMenu(liIndx);
    });

    $('.mainMenu>li>a').focusout(function(){

        console.log('dd');
        liIndx=$(this).parent().index();
        let a = $(this);
        console.log(a);
        $(subMenuName[liIndx]).css({
            //display: 'none'
        });
    });
    */
    function showSubMenu(index) {
        $(subMenuName[index]).stop(true,true).slideDown(500);
    }
    function hideSubMenu(index) {
        $(subMenuName[liIndx]).css({
            display: 'none'
        });
    }

    /* family site 클릭 이벤트*/
    let btnFamily=false;
    $('.btnFamily').on('click',function(){
        btnFamily=!btnFamily
        if(btnFamily){ //familySite 목록 보일때
            $('.familySite .btnText').css('font-weight','bold');
            $('.arrow .fa-chevron-up').css('color','#000').animate({
                rotate:'180deg'
            });
            $('.familySite .familyUl').slideDown(500);
        } else {    //familyStie 목록 숨길때
            $('.familySite .btnText').css('font-weight','normal');
            $('.familySite .familyUl').slideUp(500);
            $('.arrow .fa-chevron-up').css('color','#bbb').animate({
                rotate:'0deg'
            });
        }
    });


    function viewTopbtn(){
        if(scrollY>400) {
            $('.topBtn').show('fade',300);
            //$('.topBtn').addClass('activeBtn',500);
        }else {
            $('.topBtn').hide('fade',300);
            //$('.topBtn').removeClass('activeBtn',500);
        }
    }
});