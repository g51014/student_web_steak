const IMAGE = {
    US:  {
        image: '<img src="./img/US.jpg">'
    },
    JP: {
        image: '<img src="./img/japan_grade.png">'
    },
    AUS:  {
        image: '<img src="./img/japan_grade.png">'
    }
};

const COUNTRY = ['US','Japan','Australia'];

$(document).ready(
    () => {
       
    }
);

$("#US_btn").click(
    () => {
        this.clearCurrent();
        this.toggleCard('US');
    }
);

$("#Japan_btn").click(
    () => {
        this.clearCurrent();
        this.toggleCard('Japan');
    }
);

$("#Australia_btn").click(
    () => {
        this.clearCurrent();
        this.toggleCard('Australia');
    }
);

function clearCurrent() {
    // reset all card's opacity
    $('.cards').css('opacity',0.8); 
    // reset every contry's card
    for(var i=0; i<COUNTRY.length; i++) { 
        var id = '#'+ COUNTRY[i];
        var btn = id + '_btn';
        var art = id + '_art';
        $(id).removeClass('current_card');
        $(id).removeClass('animation_flyout');
        $(btn).css('display','block');
        $(art).css('display','none');
    }
}

function toggleCard(country) {
    setTimeout(() => {
        var id = '#'+country;
        var btn = id + '_btn';
        var art = id + '_art'
        $(id).css('opacity',1);
        this.flyout(country);
        $(btn).css('display','none');
        $(art).css('display','block');
        $(id).addClass('current_card');
    }, 100);
}

function flyout(country) {
    var animationList = COUNTRY.filter((e) => e !== country);
    for(var i=0; i<animationList.length; i++) {
        var id = '#' + animationList[i];
        $(id).addClass('animation_flyout'); 
    }
    setTimeout(() => {
        animationList.forEach(
            (e)=> {
                var id = '#' + e;
                $(id).css('opacity',0);
            }
        )
    }, 1000);
    setTimeout(() => {
        animationList.forEach(
            (e)=> {
                var id = '#' + e;
                $(id).css('opacity',0.8);
            }
        )
    }, 1300);
}