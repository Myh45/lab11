
var rez = document.querySelector('.rez');
var rez1 = document.querySelector('.rez1');

var button_calc=document.querySelector('.calc');
var button_calc1=document.querySelector('.calc1');

var text='';
var text1='';

button_calc.addEventListener('click', function(){
    var a =document.querySelector('#var_a');
    var b =document.querySelector('#var_b');
    var h =document.querySelector('#var_h');
    
    a=parseFloat(a.value);
    b=parseFloat(b.value);
    h=parseFloat(h.value);
    
    
    var c= ((a+b)/2)*h;
    
    text='Площа = '+c+' м2';
    rez.innerHTML=text;
    
}
)

button_calc1.addEventListener('click', function(){
    var a =document.querySelector('#stor_a');
    var b =document.querySelector('#stor_b');
    var c =document.querySelector('#stor_c');
    
    a=parseFloat(a.value);
    b=parseFloat(b.value);
    c=parseFloat(c.value);
    
    var rezult= (a+b+c)/2;
    
    text1='Площа = '+rezult+' м2';
    rez1.innerHTML=text1;
    
}
)