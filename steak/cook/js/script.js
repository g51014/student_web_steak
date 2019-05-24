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
    return "<p>"+COOK[id].content+"</p>"+"<button><i id='"+ id +"' class='fa fa-sort-down sort-down-icon'></i></button>";
}

var image = (id) => {
    return "<img src ='"+COOK[id].img+"'>";
}

$(document).ready(
    () => {
       $('#topic-option').append(this.topicOption());
    }
);

$(document).on('click',
    (clickEvenData) => {
        const even = 
        clickEvenData.originalEvent.path[1].id.includes('option') ? {type:'option',data:clickEvenData.originalEvent.path[1].id} :
        //up/down
        clickEvenData.originalEvent.path[0].className.split(' ')[2].includes('icon')? {type:clickEvenData.originalEvent.path[0].className.split(' ')[2].split('-')[1],data:clickEvenData.originalEvent.path[0].id} : {type:'others'};
        const EVEN_MAP = {
            option: (data) => {
                if(data.includes('option')) {
                        const option = parseInt(data.split('option-')[1]);
                        if (!!option || option === 0) {
                            $('#description').empty();
                            $('#image').empty();
                            $('#description').append(this.content(option));
                        } 
                    }
            },
            up: (data) => {
                $('#'+data).removeClass();
                $('#'+data).addClass('fa fa-sort-down sort-down-icon');
                $('#image').empty();
            },
            down: (data) => {
                $('#'+data).removeClass();
                $('#'+data).addClass('fa fa-caret-up sort-up-icon');
                $('#image').append(this.image(data));
            }
        };
        EVEN_MAP[even.type](even.data);

        // var target = {
        //     option: clickEvenData.originalEvent.path[1].id, // 0-4
        //     icon: clickEvenData.originalEvent.path[0].className, 
        // };
        // if(target.option.includes('option')) {
        //     const option = parseInt(target.option.split('option-')[1]);
        //     if (!!option || option === 0) {
        //         $('#description').empty();
        //         $('#description').append(this.content(option));
        //     } 
        // }
        // // else if (!!target.icon) {
        //     if(target.icon.split(' ')[2].split('-')[1].includes('up')) {
               
        //     }
        //     if(target.icon.split(' ')[2].split('-')[1].includes('down')) {
        //         $('#image').append(this.image());
        //     }
        // }
    }
);




