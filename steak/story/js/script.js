const DURATION = 60000 //ms

$(document).ready(
    () => {
         //full screen set
         $('html').css('overflow', 'hidden');
         $('.full-screen').css('height',window.screen.availHeight);
         $('.full-screen').css('width',window.screen.availWidth);
         $('#title').css('height',window.screen.availHeight);
         $('#title').css('margin-top','10%');
         $('#introduction').css('top','500px');
         //4.5s
         setTimeout(() => {$('#story').addClass('animation_flyout');setTimeout(_ =>  $('#story').css('display','none'),3000)},1500);
         setTimeout(
             () => {
                setInterval(() => {
                    $('#introduction').css('display','block');
                    var scrollTop = $('#introduction').height()+window.screen.availHeight-640;
                    $('#introduction').animate(
                        {top:'-'+scrollTop+'px'},
                        DURATION, //1min
                        'linear',
                        _ => {
                            $('#introduction').css('top','500px');
                        }
                    );
                },1000);
             },
             4500
         );
         
    }
);

