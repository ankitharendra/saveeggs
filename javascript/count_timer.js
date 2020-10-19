class Timer {
        constructor(ref, level_ref) {
        this.ref = ref;
        this.level_ref = level_ref;
        this.level = 1;
        this.ref.style.width = "60px";
    }

    startCounter() {
        this.ref.style.width = "60px";
        let i = 0;
        this.counterTimerId = setInterval(() => {
            i++;
            if(i >= 30){
                clearInterval(this.counterTimerId);
                let current_level = this.level_ref.innerHTML;
                this.level = this.level_ref.innerHTML = parseInt(current_level) + 1;
                this.startCounter();
            }
            this.ref.style.width = this.changeInt(this.ref.style.width) - 2 + "px";
        }, 1000)
    }

    stopCounter() {
        clearInterval(this.counterTimerId);
    }

    changeInt(pos) {
        let px_pos = pos.lastIndexOf("px");
        let pos_in_int = parseInt(pos.slice(0, px_pos));
        return pos_in_int;
    }
}

export default Timer;