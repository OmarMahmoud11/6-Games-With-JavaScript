export default class GameEngine {
    constructor() {
        this.#while_loop();
    }
    Draw_grid(color1, color2, height, width) {
        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                document.getElementById("container").innerHTML += "<div class='grid' id='" + (height - i - 1) + chars[j] + "'></div>";
                
            }
        }
        for (let i = 0; i < height; i++) {
            document.getElementById("rows").innerHTML += "<div class='row' id='row" + i + "'>" + (height - i - 1) + "</div>";
        }
        for (let i = 0; i < width; i++) {
            
            document.getElementById("cols").innerHTML += "<div class='col' id='col" + i + "'>" + chars[i] + "</div>";
        }
        let size_width = (960 / width).toString();
        size_width += "px";
        let size_height = (960 / height).toString();
        size_height += "px";
        let temp = 0;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                
                let ss = "";
                ss += (height - i - 1).toString() + chars[j];
                document.getElementById(ss).style.width = size_width;
                document.getElementById(ss).style.height = size_height;
                if (width % 2 == 1) {
                    if (temp) {
                        document.getElementById(ss).style.background = color2;
                        temp = 0;
                    }
                    else {
                        document.getElementById(ss).style.background = color1;
                        temp = 1;
                    }
                }
                else if (i % 2 == 0) {
                    if (temp) {
                        document.getElementById(ss).style.background = color2;
                        temp = 0;
                    }
                    else {
                        document.getElementById(ss).style.background = color1;
                        temp = 1;
                    }
                }
                else {
                    if (temp) {
                        document.getElementById(ss).style.background = color1;
                        temp = 0;
                    }
                    else {
                        document.getElementById(ss).style.background = color2;
                        temp = 1;
                    }
                }
                if (i == 0)
                    document.getElementById("col" + j.toString()).style.width = size_width;
            }
            document.getElementById("row" + i.toString()).style.height = size_height;
        }
    }
    take_input() {
        document.getElementById("error").style.display = 'none';
        let block = prompt("Enter an input", "0");

        return block;
    }
    Draw(state) { }
    Controller(input, state, turn) {
        state = [
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '']
        ];
        let pair = {
            Valid: 'no',
            state2: state

        }
        return pair;
    }
    init() {
        let state = [
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '']
        ];
        return state;
    }
    
      async #while_loop() {
        let player1 = 0;
        let player2 = 1;
        let turn = 0;
        let state = this.init();
        this.Draw(state);
        let pair = {
            Valid: 'no',
            state2: state

        }
        while (true) {
            await this.sleep(2000);
            let input = this.take_input();
            pair.Valid = 'no';
            pair = this.Controller(input, state, turn);
            state = pair.state2;
            if (pair.Valid == 'yes') {
                this.Draw(state);
                // change turn
                let t = turn;
                let p1 = player1;
                let p2 = player2;
                if (t == p1) {

                    turn = player2;
                    document.getElementById('p1').style.display = 'none';
                    document.getElementById('p2').style.display = 'block';

                }
                else if (t == p2) {

                    turn = player1;
                    document.getElementById('p1').style.display = 'block';
                    document.getElementById('p2').style.display = 'none';

                }
            } else if(pair.Valid == 'no') {
                document.getElementById("error").style.display = 'block';
            }

        }
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}


