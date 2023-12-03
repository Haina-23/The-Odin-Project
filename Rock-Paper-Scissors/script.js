    //introducir valor usuario
   function playerSelect()
   {
    let word = prompt("Introduce tu elección");
    return word;
   }
   //Poner el valor igual, da igual como este escrito se transforma todo en minusculas
    function getPlayerChoice()
    {
        const word = playerSelect();
        const playerWord = (word.toLowerCase());
        return playerWord;

 
    }

    //producir valor aleatorio maquina
    function getComputerChoice()
    {

     const computerWord = Math.floor(Math.random() * 3) + 1;
     if (computerWord == 1)
     {
        return "paper"
     }
     if (computerWord == 2)
     {
        return "scissors"
     }
     if (computerWord == 3)
     {
        return "rock"
     }
     return computerWord;


    }
    //comparar los dos valores
    function playRound(playerSelection, computerSelection)
    {

        if (playerSelection === computerSelection )
        {
            return "empate";
        }

        else if ((playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper"))
        {
            return "Has perdido :(";
        }

        else
        {
            return "Has ganado :)";
        }
    
    }
    //Cada 5 rondas un juego
    function game()
    {
        let i = 0;
        let a = 0;
        let b = 0;

        while( i < 5)
        {
            //se meten dentro para que se generen nuevas cada vez que entra al bucle, sino seran siempre las mismas
            const playerSelection = getPlayerChoice("ROCK");
            const computerSelection = getComputerChoice();

            const ronda = playRound(playerSelection, computerSelection);
                 console.log(computerSelection)
                 console.log(playerSelection)
                 console.log(ronda);
        
            if (ronda === "Has perdido :(")
                a++;
            else if (ronda === "Has ganado :)")
                b++;
            i++;
        }
       
        if (a > b)
            return "Has perdido el juego";
        if (b > a)
            return "Has ganado el juego";
        if (a === b)
            return "Habeis empatado";
        
    }
   
    //sacar resultado
    //anunciar ganador de batalla
    //loop 5 veces
    //anunciar ganador final de partida

     /*console.log("computer:");
     console.log(computerSelection);
     console.log("you:");
     console.log(playerSelection);

     console.log(playRound(playerSelection, computerSelection));*/
     console.log(game());
