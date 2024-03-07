document.getElementById("button").onclick=function(){
    let ans=document.getElementById("roll").value;
    const ai=document.getElementById("ansimg");
    const a=document.getElementById("ans");
    let arr=[];
    let img=[];
    for(let i=0;i<ans;i++)
    {
        const value=Math.floor(Math.random()*6)+1
        arr.push(value);
        img.push(`<img src="images/${value}.png" alt=Dice ${value}>`);
    }
    a.textContent=`Dice:${arr.join(",")}`;
    ai.innerHTML=img.join('');
}