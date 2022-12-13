const btn=document.querySelector('button');
function randnum(number){
    return Math.floor(Math.random() *(number+1));
}
btn.addEventListener('click', ()=>{
    const randcol= `rgb(${randnum(255)}, ${randnum(255)}, ${randnum(255)})`;
    console.log(randcol);
    document.body.style.backgroundColor=randcol;
    bt.textContent=randcol;
});
