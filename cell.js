// // Daniel Shiffman
// // http://codingtra.in
// // http://patreon.com/codingtrain
// // Part 1: https://youtu.be/aKYlikFAV4k
// // Part 2: https://youtu.be/EaZxUCWAjb0
// // Part 3: https://youtu.be/jwRT4PCT6RU

// //object to describe a spot in the grid

// function Spot(i, j, x, y, width, height, isWall, grid){
//     this.grid = grid;

//     //Location
//     this.i = i;
//     this.j = j;
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;

//      // values for A*
//     this.f = 0;
//     this.g = 0;
//     this.h = 0;
//     this.vh = 0; // visual heurisitic

//     this.neighbors = undefined;
//     this.neighboringWalls = undefined;

//     this.previous = undefined;

//     this.wall = isWall;

//     this.visited = false;

//     //Display me
//     this.show = function(color){
//         if (this.wall) {
//             fill(0);
//             noStroke();

//             if (drawingOption === 0) {
//                 ellipse(this.x + this.width*0.5,  this.y + this.width*0.5, this.width*0.5, this.height*0.5);
//             }else{
//                 rect(this.x, this.y, this.width, this.height);
//             }

//             stroke(0);
//             strokeWeight(this.width / 2);

//             var nWalls = this.getNeighboringWalls(this.grid);
//             for (var i = 0; i < nWalls.length; i++) {
//                 var nw = nWalls[i];

//                 if ((nw.i > this.i && nw.j == this.j ) ||
//                      (nw.i == this.i && nw.j > this.j)) {
//                      line(this.x + this.width / 2,
//                           this.y + this.height / 2,
//                           nw.x + nw.width / 2,
//                           nw.y + nw.height / 2);
//                 }

//                 if (!canPassThroughCorners && (nw.j > this.j) &&
//                     (nw.i < this.i || nw.i > this.i)) {
//                     line(this.x + this.width / 2,
//                          this.y + this.height /2,
//                          nw.x + nw.width / 2,
//                          nw.y + nw.height / 2);
//                 }
//             }
//         }else if (color) {
//             fill(color);
//             noStroke();
//             rect(this.x, this.y, this.width, this.height);
//         }
//     }


//     //get neigbors
//     this.getNeighbors = function(){
//         if (!this.neighbors) {
//             this.populateNeigbors();
//         }
//         return this.neighbors;
//     }


//     //maybe should be static
//     var LURDMoves = [
//         [-1, 0],
//         [0, -1],
//         [1, 0],
//         [0, 1]
//     ];

//     var DiagonalMoves = [
//         [-1, -1],
//         [1, -1],
//         [1, 1],
//         [-1, 1]
//     ];

//     var DiagonalBlockers =[
//         [0, 1],
//         [1, 2],
//         [2, 3],
//         [3, 0]
//     ];

//     // return 0 if request is out of the limit
//     this.getNode = function(i, j){
//         if (i < 0 || i >= this.grid.length ||
//             j < 0 || j >= this.grid[0].length) {
//             return null;
//         }
//         return this.grid[i][j];
//     }

//     //Populate neighbor move and neighbor wall arrays
//     this.populateNeigbors = function(){
//         this.neighbors = [];
//         this.neighboringWalls = [];

//         // Add left/Up/Right
//         for (var i = 0; i < 4; i++) {
//             var node = this.getNode(this.i + LURDMoves[i][0], this.j + LURDMoves[i][j]);
//             if (node != null) {
//                 if (!node.wall) {
//                    this.neighbors.push(node);
//                 }else{
//                     this.neighboringWalls.push(node);
//                 }
//             }
//         }
//           //Add Diagonals
//         for (var i = 0; i < 4; i++) {
//             var gridX = this.i + DiagonalMoves[i][0];
//             var gridY = this.j + DiagonalMoves[i][1];
    
//             var node = this.getNode(gridX, gridY);
    
//             if (node != null) {
//                 if (allowDaigonals && !node.wall) {
//                     if (!canPassThroughCorners) {
//                         // check if blocked by surrounding walls
//                         var border1 = DiagonalBlockers[i][0];
//                         var border2 = DiagonalBlockers[i][1];
    
    
//                         var blocker1 = this.grid[this.i + LURDMoves[border1][0]]
//                                                 [this.j + LURDMoves[border1][1]];
//                         var blocker2 = this.grid[this.i + LURDMoves[border2][0]]
//                                                 [this.j + LURDMoves[border2][1]]; 
                                                
//                         if (!blocker1.wall || !blocker2.wall) {
//                             this.neighbors.push(node);
//                         }
//                     }else{
//                         this.neighbors.push(node);
//                     }                           
//                 }
//                 if (node.wall) {
//                     this.neighboringWalls.push(node);
//                 }
//             }
//         }
//     }


    
// }




// function Cell(i, j){
    
//     // row no
//     this. i = i;

//     // col no
//     this.j = j;

//     this.x = this.j*spacing;
//     this.y = this.i*spacing;

//     //removing the walls and keeping track all the walls of the cell
//     this.left = true;
//     this.right = true;
//     this.top = true;
//     this.bottom = true;

//     //for generating the maze
//     this.visited = false;

//     //for solving the maze
//     this.explored = false;

//     this.g = 0;
//     this.f = 0;
//     this.h = 0;

//     this.previous = null;

//     this.show = function(){
//         stroke(0);
//         strokeWeight(2);
//         noFill();
//         if (this.left) {
//             line(this.x, this.y, this.x, this.y + spacing);
//         }
//         if (this.right) {
//             line(this.x + spacing, this.y, this.x + spacing, this.y + spacing);
//         }
//         if (this.top) {
//             line(this.x, this.y, this.x + spacing, this.y + spacing);
//         }
//         if (this.bottom) {
//             line(this.x, this.y + spacing, this.x + spacing, this.y + spacing);
//         }
//     }



//     //Neighbors
//     this.checkNeighbors = function(){
//         var neighbors = [];
//         if (this.i > 0) {
//             var top = grid[this.i - 1][this.j];
//         }
//         if (this.i < rows - 1) {
//             var bottom = grid[this.i + 1][this.j];
//         }
//         if (j > 0) {
//             var left = grid[this.i][this.j - 1];
//         }
//         if (j < rows - 1) {
//             var left = grid[this.i][this.j - 1];
//         }


//         if (top && !top.visited) {
//             neighbors.push(top);
//         }
        
//         if (bottom && !bottom.visited) {
//             neighbors.push(bottom);
//         }
        
//         if (left && !left.visited) {
//             neighbors.push(left);
//         }
        
//         if (this.right && !this.right.visited) {
//             neighbors.push(this.right);
//         }

        
//         if (neighbors.length > 0) {
//             var index = floor(random(0, neighbors.length));
//             return neighbors[index];
//         }else{
//             return undefined;
//         }
//     }


//     this.getTheNeighbors = function(){
//         var neigbors = [];

//         if (this.i > 0) {
//             var top = grid[this.i - 1][this.j];
//         }
//         if (this.i < rows - 1) {
//             var bottom = grid[this.i + 1][this.j];
//         }
//         if (this.j > 0) {
//             var left = grid[this.i][this.j - 1];
//         }
//         if (this.j < cols - 1) {
//             var right = grid[this.i ][this.j + 1];
//         }
        
//         if (top && !top.explored) {
//             neighbors.push(top);
//         }
        
//         if (bottom && !bottom.explored) {
//             neighbors.push(bottom);
//         }
        
//         if (left && !left.explored) {
//             neighbors.push(left);
//         }
        
//         if (this.right && !this.right.explored) {
//             neighbors.push(this.right);
//         }
//         if (neigbors.length > 0) {
//             neigbors.push(right);
//         }else{
//             return undefined;
//         }
//     }

//     this.hightlight = function(){
//         noStroke();
//         fill(255, 0, 0);
//         rect(this.x, this.y, spacing - 10, spacing - 10);
//     }
// }



// function Cell(i, j) {
//     // Row and column indices
//     this.i = i;
//     this.j = j;

//     this.x = this.j * spacing;
//     this.y = this.i * spacing;

//     // Wall states
//     this.left = true;
//     this.right = true;
//     this.top = true;
//     this.bottom = true;

//     // Maze generation
//     this.visited = false;

//     // Maze solving
//     this.explored = false;

//     this.g = 0;
//     this.f = 0;
//     this.h = 0;

//     this.previous = null;

//     // Display the cell
//     this.show = function () {
//         stroke(0);
//         strokeWeight(2);
//         noFill();
//         if (this.left) {
//             line(this.x, this.y, this.x, this.y + spacing); // Left wall
//         }
//         if (this.right) {
//             line(this.x + spacing, this.y, this.x + spacing, this.y + spacing); // Right wall
//         }
//         if (this.top) {
//             line(this.x, this.y, this.x + spacing, this.y); // Top wall
//         }
//         if (this.bottom) {
//             line(this.x, this.y + spacing, this.x + spacing, this.y + spacing); // Bottom wall
//         }
//     };

//     // Find unvisited neighbors for maze generation
//     this.checkNeighbors = function () {
//         var neighbors = [];
//         if (this.i > 0) {
//             var top = grid[this.i - 1][this.j];
//             if (top && !top.visited) neighbors.push(top);
//         }
//         if (this.i < rows - 1) {
//             var bottom = grid[this.i + 1][this.j];
//             if (bottom && !bottom.visited) neighbors.push(bottom);
//         }
//         if (this.j > 0) {
//             var left = grid[this.i][this.j - 1];
//             if (left && !left.visited) neighbors.push(left);
//         }
//         if (this.j < cols - 1) {
//             var right = grid[this.i][this.j + 1];
//             if (right && !right.visited) neighbors.push(right);
//         }

//         if (neighbors.length > 0) {
//             var index = floor(random(0, neighbors.length));
//             return neighbors[index];
//         } else {
//             return undefined;
//         }
//     };

//     // Find unexplored neighbors for A* pathfinding
//     this.getTheNeighbors = function () {
//         var neighbors = [];
//         if (this.i > 0) {
//             var top = grid[this.i - 1][this.j];
//             if (top && !top.explored) neighbors.push(top);
//         }
//         if (this.i < rows - 1) {
//             var bottom = grid[this.i + 1][this.j];
//             if (bottom && !bottom.explored) neighbors.push(bottom);
//         }
//         if (this.j > 0) {
//             var left = grid[this.i][this.j - 1];
//             if (left && !left.explored) neighbors.push(left);
//         }
//         if (this.j < cols - 1) {
//             var right = grid[this.i][this.j + 1];
//             if (right && !right.explored) neighbors.push(right);
//         }

//         return neighbors;
//     };

//     // Highlight the cell
//     this.hightlight = function () {
//         noStroke();
//         fill(255, 0, 0);
//         rect(this.x, this.y, spacing - 10, spacing - 10);
//     };
// }
