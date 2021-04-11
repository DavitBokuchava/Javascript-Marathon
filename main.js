class Pl{
    constructor(name,hp,img){
        this.name = name;
        this.hp = hp;
        this.img = img;
    }
}
const hieros =  [
    {
    name:"Scorpion", 
    path:"http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"
    }, {
        name:"Kitana", 
        path:"http://reactmarathon-api.herokuapp.com/assets/kitana.gif"
    },{
        name:"Liukang" ,
        path:"http://reactmarathon-api.herokuapp.com/assets/liukang.gif"
    },{
        name:"Sonya", 
        path:"http://reactmarathon-api.herokuapp.com/assets/sonya.gif"
    },{
        name:"Subzero",  
        path:"http://reactmarathon-api.herokuapp.com/assets/subzero.gif"
    }
]


function randomChoose(arr){
   let index =  Math.floor(Math.random() * arr.length);
   return arr[index]
}

 function createPlayer (player, {...obj}) {
    const $plr = document.createElement('div');
    $plr.classList.add(player);
   
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    
    const $life = document.createElement('div');
    const $name = document.createElement('div');
     $life.classList.add('life');
     $life.style.width = `${obj.hp}%`
     $name.classList.add('name');
     $name.innerText = obj.name;
     [$life,$name].map(el=>{
        $progressbar.appendChild(el)
    });
    
    const $character = document.createElement('div');
    const $img = new Image()
    $img.src = obj.img;
    $character.classList.add('character');
    $character.appendChild($img);
    let ar = [$progressbar, $character];
    ar.map(el=>{
        $plr.appendChild(el)
    });
    
    
    
    const $arenas = document.querySelector('div');
    //$arenas.classList.add('arenas');
     $arenas.appendChild($plr);
    
    
}

window.onload = function () {
   const fighter1 =  randomChoose(hieros);
   const fighter2 =  randomChoose(hieros);
    createPlayer("player1",{...new Pl(fighter1.name,90,fighter1.path)} )
    createPlayer("player2",{...new Pl(fighter2.name,100,fighter2.path)} )
   
}
