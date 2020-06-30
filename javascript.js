function openKey(){
    document.getElementById('list').style.height = "270";
}
console.log(openKey);
function closeKey(){
    document.getElementById('list').style.height = '0px';
}
console.log(closeKey);
let i = 0;
function whoIAm(){
    if(i < -180 && i > -720){
        if(i < -180 && i > -360){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -360) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -360 && i >= -520){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -360) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -520 && i >= -720){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -720) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == 0){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= i) + 'deg) rotateZ(0deg) scale(1)';
    }
}
console.log(whoIAm);

function aboutMe(){
    if(i < -225 && i > -765){
        if(i < -225 && i > -405){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -405) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -405 && i > -630){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -405) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -630 && i >= -765){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -765) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -45){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i > 0 && i > 135){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 315) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 45) + 'deg) rotateZ(0deg) scale(1)';
        }
        
    }
}
console.log(aboutMe);

function whatIDo(){
    if(i < -270 && i > -810){
        if(i < -270 && i > -450){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -450) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -450 && i > -720){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -450) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -720 && i >= -810){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -810) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -90){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i > 45){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 270) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 90) + 'deg) rotateZ(0deg) scale(1)';
        }
        
    }
}
console.log(whatIDo);
function whatILike(){
    if(i < -315 && i > -855){
        if(i < -315 && i > -495){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -495) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -495 && i > -765){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -495) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -765 && i >= -855){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -855) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -135){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i > 0){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 225) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 135) + 'deg) rotateZ(0deg) scale(1)';
        }
    }
}
console.log(whatILike);
function whatIHate(){
    if(i < -360 && i > -900){
        if(i < -360 && i > -540){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -540) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -540 && i > -720){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -540) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -720 && i >= -900){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -900) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -180){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i > 0){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 180) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 180) + 'deg) rotateZ(0deg) scale(1)';
        }
        
    }
}
console.log(whatIHate);
function loveToBe(){
    if(i < -405 && i > -945){
        if(i < -405 && i > -585){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -585) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -585 && i > -765){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -585) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -765 && i >= -945){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -945) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -225){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i < 0){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 225) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 135) + 'deg) rotateZ(0deg) scale(1)';
        }
        
    }
}
console.log(loveToBe);
function hateToBe(){
    if(i < -450 && i > -990){
        if(i < -450 && i > -630){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -630) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -630 && i > -810){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -630) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -810 && i >= -990){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -990) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -270){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i < 0){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 270) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 90) + 'deg) rotateZ(0deg) scale(1)';
        }
        
    }
}
console.log(hateToBe);
function leaveAMessage(){
    if(i < -495 && i > -1035){
        if(i < -495 && i > -675){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -675) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -675 && i> -855){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -675) + 'deg) rotateZ(0deg) scale(1)';
        }
        if(i <= -855 && i >= -1035){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = -1035) + 'deg) rotateZ(0deg) scale(1)';
        }
    }else if (i == -315){
        document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i -= 0) + 'deg) rotateZ(0deg) scale(1)';
    }else{
        if(i < 0){
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i - 315) + 'deg) rotateZ(0deg) scale(1)';
        }else{
            document.getElementById('base').style.transform = 'translateX(0px) rotateX(-5deg) rotateY(' + (i = i - i + 45) + 'deg) rotateZ(0deg) scale(1)';
        }
        
    }
}
console.log(leaveAMessage);
