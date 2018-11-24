//line.js
class Line {
    constructor(x, y, w, d, c) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.depth = d;
        this.curve = c;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getDepth() {
        return this.depth;
    }
    getCurve() {
        return this.curve;
    }
    setSize(x) {
        this.size = x;
    }
}
