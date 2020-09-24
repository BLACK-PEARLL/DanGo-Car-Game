d=0;
score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("Key Code is:" ,e.key);
    if(e.key=="ArrowUp")
    {
        car=document.querySelector('.car');
        carT = parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));
        if(carT> 78  && carT< 453)
        car.style.top = carT - 120 + "px";
    }
    else if(e.key=="ArrowRight")
    {
        car=document.querySelector('.car');
        speedX = parseFloat(window.getComputedStyle(car,null).getPropertyValue('animation-duration'));
        if(speedX > 0.4 )
        {  newDur=speedX-0.3;
        car.style.animationDuration = newDur + "s";
        }
    }
    else if(e.key=="ArrowDown")
    {
        car=document.querySelector('.car');
        carB = parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));
        console.log(carB);
        if(carB>= 78  && carB< 319)
        car.style.top = carB + 120 + "px";
    }
    else if(e.key=="ArrowLeft")
    {
        car=document.querySelector('.car');
        speedX = parseFloat(window.getComputedStyle(car,null).getPropertyValue('animation-duration'));
        if(speedX < 10 )
        {  newDur=speedX+0.3;
        car.style.animationDuration = newDur + "s";
        }
    }
}

setInterval(() => {
    car=document.querySelector('.car');
    gameOver=document.querySelector('.gameOver');
    obbs1=document.querySelector('.obs1');
    obbs2=document.querySelector('.obs2');
    obbs3=document.querySelector('.obs3');
    obbs4=document.querySelector('.obs4');

    dxc=parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
    dyc=parseInt(window.getComputedStyle(car,null).getPropertyValue('top'));

    ox1=parseInt(window.getComputedStyle(obbs1,null).getPropertyValue('left'));
    oy1=parseInt(window.getComputedStyle(obbs1,null).getPropertyValue('top'));
   
    ox2=parseInt(window.getComputedStyle(obbs2,null).getPropertyValue('left'));
    oy2=parseInt(window.getComputedStyle(obbs2,null).getPropertyValue('top'));

    ox3=parseInt(window.getComputedStyle(obbs3,null).getPropertyValue('left'));
    oy3=parseInt(window.getComputedStyle(obbs3,null).getPropertyValue('top'));
 
    ox4=parseInt(window.getComputedStyle(obbs4,null).getPropertyValue('left'));
    oy4=parseInt(window.getComputedStyle(obbs4,null).getPropertyValue('top'));
 

    offsetX1 =Math.abs(dxc-ox1);
    offsetY1 =Math.abs(dyc-oy1);
  
    offsetX2 =Math.abs(dxc-ox2);
    offsetY2 =Math.abs(dyc-oy2);
   
    offsetX3 =Math.abs(dxc-ox3);
    offsetY3 =Math.abs(dyc-oy3);
   
    offsetX4 =Math.abs(dxc-ox4);
    offsetY4 =Math.abs(dyc-oy4);

    
    if((offsetX1< 85 && offsetY1< 50  )|| (offsetX2< 85 && offsetY2< 50) || (offsetX3< 85 && offsetY3< 50) || (offsetX4< 85 && offsetY4< 50))
     {
         gameOver.innerHTML = " GAME OVER! -Reload to Play again";
         obbs1.classList.remove('animobs11')
         obbs2.classList.remove('animobs21')
         obbs3.classList.remove('animobs31')
         obbs4.classList.remove('animobs41')
         car.classList.remove('animateCarL')
         d=2;
         audiogo.play();
         setTimeout(()=>{
             audiogo.pause();
             audio.pause();
            },1000)
      }
      else if(d==0){
          score+=1;
          updateScore(score);
          setTimeout(() => {
              dur1= parseFloat(window.getComputedStyle(obbs1,null).getPropertyValue('animation-duration'));
              dur2= parseFloat(window.getComputedStyle(obbs2,null).getPropertyValue('animation-duration'));
              dur3= parseFloat(window.getComputedStyle(obbs3,null).getPropertyValue('animation-duration'));
              dur4= parseFloat(window.getComputedStyle(obbs4,null).getPropertyValue('animation-duration'));
              n1= dur1 - 0.1;
              n2= dur2 - 0.1;
              n3= dur3 - 0.1;
              n4= dur4 - 0.1;
              obbs1.style.animationDuration=n1 + 's';
              obbs2.style.animationDuration=n2 + 's';
              obbs3.style.animationDuration=n3 + 's';
              obbs4.style.animationDuration=n4 + 's';
          }, timeout);
      }


}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: "+ score;

}


