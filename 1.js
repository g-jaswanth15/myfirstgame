var cube1 = document.querySelectorAll('.cube1');

var cube2 = document.querySelectorAll('.cube2');

var cube3 = document.querySelectorAll('.cube3');

var cube4 = document.querySelectorAll('.cube4');

var colors = ["red","orange","green","blue","yellow","grey"];

var color = [];





for(i=0;i<9;i++){
    cube1[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
     color[i] = cube1[i].style.backgroundColor;
     cube2[i].style.backgroundColor =  color[i];
    console.log(cube1[i]);
}

for(i=9;i<24;i++){
    cube2[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;

    console.log(cube2[i]);
}

for(i=0;i<cube3.length;i++){
    cube3[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
     color[i] = cube3[i].style.backgroundColor;
     cube4[i].style.backgroundColor =  color[i];
    console.log(cube3[i]);
}

for(i=cube3.length;i<cube4.length;i++){
    cube4[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;

    console.log(cube4[i]);
}
document.getElementById('won1').style.display = 'none'
document.getElementById('won2').style.display = 'none'
document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube3').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube4').forEach(item =>{item.style.display = 'none'});

document.getElementById('reload').style.display = 'none';

document.getElementById('playagain').style.display = 'none';

document.getElementById('normalmode').style.display = 'none';

cube2[24].style.backgroundColor = 'white';
cube4[35].style.backgroundColor = 'white';
let counterelement = document.getElementById("countertime")
let countercount = 0
let firstmode = null



function startcounter() {
    firstmode = setInterval(function() {
        document.getElementById('reload').style.display = 'block';
        counterelement.textContent = countercount + " sec"
        countercount = countercount + 1
        counterelement.style.backgroundColor = "rgb(21, 196, 15)"
        counterelement.style.color = 'rgb(35, 5, 105) '
        counterelement.style.float = 'right'
        counterelement.style.fontFamily = 'BLACKJACK'
        counterelement.style.fontSize = '50px'
        counterelement.style.font = 'bold'
        counterelement.style.borderStyle = 'solid'
        counterelement.style.borderWidth = '4px'
        counterelement.style.borderRadius = '15px'
        counterelement.style.borderColor = 'rgb(95, 67, 14)'
        counterelement.style.padding = '5px'
        document.getElementById('reload').addEventListener('click',()=>{
            window.location.reload(true);
        })
        document.getElementById('button').style.display = 'none';
        
       
        document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'block'});
        document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'block'});
       
        
        
    }, 1000)
     
}

var swap= document.getElementById('swap');

var box = [];

for(i=1;i<=25;i++){
     box[i] = document.getElementById('box'+i);
}

tile1 =  document.getElementById('box'+1);
console.log(tile1.id);

    document.querySelectorAll('.cube2').forEach(item =>{item.addEventListener('click',function (event){
            
            id = event.target.id;
            
             var tile = document.getElementById(id);
            let i = parseInt(id.substring(3, id.length));
            // console.log(id.substring(3, id.length))
            console.log(i);

            if(Boolean (check())){
                document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'none'  })
                document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'none'  })
                document.getElementById('won1').style.display = 'block';
                document.getElementById('won1').innerText = 'Congrats you won the Easy mode  Play Normal mode';
                clearInterval(firstmode);
                document.getElementById('countertime').style.display = 'none';
                document.getElementById('normalmode').style.display = 'block';
            
           }
            if(document.getElementById('box'+i).style.backgroundColor !== "white")
            {
                
                if(i>5 && i <=20){
                    if(document.getElementById('box'+(i+5)).style.backgroundColor == "white"){
                    change(tile,document.getElementById('box'+(i+5))); 
                    console.log('j')
                    }
                    if ( (i-1)%5 != 0) {
                    if(document.getElementById('box'+(i-1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-1)));  
                    console.log('a')
                        }
                    }
                     if( i%5 != 0 ){
                    if(document.getElementById('box'+(i+1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+1)));
                    console.log('s')
                        }
                    }
                    if(document.getElementById('box'+(i-5)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-5)));
                    console.log('w')
                    }
                }
            else if (i>=21 && i<=25){
                
                 if(document.getElementById('box'+(i-5)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-5)));
                    console.log('t')
                }
                 if(i != 25){
                    if(document.getElementById('box'+(i+1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+1)));
                    console.log('a')
                    }
                 }
                 if(i != 21){
                    if(document.getElementById('box'+(i-1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-1)));
                    console.log('n')
                }
            }
            }

            else if(i>=1 && i<=5){
                
                if(i != 5){
                     if(document.getElementById('box'+(i+1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+1)));
                    console.log('h')
                    }
                }
                if(i != 1){
                    if(document.getElementById('box'+(i-1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-1)));
                    console.log('q');
                }
                }
                 if(i>=1 && i<=5){
                if(document.getElementById('box'+(i+5)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+5)));
                    console.log('b');
                 
                }
            }
            }
        }
        }
    )
    }
    )

function check(){
    let arr = [2, 3, 4];
    let e = 1;
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < arr.length; j++) {
            let num = 5 * i + arr[j];
            let firstbackgroundColor = document.getElementById("box" + num).style.backgroundColor;
            let secondbackgroundColor = document.getElementById("tile" + e).style.backgroundColor;
            e++;
        
        if(firstbackgroundColor !== secondbackgroundColor){
            return false;
        }
    }
}
            return true;
  
        }   

function change(box2,box3){
    swap.style.backgroundColor = box2.style.backgroundColor ;
    box2.style.backgroundColor = box3.style.backgroundColor;
    box3.style.backgroundColor = swap.style.backgroundColor;
}
let secondcounterelement = document.getElementById("secondcountertime")
let secondcountercount = 0
let secondmode = null

function secondcounter() {
    secondmode = setInterval(function() {
        document.getElementById('won1').style.display = 'none';
        secondcounterelement.textContent = secondcountercount + " sec"
        secondcountercount = secondcountercount + 1
        secondcounterelement.style.backgroundColor = "rgb(21, 196, 15)"
        secondcounterelement.style.color = 'rgb(35, 5, 105) '
        secondcounterelement.style.float = 'right'
        secondcounterelement.style.fontFamily = 'BLACKJACK'
        secondcounterelement.style.fontSize = '50px'
        secondcounterelement.style.font = 'bold'
        secondcounterelement.style.borderStyle = 'solid'
        secondcounterelement.style.borderWidth = '4px'
        secondcounterelement.style.borderRadius = '15px'
        secondcounterelement.style.borderColor = 'rgb(95, 67, 14)'
        secondcounterelement.style.padding = '5px'
        document.getElementById('normalmode').style.display = 'none';
        
       
        document.querySelectorAll('.cube3').forEach(item =>{item.style.display = 'block'});
        document.querySelectorAll('.cube4').forEach(item =>{item.style.display = 'block'});
       
        
        
    }, 1000)
     
}

document.querySelectorAll('.cube4').forEach(item =>{item.addEventListener('click',function (event){
            
    id = event.target.id;
    
     var tile = document.getElementById(id);
    let i = parseInt(id.substring(5, id.length));
    // console.log(id.substring(3, id.length))
    console.log(i);

    if(Boolean (finish())){
        document.querySelectorAll('.cube3').forEach(item =>{item.style.display = 'none'  })
        document.querySelectorAll('.cube4').forEach(item =>{item.style.display = 'none'  })
        document.getElementById('won2').style.display = 'block';
        document.getElementById('won2').innerText = 'Congratulations buddy YOU WON THE GAME';
        document.getElementById('reload').style.display = 'none';
        document.getElementById('reload').style.display = 'playagain';
        document.getElementById('playagain').addEventListener('click',()=>{
            window.location.reload(true);
        })
        clearInterval(secondmode);
    
   }
    if(document.getElementById('delta'+i).style.backgroundColor !== "white")
    {
        
        if(i>6 && i <=30){
            if(document.getElementById('delta'+(i+6)).style.backgroundColor == "white"){
            change(tile,document.getElementById('delta'+(i+6))); 
            console.log('j')
            }
            if ( (i-1)%6 != 0) {
            if(document.getElementById('delta'+(i-1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-1)));  
            console.log('a')
                }
            }
             if( i%6 != 0 ){
            if(document.getElementById('delta'+(i+1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+1)));
            console.log('s')
                }
            }
            if(document.getElementById('delta'+(i-6)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-6)));
            console.log('w')
            }
        }
    else if (i>=31 && i<=36){
        
         if(document.getElementById('delta'+(i-6)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-6)));
            console.log('t')
        }
         if(i != 36){
            if(document.getElementById('delta'+(i+1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+1)));
            console.log('a')
            }
         }
         if(i != 31){
            if(document.getElementById('delta'+(i-1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-1)));
            console.log('n')
        }
    }
    }

    else if(i>=1 && i<=6){
        
        if(i != 6){
             if(document.getElementById('delta'+(i+1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+1)));
            console.log('h')
            }
        }
        if(i != 1){
            if(document.getElementById('delta'+(i-1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-1)));
            console.log('q');
        }
        }
         if(i>=1 && i<=6){
        if(document.getElementById('delta'+(i+6)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+6)));
            console.log('b');
         
        }
    }
    }
}
}
)
}
)

function finish(){
    let arr = [2, 3, 4, 5];
    let c = 1;
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < arr.length; j++) {
            let num = 6 * i + arr[j];
            let firstbackgroundColor = document.getElementById("delta" + num).style.backgroundColor;
            let secondbackgroundColor = document.getElementById("puzzle" + c).style.backgroundColor;
            c++;
        
        if(firstbackgroundColor !== secondbackgroundColor){
            console.log('hello');
            return false;
        }
    }
}
return true;
}