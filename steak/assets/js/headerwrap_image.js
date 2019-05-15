var image = new Array();
var index = 1;
$(document).ready(function(){
    for(var i=0;i<5;i++){
        image.push('../steak/assets/img/index-beef' + (i+1) + '.jpg');
    }
});

setInterval(function(){
    var i = index < 5 ? index : 0;
    index = i;
    var url = 'url('+ image[i] + ')';
    index++;
    $('#headerwrap').css('background-image',url);
}, 3000);