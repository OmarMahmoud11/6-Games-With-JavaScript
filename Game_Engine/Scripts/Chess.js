import GameEngine from "./GameEngine.js"
export default class Chess extends GameEngine {
    constructor() {
        super();
    }
    init() {
        this.Draw_grid('white', 'grey', 8, 8);
        let state = [
            ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
            ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
            ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
        ];
        return state;
    }
    Controller(element, state, turn) {
        var out = {
            Valid: 'no',
            state2: state
        }
        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let From = element.substr(0, 2);
        let To = element.substr(2, 3);
        let elementFrom = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
        let elementTo = state[7 - To[0]][(To[1].charCodeAt(0) - 97)];
        if (turn == 1) {
            if (elementFrom == '♟') {
                if (From[0] - To[0] == 1 && From[1] == To[1] && elementTo == '') {
                    state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                    state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;

                }
                else if (From[0] - To[0] == 1 && (From[1].charCodeAt(0) - To[1].charCodeAt(0) == 1 || From[1].charCodeAt(0) - To[1].charCodeAt(0) == -1) && this.check_white(elementTo)) {
                    state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                    state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
            }
            else if (elementFrom == '♜') {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

                if (From[0] == To[0] && To[1].charCodeAt(0) > From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) + 1; i < To[1].charCodeAt(0); i++) {
                        let char = i - 97;
                        if (state[7 - From[0]][char] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[0] == To[0] && To[1].charCodeAt(0) < From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) - 1; i > To[1].charCodeAt(0); i--) {
                        let char = i - 97;
                        if (state[7 - From[0]][char] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;

                    }
                }
                else if (From[1] == To[1] && From[0] < To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        if (state[7 - i][(From[1].charCodeAt(0) - 97)] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;

                    }
                }
                else if (From[1] == To[1] && From[0] > To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        if (state[7 - i][(From[1].charCodeAt(0) - 97)] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;

                    }
                }
            }
            else if (elementFrom == '♞') {
                if (Math.abs(From[0] - To[0]) == 1 && Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) == 2 && (this.check_white(elementTo) || elementTo == '')) {
                    state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                    state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
                else if (Math.abs(From[0] - To[0]) == 2 && Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) == 1 && (this.check_white(elementTo) || elementTo == '')) {
                    state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                    state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
            }
            //-------------------------------------------------------------------------------
            else if (elementFrom == '♝') {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        console.log("okk");
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }
            else if (elementFrom == '♛') {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        console.log("okk");
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7 - i][j] != '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[0] == To[0] && To[1].charCodeAt(0) > From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) + 1; i < To[1].charCodeAt(0); i++) {
                        let char = i - 97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if (state[7 - From][arr[char].charCodeAt(0) - 97] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[0] == To[0] && To[1].charCodeAt(0) < From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) - 1; i > To[1].charCodeAt(0); i--) {
                        let char = i - 97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if (state[7 - From[0]][arr[char].charCodeAt(0) - 97] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[1] == To[1] && From[0] < To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if (state[7 - i][From[1].charCodeAt(0) - 97] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[1] == To[1] && From[0] > To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if (state[7 - i][From[1].charCodeAt(0) - 97] != '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo == '' || this.check_white(elementTo))) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }
            else if (elementFrom == '♚') {
                if (Math.abs(From[0] - To[0]) <= 1 && Math.abs(From[1].codePointAt(0) - To[1].charCodeAt(0)) <= 1) {
                    if (elementTo == '' || this.check_white(elementTo)) {
                        state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                        state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }

        }

        else if (turn == 0) {
            if (elementFrom == '♙') {
                if (From[0] - To[0] == -1 && From[1] == To[1] && elementTo == '') {
                    state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                    state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;

                }
                else if (From[0] - To[0] == -1 && (From[1].charCodeAt(0) - To[1].charCodeAt(0) == 1 || From[1].charCodeAt(0) - To[1].charCodeAt(0) == -1) && this.check_black(elementTo)) {
                    state[7 - To[0]][(To[1].charCodeAt(0) - 97)] = state[7 - From[0]][(From[1].charCodeAt(0) - 97)];
                    state[7 - From[0]][(From[1].charCodeAt(0) - 97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
            }
            else if (elementFrom== '♖') {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

                if (From[0] == To[0] && To[1].charCodeAt(0) > From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) + 1; i < To[1].charCodeAt(0); i++) {
                        let char = i - 97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if (state[7-From[0]][arr[char].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[0] == To[0] && To[1].charCodeAt(0) < From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) - 1; i > To[1].charCodeAt(0); i--) {
                        let char = i - 97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if (state[7-From[0]][arr[char].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[1] == To[1] && From[0] < To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if (state[7-i][From[1].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[1] == To[1] && From[0] > To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if (state[7-i][From[1].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }
            else if (elementFrom == '♘') {
                if (Math.abs(From[0] - To[0]) == 1 && Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) == 2 && (this.check_black(elementTo) || elementTo== '')) {
                    console.log("ooo");
                    state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                    state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
                else if (Math.abs(From[0] - To[0]) == 2 && Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) == 1 && (this.check_black(elementTo) || elementTo== '')) {
                    console.log("ooo");
                    state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                    state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                    out.Valid = 'yes';
                    out.state2 = state;
                }
            }
            else if (elementFrom== '♗') {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }
            else if (elementFrom== '♕') {
                let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
                if (From[0] == To[0] && To[1].charCodeAt(0) > From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) + 1; i < To[1].charCodeAt(0); i++) {
                        let char = i - 97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if (state[7-From[0]][arr[char].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[0] == To[0] && To[1].charCodeAt(0) < From[1].charCodeAt(0)) {
                    let temp = true;
                    for (let i = From[1].charCodeAt(0) - 1; i > To[1].charCodeAt(0); i--) {
                        let char = i - 97;
                        let id = From[0].concat(arr[char]);
                        console.log(id);
                        if (state[7-From[0]][arr[char].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[1] == To[1] && From[0] < To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if (state[7-i][From[1].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (From[1] == To[1] && From[0] > To[0]) {
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(From[1]);
                        console.log(id);
                        if (state[7-i][From[1].charCodeAt(0)-97]!= '') {
                            temp = false;
                        }
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        console.log(id);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] < From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) - 1; i > parseInt(To[0]); i--) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] > From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 96;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j++;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
                else if (Math.abs(From[0] - To[0]) == Math.abs(From[1].charCodeAt(0) - To[1].charCodeAt(0)) && To[0] > From[0] && To[1] < From[1]) {
                    console.log("ok");
                    let j = From[1].charCodeAt(0) - 98;
                    let temp = true;
                    for (let i = parseInt(From[0]) + 1; i < parseInt(To[0]); i++) {
                        let id = i.toString().concat(arr[j]);
                        if (state[7-i][j]!= '') {
                            temp = false;
                        }
                        j--;
                    }
                    if (temp && (elementTo== '' || this.check_black(elementTo))) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }
            else if (elementFrom== '♔') {
                if (Math.abs(From[0] - To[0]) <= 1 && Math.abs(From[1].codePointAt(0) - To[1].charCodeAt(0)) <= 1) {
                    if (elementTo== '' || this.check_black(elementTo)) {
                        state[7-To[0]][(To[1].charCodeAt(0)-97)] =  state[7-From[0]][(From[1].charCodeAt(0)-97)];
                        state[7-From[0]][(From[1].charCodeAt(0)-97)] = '';
                        out.Valid = 'yes';
                        out.state2 = state;
                    }
                }
            }

        }
        return out;
    }
    check_black(index) {
        if (index == '♜' || index == '♞' || index == '♝' || index == '♛' || index == '♚' || index == '♟') {
            return true;
        }
    }
    check_white(index) {
        if (index == '♙' || index == '♖' || index == '♘' || index == '♗' || index == '♕' || index == '♔') {
            return true;
        }
    }
    Draw(state) {
        let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let id = (7 - row).toString().concat(chars[col]);
                console.log("id" + id);
                document.getElementById(id).innerHTML = `<span style='color: black;font-size: 60px;margin-left:20px;margin-bottom:5px'>${state[row][col]}</span>`;
            }
        }
    }
}

const chessGame = new Chess();