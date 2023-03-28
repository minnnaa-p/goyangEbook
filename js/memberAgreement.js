
window.onpageshow = function (event) {
	if (event.persisted) {
        
	} else {
        check();
	}
};


$(function(){
    check();
    $('.chkAll').click(function(){
        check();
    });

});

$('.chk').click(function(){
    let total=$('input[name=agree]').length;
    let checked=$('input[name=agree]:checked').length;
    if(total!=checked) {
        $('#agreeAll').prop('checked',false);
        //a태그 비활성화 함수 호출
        btnDisable();
    } else {
        $('#agreeAll').prop('checked',true);
        //a태그 활성화 함수호출
        btnAble();
    }
});


function check(){         
    if($('#agreeAll').is(':checked')) {
        $('input[name=agree').prop('checked',true);
        //a태그 활성화 함수호출
        btnAble();
    }else {
        $('input[name=agree]').prop('checked',false);
        //a태그 비활성화 함수호출
        btnDisable();
    }
}
function btnAble(){
    $('.btnArea>a').addClass('btnStyle').attr({
        href:'memberJoin.html'
    });
}
function btnDisable(){
    $('.btnStyle').removeClass('btnStyle').removeAttr('href');
}

