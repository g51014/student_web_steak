var n=1,timeID=0;
imgno=new Array;
imgno[1]="assets/img/about1.png";
imgno[2]="assets/img/about2.png";
imgno[3]="assets/img/about1.png";
imgno[4]="assets/img/about2.png";

function change(){
m=n;
myText.filters["revealTrans"].Apply();
myText.filters["revealTrans"].Transition=23;
myImge.src=imgno[m];
myText.filters["revealTrans"].Play();
n=n+1;
if (n>=5){n=1;}
timeID=setTimeout("change()",2000);
}
window.onload=change;
