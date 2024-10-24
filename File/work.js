var ei_count1=0;
var sn_count1=0;
var tf_count1=0;
var jp_count1=0;


var ei_count2=0;
var sn_count2=0;
var tf_count2=0;
var jp_count2=0;


function ei_counter1(){ei_count1+=1;}
function sn_counter1(){sn_count1+=1;}
function tf_counter1(){tf_count1+=1;}
function jp_counter1(){jp_count1+=1;}

function ei_counter2(){ei_count2+=1;}
function sn_counter2(){sn_count2+=1;}
function tf_counter2(){tf_count2+=1;}
function jp_counter2(){jp_count2+=1;}


function ei_counter1_minus(){ei_count1-=1;}
function sn_counter1_minus(){sn_count1-=1;}
function tf_counter1_minus(){tf_count1-=1;}
function jp_counter1_minus(){jp_count1-=1;}

function ei_counter2_minus(){ei_count2-=1;}
function sn_counter2_minus(){sn_count2-=1;}
function tf_counter2_minus(){tf_count2-=1;}
function jp_counter2_minus(){jp_count2-=1;}



function sled_vopr1(){
    if(document.getElementById('q1').style.display == "block"){
        document.getElementById('2back1').style.display = "block";
        document.getElementById('2back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/2.jpg')";
        document.getElementById('q1').style.display = "none";
        document.getElementById('q2').style.display = "block";}

    else if(document.getElementById('q2').style.display == "block"){
        document.getElementById('3back1').style.display = "block";
        document.getElementById('3back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/3.jpg')";
        document.getElementById('q2').style.display = "none";
        document.getElementById('q3').style.display = "block";}

    else if(document.getElementById('q3').style.display == "block"){
        document.getElementById('4back1').style.display = "block";
        document.getElementById('4back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/4.jpg')";
        document.getElementById('q3').style.display = "none";
        document.getElementById('q4').style.display = "block";}

    else if(document.getElementById('q4').style.display == "block"){
        document.getElementById('5back1').style.display = "block";
        document.getElementById('5back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/5.jpg')";
        document.getElementById('q4').style.display = "none";
        document.getElementById('q5').style.display = "block";}

    else if(document.getElementById('q5').style.display == "block"){
        document.getElementById('6back1').style.display = "block";
        document.getElementById('6back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/6.jpg')";
        document.getElementById('q5').style.display = "none";
        document.getElementById('q6').style.display = "block";}

    else if(document.getElementById('q6').style.display == "block"){
        document.getElementById('7back1').style.display = "block";
        document.getElementById('7back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/7.jpg')";
        document.getElementById('q6').style.display = "none";
        document.getElementById('q7').style.display = "block";}
        
    else if(document.getElementById('q7').style.display == "block"){
        document.getElementById('8back1').style.display = "block";
        document.getElementById('8back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/8.jpg')";
        document.getElementById('q7').style.display = "none";
        document.getElementById('q8').style.display = "block";}

    else if(document.getElementById('q8').style.display == "block"){
        document.getElementById('9back1').style.display = "block";
        document.getElementById('9back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/9.jpg')";
        document.getElementById('q8').style.display = "none";
        document.getElementById('q9').style.display = "block";}

    else if(document.getElementById('q9').style.display == "block"){
        document.getElementById('10back1').style.display = "block";
        document.getElementById('10back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/10.jpg')";
        document.getElementById('q9').style.display = "none";
        document.getElementById('q10').style.display = "block";}

    else if(document.getElementById('q10').style.display == "block"){
        document.getElementById('11back1').style.display = "block";
        document.getElementById('11back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/11.jpg')";
        document.getElementById('q10').style.display = "none";
        document.getElementById('q11').style.display = "block";}

    else if(document.getElementById('q11').style.display == "block"){
        document.getElementById('12back1').style.display = "block";
        document.getElementById('12back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/12.jpg')";
        document.getElementById('q11').style.display = "none";
        document.getElementById('q12').style.display = "block";}

    else if(document.getElementById('q12').style.display == "block"){
        document.getElementById('13back1').style.display = "block";
        document.getElementById('13back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/13.jpg')";
        document.getElementById('q12').style.display = "none";
        document.getElementById('q13').style.display = "block";}

    else if(document.getElementById('q13').style.display == "block"){
        document.getElementById('14back1').style.display = "block";
        document.getElementById('14back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/14.jpg')";
        document.getElementById('q13').style.display = "none";
        document.getElementById('q14').style.display = "block";}
        
    else if(document.getElementById('q14').style.display == "block"){
        document.getElementById('15back1').style.display = "block";
        document.getElementById('15back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/15.jpg')";
        document.getElementById('q14').style.display = "none";
        document.getElementById('q15').style.display = "block";}
        
    else if(document.getElementById('q15').style.display == "block"){
        document.getElementById('16back1').style.display = "block";
        document.getElementById('16back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/16.jpg')";
        document.getElementById('q15').style.display = "none";
        document.getElementById('q16').style.display = "block";}
        
    else if(document.getElementById('q16').style.display == "block"){
        document.getElementById('17back1').style.display = "block";
        document.getElementById('17back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/17.jpg')";
        document.getElementById('q16').style.display = "none";
        document.getElementById('q17').style.display = "block";}
        
    else if(document.getElementById('q17').style.display == "block"){
        document.getElementById('18back1').style.display = "block";
        document.getElementById('18back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/18.jpg')";
        document.getElementById('q17').style.display = "none";
        document.getElementById('q18').style.display = "block";}
        
    else if(document.getElementById('q18').style.display == "block"){
        document.getElementById('19back1').style.display = "block";
        document.getElementById('19back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/19.jpg')";
        document.getElementById('q18').style.display = "none";
        document.getElementById('q19').style.display = "block";}
        
    else if(document.getElementById('q19').style.display == "block"){
        document.getElementById('20back1').style.display = "block";
        document.getElementById('20back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/20.jpg')";
        document.getElementById('q19').style.display = "none";
        document.getElementById('q20').style.display = "block";}
        
    else if(document.getElementById('q20').style.display == "block"){
        document.getElementById('21back1').style.display = "block";
        document.getElementById('21back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/21.jpg')";
        document.getElementById('q20').style.display = "none";
        document.getElementById('q21').style.display = "block";}
        
    else if(document.getElementById('q21').style.display == "block"){
        document.getElementById('22back1').style.display = "block";
        document.getElementById('22back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/22.jpg')";
        document.getElementById('q21').style.display = "none";
        document.getElementById('q22').style.display = "block";}
        
    else if(document.getElementById('q22').style.display == "block"){
        document.getElementById('23back1').style.display = "block";
        document.getElementById('23back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/23.jpg')";
        document.getElementById('q22').style.display = "none";
        document.getElementById('q23').style.display = "block";}
        
    else if(document.getElementById('q23').style.display == "block"){
        document.getElementById('24back1').style.display = "block";
        document.getElementById('24back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/24.jpg')";
        document.getElementById('q23').style.display = "none";
        document.getElementById('q24').style.display = "block";}
        
    else if(document.getElementById('q24').style.display == "block"){
        document.getElementById('25back1').style.display = "block";
        document.getElementById('25back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/25.jpg')";
        document.getElementById('q24').style.display = "none";
        document.getElementById('q25').style.display = "block";}
        
    else if(document.getElementById('q25').style.display == "block"){
        document.getElementById('26back1').style.display = "block";
        document.getElementById('26back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/26.jpg')";
        document.getElementById('q25').style.display = "none";
        document.getElementById('q26').style.display = "block";}
        
    else if(document.getElementById('q26').style.display == "block"){
        document.getElementById('27back1').style.display = "block";
        document.getElementById('27back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/27.jpg')";
        document.getElementById('q26').style.display = "none";
        document.getElementById('q27').style.display = "block";}
        
    else if(document.getElementById('q27').style.display == "block"){
        document.getElementById('28back1').style.display = "block";
        document.getElementById('28back2').style.display = "none";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/28.jpg')";
        document.getElementById('q27').style.display = "none";
        document.getElementById('q28').style.display = "block";}
        
    else if(document.getElementById('q28').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        document.getElementById('q28').style.display = "none";}}


function sled_vopr2(){
    if(document.getElementById('q1').style.display == "block"){
        document.getElementById('2back1').style.display = "none";
        document.getElementById('2back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/2.jpg')";
        document.getElementById('q1').style.display = "none";
        document.getElementById('q2').style.display = "block";}

    else if(document.getElementById('q2').style.display == "block"){
        document.getElementById('3back1').style.display = "none";
        document.getElementById('3back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/3.jpg')";
        document.getElementById('q2').style.display = "none";
        document.getElementById('q3').style.display = "block";}

    else if(document.getElementById('q3').style.display == "block"){
        document.getElementById('4back1').style.display = "none";
        document.getElementById('4back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/4.jpg')";
        document.getElementById('q3').style.display = "none";
        document.getElementById('q4').style.display = "block";}

    else if(document.getElementById('q4').style.display == "block"){
        document.getElementById('5back1').style.display = "none";
        document.getElementById('5back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/5.jpg')";
        document.getElementById('q4').style.display = "none";
        document.getElementById('q5').style.display = "block";}

    else if(document.getElementById('q5').style.display == "block"){
        document.getElementById('6back1').style.display = "none";
        document.getElementById('6back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/6.jpg')";
        document.getElementById('q5').style.display = "none";
        document.getElementById('q6').style.display = "block";}

    else if(document.getElementById('q6').style.display == "block"){
        document.getElementById('7back1').style.display = "none";
        document.getElementById('7back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/7.jpg')";
        document.getElementById('q6').style.display = "none";
        document.getElementById('q7').style.display = "block";}
        
    else if(document.getElementById('q7').style.display == "block"){
        document.getElementById('8back1').style.display = "none";
        document.getElementById('8back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/8.jpg')";
        document.getElementById('q7').style.display = "none";
        document.getElementById('q8').style.display = "block";}

    else if(document.getElementById('q8').style.display == "block"){
        document.getElementById('9back1').style.display = "none";
        document.getElementById('9back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/9.jpg')";
        document.getElementById('q8').style.display = "none";
        document.getElementById('q9').style.display = "block";}

    else if(document.getElementById('q9').style.display == "block"){
        document.getElementById('10back1').style.display = "none";
        document.getElementById('10back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/10.jpg')";
        document.getElementById('q9').style.display = "none";
        document.getElementById('q10').style.display = "block";}

    else if(document.getElementById('q10').style.display == "block"){
        document.getElementById('11back1').style.display = "none";
        document.getElementById('11back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/11.jpg')";
        document.getElementById('q10').style.display = "none";
        document.getElementById('q11').style.display = "block";}

    else if(document.getElementById('q11').style.display == "block"){
        document.getElementById('12back1').style.display = "none";
        document.getElementById('12back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/12.jpg')";
        document.getElementById('q11').style.display = "none";
        document.getElementById('q12').style.display = "block";}

    else if(document.getElementById('q12').style.display == "block"){
        document.getElementById('13back1').style.display = "none";
        document.getElementById('13back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/13.jpg')";
        document.getElementById('q12').style.display = "none";
        document.getElementById('q13').style.display = "block";}

    else if(document.getElementById('q13').style.display == "block"){
        document.getElementById('14back1').style.display = "none";
        document.getElementById('14back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/14.jpg')";
        document.getElementById('q13').style.display = "none";
        document.getElementById('q14').style.display = "block";}
        
    else if(document.getElementById('q14').style.display == "block"){
        document.getElementById('15back1').style.display = "none";
        document.getElementById('15back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/15.jpg')";
        document.getElementById('q14').style.display = "none";
        document.getElementById('q15').style.display = "block";}
        
    else if(document.getElementById('q15').style.display == "block"){
        document.getElementById('16back1').style.display = "none";
        document.getElementById('16back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/16.jpg')";
        document.getElementById('q15').style.display = "none";
        document.getElementById('q16').style.display = "block";}
        
    else if(document.getElementById('q16').style.display == "block"){
        document.getElementById('17back1').style.display = "none";
        document.getElementById('17back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/17.jpg')";
        document.getElementById('q16').style.display = "none";
        document.getElementById('q17').style.display = "block";}
        
    else if(document.getElementById('q17').style.display == "block"){
        document.getElementById('18back1').style.display = "none";
        document.getElementById('18back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/18.jpg')";
        document.getElementById('q17').style.display = "none";
        document.getElementById('q18').style.display = "block";}
        
    else if(document.getElementById('q18').style.display == "block"){
        document.getElementById('19back1').style.display = "none";
        document.getElementById('19back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/19.jpg')";
        document.getElementById('q18').style.display = "none";
        document.getElementById('q19').style.display = "block";}
        
    else if(document.getElementById('q19').style.display == "block"){
        document.getElementById('20back1').style.display = "none";
        document.getElementById('20back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/20.jpg')";
        document.getElementById('q19').style.display = "none";
        document.getElementById('q20').style.display = "block";}
        
    else if(document.getElementById('q20').style.display == "block"){
        document.getElementById('21back1').style.display = "none";
        document.getElementById('21back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/21.jpg')";
        document.getElementById('q20').style.display = "none";
        document.getElementById('q21').style.display = "block";}
        
    else if(document.getElementById('q21').style.display == "block"){
        document.getElementById('22back1').style.display = "none";
        document.getElementById('22back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/22.jpg')";
        document.getElementById('q21').style.display = "none";
        document.getElementById('q22').style.display = "block";}
        
    else if(document.getElementById('q22').style.display == "block"){
        document.getElementById('23back1').style.display = "none";
        document.getElementById('23back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/23.jpg')";
        document.getElementById('q22').style.display = "none";
        document.getElementById('q23').style.display = "block";}
        
    else if(document.getElementById('q23').style.display == "block"){
        document.getElementById('24back1').style.display = "none";
        document.getElementById('24back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/24.jpg')";
        document.getElementById('q23').style.display = "none";
        document.getElementById('q24').style.display = "block";}
        
    else if(document.getElementById('q24').style.display == "block"){
        document.getElementById('25back1').style.display = "none";
        document.getElementById('25back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/25.jpg')";
        document.getElementById('q24').style.display = "none";
        document.getElementById('q25').style.display = "block";}
        
    else if(document.getElementById('q25').style.display == "block"){
        document.getElementById('26back1').style.display = "none";
        document.getElementById('26back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/26.jpg')";
        document.getElementById('q25').style.display = "none";
        document.getElementById('q26').style.display = "block";}
        
    else if(document.getElementById('q26').style.display == "block"){
        document.getElementById('27back1').style.display = "none";
        document.getElementById('27back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/27.jpg')";
        document.getElementById('q26').style.display = "none";
        document.getElementById('q27').style.display = "block";}
        
    else if(document.getElementById('q27').style.display == "block"){
        document.getElementById('28back1').style.display = "none";
        document.getElementById('28back2').style.display = "block";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/28.jpg')";
        document.getElementById('q27').style.display = "none";
        document.getElementById('q28').style.display = "block";}
        
    else if(document.getElementById('q28').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        document.getElementById('q28').style.display = "none";}}



var ei="";
var sn="";
var tf="";
var jp="";
hero="";


function Next_page(){window.location.href='Files/test.html';}
function Next_page2(){
    if (ei_count1>ei_count2){ei="E";}
    else{ei="I";}

    if (sn_count1>sn_count2){sn="S";}
    else{sn="N";}

    if (tf_count1>tf_count2){tf="T";}
    else{tf="F";}

    if (jp_count1>jp_count2){jp="J";}
    else{jp="P";}

    cls=ei+sn+tf+jp;
    if (cls=="ESTJ"){
        hero="Пасифика";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Пасифика.png')";}

    if (cls=="ESFJ"){
        hero="Черный коп";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Шериф.png')";}

    if (cls=="ISTJ"){
        hero="Диппер(ураааа)";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Диппер.png')";}

    if (cls=="ISFJ"){ 
        hero="Кэнди";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Кэнди Чиу.png')";}

    if (cls=="ENTJ"){
        hero="Гидеон";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Гидеон.png')";}

    if (cls=="ENTP"){
        hero="Билл Шифер";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Билл Шифр.png')";}

    if (cls=="INTJ"){
        hero="папа Пайнс?";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Филбрик Пайнс.png')";}

    if (cls=="INTP"){
        hero="Стэнфорд";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Форд.png')";}

    if (cls=="ESTP"){
        hero="Стэн";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Стэнфорд.png')";}

    if (cls=="ESFP"){
        hero="Гренда";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Грэнда.png')";}

    if (cls=="ISTP"){
        hero="Вэнди";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Венди.png')";}

    if (cls=="ISFP"){
        hero="Робби";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Робби.png')";}

    if (cls=="ENFJ"){
	hero="Рамбл";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Рамбл.png')";}

    if (cls=="ENFP"){
	hero="Мейбл";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/mable.png')";}

    if (cls=="INFJ"){
	hero="Белый коп";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Дурланд.png')";}

    if (cls=="INFP"){
	hero="Зууууус";
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('answer/Зус.png')";}}




function pred_vopr(){
    if(document.getElementById('q2').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/1.jpg')";
        document.getElementById('q2').style.display = "none";
        document.getElementById('q1').style.display = "block";}

    else if(document.getElementById('q3').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/2.jpg')";
        document.getElementById('q3').style.display = "none";
        document.getElementById('q2').style.display = "block";}

    else if(document.getElementById('q4').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/3.jpg')";
        document.getElementById('q4').style.display = "none";
        document.getElementById('q3').style.display = "block";}

    else if(document.getElementById('q5').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/4.jpg')";
        document.getElementById('q5').style.display = "none";
        document.getElementById('q4').style.display = "block";}

    else if(document.getElementById('q6').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/5.jpg')";
        document.getElementById('q6').style.display = "none";
        document.getElementById('q5').style.display = "block";}
        
    else if(document.getElementById('q7').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/6.jpg')";
        document.getElementById('q7').style.display = "none";
        document.getElementById('q6').style.display = "block";}

    else if(document.getElementById('q8').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/7.jpg')";
        document.getElementById('q8').style.display = "none";
        document.getElementById('q7').style.display = "block";}

    else if(document.getElementById('q9').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/8.jpg')";
        document.getElementById('q9').style.display = "none";
        document.getElementById('q8').style.display = "block";}

    else if(document.getElementById('q10').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/9.jpg')";
        document.getElementById('q10').style.display = "none";
        document.getElementById('q9').style.display = "block";}

    else if(document.getElementById('q11').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/10.jpg')";
        document.getElementById('q11').style.display = "none";
        document.getElementById('q10').style.display = "block";}

    else if(document.getElementById('q12').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/11.jpg')";
        document.getElementById('q12').style.display = "none";
        document.getElementById('q11').style.display = "block";}

    else if(document.getElementById('q13').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/12.jpg')";
        document.getElementById('q13').style.display = "none";
        document.getElementById('q12').style.display = "block";}
        
    else if(document.getElementById('q14').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/13.jpg')";
        document.getElementById('q14').style.display = "none";
        document.getElementById('q13').style.display = "block";}
        
    else if(document.getElementById('q15').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/14.jpg')";
        document.getElementById('q15').style.display = "none";
        document.getElementById('q14').style.display = "block";}
        
    else if(document.getElementById('q16').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/15.jpg')";
        document.getElementById('q16').style.display = "none";
        document.getElementById('q15').style.display = "block";}
        
    else if(document.getElementById('q17').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/16.jpg')";
        document.getElementById('q17').style.display = "none";
        document.getElementById('q16').style.display = "block";}
        
    else if(document.getElementById('q18').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/17.jpg')";
        document.getElementById('q18').style.display = "none";
        document.getElementById('q17').style.display = "block";}
        
    else if(document.getElementById('q19').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/18.jpg')";
        document.getElementById('q19').style.display = "none";
        document.getElementById('q18').style.display = "block";}
        
    else if(document.getElementById('q20').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/19.jpg')";
        document.getElementById('q20').style.display = "none";
        document.getElementById('q19').style.display = "block";}
        
    else if(document.getElementById('q21').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/20.jpg')";
        document.getElementById('q21').style.display = "none";
        document.getElementById('q20').style.display = "block";}
        
    else if(document.getElementById('q22').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/21.jpg')";
        document.getElementById('q22').style.display = "none";
        document.getElementById('q21').style.display = "block";}
        
    else if(document.getElementById('q23').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/22.jpg')";
        document.getElementById('q23').style.display = "none";
        document.getElementById('q22').style.display = "block";}
        
    else if(document.getElementById('q24').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/23.jpg')";
        document.getElementById('q24').style.display = "none";
        document.getElementById('q23').style.display = "block";}
        
    else if(document.getElementById('q25').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/24.jpg')";
        document.getElementById('q25').style.display = "none";
        document.getElementById('q24').style.display = "block";}
        
    else if(document.getElementById('q26').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/25.jpg')";
        document.getElementById('q26').style.display = "none";
        document.getElementById('q25').style.display = "block";}
        
    else if(document.getElementById('q27').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/26.jpg')";
        document.getElementById('q27').style.display = "none";
        document.getElementById('q26').style.display = "block";}
        
    else if(document.getElementById('q28').style.display == "block"){
        const backgroundDiv = document.getElementById('output');
        backgroundDiv.style.backgroundImage = "url('materials/27.jpg')";
        document.getElementById('q28').style.display = "none";
        document.getElementById('q27').style.display = "block";}}