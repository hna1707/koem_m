var $mainBtn = $('.nav_gnb > ul > li > a');    // 메인 메뉴

$mainBtn.click(function (){ // depth2 슬라이드

    if( !$(this).parents('li').is('.active') ) {  //li에 act클라스가 없을때(닫혀있는상태)
        $('.nav_gnb > ul > li').removeClass('active'); 
        $(this).parents('li').addClass('active');  

    } 
    else {     //li에 act클라스가 있을때(열려있는상태)  
        $('.nav_gnb > ul > li').removeClass('active').removeAttr('style');   
    }       
        
 }); // 메인메뉴 슬리이드 -끝

 var $subBtn = $('.depth2 > .has-child > a');    // 서브 메뉴

 $subBtn.click(function (){ // depth3 슬라이드

    if( !$(this).parents('.has-child').is('.active') ) {  //li에 act클라스가 없을때(닫혀있는상태)
        $('.depth2 > .has-child').removeClass('active'); 
        $(this).parents('.has-child').addClass('active');  

    } 
    else {     //li에 act클라스가 있을때(열려있는상태)  
        $('.depth2 > .has-child' ).removeClass('active').removeAttr('style');   
    }       
    
 }); // 서브메뉴 슬리이드 -끝


 // 햄버거버튼 틀릭시 메뉴 슬라이드
 $('.gnb').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.side_gnb').animate({left:0},500);
        
    } else {
        $('.side_gnb').animate({left:'100%'},500);
        
    }
})



