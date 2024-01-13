var spn, start_btn, stop_btn, t,ms, s, min, h;

//initialisation des variables
window.onload = function(){
    spn = document.getElementsByTagName('span');
    console.log(spn);
    start_btn = document.getElementById('start');
    stop_btn = document.getElementById('stop');
    t;
    ms=0 , s=0, min=0, h=0;
}

function chrono (){
    ms+=1;
    if(ms==10){
        ms = 1
        s+=1;
    }
    if(s==60){
        s=0;
        min+=1;
    }
    if(min== 60){
        min=0;
        h+=1;
    }
    //apres modification afficher result
    spn[0].innerHTML = h +"h";
    spn[1].innerHTML = min +"min";
    spn[2].innerHTML = s +"s";
    spn[3].innerHTML = ms +"ms";
    
}

function start(){
    t = setInterval(chrono,100);
    start_btn.disable = true;
}

function reset(){
    clearInterval(t);
    ms=0 , s=0, min=0, h=0;
    spn[0].innerHTML =h +"h";
    spn[1].innerHTML =min +"min";
    spn[2].innerHTML =s +"s";
    spn[3].innerHTML =ms +"ms";
    start_btn.disable = false;
}

function stop(){
    clearInterval(t);
    start_btn.disable = false;
   
}