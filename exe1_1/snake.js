
function startMenu(){
    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML = "لطفا تعداد بازیکنان را تعیین کنید";
    row = table.insertRow(1);
    cell =row.insertCell(0);
    cell.innerHTML ="تعداد بازیکنان";
    cell =row.insertCell(1);
    cell.innerHTML = "<input id='numberOfPlayers' type='text'> ";
    cell =row.insertCell(2);
    cell.innerHTML = "";
    cell.innerHTML = "<a  onclick='addPlayerName()'>تأیید</a> ";
}
startMenu()

var defult  =0;
var allBlocks =[""]
var manageMerge =2;
var cellNumber = 1;
mergeCells(document.getElementById("row1").getElementsByTagName("div"))
mergeCells(document.getElementById("row2").getElementsByTagName("div"))
mergeCells(document.getElementById("row3").getElementsByTagName("div"))
mergeCells(document.getElementById("row4").getElementsByTagName("div"))
mergeCells(document.getElementById("row5").getElementsByTagName("div"))
mergeCells(document.getElementById("row6").getElementsByTagName("div"))
mergeCells(document.getElementById("row7").getElementsByTagName("div"))
mergeCells(document.getElementById("row8").getElementsByTagName("div"))
mergeCells(document.getElementById("row9").getElementsByTagName("div"))
mergeCells(document.getElementById("row10").getElementsByTagName("div"))

allBlocks[20].style.zIndex=1;










function mergeCells(array){
    if(manageMerge%2 === 0){
        for(var i=0;i<10;i++){
            allBlocks.push(array[i])
            array[i].innerHTML += cellNumber;
            array[i].style.zIndex =cellNumber;
            cellNumber++
        }
    }
    else{
        for(var i=9;i>=0;i--){
            allBlocks.push(array[i])
            array[i].innerHTML += cellNumber;
            array[i].style.zIndex =cellNumber;

            cellNumber++
        }
    }
    manageMerge++;
}
console.log(allBlocks[1])
allBlocks[100].innerHTML = '<img  class="home" src="home.png"> '
allBlocks[1].innerHTML = '<img  class="flag" src="flag.png"> '



var numberOflayers;
function addPlayerName(){

    //getting number of players
    numberOflayers = document.getElementById("numberOfPlayers").value;

    //checking the number of players
    var letters = /^[1-9]/;
    if (numberOflayers.length !== 1 || !numberOflayers.match(letters)){
        alert("تعداد بازیکنان باید عددی کوچکتر از 9 باشد");
        return false;
   }
    else{
        numberOflayers = Number(numberOflayers)
    }

    //creating a list for member names
    var numbers =["نفر اول" , "نفر دوم" ,"نفر سوم ","نفر چهارم","نفر پنجم" ,"نفر ششم" ,"نفر هفتم" ,"نفر هشتم" ,"نفر نهم"];
    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML = "لطفا اسامی بازیکنان را وارد نمایید";
    for(var i=1 ;i<=numberOflayers;i++)
    {
        row = table.insertRow(i);
        cell =row.insertCell(0);
        cell.innerHTML = numbers[i-1];
        cell =row.insertCell(1);
        cell.innerHTML = "<input type='text'> ";
        cell =row.insertCell(2);
        cell.innerHTML = "";
    }
    cell.innerHTML = "<a  onclick='submitNames()'> ادامه سفارشی سازی </a> ";
    cell =row.insertCell(3);
    cell.innerHTML = "<a  onclick='startCustom()'>شروع بازی  پیش فرض</a> ";
}

var playerNames = [];
var playersPiece = [];
function submitNames(){
    var playerNamesInput = document.getElementById('tableInfo').getElementsByTagName("input");
    for(var i=0 ;i<playerNamesInput.length;i++){
        if(playerNamesInput[i].value ===""){alert("لطفا نام بازیکن را خالی نگذارید");
            playerNames = []
             return false;
        }
        playerNames.push(playerNamesInput[i].value)
    }


    for(var i=0;i<playerNames.length;i++){
        var z= i+1;
        playersPiece.push("<p class='playersPieceInGame' id='playersPiece"+z+"'>"+playerNames[i]+"</p>")
        document.getElementById("dem").innerHTML += "<p class='playersPiece' id='playersPiece"+z+"'>"+playerNames[i]+"</p>";
    }

    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML ="لطفا تعداد مارهای بازی را تعیین کنید";

    row = table.insertRow(1);
    cell =row.insertCell(0);
    cell.innerHTML ="تعداد مارها";
    cell =row.insertCell(1);
    cell.innerHTML = "<input id='numberOfSnakes' type='text'> ";
    cell =row.insertCell(2);
    cell.innerHTML = "<a  onclick='submitSnakes()'>تأیید</a> ";
}

function submitSnakes(){
    var numberOfSnakes = document.getElementById("numberOfSnakes").value;
    var letters = /^[1-9]/;
    if (numberOfSnakes.length !== 1 || !numberOfSnakes.match(letters)){
        alert("تعداد مارها باید عددی کوچکتر از 9 باشد");
        return false;
    }
    else{
        numberOfSnakes = Number(numberOfSnakes)
    }

    var HeadOfSnakes =["سر مار اول" , "سر مار دوم" ,"سر مار سوم ","سر مار چهارم","سر مار پنجم" ,"سر مار ششم" ,"سر مار هفتم" ,"سر مار هشتم" ,"سر مار نهم"];
    var bottomOfSnakes =["ته مار اول" , "ته مار دوم" ,"ته مار سوم ","ته مار چهارم","ته مار پنجم" ,"ته مار ششم" ,"ته مار هفتم" ,"ته مار هشتم" ,"ته مار نهم"];

    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML = "مشخصات مارها را تعیین کنید";
    for(var i=1 ;i<=numberOfSnakes;i++)
    {
        row = table.insertRow(i);
        cell =row.insertCell(0);
        cell.innerHTML = HeadOfSnakes[i-1];
        cell =row.insertCell(1);
        cell.innerHTML = "<input type='text'>";
        cell =row.insertCell(2);
        cell.innerHTML = bottomOfSnakes[i-1];
        cell =row.insertCell(3);
        cell.innerHTML = "<input type='text'> ";
        cell =row.insertCell(4);
        cell.innerHTML = " ";
    }

    cell.innerHTML = "<a  onclick='submitLadder()'>تأیید</a> ";
 }

var snakesInfo =[];
function submitLadder(){
    var snakesInfoInput = document.getElementById('tableInfo').getElementsByTagName("input");
    for(var i= 0,z=1;i<snakesInfoInput.length;i+=2,z++){

        if (snakesInfoInput[i].value.length > 2 || snakesInfoInput[i].value === ""||snakesInfoInput[i+1].value.length > 2 || snakesInfoInput[i+1].value === ""){
            alert("مشخصات مار"+z+"را اصلاح کنید");
            snakesInfo =[];
            return false;
        }
        var letters = /^[0-9]/;
        for(var j=0;j<snakesInfoInput[i].value.length;j++){
            if ( !(snakesInfoInput[i].value[j].match(letters))){
                alert("مشخصات مار"+z+"را اصلاح کنید");
                snakesInfo =[];
                return false;
            }

        }
        for(var j=0;j<snakesInfoInput[i+1].value.length;j++){
            if ( !(snakesInfoInput[i+1].value[j].match(letters))){
                alert("مشخصات مار"+z+"را اصلاح کنید");
                snakesInfo =[];
                return false;
            }

        }
        snakesInfo.push(Number(snakesInfoInput[i].value))
        snakesInfo.push(Number(snakesInfoInput[i+1].value))

    }


    for(var k= 0,z=1;k<snakesInfo.length;k+=2,z++){
        if(snakesInfo[k+1] === 1){
            alert("ته مار "+z+"نمی تواند  یک باشد");
            snakesInfo=[];
            return false;
        }
        if(snakesInfo[k]<=snakesInfo[k+1]){
            alert("سر و ته"+z+"اشتباه است");
            snakesInfo =[];
            return false;
        }
        if(snakesInfo[k+1] === 0){
            alert("دم مار "+z+"نمی تواند صفر باشد");
            snakesInfo =[];
            return false;
        }
    }
    for(var i= 0;i<snakesInfo.length;i+=2){
        for(var j=i+2;j<snakesInfo.length;j+=2){
            if(snakesInfo[i] === snakesInfo[j] ){
                alert("سر دو نردبان نمی تواند در یک خانه باشد")
                snakesInfo =[];
                return false;
            }

            if(snakesInfo[i] === snakesInfo[j+1] ){
                alert("سر یک مار نمی تواند در خانه دم مار دیگری باشد")
                snakesInfo =[];
                return false;
            }

        }
    }
    addSnakesInGame()
    console.log(snakesInfo)
    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML ="لطفا تعداد نردبان های بازی را تعیین کنید";
    row = table.insertRow(1);
    cell =row.insertCell(0);
    cell.innerHTML ="تعداد نردبان ها";
    cell =row.insertCell(1);
    cell.innerHTML = "<input id='numberOfLadders' type='text'> ";
    cell =row.insertCell(2);
    cell.innerHTML = "<a id='numberOfLadders' onclick='submitLaddersInfo()'>تأیید</a> ";
}


function addSnakesInGame(){
    for(var i= 1,z=1;i<snakesInfo.length;i+=2,z++){
        allBlocks[snakesInfo[i-1]].style.backgroundColor = '#ff1a1a';
        allBlocks[snakesInfo[i-1]].innerHTML += '<p class="ladderAndSnake">سر مار'+z+' </p>';
        allBlocks[snakesInfo[i]].style.backgroundColor = '#ffcccc';
        allBlocks[snakesInfo[i]].innerHTML += '<p class="ladderAndSnake">ته مار'+z+' </p>';
    }
}

function submitLaddersInfo(){
    var numberOfLadders = document.getElementById("numberOfLadders").value;
    var letters = /^[1-9]/;
    if (numberOfLadders.length !== 1 || !numberOfLadders.match(letters)){
        alert("تعداد نردبان ها باید عددی کوچکتر از 9 باشد");
        return false;
    }
    else{
        numberOfLadders = Number(numberOfLadders)
    }


    var HeadOfLadders =["سر نردبان اول" , "سر نردبان دوم" ,"سر نردبان سوم ","سر نردبان چهارم","سر نردبان پنجم" ,"سر نردبان ششم" ,"سر نردبان هفتم" ,"سر نردبان هشتم" ,"سر نردبان نهم"];
    var bottomOfLadders =["ته نردبان اول" , "ته نردبان دوم" ,"ته نردبان سوم ","ته نردبان چهارم","ته نردبان پنجم" ,"ته نردبان ششم" ,"ته نردبان هفتم" ,"ته نردبان هشتم" ,"ته نردبان نهم"];

    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML ="مشخصات نردبان ها را تعیین کنید";
    for(var i=1 ;i<=numberOfLadders;i++)
    {
        row = table.insertRow(i);
        cell =row.insertCell(0);
        cell.innerHTML = HeadOfLadders[i-1];
        cell =row.insertCell(1);
        cell.innerHTML = "<input type='text'>";
        cell =row.insertCell(2);
        cell.innerHTML = bottomOfLadders[i-1];
        cell =row.insertCell(3);
        cell.innerHTML = "<input type='text'> ";
        cell =row.insertCell(4);
        cell.innerHTML = " ";
    }

    cell.innerHTML = "<a  onclick='gamePanel()'>تأیید</a> ";
}


var laddersInfo=[];
var panelTableValues= [];
function gamePanel(){
    var laddersInfoInput = document.getElementById('tableInfo').getElementsByTagName("input");
    for(var i= 0,z=1;i<laddersInfoInput.length;i+=2,z++){

        if (laddersInfoInput[i].value.length > 2 || laddersInfoInput[i].value === ""||laddersInfoInput[i+1].value.length > 2 || laddersInfoInput[i+1].value === ""){
            alert("مشخصات نردبان"+z+"را اصلاح کنید");
            laddersInfo =[];
            return false;
        }
        var letters = /^[0-9]/;
        for(var j=0;j<laddersInfoInput[i].value.length;j++){
            if ( !(laddersInfoInput[i].value[j].match(letters))){
                alert("مشخصات نردبان"+z+"را اصلاح کنید");
                laddersInfo =[];
                return false;
            }

        }
        for(var j=0;j<laddersInfoInput[i+1].value.length;j++){
            if ( !(laddersInfoInput[i+1].value[j].match(letters))){
                alert("مشخصات نردبان"+z+"را اصلاح کنید");
                laddersInfo =[];
                return false;
            }

        }
        laddersInfo.push(Number(laddersInfoInput[i].value))
        laddersInfo.push(Number(laddersInfoInput[i+1].value))

    }


    for(var k= 0,z=1;k<laddersInfo.length;k+=2,z++){
        if(laddersInfo[k+1]<=laddersInfo[k]){
            alert("سر و ته"+z+"اشتباه است");
            laddersInfo =[];
            return false;
        }
        if(laddersInfo[k] === 0 || laddersInfo[k] === 1){alert("سر نردبان "+z+"نمی تواند صفر یا یک باشد");
            laddersInfo =[];
            return false;
        }

    }

   for(var i= 1,z=1;i<laddersInfo.length;i+=2,z++){
       for(var j=0;j<snakesInfo.length;j++){
           if(laddersInfo[i-1] === snakesInfo[j] || laddersInfo[i] === snakesInfo[j]){
               alert("سر یا ته نردبان"+z+"با یکی از مارها یکی است.لطفا اصلاح کنید")
               laddersInfo =[];
               return false;
           }
       }
     }
    for(var i= 0;i<laddersInfo.length;i+=2){
        for(var j=i+2;j<laddersInfo.length;j+=2){
            if(laddersInfo[i] === laddersInfo[j] ){
                alert("سر دو نردبان نمی تواند در یک خانه باشد")
                laddersInfo =[];
                return false;
            }

            if(laddersInfo[i] === laddersInfo[j+1] ){
                alert("سر یک نردبان نمی تواند در خانه ای باشد که انتهای نردبان دیگری است")
                laddersInfo =[];
                return false;
            }

        }
    }
    addLaddersInGame()
    console.log(laddersInfo)


    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML ="بازیکنان";
    cell =row.insertCell(1);
    cell.innerHTML ="نوبت";
    cell =row.insertCell(2);
    cell.innerHTML ="عدد تاس";
    cell =row.insertCell(3);
    cell.innerHTML ="موقعیت ";

    for(var i=1 ;i<=numberOflayers;i++)
    {
        row = table.insertRow(i);
        cell =row.insertCell(0);
        cell.innerHTML = playerNames[i-1];
        cell =row.insertCell(1);
        cell.innerHTML = "";
        cell =row.insertCell(2);
        cell.innerHTML = "";
        cell =row.insertCell(3);
        cell.innerHTML = "<img src='unnamed.png' class='wait'>";
    }
    panelTableValues = table.getElementsByTagName("td");
    panelTableValues[5].innerHTML = "<img src='3-2-dice-png-thumb.png' onclick='pannelGame()' class='dice'>"
}

function addLaddersInGame(){
    for(var i= 1,z=1;i<laddersInfo.length;i+=2,z++){
        allBlocks[laddersInfo[i-1]].style.backgroundColor = '#00b400';
        allBlocks[laddersInfo[i-1]].innerHTML += '<p class="ladderAndSnake">سر نربان'+z+' </p>';
        allBlocks[laddersInfo[i]].style.backgroundColor = 'lightgreen';
        allBlocks[laddersInfo[i]].innerHTML += '<p class="ladderAndSnake">ته نردبان'+z+' </p>';
    }
}

var diceposition = 5;
function pannelGame(){
    var panelTableValues = document.getElementById('tableInfo').getElementsByTagName("td");
    var diceresult = Math.ceil(6*Math.random());

    if(panelTableValues[diceposition+2].innerHTML === '<img src="unnamed.png" class="wait">' && !(diceresult === 6)){
        panelTableValues[diceposition].innerHTML = "";
        panelTableValues[diceposition+1].innerHTML = diceresult;
        beforCheakingSnakesAndLaddersLocation = panelTableValues[diceposition+2].innerHTML;
        if(diceposition === panelTableValues.length-3){
            diceposition =5;
        }
        else{
            diceposition +=4;
        }

        panelTableValues[diceposition].innerHTML = "<img src='3-2-dice-png-thumb.png' onclick='pannelGame()' class='dice'>";
    }
    else if(panelTableValues[diceposition+2].innerHTML === '<img src="unnamed.png" class="wait">' && diceresult === 6){
        panelTableValues[diceposition].innerHTML = "<img src='3-2-dice-png-thumb.png' onclick='pannelGame()' class='dice'>";
        panelTableValues[diceposition+1].innerHTML = diceresult;
        panelTableValues[diceposition+2].innerHTML = 1;
        playerInGame(diceposition,allBlocks,playersPiece,panelTableValues)
    }
    else if( diceresult === 6){
        panelTableValues[diceposition].innerHTML = "<img src='3-2-dice-png-thumb.png' onclick='pannelGame()' class='dice'>";
        panelTableValues[diceposition+1].innerHTML = diceresult;
        var previousLocation = Number(panelTableValues[diceposition+2].innerHTML);
        panelTableValues[diceposition+2].innerHTML = Number(panelTableValues[diceposition+2].innerHTML)+diceresult;
        cheakwinner(diceposition,diceresult)
        cheakLadderAndSnake(diceposition,panelTableValues,laddersInfo,snakesInfo)
        hit(diceposition,panelTableValues)
        playerInGame(diceposition,allBlocks,playersPiece,panelTableValues)
    }
    else{
        panelTableValues[diceposition].innerHTML = "";
        panelTableValues[diceposition+1].innerHTML = diceresult;
        panelTableValues[diceposition+2].innerHTML = Number(panelTableValues[diceposition+2].innerHTML)+diceresult;
        cheakLadderAndSnake(diceposition,panelTableValues,laddersInfo,snakesInfo)
        cheakwinner(diceposition,diceresult)
        hit(diceposition,panelTableValues)
        playerInGame(diceposition,allBlocks,playersPiece,panelTableValues)
        if(diceposition === panelTableValues.length-3){
            diceposition =5;
        }
        else{
            diceposition +=4;
        }
        panelTableValues[diceposition].innerHTML = "<img src='3-2-dice-png-thumb.png' onclick='pannelGame()' class='dice'>";
    }

return true;

 }


function cheakwinner(diceposition,diceresult){
    if(Number(panelTableValues[diceposition+2].innerHTML) === 100){
        panelTableValues[diceposition].innerHTML="";
        var winner = panelTableValues[diceposition-1].innerHTML;
        console.log(winner)
        var delayMillis = 500;
        setTimeout(function() {
            document.getElementById("info").innerHTML ="<p class='winnermessage'> "+winner+" برنده شد "+'<br>'+'<img src="gift.png" class="gift"> ';

        }, delayMillis)
    }
    if(Number(panelTableValues[diceposition+2].innerHTML) >= 101){
        panelTableValues[diceposition+2].innerHTML = Number(panelTableValues[diceposition+2].innerHTML) - diceresult;
    }
}


function hit(diceposition,panelTableValues){
    for(var i= 7,z=1 ;i<panelTableValues.length;i+=4,z++){
        if(!(diceposition === i-2)){
            if(Number(panelTableValues[i].innerHTML) === Number(panelTableValues[diceposition+2].innerHTML)){
                panelTableValues[i].innerHTML = "<img src='unnamed.png' class='wait'>";
                alert("bazikon "+z+"khord")
            }
        }
    }


}

function cheakLadderAndSnake(diceposition,panelTableValues,laddersInfo,snakesInfo,activeLadder){
    for(var i= 1;i<laddersInfo.length;i+=2){
        if(Number(panelTableValues[diceposition+2].innerHTML) === laddersInfo[i-1]){
            panelTableValues[diceposition+2].innerHTML = laddersInfo[i];
            activeLadder = i-1;
        }
    }
    for(var i=1;i<snakesInfo.length;i+=2){
        if(Number(panelTableValues[diceposition+2].innerHTML) === snakesInfo[i-1]){
            panelTableValues[diceposition+2].innerHTML = snakesInfo[i];
        }
    }
}

function playerInGame(diceposition,allBlocks,playersPiece,panelTableValues){
    for(var i= 1;i<101;i++){
        allBlocks[i].innerHTML = i;
    }
    allBlocks[100].innerHTML = '<img  class="home" src="home.png"> '
    allBlocks[1].innerHTML = '<img  class="flag" src="flag.png"> '

    if(defult === 1){
        allBlocks[54].innerHTML += '<img id="snakeInGame1" src="1.png" >'
        allBlocks[99].innerHTML += '<img id="snakeInGame2" src="2.png" >'
        allBlocks[90].innerHTML += '<img id="snakeInGame3" src="3.png" >'
        allBlocks[99].innerHTML += '<img id="snakeInGame4" src="4.png" >'
        allBlocks[99].innerHTML += '<img id="snakeInGame8" src="8.png" >'
        allBlocks[99].innerHTML += '<img id="ladderInGame5" src="5.png" >'
        allBlocks[99].innerHTML += '<img id="ladderInGame6" src="6.png" >'
        allBlocks[99].innerHTML += '<img id="ladderInGame7" src="7.png" >'
        allBlocks[98].innerHTML += '<img id="ladderInGame9" src="9.png" >'
    }
    else{
        addSnakesInGame();
        addLaddersInGame();
    }
    for(var i= 7,z=0;i<panelTableValues.length;i+=4,z++){
        if(panelTableValues[i].innerHTML !== '<img src="unnamed.png" class="wait">'){
        allBlocks[Number(panelTableValues[i].innerHTML)].innerHTML += playersPiece[z];
        }
    }
}

function startNewCustomGame(){
    defult  = 0;
    document.getElementById("info").innerHTML =' <table  id="tableInfo"> </table>'
    startMenu()
    document.getElementById("dem").innerHTML='<a  onclick="startNewCustomGame()" type="submit">شروع مجدد بازی</a> ';
    for(var i= 1;i<101;i++){
        allBlocks[i].innerHTML = i;
    }
    allBlocks[100].innerHTML = '<img  class="home" src="home.png"> '
    allBlocks[1].innerHTML = '<img  class="flag" src="flag.png"> '
    for(var i= 1;i<snakesInfo.length;i+=2){
        allBlocks[snakesInfo[i-1]].style.backgroundColor = 'darkgray';
        allBlocks[snakesInfo[i]].style.backgroundColor = 'darkgray';
    }
    snakesInfo=[];
    for(var i= 1;i<laddersInfo.length;i+=2){
        allBlocks[laddersInfo[i-1]].style.backgroundColor = 'darkgray';
        allBlocks[laddersInfo[i]].style.backgroundColor = 'darkgray';
    }
    laddersInfo= [];
    playersPiece = [];
    playerNames=[];

}


function startCustom(){
    var playerNamesInput = document.getElementById('tableInfo').getElementsByTagName("input");
    for(var i=0 ;i<playerNamesInput.length;i++){
        if(playerNamesInput[i].value ===""){alert("لطفا نام بازیکن را خالی نگذارید");
            playerNames = []
            return false;
        }
        playerNames.push(playerNamesInput[i].value)
    }


    for(var i=0;i<playerNames.length;i++){
        var z= i+1;
        playersPiece.push("<p class='playersPieceInGame' id='playersPiece"+z+"'>"+playerNames[i]+"</p>")
        document.getElementById("dem").innerHTML += "<p class='playersPiece' id='playersPiece"+z+"'>"+playerNames[i]+"</p>";
    }

    var table = document.getElementById("tableInfo");
    table.innerHTML="";
    var row = table.insertRow(0);
    var cell =row.insertCell(0);
    cell.innerHTML ="بازیکنان";
    cell =row.insertCell(1);
    cell.innerHTML ="نوبت";
    cell =row.insertCell(2);
    cell.innerHTML ="عدد تاس";
    cell =row.insertCell(3);
    cell.innerHTML ="موقعیت ";

    for(var i=1 ;i<=numberOflayers;i++)
    {
        row = table.insertRow(i);
        cell =row.insertCell(0);
        cell.innerHTML = playerNames[i-1];
        cell =row.insertCell(1);
        cell.innerHTML = "";
        cell =row.insertCell(2);
        cell.innerHTML = "";
        cell =row.insertCell(3);
        cell.innerHTML = "<img src='unnamed.png' class='wait'>";
    }
    panelTableValues = table.getElementsByTagName("td");
    panelTableValues[5].innerHTML = "<img src='3-2-dice-png-thumb.png' onclick='pannelGame()' class='dice'>"


    allBlocks[54].innerHTML += '<img id="snakeInGame1" src="1.png" >'
    allBlocks[99].innerHTML += '<img id="snakeInGame2" src="2.png" >'
    allBlocks[90].innerHTML += '<img id="snakeInGame3" src="3.png" >'
    allBlocks[99].innerHTML += '<img id="snakeInGame4" src="4.png" >'
    allBlocks[99].innerHTML += '<img id="snakeInGame8" src="8.png" >'
    allBlocks[99].innerHTML += '<img id="ladderInGame5" src="5.png" >'
    allBlocks[99].innerHTML += '<img id="ladderInGame6" src="6.png" >'
    allBlocks[99].innerHTML += '<img id="ladderInGame7" src="7.png" >'
    allBlocks[98].innerHTML += '<img id="ladderInGame9" src="9.png" >'
    snakesInfo=[18,3,48,17,70,27,74,55,82,44];
    laddersInfo= [12,32,37,63,50,73,65,93];
    defult  =1;




}





