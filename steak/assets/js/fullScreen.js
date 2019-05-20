const MENU = {
    option_0: '#headerwrap',
    option_1: '#part',
    option_2: '#maturity',
    option_3: '#grade',
    option_4: '#information',
    option_5: '#story'
}

const PROGRESS_BLOCK = {
  color: {
    active: 'red' , 
    inactive: 'rgb(228, 227, 227)'
  },
  num: 6
};

var current_option = 0;

//scroll to target option
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
  this.setProgressBar(this.current_option , PROGRESS_BLOCK.num);
});

$(document).ready(
    _ => {
      // add block to progress area
        for(var i = 0; i < PROGRESS_BLOCK.num; i++) {
          $('#progress').append("<span class='fullscreen-block' id='block"+ i +"'></span>")
        }
        $('#progress').addClass('fullscreen-container');
      //full screen set
        $('html').css('overflow', 'hidden');
        $('.full-screen').css('height',window.screen.availHeight);
        $('.full-screen').css('width',window.screen.availWidth);
        $('#title').css('height',window.screen.availHeight);
        $('#title').css('margin-top','18%');
        $('.text').css('margin-top','10%');
        $('html, body').animate(
          {
            scrollTop: $(MENU['option_0']).offset().top,
          },
          500,
          'linear'
        )
        this.setProgressBar(this.current_option , PROGRESS_BLOCK.num);
    }
)

function setProgressBar(toggleBlock , blockNum) {
  for( var i = 0; i < blockNum ; i++ ){
    var blockId = '#block' + i;
    var color = (i === toggleBlock) ? PROGRESS_BLOCK.color.active : PROGRESS_BLOCK.color.inactive;
    $(blockId).css('background-color', color);
  }
 
}

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