const increase = (function(){
    let number = 0;
    return function (){
        number +=1;
        return number;
    };
})();
function inCounter(){
    document.getElementById("mainrecommend").innerText = increase();
    
}