const COOK = [{
        title: 'Rare',
        content:''
    },
    {
        title: 'Medium Rare',
        content:''
    },
    {
        title: 'Medium',
        content:''
    },
    {
        title: 'Well Done',
        content:''
    }]


var topicOption = () => {
    var option = '';
    for(var i = 0; i < COOK.length; i++) {
        option = option + "<li><button "+ "id=option-"+ (i+1) +"><p>" + COOK[i].title +"</p></button></li>";
    }
    console.log(option);
    return option;
}

$(document).ready(
    () => {
       $('#topic-option').append(this.topicOption());
    }
);