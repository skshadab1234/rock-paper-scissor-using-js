$(document).ready(function(){
	var userscore = 0;
	var computerscore = 0;
	var ties = 0;
	var round = 1;
	const round_inc = $("#c_round");
	const userscore_span = $("#w_user");
	const computerscore_span = $("#w_comp");
	const ties_score = $("#t");
	const rock_btn = $("#rock");
	const paper_btn = $("#paper");
	const scissor_btn = $("#scissor");
	const my_msg = $("#my_msg");


	function getComputerChoice() {
		const choices = ['r','p','s'];
		const random = Math.floor(Math.random() * 3);
		return choices[random];
	}

	function winning_text()
	{
		const textes_win = ['you are rocking', 'Awesome', 'Fantastic', 'Good', 'Amazing', 'Brillant', 'What a Throw Baby', 'Excellent'];
		const ran_win = Math.floor(Math.random() * 8);
		return textes_win[ran_win];
	}

	function losssing()
	{
		const textes_win = ['Damm! Buddy', 'You need Rest', 'Take a Rest', 'Play with Mind Not with ....', 'Good But Need Practice', 'Go home', 'Play Correct', 'Focus on GAME!'];
		const ran_win = Math.floor(Math.random() * 8);
		return textes_win[ran_win];
	}
	
	
	function win()
	{
		setTimeout(()=>{
			userscore++;
			userscore_span.html(userscore);
			userscore_span.addClass("font_inc_score");
			$details = '<div class="container"><div class="row"><div class="col-4 col-sm-4"><span style="color: green">'+winning_text()+'</span></div><div class="col-4 col-sm-4"><span style="color: red;font-size: 20px;font-weight: 700">'+round+'</span></div><div class="col-4 col-sm-4"><span style="color: red">Lose</span></div></div></div><hr>';
			$("#details_score").prepend($details);	
			$(".show_message").css({"left":"11px","background":"green"});
			my_msg.html(winning_text());
		},500);

		setTimeout(()=>{
			$(".show_message").css({"left":"-300px","background":"green"});
			userscore_span.removeClass("font_inc_score");
		},3000);
	}

	function loss()
	{
		setTimeout(()=>{
			computerscore++;
			computerscore_span.html(computerscore);
			computerscore_span.addClass("font_inc_score");
			$details = '<div class="container"><div class="row"><div class="col-4 col-sm-4"><span style="color: red">'+losssing()+'</span></div><div class="col-4 col-sm-4"><span style="color: red;font-size: 20px;font-weight: 700">'+round+'</span></div><div class="col-4 col-sm-4"><span style="color: green">Win</span></div></div></div><hr>';
			$("#details_score").prepend($details);
			$(".show_message").css({"left":"11px","background":"red"});
			my_msg.html(losssing());
		},500);

		setTimeout(()=>{
			$(".show_message").css({"left":"-300px"});
			computerscore_span.removeClass("font_inc_score");
		
		},3000);

			
	}

	function tie()
	{
		setTimeout(()=>{
			ties++;
			ties_score.html(ties);
			$details = '<div class="container"><div class="row"><div class="col-4 col-sm-4"><span style="color: red">Tie</span></div><div class="col-4 col-sm-4"><span style="color: red;font-size: 20px;font-weight: 700">'+round+'</span></div><div class="col-4 col-sm-4"><span style="color: red">Tie</span></div></div></div><hr>';
			$("#details_score").prepend($details);	
		},1000);
	}

	function game(userchoice) {

		const computerchoices = getComputerChoice();
		if (computerchoices === "r") {
			$(".game_img2").css("background-image","url(images/default_hand.png)")
			setTimeout( () => {
				$(".game_img2").removeClass("animate_hand_default_comp");	
				$(".game_img2").css("background-image","url(images/rock.png)");		
			},1000);
		}

		if (computerchoices === "p") {
			$(".game_img2").css("background-image","url(images/default_hand.png)")
			setTimeout( () => {
				$(".game_img2").removeClass("animate_hand_default_comp");	
				$(".game_img2").css("background-image","url(images/paper.png)");		
			},1000);	
		}

		if (computerchoices === "s")
		{
			$(".game_img2").css("background-image","url(images/default_hand.png)")
			setTimeout( () => {
				$(".game_img2").removeClass("animate_hand_default_comp");	
				$(".game_img2").css("background-image","url(images/scissor.png)");		
			},1000);		
		}

		switch (userchoice + computerchoices){
			case "rs":
			case "pr":
			case "sp":
				win();
				break;
			case "rp":
			case "ps":
			case "sr":
				loss();
				break;
			case "rr":
			case "pp":
			case "ss":
				tie();
				break;
		}
	}

	function main()
	{
		rock_btn.click(()=>{
			rock_btn.attr("disabled", true);
			$(".game_img").css("background-image","url(images/default_hand.png)")
			$(".game_img").addClass("animate_hand_default_user");
			$(".game_img2").addClass("animate_hand_default_comp");
			
			rock_btn.css({"border":"12px solid pink","outline":"none"});

			game("r");

			setTimeout( () => {
				rock_btn.css({"border":"0px solid pink","outline":"none"});
				$(".game_img").removeClass("animate_hand_default_user");
				$(".game_img2").removeClass("animate_hand_default_comp");	
				$(".game_img").css("background-image","url(images/rock.png)");		
				round++;
				round_inc.html(round);
				rock_btn.attr("disabled", false);
			},1000);
		});

		paper_btn.click(()=>{
			paper_btn.attr("disabled",true);
			$(".game_img").css("background-image","url(images/default_hand.png)")
			$(".game_img").addClass("animate_hand_default_user");
			$(".game_img2").addClass("animate_hand_default_comp");

			paper_btn.css({"border":"12px solid pink","outline":"none"});

			game("p");

			setTimeout( () => {
				paper_btn.css({"border":"0px solid pink","outline":"none"});
				$(".game_img").removeClass("animate_hand_default_user");
				$(".game_img2").removeClass("animate_hand_default_comp");	
				$(".game_img").css("background-image","url(images/paper.png)");		
				round++;
				round_inc.html(round);
				paper_btn.attr("disabled",false);
			},1000);
		});

		scissor_btn.click(()=>{
			scissor_btn.attr("disabled",true);
			$(".game_img").css("background-image","url(images/default_hand.png)")
			$(".game_img").addClass("animate_hand_default_user");
			$(".game_img2").addClass("animate_hand_default_comp");
			scissor_btn.css({"border":"12px solid pink","outline":"none"});

			game("s");

			setTimeout( () => {
				scissor_btn.css({"border":"0px solid pink","outline":"none"});
				$(".game_img").removeClass("animate_hand_default_user");
				$(".game_img2").removeClass("animate_hand_default_comp");	
				$(".game_img").css("background-image","url(images/scissor.png)");	
				round++;
				round_inc.html(round);	
				scissor_btn.attr("disabled",false);
			},1000);
		});
	}

	main();

});