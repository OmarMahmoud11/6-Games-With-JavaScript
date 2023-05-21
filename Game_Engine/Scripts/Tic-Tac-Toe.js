import GameEngine from "./GameEngine.js"
export default class Tic_Tac_Toe extends GameEngine {
    constructor() {
        super();

    }
    init() {
        this.Draw_grid('rgb(214, 229, 141)', 'rgb(214, 229, 141)', 3, 3);
        let state = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']

        ];
        return state;
    }
    Controller(input, state, turn) {
        var out = {
            Valid: 'no',
            state2: state

        }

        if (input != 0 && input != null) {
            let j = (input[1].charCodeAt(0) - 96) - 1;
            let i = 2 - parseInt(input[0]);
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if ((i == row) && (j == col) && (state[row][col]=='')) {
                        if (turn == 0)
                            state[row][col] = 'x';
                        else
                            state[row][col] = 'o';
                        out.Valid = 'yes';
                        out.state2 = state;
                        break;
                    }
                }
            }
        }
        return out;

    }
    Draw(state) {
        let chars = ['a', 'b', 'c'];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let id = (2 - i).toString().concat(chars[j]);
                if (state[i][j] == 'x')
                    document.getElementById(id).innerHTML = `<span style='color: blue;font-size: 550%;margin-left:75px;margin-bottom:75px'>${state[i][j]}</span>`;
                else
                    document.getElementById(id).innerHTML = `<span style='color: red;font-size: 550%;margin-left:75px;margin-bottom:75px'>${state[i][j]}</span>`;


            }
        }
    }
}
const newGame = new Tic_Tac_Toe();

