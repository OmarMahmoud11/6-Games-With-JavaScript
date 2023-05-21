 import GameEngine from "./GameEngine.js"
export default  class checker extends GameEngine{
    constructor(){
        super();
    }
    init(){
      this.Draw_grid('#F0D2B4', '#BA7A3A', 8, 8);
      let state  = [
         ['','1','','1','','1','','1'],
         ['1','','1','','1','','1',''],
         ['','1','','1','','1','','1'],
         ['','','','','','','',''],
         ['','','','','','','',''],
         ['0','','0','','0','','0',''],
         ['','0','','0','','0','','0'],
         ['0','','0','','0','','0',''],
      ]
      return state;
    }
    Controller(element , state , turn){
      var out = {
         Valid: 'no',
         state2: state

     }
        let From=element.substr(0,2);
        let To=element.substr(2,3);
        From = (7-parseInt(From[0])).toString()+(From[1].charCodeAt(0)-97).toString(); 
        To = (7-parseInt(To[0])).toString() +(To[1].charCodeAt(0)-97).toString();
        let elementFrom = state[From[0]][From[1]];
        let elementTo =state[To[0]][To[1]] ;
        let s1='';
        let s2='';
        if(elementFrom!='')
         s1 = elementFrom;
        if(elementTo!='')
         s2 = elementTo;
        let valid = false;
        if(turn== 1 ){
           let r1 = parseInt(From[0]);
           let c1 = parseInt(From[1]);
           let r2 = parseInt(To[0]);
           let c2 = parseInt(To[1]);
           if(r2 == (r1)+1 && c2 == (c1)+1){
             if( s2 == '0'){
                let row = r2+1;
                let col = c2+1;
                if(state[row][col]==""){
                    valid = true;
                    state[r2][c2]="";
                    state[row][col]  = elementFrom;
                    state[r1][c1]='';
                }
             }else if( s2 == ''){
                valid = true;
                state[r2][c2]  = elementFrom;
                state[r1][c1]='';

             }
           }else if(r2 == (r1)+1 && c2 == (c1)-1){
            if( s2 == '0'){
                let row = r2+1;
                let col = c2-1;
                let to = row.toString()+col.toString();
                //console.log(to)
                if(state[row][col]==""){
                    valid = true;
                    state[r2][c2] = '';
                    state[row][col]  = elementFrom;
                    state[r1][c1]='';
   
                }
             }else if( s2 == ''){
               valid = true;
               state[r2][c2]  = elementFrom;
                state[r1][c1]='';
             }
           }

        }
        if(turn== 0){
            let r1 = parseInt(From[0]);
            let c1 = parseInt(From[1]);
            let r2 = parseInt(To[0]);
            let c2 = parseInt(To[1]);
            if(r2 == (r1)-1 && c2 == (c1)+1){
              if( s2 == '1'){
                 let row = r2-1;
                 let col = c2+1;
                 if(state[row][col]==""){
                     valid = true;
                     state[r2][c2] = '';
                     state[row][col]  = elementFrom;
                   state[r1][c1]='';
   
                 }
              }else if( s2 == ''){
                 valid = true;
                 state[r2][c2]  = elementFrom;
                 state[r1][c1]='';

              }
            }else if(r2 == (r1)-1 && c2 == (c1)-1){
             if( s2 == '1'){
                 let row = r2-1;
                 let col = c2-1;
                 let to = row.toString()+col.toString();
                 console.log(to)
                 if(state[row][col]==""){
                     valid = true;
                     state[r2][c2] = '';
                     state[row][col]  = elementFrom;
                   state[r1][c1]='';
   
                 }
              }else if( s2 == ''){
                 valid = true;
                 state[r2][c2]  = elementFrom;
                 state[r1][c1]='';

              }
            }
 
         }
         if(!valid){
            out.Valid = 'no';
            out.state2 = state;
         }
         else{
            out.Valid = 'yes';
            out.state2 = state;
         }
         return out;
    }
    Draw(state){
      let chars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      for(let i=0;i<8;i++){
         for(let j=0;j<8;j++){
            let id = (7 - i).toString().concat(chars[j]); 
            if(state[i][j] == '1'){
               
            document.getElementById(id).innerHTML = `<span style='height: 55px;width: 55px;margin-top: 15px;margin-left: 25px;margin-top: 25px;background-color: #0b0808;border-radius: 50%;border: 4px solid white ;display: inline-block'></span>`;
            }
            else if(state[i][j] == '0')
            document.getElementById(id).innerHTML = "<span style='height: 55px;width: 55px;margin-top: 15px; margin-left: 25px;margin-top: 25px;background-color: #cf2727;border-radius: 50%;border: 4px solid white; display: inline-block;'></span>";
            else 
            document.getElementById(id).innerHTML = '';
         }
      }
    }

}
const CheckerGame = new checker() ;


