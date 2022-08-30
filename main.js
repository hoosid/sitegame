let s = 'x';
let z=document.querySelector('.sid1');
moh=[];
function end(num1,num2,nem3){
    z.innerHTML=`${moh[num1]} winner`;
    setInterval(function(){z.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},4000);
}
function winner(){
for(let i=1;i<10;i++){
    moh[i]=document.getElementById('mel' +i);
}
if(moh[1]==moh[2]&& moh[2]==moh[3] && moh[1]!=''){ 
   end(1,2,3);
}
if(moh[4]==moh[5]&& moh[4]==moh[6] && moh[4]!=''){ 
    end(4,5,6);
}
if(moh[7]==moh[8]&& moh[7]==moh[9] && moh[7]!=''){ 
    end(7,8,9);
}

if(moh[1]==moh[4]&& moh[1]==moh[7] && moh[7]!=''){ 
    end(1,4,7);
}
if(moh[2]==moh[5]&& moh[2]==moh[8] && moh[2]!=''){ 
    end(2,5,8);
}
if(moh[3]==moh[6]&& moh[3]==moh[9] && moh[3]!=''){ 
    end(3,6,9);
}
if(moh[1]==moh[5]&& moh[1]==moh[9] && moh[9]!=''){ 
    end(1,5,9);
}
if(moh[3]==moh[5]&& moh[3]==moh[7] && moh[3]!=''){ 
    end(3,5,7);
}}


   







function game(id){
    let element = document.getElementById(id);
if (s==='x' && element.innerHTML =='' ){
element.innerHTML= 'X';
s='o';
z.innerHTML= 'o';
}
else if(s==='o'&& element.innerHTML==''){
    element.innerHTML='O';
    s='x';
    z.innerHTML='x';
}
winner()
}