import GameEngine from "./GameEngine.js"
export default  class queens extends GameEngine{
    constructor() {
        super();
    }
    init() {
        this.Draw_grid('white', 'grey', 8, 8);
        let state = [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '']
        ];
        return state;
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
    Controller(element,state,turn){
        var out = {
            Valid: 'no',
            state2: state
        }
        let arr=['a','b','c','d','e','f','g','h'];
        if(element[2] == 1){
            let j=element[1].charCodeAt(0)-96;
            let i=parseInt(element[0]);
            
            if(state[7-i][j-1]=='♛'){
                out.Valid='yes';
                state[7-i][j-1]='';
                return out;
            }else{
                return out;
            }

        }
        let valid = true;
        let j=element[1].charCodeAt(0)-96;
        for(let i=parseInt(element[0])-1 ; i>=0 && j<=7 ; i--){
            let id=i.toString().concat(arr[j]);
            if(state[7-i][j]=='♛'){
                valid=false;
            }
            j++;
        }

        j=element[1].charCodeAt(0)-98;
        for(let i=parseInt(element[0])+1 ; i<=7 && j>=0 ; i++){
            let id=i.toString().concat(arr[j]);
            if(state[7-i][j]=='♛'){
                valid=false;
            }
            j--;
        }
        
        j=element[1].charCodeAt(0)-96;
        for(let i=parseInt(element[0])+1 ; i<=7 && j<=7 ; i++){
            let id=i.toString().concat(arr[j]);
            if(state[7-i][j]=='♛'){
                valid=false;
            }
            j++;
        }

        j=element[1].charCodeAt(0)-98;
        for(let i=parseInt(element[0])-1 ; i>=0 && j>=0 ; i--){
            let id=i.toString().concat(arr[j]);
            if(state[7-i][j]=='♛'){
                valid=false;
            }
            j--;
        }

        for(let i=0 ; i<=7 ; i++){
            let id=element[0].toString().concat(arr[i]);
            if(state[7-element[0]][arr[i].charCodeAt(0)-97]=='♛'){
                valid=false;
            }
        }
        for(let i=0 ; i<=7 ; i++){
            let id=i.toString().concat(element[1]);
            if(state[7-i][element[1].charCodeAt(0)-97]=='♛'){
                valid=false;
            }
        }


        if(valid){
            state[7 - element[0]][(element[1].charCodeAt(0) - 97)] = '♛';
            out.Valid = 'yes';
            out.state2 = state;
        }
        return out;
    }
}
const queensGame = new queens();