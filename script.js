var res = 20

var bomb_number = 10
var field = new Array(res);
var count = 0
var bomb_points = []

for(var i = 0; i < field.length; i++){
    var strip = new Array(res)
    for(var j = 0; j < res; j++){
        count += 1
        strip[j] = count
    }
    field[i]=strip
}


const makeBombs = (bomb_number) =>{
    
    for(var x = 0; x < bomb_number; x++){
        var rand_x = Math.floor(Math.random() * res)
        var rand_y = Math.floor(Math.random() * res)
        if(!bomb_points.includes(field[rand_x][rand_y])){
            bomb_points[x] = field[rand_x][rand_y]
        } else {
        x -= 1
        }
    }
} 



const makeBoard3 = () => {
    var horz_space = res;
    var vert_space = res;
    var number = 1
    for(var x = 0; x < res; x++ ){
        for(var y = 0; y < res; y++ ){
            var bloc = document.createElement("div");
            var bomb_count = 0;
            bloc.className = "bloc";
           
            for(var z = 0; z < bomb_number; z++){
    
                if(number === bomb_points[z]){
                    bloc.style.backgroundColor = 'red'
                }
                if(x === 0 && y === 0){ // Check for bombs from the top left corner
                    if(number+1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + (res + 1)=== bomb_points[z]){
                        bomb_count += 1
                    } else if (number + res === bomb_points[z]){
                        bomb_count += 1
                    }
                } else if(x === 0 && (y != 0 && y != res-1)){ // Check from outer top line, but not from either top corner
                    if(number-1 === bomb_points[z]){

                        bomb_count += 1
                    } else if (number + 1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + (res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + res === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + (res+1) === bomb_points[z]){
                        bomb_count += 1
                    }
                } else if(x === 0 && y === res-1){ // Check from top right corner 
                
                    if(number-1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + (res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + res === bomb_points[z]){
                        bomb_count += 1
                    }
                    
                } else if(y === res-1 && x != 0 && x != res-1){ // Check from right hand line, but not from either of it's corners
            
                    if(number-res === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - (res+1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - 1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + (res-1)=== bomb_points[z]){
                        bomb_count += 1
                    } else if (number + res=== bomb_points[z]){
                        bomb_count += 1
                    }
                } else if(x === res-1 && y === res-1){ // Check for bombs from bottom right corner
                 
                    if(number-1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - (res+1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - res === bomb_points[z]){
                        bomb_count += 1
                    }
                } else if(x === res-1 && (y != 0 && y != res-1)){ // Check from bottom line, but not from either of it's corners
                    
                    if(number-res === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - (res+1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - (res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + 1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - 1 === bomb_points[z]){
                        bomb_count += 1
                    }
                } else if(x === res-1 && y === 0){ // Check for bombs from bottom left corner
                    
                    if(number-res === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - (res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + 1 === bomb_points[z]){
                        bomb_count += 1
                    }
                } else if((x != 0 && x != res-1) && y === 0){ // Check from left outmost line, but not from either of it's corners
                    
                    if(number-res === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - (res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + 1 === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + (res+1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number + res === bomb_points[z]){
                        bomb_count += 1
                    }
                } else { // Check from the inner blocs
                    if(number-(res+1) === bomb_points[z]){
                        bomb_count += 1
                    } else if (number - res === bomb_points[z]){
                        bomb_count += 1
                    } else if(number-(res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if(number + 1 === bomb_points[z]){
                        bomb_count += 1
                    } else if(number + (res+1) === bomb_points[z]){
                        bomb_count += 1
                    } else if(number + res === bomb_points[z]){
                        bomb_count += 1
                    } else if(number + (res-1) === bomb_points[z]){
                        bomb_count += 1
                    } else if(number - 1 === bomb_points[z]){
                        bomb_count += 1
                    }  
                }
                
            }
            var bomb_count_plate = document.createElement('div')
            bomb_count_plate.innerHTML = bomb_count
            bomb_count_plate.className = 'bomb_count_plate'

            //bloc.innerHTML = number
            bloc.style.color = 'white'
            bloc.style.left = horz_space + 'px';
            bloc.style.top = vert_space + 'px'
            var canvas = document.getElementById('canvas');
            canvas.appendChild(bloc);
            bloc.appendChild(bomb_count_plate)
            horz_space += 21;
            number += 1;
        }
        horz_space = res
        vert_space += 21
    }
}

makeBombs(bomb_number)
makeBoard3()

/* const make2dArrayBoard = () =>{
    var horz_space = 10;
    var vert_space = 10;
    var number = 0
    for(var x = 0; x < field.length; x++){
        for(var y = 0; y < field.length; y++){
            var bloc = document.createElement("div");
    
            const space = new Space(number)
            number += 1
            var bomb_count = 0;
            bloc.className = "bloc";
            for(var i = 0; i < bomb_points.length; i++){
                if(bomb_points[i][0] === x && bomb_points[i][1] === y){
                    //console.log(bomb_points[i][0], " ", x, " ", bomb_points[i][1], " ", y )
                    
                    bloc.style.backgroundColor = 'red'
                    space.bomb = true
                } else if(bomb_points[i][0] != x && bomb_points[i][1] != y){
                    console.log(bomb_points[i][0], " ", x, " ", bomb_points[i][1], " ", y )
                    console.log('it\'s not a hit')
                    //bloc.style.backgroundColor = 'blue'
                } 
            }
            
            if(space.bomb === false){
                if(x === 0 && y === 0){
                    
                }
            }
        
            bloc.innerHTML = bomb_count
            bloc.style.color = 'white'
            bloc.style.left = horz_space + 'px';
            bloc.style.top = vert_space + 'px'
            var canvas = document.getElementById('canvas');
            canvas.appendChild(bloc);
            horz_space += 61;
            
        }
        horz_space = 10
        vert_space += 61
    }
} */


/* const makeBoard = () => {
    var horz_space = 10;
    var vert_space = 10;
    var number = 1
    for(var x = 0; x < 10; x++ ){
        for(var y = 0; y < 10; y++ ){
            var bloc = document.createElement("div");
            var bomb_count = 0;
            bloc.className = "bloc";
            //bloc.innerHTML = field[x][y];
    
             if(number === rand_point){
                bloc.style.backgroundColor = 'red'
            } 
            
            for(var z = 0; z < 5; z++){
    
                if(number === bomb_points[z]){
                    bloc.style.backgroundColor = 'red'
                }
    
                if(number-11 === bomb_points[z]){
                    bomb_count += 1
                } else if (number-10 === bomb_points[z]){
                    bomb_count += 1
                } else if(number-9 === bomb_points[z]){
                    bomb_count += 1
                } else if(number + 1 === bomb_points[z]){
                    bomb_count += 1
                } else if(number + 11 === bomb_points[z]){
                    bomb_count += 1
                } else if(number + 10 === bomb_points[z]){
                    bomb_count += 1
                } else if(number + 9 === bomb_points[z]){
                    bomb_count += 1
                } else if(number - 1 === bomb_points[z]){
                    bomb_count += 1
                }  
            }
    
            bloc.innerHTML = bomb_count
            //bloc.innerHTML = number
            bloc.style.color = 'white'
            bloc.style.left = horz_space + 'px';
            bloc.style.top = vert_space + 'px'
            var canvas = document.getElementById('canvas');
            canvas.appendChild(bloc);
            horz_space += 61;
            number += 1;
        }
        horz_space = 10
        vert_space += 61
    }
}
*/


/* makeBombs2()
make2dArrayBoard() */


/* const makeBombs2 = () =>{
    for(var x = 0; x < 5; x++){
        var rand_x = Math.floor(Math.random() * res)
        var rand_y = Math.floor(Math.random() * res)
        var coords = new Array(2);
        coords[0] = rand_x;
        coords[1] = rand_y;
        bomb_points.push(coords)
        
    }
} */

/* class Space {
    constructor(id) {
      this.id = id;
    } 
    bomb = false;
}
 */