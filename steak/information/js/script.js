const QA_LIST = {
    Q1: {
        first:'<p>以天然放牧的草飼牛只吃草，由天候決定草的枯榮、牛隻的成長快慢。因為運動量多，大部分油脂積聚在皮下，包覆在肌肉外，滲入肌肉裡的大理石紋油花不多，肉質相對精瘦，脂肪含量較少、熱量也較低，且富含對人體健康的omega-3脂肪酸，所以價格上也比穀飼牛高。</p>',
        second:'<p>穀飼牛肉是六十多年前畜牧業發展出的新飼養方式，將牛隻飼養在牛棚中，以玉米為主的穀類飼料進行混和餵食，亦可能額外添加人工輔助食材，讓牛隻成長更快速，並加強提升品質與風味，迎合市場需求。整體來說，穀飼牛隻的油花較均勻飽滿，牛肉入口相對來說也較柔嫩，口感會比草飼牛來得鮮嫩。</p>' 
    },
    Q2: '<p>並不是，典型的真空包裝牛肉呈深紅或暗紫色澤這是肌肉在缺氧狀態下所具有的正常自然色澤。因此發暗並不代表牛肉不新鮮，而是美味的熟成色當其離開真空的環境時在約15至30分鐘即可紅潤化（bloom）為鮮櫻桃紅色。</p>',
    Q3: '<ul><li><p><span>1.</span>先將牛排放置室溫至少30分鐘</p></li><li><p><span>2.</span>將牛排兩面均勻塗抹鹽巴</p></li><li><p><span>3.</span>將鍋子預熱至有白煙後放入牛排</p></li><li><p><span>4.</span>兩面各煎1分鐘使表面焦黃(上色)</p></li><li><p><span>5.</span>將蒜頭、迷迭香、奶油加入鍋子裡持續翻面</p></li><li><p><span>6.</span>可依照熟度決定起鍋時間</p></li></ul>',
    Q4: {
        first:'<p>不沾鍋、不銹鋼鍋、搪瓷鍋，都不適合煎牛排。如果沒辦法用烤架燒烤牛排，最好的鍋具是鑄鐵鍋。因為鑄鐵鍋加熱均勻，可以承受高熱，只需要少量油脂烹調，也會隨著烹調時間變得不會沾黏，可以直接從爐灶移入烤箱。</p>',
        second:'<p>如果你先煎牛排，再移入烤箱，鑄鐵鍋不可或缺(放在350ºF烤箱15分鐘，可使厚度一吋半的肉塊變成半熟牛排)。</p>'
    }
}

$('#Q1').hover(
    eventData => {
        $('#A-List').append(QA_LIST[eventData.originalEvent.path[0].id].first);
        $('#A-List').addClass('animation_emerge');
        next = setTimeout(
            _ => {
                $('#A-List').empty();
                $('#A-List').append(QA_LIST[eventData.originalEvent.path[0].id].second);
                $('#A-List').addClass('animation_emerge');
            },3000);
    },
    _ => {
        clearTimeout(next);
        $('#A-List').empty();
        $('#A-List').removeClass('animation_emerge');
    }
);

$('#Q2').hover(
    eventData => {
        $('#A-List').append(QA_LIST[eventData.originalEvent.path[0].id]);
        $('#A-List').addClass('animation_emerge');
    },
    _ => {
        $('#A-List').empty();
        $('#A-List').removeClass('animation_emerge');
    }
);

$('#Q3').hover(
    eventData => {
        $('#A-List').append(QA_LIST[eventData.originalEvent.path[0].id]);
        $('#A-List').addClass('animation_emerge');
        $('#A-List').css('max-width','50%');
    },
    _ => {
        $('#A-List').empty();
        $('#A-List').css('max-width','35%');
        $('#A-List').removeClass('animation_emerge');
    }
);

$('#Q4').hover(
    eventData => {
        $('#A-List').append(QA_LIST[eventData.originalEvent.path[0].id].first);
        $('#A-List').addClass('animation_emerge');
        next = setTimeout(
            _ => {
                $('#A-List').empty();
                $('#A-List').append(QA_LIST[eventData.originalEvent.path[0].id].second);
                $('#A-List').addClass('animation_emerge');
            },3000);
    },
    _ => {
        clearTimeout(next);
        $('#A-List').empty();
        $('#A-List').removeClass('animation_emerge');
    }
);