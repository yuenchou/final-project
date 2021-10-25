import React, { Component } from 'react';

class Canvas extends Component {
    componentDidMount() {
        this.clickCanvas();
    }

    clickCanvas = () => {        
        this.updateCanvas();
    }

    randomNum (min, max) {

        return Math.floor(Math.random() * (max - min) + min);

    }    

    randomColor (min, max) {

        var r = this.randomNum(min, max);

        var g = this.randomNum(min, max);

        var b = this.randomNum(min, max);

        return "rgb(" + r + "," + g + "," + b + ")";

    }

    updateCanvas  ()  {
        var canvas = document.getElementById("canvas");

        var width = canvas.width;

        var height = canvas.height;

        var ctx = canvas.getContext('2d');

        ctx.textBaseline = 'bottom';

        //繪製背景色
        ctx.fillStyle = this.randomColor(200, 240);

        ctx.fillRect(0, 0, width, height);

        //繪製文字

        var str = 'ABCEFGHJKLMNPQRSTWXY123456789';

        var code = "";
        for (var i = 0; i < 4; i++) {

            var txt = str[this.randomNum(0, str.length)];

            code += txt;

            ctx.fillStyle = this.randomColor(50, 160);
            ctx.font = this.randomNum(25, 40) + 'px SimHei';
            var x = 10 + i * 25;

            var y = this.randomNum(25, 35);

            var deg = this.randomNum(-45, 45);

            //修改坐標原點和旋轉角度

            ctx.translate(x, y);

            ctx.rotate(deg * Math.PI / 180);

            ctx.fillText(txt, 0, 0);

            //恢復坐標原點和旋轉角度

            ctx.rotate(-deg * Math.PI / 180);

            ctx.translate(-x, -y);

        }
        //繪製干擾線

        for (var i = 0; i < 2; i++) {

            ctx.strokeStyle = this.randomColor(40, 180);

            ctx.beginPath();

            ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height));

            ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height));

            ctx.stroke();

        }
        //繪製干擾點

        for (var i = 0; i < 30; i++) {

            ctx.fillStyle = this.randomColor(0, 255);

            ctx.beginPath();

            ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);

            ctx.fill();

        }
    }
    render(){
        return(
            <canvas id="canvas" width="150" height="60" onClick={  this.clickCanvas }/>              
        );
    }
}
 
export default Canvas;

