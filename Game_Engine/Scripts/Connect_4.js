import GameEngine from "./GameEngine.js"
export default class Connect4 extends GameEngine {
    constructor() {
        super();
    }
    init() {
        this.Draw_grid('white', 'white',7,6);
        let state = [
            ['w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w'],
            ['w', 'w', 'w', 'w', 'w', 'w']
        ];
        return state;
    }
    Draw(state) {
        document.getElementById("container").style.background="black";
        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (let row = 0; row < 7; row++) {
            for (let col = 0; col < 6; col++) {
                let id = (6 - row).toString().concat(chars[col]);
                if(state[row][col]=='w'){
                    document.getElementById(id).style.background="white";
                    document.getElementById(id).style.borderRadius= "50%";
                }
                else if(state[row][col]=='b'){
                    document.getElementById(id).style.background="blue";
                    document.getElementById(id).style.borderRadius= "50%";
                }
                else{
                    document.getElementById(id).style.background="red";
                    document.getElementById(id).style.borderRadius= "50%";
                }
            }
        }
    }
    Controller(element, state, turn) {
        var out = {
            Valid: 'no',
            state2: state
        }
        for (let i = 0; i < 7; i++) {
            if (state[6-i][element.charCodeAt(0) - 97] != "r" && state[6-i][element.charCodeAt(0) - 97] != "b"&& element>='a'&&element <='f') {console.log(out.Valid);
                if(turn==0){
                    state[6-i][element.charCodeAt(0) - 97]='b';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
                else{
                    state[6-i][element.charCodeAt(0) - 97] ='r';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
                break;
            }
        }
        
        return out;
    }
}
const Connect4Game = new Connect4();