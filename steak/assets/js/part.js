var introduction = '<p>'+'進到牛排館，總是被菜單上琳琅滿目的牛排名稱（菲力、肋眼、沙朗、紐約客、牛小排……）搞得暈頭轉向嗎？'+'<br>'+'經常想要到自己動手做一份牛排，進到超市看到各式各樣的牛肉，卻不知道要挑選哪個部位的牛肉嗎？'+'<br>'+'今天帶大家一次搞懂幾種最常見的牛排，以後進到牛排館或超市肉品區再也不會一頭霧水了！'+'</p>';
const RIBEYE = '<p>'+'此部位取自牛隻肋脊部靠近背脊之肌肉，肉質嫩度僅次於菲力，大理石紋的油花多且分佈均勻，肋眼牛排通常中間會有一塊明顯的油脂，建議燒烤到5～7 分熟，把油脂燒透，散發出牛油香味來吃是最美味的，肉質鮮嫩具有嚼勁，可說是最受歡迎也最被人熟知的牛排部位，台灣一般所稱之”沙朗牛排”即為此部位。如 未去除肋骨的切塊，比較粗礦的吃法，又稱為 Cowboy steak 或 Rib Steak。'+'</p>';
const SHORTRIB = '<p>'+'取自牛隻的前胸肋骨部位，可以帶骨或去骨的形式，此部位的肉質結實且油筋及油脂甚多，適合以燒烤的方式來料理，燒烤過程中油汁會隨著高溫溢出，牛 肉風味絕佳，建議食用熟度7分～全熟。在燒烤至全熟的狀態下，牛肉收縮會與肋骨部位自然分離，此時最能表現出牛小排焦脆的筋肉跟嚼勁喔。'+'</p>';
const NEWYORK = '<p>'+'取自牛隻的前腰脊肉部位，由於此部位運動量稍多，因此肉質較緊實，其油花分佈均勻，油脂含量介於肋眼與菲力之間，具豐富牛肉風味適合豪邁地品嘗， 嚼起來富有肉感非常過癮，建議3~5分熟度。在美國此部位是在牛排館、Club常見的牛排使用部位，也稱叫Club Steak。'+'</p>';
const FILET = '<p>'+'菲力牛排是取自牛隻腰內肉（Tenderloin）部位，每頭上千磅的牛只能切出幾磅的菲力，是牛肉最嫩的部位，通常也是最昂貴的牛排。這個部位 的運動量極少，所以肉質如奶油般的細嫩且油脂含量極低，是可以優雅來品嘗的牛排。菲力牛排建議吃3分熟（Medium Rare）的形式，過熟則肉質變硬，就無法品嘗出菲力牛排的鮮嫩多汁，及其微妙精緻的風味。'+'</p>';
const T_BONE = '<p>'+'取自牛隻的前腰脊部位，將丁骨牛排中間的丁骨拆開，分別是一片菲力牛排與一片紐約客牛排，這兩塊部位的性質差異大，菲力牛排屬於精瘦鮮嫩，而紐約 客則具嚼勁及油花，丁骨牛排恰好同時滿足兩種需求，其份量通常較大份，建議熟度3～5分熟。不過，腰脊肉切片位置的不同，其菲力與紐約客大小和比例也會不同，如果切片的部位比較靠近尾端，菲力的部份直徑較大，那這樣的丁骨稱做 Porterhouse，若切片靠近頭部，其菲力部分會越來越小，甚至剩薄薄一片，組成大多為紐約客，這就是典型的T-bone。'+'</p>';
const SIRLOIN = '<p>'+'為牛隻後腰脊柱兩側的後腰脊肉，肉質嫩度適中、油花較少但分布均勻，牛肉風味佳，此部位靠近腿部之運動肌肉，所以略有嚼勁。此分切部位之上後腰脊肉（Top sirloin）的肉質最好，可切出特上等臀肉牛排。此部位牛肉在台灣牛排館或餐廳較少見到，部分是以小牛沙朗形式提供，一般較常以整塊臀肉燒烤後再切片 的方式在飯店自助餐看到。沙朗（Sirloin）在美國是指後腰脊肉，而在台灣”沙朗”一詞通常是指”肋眼牛排”（Ribeye steak），下次吃牛排不看一下菜單的英文是寫Sirloin還是Ribeye喔！'+'</p>';
$(document).ready(function(){$('#introduction').append(introduction)});

$('#rib-eye').click(function(){
  introduction = RIBEYE;
  ChangeIntro(introduction);
});

$('#short-rib').click(function(){
  introduction = SHORTRIB;
  ChangeIntro(introduction);
});

$('#new-york').click(function(){
  introduction = NEWYORK;
  ChangeIntro(introduction);
});

$('#filet').click(function(){
  introduction = FILET;
  ChangeIntro(introduction);
});

$('#t-bone').click(function(){
  introduction = T_BONE;
  ChangeIntro(introduction);
});

$('#sirloin').click(function(){
  introduction = SIRLOIN;
  ChangeIntro(introduction);
});

function ChangeIntro(intro) {
  $('#introduction').empty();
  $('#introduction').append(intro);
};
