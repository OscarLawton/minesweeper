var res = 10

var field = new Array(res);
var count = 0

for(var i = 0; i < field.length; i++){
    var strip = new Array(res)
    for(var j = 0; j < 10; j++){
        count += 1
        strip[j] = count
    }
    field[i]=strip
}

var bomb_points = []

for(var x = 0; x < 5; x++){
    var rand_x = Math.floor(Math.random() * 10)
    var rand_y = Math.floor(Math.random() * 10)
    if(!bomb_points.includes(field[rand_x][rand_y])){
        bomb_points[x] = field[rand_x][rand_y]
    } else {
        x -= 1
    }
}


var horz_space = 10;
var vert_space = 10;
var number = 1

const makeBoard = () => {
    for(var x = 0; x < 10; x++ ){
        for(var y = 0; y < 10; y++ ){
            var bloc = document.createElement("div");
            var bomb_count = 0;
            bloc.className = "bloc";
            //bloc.innerHTML = field[x][y];
    
            /* if(number === rand_point){
                bloc.style.backgroundColor = 'red'
            } */
            
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

const make2dArrayBoard = () =>{
    for(var x = 0; x < field.length; x++){
        for(var y = 0; y < field.length; y++){
            console.log(field[x][y])
            var bloc = document.createElement("div");
            var bomb_count = 0;
            bloc.className = "bloc";
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
    console.log('it did run')
}

//makeBoard()

make2dArrayBoard()



    