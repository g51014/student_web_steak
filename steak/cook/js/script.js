const COOK = [{
        title: 'Rare',
        content:'邊緣熟，中間75%呈紅色',
        img: './img/cook_3.jpg'
    },
    {
        title: 'Medium Rare',
        content:'邊緣熟，中間50%紅色',
        img: './img/cook_5.jpg'
    },
    {
        title: 'Medium',
        content:'邊緣熟，中心25%呈粉色',
        img: './img/cook_7.jpg'
    },
    {
        title: 'Well Done',
        content:'通體呈熟褐色',
        img: './img/cook_10.jpg'
    }]


var topicOption = () => {
    var option = '';
    for(var i = 0; i < COOK.length; i++) {
        option = option + "<li><button "+ "id=option-"+ i +"><p>" + COOK[i].title +"</p></button></li>";
    }
    return option;
}

var content = (id) => {
    return "<p>"+COOK[id].content+"</p>"+"<a href = '#description'><i class='fa fa-sort-down sort-down-icon'></i></a>"+
    "<img src ='"+COOK[id].img+"'>";
}

$(document).ready(
    () => {
       $('#topic-option').append(this.topicOption());
    }
);

$(document).on('click',
    (clickEvenData) => {
        var target = {
            option: clickEvenData.originalEvent.path[1].id,
            icon: clickEvenData.originalEvent.path[0].className,
        };
        console.log(clickEvenData.originalEvent.path[0].className);
        if(target.option.includes('option')) {
            target.option = parseInt(target.option.split('option-')[1]);
            $('#description').empty();
            $('#description').append(this.content(target.option));
        }
    }
);

