function playGame(weapon){

	var random = Math.floor((Math.random() * 5) + 1);

	var theGame = 3;

	

		if(weapon == "Rock" && random == 1){
			alert("Rocks don't do much against other rocks. Tie!");
		}

		else if(weapon == "Rock" && random == 2){
			alert("Paper covers Rock. You lose!");
		}

		else if(weapon == "Rock" && random == 3){
			alert("Rock smashes Scissors. You win!");
		}

		else if(weapon == "Rock" && random == 4){
			alert("Rock squashes Lizard. You win!");
		}

		else if(weapon == "Rock" && random == 5){
			alert("Spock vaporizes Rock. You lose!");
		}

		else if(weapon == "Paper" && random == 1){
			alert("Paper covers Rock. You win!");
		}

		else if(weapon == "Paper" && random == 2){
			alert("Paper doesn't do much against other Paper. Tie!");
		}

		else if(weapon == "Paper" && random == 3){
			alert("Scissors cut paper. You lose!");
		}

		else if(weapon == "Paper" && random == 4){
			alert("Lizard eats paper. You lose!");
		}

		else if(weapon == "Paper" && random == 5){
			alert("Paper disproves Spock. You win!");
		}

		else if(weapon == "Scissors" && random == 1){
			alert("Rock smashes scissors. You lose!");
		}

		else if(weapon == "Scissors" && random == 2){
			alert("Scissors cut Paper. You win!");
		}

		else if(weapon == "Scissors" && random == 3){
			alert("Scissors can't cut other scissors. Tie!");
		}

		else if(weapon == "Scissors" && random == 4){
			alert("Scissors decapitate Lizard. You win!");
		}

		else if(weapon == "Scissors" && random == 5){
			alert("Spock dismantles Scissors. You lose!");
		}

		else if(weapon == "Lizard" && random == 1){
			alert("Rock squashes Lizard. You lose!");
		}

		else if(weapon == "Lizard" && random == 2){
			alert("Lizard eats paper. You win!");
		}

		else if(weapon == "Lizard" && random == 3){
			alert("Scissors decapitate Lizard. You lose!");
		}

		else if(weapon == "Lizard" && random == 4){
			alert("Lizards are immune to each other's poison. Tie!");
		}

		else if(weapon == "Lizard" && random == 5){
			alert("Lizard poisons Spock. You win!");
		}

		else if(weapon == "Spock" && random == 1){
			alert("Spock vaporizes Rock. You win!");
		}

		else if(weapon == "Spock" && random == 2){
			alert("Paper disproves Spock. You lose!");
		}

		else if(weapon == "Spock" && random == 3){
			alert("Spock dismantles Scissors. You win!");
		}

		else if(weapon == "Spock" && random == 4){
			alert("Lizard poisons Spock. You lose!");
		}

		else if(weapon == "Spock" && random == 5){
			alert("Spock vs. Spock. Whoa.");
		}
}