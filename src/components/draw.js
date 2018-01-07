
export default class DrawApp {

    constructor (){
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._pant = false;
        this.initialized = false;
        this.reset(null);
        this.init ();
    }

    reset (data) {

        if(data === null)
        {
            this._color = "#000000";
            this._clickX = [];
            this._clickY = [];
            this._clickDrag = [];
        } else {
            console.assert (data.color);
            console.assert (data.clickX.length > 0);
            console.assert (data.clickY.length > 0);
            console.assert (data.clickDrag.length > 0);
            this._color = data.color;
            this._clickX = data.clickX;
            this._clickY = data.clickY;
            this._clickDrag = data.clickDrag;
            this._draw ();
        }
    }

    init () {
        this._canvas = document.getElementById('canvas');
        this._canvas.setAttribute('width', this._width);
        this._canvas.setAttribute('height', this._height);

        if(typeof G_vmlCanvasManager != 'undefined') {
            this._canvas = G_vmlCanvasManager.initElement(this._canvas);
        }

        this._context = this._canvas.getContext("2d");
        let that = this;

        this._canvas.addEventListener("touchstart", (e) => {
            if(this._pant === true){
                var mouseX = e.changedTouches[0].pageX;
                var mouseY = e.changedTouches[0].pageY;
                this._addClick (mouseX, mouseY, false);
                this._draw();
            }
        }, false);

        this._canvas.addEventListener("touchmove", (e) => {
            if(this._pant === true){
                this._addClick(e.changedTouches[0].pageX, e.changedTouches[0].pageY, true);
                this._draw();
            }
            e.preventDefault();
        }, false);
    }

    _addClick(x, y, dragging)
    {
        this._clickX.push(x);
        this._clickY.push(y);
        this._clickDrag.push(dragging);
    }

    _draw(){
        this.clear();
        this._context.strokeStyle = this._color;
        this._context.lineJoin = "round";
        this._context.lineWidth = 5;

        for(var i=0; i < this._clickX.length; i++) {
            this._context.beginPath();
            if(this._clickDrag[i] && i){
                this._context.moveTo(this._clickX[i-1], this._clickY[i-1]);
            } else {
                this._context.moveTo(this._clickX[i]-1, this._clickY[i]);
            }
            this._context.lineTo(this._clickX[i], this._clickY[i]);
            this._context.closePath();
            this._context.stroke();
        }
    }

    getDataUrl (){
        return this._canvas.toDataURL();
    }

    clean (){
        this.clear();
        this._clearnArray ();
    }

    _clearnArray(){
        this._clickX = [];
        this._clickY = [];
        this._clickDrag = [];
    }

    clear(){
        this._context.clearRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    }

    setColor (color) {
        this._color = color;
        this._draw();
    }

    enablePant(boolean){
        this._pant = boolean;
    }

    setDrawing(color, xArr, yArr, dragArr)
    {
        this._color = color;
        this._clickX = xArr ? xArr : [];
        this._clickY = yArr ? yArr : [];
        this._clickDrag = dragArr ? dragArr: [];
        this._draw ();
    }

    getDrawData(){
        return {
            color: this._color,
            clickX: this._clickX,
            clickY: this._clickY,
            clickDrag: this._clickDrag
        }
    }
}