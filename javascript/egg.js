class Egg {
    leftPosArr = Array(90, 285, 480, 675);
    constructor(ref) {
        this.ref = ref;
        this.generatePosition();
    }

    generatePosition() {
        let left_pos_index = Math.floor(Math.random() * 4) + 1;
        this.ref.style.left = this.leftPosArr[left_pos_index - 1] + "px";
        this.ref.style.top = "0px";
    }

    getLeftPosition (withPixel) {
        let left_pos = this.ref.style.left;
        if (withPixel) {
            return left_pos;
        }

        return this.changeInt(left_pos);
    }

    getTopPosition(withPixel) {
        let top_pos = this.ref.style.top;
        if(withPixel) {
            return top_pos;
        }

        return this.changeInt(top_pos);
    }

    animateDown() {
        let top_pos = this.getTopPosition(0);
        this.ref.style.top = top_pos + 5 + "px";
    }

    changeInt(pos) {
        let px_pos = pos.lastIndexOf("px");
        let pos_in_int = parseInt(pos.slice(0, px_pos));
        return pos_in_int;
    }
}

export default Egg;