var bars = document.getElementById('bars');
var res = document.getElementById('navy');


bars.addEventListener('click', function(){
    if(window.innerWidth < 800 && res.className == 'navy'){
        res.className = 'navy-l';
        bars.className = ('bars-rotated');
    }
    else{
        res.className = 'navy';
        bars.className = 'bars';
    }
},false);

