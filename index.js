var score1=Math.floor(Math.random()*6)+1;
var image1="./images/dice"+score1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
var score2=Math.floor(Math.random()*6)+1;
var image2="./images/dice"+score2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(image1>image2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}else if(image1<image2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}else{
    document.querySelector("h1").innerHTML="Draw!"
}
