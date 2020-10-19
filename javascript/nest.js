class Nest {
    constructor(ref) {
        this.ref = ref;
        this.ref.style.left= 340+"px";
    }

    changePosition(side) {
        let nest_position = this.getPosition(0);
        if (side == "ArrowRight" && nest_position < 680) {
            this.ref.style.left = (nest_position + 5) + "px";
        } else if (side == "ArrowLeft" && nest_position > 0) {
            this.ref.style.left = (nest_position - 5) + "px";
        }
        document.getElementById("nest2").style.left = this.getPosition(0) - 100 + "px";
    }

    getPosition(withPixel) {
        let nest_position = this.ref.style.left;
        if (withPixel) {
            return nest_position;
        }

        let px_pos =  nest_position.lastIndexOf("px");
        let pos_in_int = parseInt(nest_position.slice(0, px_pos));
        return pos_in_int;
    }
}

export default Nest;