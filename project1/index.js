let colors = ["red","blue","orange","purple","green","black"];
let btn = document.getElementById("btn");
btn.addEventListener('click',function(){
    let randomcolor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.background = randomcolor;
    });