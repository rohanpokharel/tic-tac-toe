let currentPlayer = "X";
     function resultFunction(value){
         const cell = document.getElementById(value);
         if(cell.value==""){
             document.getElementById(`${value}`).value = currentPlayer;
             winner();
             currentPlayer = (currentPlayer == "X") ? "O" : "X";
        }
     }
      const winConditions = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

        let restartGame = document.querySelectorAll('.cells');
    function restartFunction(){
          restartGame.forEach(hello = (hello)  => hello.value="" );
          currentPlayer = "X";
          document.getElementById("winner").innerText = "";
          document.querySelectorAll(".cells").forEach(cell => cell.disabled = false);

      }

       function winner(){
        let cells = Array.from(document.querySelectorAll(".cells"));
       for(let i of winConditions){
        if(cells[i[0]].value === cells[i[1]].value && cells[i[1]].value === cells[i[2]].value && cells[i[0]].value !== ""){
            document.getElementById("winner").innerHTML = currentPlayer + " is the winner.";
            Array.from(document.querySelectorAll(".cells")).forEach(disableButtons); 

        }
       }
       function disableButtons(item){
        item.disabled = true;
       }

       }