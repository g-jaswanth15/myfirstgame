var cube1 = document.querySelectorAll('.cube1');

var cube2 = document.querySelectorAll('.cube2');

var colors = ["red","orange","green","blue","yellow","grey"];

var color = [];

for(i=0;i<cube1.length;i++){
    cube1[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
     color[i] = cube1[i].style.backgroundColor;
     cube2[i].style.backgroundColor =  color[i];
    console.log(cube1[i]);
}

for(i=9;i<24;i++){
    cube2[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;

    console.log(cube2[i]);
}

document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'none'});

document.getElementById('reload').style.display = 'none';

cube2[24].style.backgroundColor = 'white';

let counterelement = document.getElementById("countertime")
let countercount = 0
let uniqueid = null

function startcounter() {
    uniqueid = setInterval(function() {
        counterelement.textContent = countercount + " sec"
        countercount = countercount + 1
        counterelement.style.backgroundColor = "rgb(10, 12, 85)"
        counterelement.style.color = 'rgb(243, 58, 12)'
        counterelement.style.float = 'right'
        counterelement.style.fontFamily = 'serif'
        counterelement.style.fontSize = '50px'
        counterelement.style.font = 'bold'
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
                document.getElementById('won').innerText = 'you won the game';
                document.getElementById('won').style.color = 'rgb(4, 56, 7)'
                document.getElementById('won').style.backgroundColor = 'rgb(28, 232, 247)'
                document.getElementById('won').style.fontSize = '70px'
                document.getElementById('won').style.fontFamily = 'Georgia'
                document.getElementById('won').style.fontWeight = 'bolder'
                document.getElementById('won').style.textAlign = 'center'
                document.getElementById('won').style.borderStyle = 'solid'
                document.getElementById('won').style.borderWidth = '2px'
                document.getElementById('won').style.borderColor = 'rgb(129, 19, 19)';
                document.getElementById('reload').style.display = 'block'
                document.getElementById('reload').addEventListener('click',()=>{
                    window.location.reload(true);
                })
                clearInterval(uniqueid);
            
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
    let c = 1;
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < arr.length; j++) {
            let num = 5 * i + arr[j];
            let firstbackgroundColor = document.getElementById("box" + num).style.backgroundColor;
            let secondbackgroundColor = document.getElementById("tile" + c).style.backgroundColor;
            c++;
        
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
