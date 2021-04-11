
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')

class Player{
    constructor(name,hp,img,player){
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.hp = 100;
        this.player = player
    }
    attack (){
        console.log(" Attack")
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
   console.log(arr[index].name, " ==== randommmm")
   return arr[index]
}
let pl1 = new randomChoose(hieros);
let pl2 = new randomChoose(hieros);
console.log(pl1.name)
const player1 =  {...new Player(pl1.name,100,pl1.path,1)};
const player2 =  {...new Player(pl2.name,100,pl2.path,2)};
console.log(player1,player2)
function createElement(tag,className){
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className)
    }
    return $tag
}

 function createPlayer(playerObject) {
    console.log(playerObject, " ==== argggg")
    const $player = createElement('div',`player${playerObject.player}`);
    const $progressbar = createElement('div','progressbar');
    const $character = createElement('div','character');
    const $life = createElement('div','life');
    const $name = createElement('div','name');
    const $img = createElement('img');

    $life.style.width = `${playerObject.hp}%`
    $name.innerText = playerObject.name;
    $img.src = playerObject.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character)
    return $player;
}
function playerWin(name){
    const $loseTitle = createElement('div','loseTitle');
    $loseTitle.innerText = `${name} Wins`;
    return $loseTitle
}
function changeHP(player){
    const $btn = document.querySelector('.button');
    console.log($btn)
    const playerHP = Math.ceil(Math.random() * 20)
    console.log(playerHP)
    const $playerLife = document.querySelector(`.player${player.player} .life`);
     console.log(player.hp, $playerLife)
    player.hp -= playerHP;
     $playerLife.style.width = `${player.hp<0 ? 0 : player.hp }%`;
     if(player.hp<0){
            $btn.disabled = true;
         return player.player === 1 ? $arenas.appendChild(playerWin(player2.name)) : $arenas.appendChild(playerWin(player1.name));
     }
}

$randomButton.addEventListener('click',()=>{
         changeHP(player1);
         changeHP(player2)
    })
 $arenas.appendChild(createPlayer(player1));
 $arenas.appendChild(createPlayer(player2));


