const MENU = {
    option_0: '#headerwrap',
    option_1: '#part',
    option_2: '#maturity',
    option_3: '#grade',
    option_4: '#information',
    option_5: '#story'
}

var current_option = 0;


$(document).ready(
    _ => {
        $('html').css('overflow', 'hidden');
        $('.full-screen').css('height',window.screen.availHeight);
        $('#title').css('height',window.screen.availHeight);
        $('#title').css('margin-top','18%');
        $('.text').css('margin-top','10%');
        $('.full-screen').css('width',window.screen.availWidth);
        $('html, body').animate(
          {
            scrollTop: $(MENU['option_0']).offset().top,
          },
          500,
          'linear'
        )
    }
)

document.body.onmousewheel = debounce((event) => {
    event = event || window.event;
    event.wheelDelta === -120 ? current_option++ : current_option--;
    current_option = current_option > 5 ? 0 : current_option < 0 ? 5 : current_option;
    $('html, body').animate(
        {
          scrollTop: $(MENU['option_'+current_option]).offset().top,
        },
        500,
        'linear'
      )
});

//event delay
function debounce(func, wait = 100, immediate = true) { 
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };