$(function(){

    let choice; //option 변경값
    //이메일 도메인 select 값이 변경 될 떄 
    $('#domainList').change (function(){
        choice=$('#domainList>option:selected').text();
        if(choice!='직접입력'){
            $('#emailDomain').attr({
                disabled: 'disabled',
                value : choice
            });
        } else {
            $('#emailDomain').removeAttr('disabled').attr('value','');
        }
    });
    /*
    let domain=$('#domainList');  //이메일 도메인 select id
    $(domain).change(function(){
        choice=$('#domainList>option:selected').text();
        if(choice!='직접입력'){
            $('#emailDomain').attr({
                disabled: 'disabled',
                value : choice
            });
        } else {
            $('#emailDomain').removeAttr('disabled').attr('value','');
        }
    });
    */
    /*let requiredInput=$('#joinForm input:required');
    let requirdSelect=('#joinForm select:required');

    console.log(requiredInput);
    console.log(requirdSelect);
    */

    //우편번호 찾기 popup
    $('.zipcodePop').click(function(){
        openPopup();
    });
    //우편번호 찾기 popup 끌때 
    $('.popupClose').click(function (){
        closePopup();
    });
    //우편번호 찾기 검색버튼 누를 떄
    $('.popupContent a').click(function(){
        searchZipcode();
    });


});

//우편번호찾기 popup open함수
function openPopup(){
    $('.popupZipcode').show('blind',500);
}
//우편번호찾기 popup close함수
function closePopup(){
    $('.popupZipcode').hide('blind',500);
}

//우편번호 찾기 함수
function searchZipcode(){
    let addrText = $('#zipcodeFind');
    //우편번호찾기 input text 입력값 받아오기
    let text=$(addrText).val();
    
    //빈 값이면 alert
    if(text==false) {
        alert('검색어(도로명,건물명,지번)을 입력해주세요(지번+도로명 통합검색)');
    }
}