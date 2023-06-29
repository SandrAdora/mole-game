let currMoleTile;  //an img tag for the mole 
let currPlantTile;

// to make the game clickable 
let score = 0;
let gameover = false;

window.onload = function ()
{
    setGame();
}

function setGame()
{
    //set up the grid for the game in html

    //3x3 tiles so 9 in total 
    for(let i = 0; i < 9; i++) //i goes from 0 to 8 stops at 9
    {
        //<div id=0-8"></div> tag
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);

    }
    setInterval(setMole, 1000); // 1 s setmole is being called 
    setInterval(setPlant, 1000); // 2 s setplant is being called
}

function getRandomTile()
{
    //math.random() returns a number between 0-1 and if  * 9 = 0 - 9 round down to (0-8 ) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString(); //return the number as a string to use it in html 
}

//this is the function for the mole, which will pop up when the game is being played 
// this

function setMole()
{
    if (gameover)
    {
        return;
    }
    if(currMoleTile)
    {
        currMoleTile.innerHTML = " ";
    }
  
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num)
    {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setPlant()
{
    if(gameover)
    {
        return;
    }
    if (currPlantTile)
    {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num)
    {
        return;
    }


    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile()
{
    if (gameover){ return;}
    if(this == currMoleTile){
        score +=10;
        document.getElementById("score").innerText = score.toString();

    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText = "Game Over you scored: " + score.toString() ;

        gameover = true;
    }


}