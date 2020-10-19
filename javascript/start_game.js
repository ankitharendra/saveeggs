import Egg from './egg.js';
import Timer from './count_timer.js';
import Nest from './nest.js';

var lifes = 5;
var score = 0;
var successive_catch = 0;
var speed_timer = 100;


let start_button_ref = document.getElementById("start_button");
start_button_ref.addEventListener("click", function() {
    document.getElementById("main_div").style.display="none";
    document.getElementById("game_div").style.display= "block";
    gameStart();
});


function gameStart() {
    const egg_obj = new Egg(document.getElementById("running_egg"));
    const nest_obj = new Nest(document.getElementById("nest"));
    const timer_obj = new Timer(document.getElementById("timer_div"), document.getElementById("lavel_number"));
    timer_obj.startCounter();


    document.addEventListener("keydown", function(e) {
        if ((e.key == "ArrowRight" || e.key =="ArrowLeft") && lifes > 0) {
            nest_obj.changePosition(e.key)
        }
    });

    startEgg(egg_obj, nest_obj, timer_obj);
}

function startEgg(egg_obj, nest_obj, timer_obj) {
    egg_obj.generatePosition();
    let timerId = setInterval(() => {
        egg_obj.animateDown();
        if(egg_obj.getTopPosition() == 230) {
            let egg_left = egg_obj.getLeftPosition();
            let nest_left = nest_obj.getPosition();

            if (nest_left < (egg_left - 5) && nest_left > (egg_left - 70)) {
                score += timer_obj.level * 5;
                document.getElementById("score_value").innerHTML = score;
                if(successive_catch % 5 == 0) {
                    speed_timer -= successive_catch;
                }
                successive_catch++;
                startEgg(egg_obj, nest_obj, timer_obj);
                clearInterval(timerId);
            } else {
                document.getElementById("life_"+lifes).style.opacity = 0.3;
                lifes--;
                successive_catch = 0;
                speed_timer = 100;
            }
        }

        if (egg_obj.getTopPosition() > 260) {
            clearInterval(timerId);
            if (lifes > 0) {
                startEgg(egg_obj, nest_obj, timer_obj);
            } else {
                timer_obj.stopCounter();
                document.getElementById("final_result").style.display = "block";
            }
        }
    }, speed_timer);
}
