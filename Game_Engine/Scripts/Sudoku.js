import GameEngine from "./GameEngine.js"
let grid;
export default class Sudoku extends GameEngine{
    constructor(){
        super();
      
    }
    init(){
        
        let state  = [
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,],
            [,,,,,,,,]
          ];
        const getColumn = (colNumber, lines) =>
        {
            const col = [];
            for (let i = 0; i < lines.length; ++i)
            {
                const line = lines[i];
                col.push(line[colNumber]);
            }
            return col;
        };

        const getAllowed = (column, picks) =>
        {
            const choosable = [];
            for (let i = 0; i < picks.length; ++i)
            {
                const pick = picks[i];
                if (!column.includes(pick))
                {
                    choosable.push(pick);
                }
            }
            return choosable;
        };

        function getSquare(colNumber, lineNumber, lines)
        {
            const detected = [];
            if (!lineNumber)
            {
                return detected;
            }

            let startCol = Math.floor(colNumber / 3) * 3;
            let endCol = startCol + 3;

            let startLine = Math.floor(lineNumber / 3) * 3;
            let endLine = Math.min(startLine + 3, lines.length);

            for (let i = startCol; i < endCol; ++i)
            {
                for (let j = startLine; j < endLine; ++j)
                {
                    const item = lines[j][i];
                    if (item !== undefined)
                    {
                        detected.push(item);
                    }
                }
            }

            return detected;
        }

        const generateRandomLine = (lines) =>
        {
            const line = [];
            let selectables = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (let i = 0; i < 9; ++i)
            {
                const column = getColumn(i, lines);

                let allowed;

                // Remove column items
                allowed = getAllowed(column, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

                // Remove line items
                allowed = getAllowed(line, allowed);

                // remove square items
                const square = getSquare(i, lines.length, lines);
                allowed = getAllowed(square, allowed);

                const random = allowed.length > 1 ? Math.floor(Math.random() * allowed.length) : 0;

                const chosen = allowed[random];
                if (chosen === undefined)
                {
                    return false;
                }
                line.push(chosen);

                selectables.splice(selectables.indexOf(chosen), 1);
            }

            return line;
        };

        const generateGrid = () =>
        {
            let iterations;
            do
            {
                const grid = [];
                iterations = 0;
                do
                {
                    ++iterations;
                    if (iterations > 500)
                    {
                        iterations = -1;
                        // Invalid
                        break;
                    }

                    const line = generateRandomLine(grid);
                    if (!line)
                    {
                        continue;
                    }
                    grid.push(line);


                } while (grid.length < 9);

                if (iterations !== -1)
                {
                    return grid;
                }

            } while (true);

        };

       
        
            grid = generateGrid();
            let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            for(let i=0;i<9;i++){
                let num= Math.floor(Math.random() * 9)+2;//----17     
                for(let j=0;j<num;j++){
                    let num2= Math.floor(Math.random() * 9)+1;
                    var pair = {
                        value:'',
                        modifiy:0
            
                    }
                    pair.modifiy=0;
                    pair.value= grid[i][num2-1];
                    state[i][num2-1] = pair;
                }
            }
            
        this.Draw_grid('rgb(214, 229, 141)', 'rgb(214, 229, 141)', 9, 9);
        this.Drow_Lines();
        return state;
    }
    Drow_Lines(){
        let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for(let i=8 ; i>=0 ; i--){
            for(let j=0 ; j<9 ; j++){
                if(chars[j]=='c'||chars[j]=='f'){
                    let id = i.toString().concat(chars[j]);
                    document.getElementById(id).style.borderRight = " 5px solid black";
                }
                if(i==6||i==3){
                    let id = i.toString().concat(chars[j]);
                    document.getElementById(id).style.borderBottom = " 5px solid black";
                }
            }
        }
    }
    Controller(element,state,turn){
        
        var out = {
            Valid: 'no',
            state2: state

        }
        var ele = {
            value:'',
            modifiy:0

        }
        if(element==null)
            return out;
            
        let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let row=element.substr(0,1);
        let col=element.substr(1,1);
        let value=element.substr(2,3);
        if( (value =='' || value == null) && row !='' && row!= null && col !='' && col !=null){
            out.Valid ='yes';
            out.state2 = this.delete(state,element);
            return out;
        }
        else{
        let b1=true;
        document.getElementById ("error2").style.display='none';
        if(state[8-row][(col.charCodeAt(0) - 97)] != null && state[8-row][(col.charCodeAt(0) - 97)].modifiy == 0){
            return out;
        }
        else{
        for(let i=0;i<9;i++){
            let v=0;
            if(state[8-row][i] != null){
             v = state[8-row][i].value;}
            if(v == value) b1 = false;
        }
        for(let i=0;i<9;i++){
            let id = i.toString() + col;
            let v=0;
            if(state[8-i][(col.charCodeAt(0) - 97)] != null){
             v = state[8-i][(col.charCodeAt(0) - 97)].value;}
            if(v == value) b1 = false;
        }

        let r;
        let c;
        if(8-parseInt(row)<=2)  r=8;
        else if(5-parseInt(row)<=2) r=5;
        else if(2-parseInt(row)<=2) r=2;
        
        let x=col.charCodeAt(0)-97;
        if(x-0<=2)  c=0;
        else if(x-3<=2) c=3;
        else if(x-6<=2) c=3;
        
        for(let i=r;i>=r-2;i--){
            for(let j=c;j<=c+2;j++){
                let id=i.toString().concat(chars[j]);
                let v=0;
            if(state[8-i][j] != null){
                 v = state[8-i][j].value;}
                if(v == value) b1=false;
            }
        }
        if(b1) {
            console.log(row+col);
            ele.value = value;
            ele.modifiy = 1;
           state[8-row][col.charCodeAt(0)-97] = ele;
           out.Valid = 'yes';
        }else{
           
            out.Valid = 'no';
        }
            
       return out; }
    }
    
    }
    Draw(state){
        let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let id = (8 - i).toString().concat(chars[j]);
                if(state[i][j]!= null && state[i][j].modifiy ==1)
                    document.getElementById(id).innerHTML = `<span style='color: blue;font-size: 50px;margin-left:25px;margin-top:55px'>${state[i][j].value}</span>`;
                else if(state[i][j]!= null)
                document.getElementById(id).innerHTML = `<span style='color: black;font-size: 50px;margin-left:25px;margin-top:55px'>${state[i][j].value}</span>`;

            }
        }
    }
    delete (state2,element){
        let state = state2;
        let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let row=element.substr(0,1);
        let col=element.substr(1,1);
        let value=element.substr(2,3);
        let b1=true;
        if(state[8-row][(col.charCodeAt(0) - 97)] != null && state[8-row][(col.charCodeAt(0) - 97)].modifiy == 0){
        document.getElementById ("error2").style.display='block';
        }else if(state[8-row][(col.charCodeAt(0) - 97)] != null){
            let id = row.concat(col);
            state[8-row][(col.charCodeAt(0) - 97)].value ='';
        }
        return state;
    }
    }
const sudokuGame = new Sudoku();
