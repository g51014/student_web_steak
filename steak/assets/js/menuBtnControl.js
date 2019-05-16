$(document).ready(() => {
   $('#back').addClass('animation_pop');
});

$('#back_menu').hover(
    () => {
        $('#back').removeClass('animation_pop');
    }
);

$('#back_menu').mouseout(
    () => {
        $('#back').addClass('animation_pop');
    }
);