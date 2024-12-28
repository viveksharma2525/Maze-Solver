// // function removeFromArray(arr, elt){
// //   for (var i = arr.length - 1; i >= 0; i--) {
// //     if (arr[i] === elt) {
// //       arr.splice(i, 1);
// //     }
// //   }
// // }


// // function heuristic(a,b){
// //   // var d = dist(a.i,a.j,b.i,b.j);
// //   var d = abs(a.i-b.i) + abs(a.j - b.j)
// //   return d;
// // }



// // var cols = 25;
// // var rows = 25;
// // var grid = new Array(cols);
// // var w, h;
// // var path = [];
// // var openSet = [];
// // var closedSet = [];
// // var start;
// // var end;

// // function Spot(i, j) {
// //   this.i = i;
// //   this.j = j;
// //   this.f = 0;
// //   this.g = 0;
// //   this.h = 0;
// //   this.neighbors = [];
// //   this.previous = undefined;
// //   this.wall = false;

// //   if (random(1) < 0.1) {
// //     this.wall = true;
// //   }

// //   this.show = function(col = color(255)) {
// //     fill(col);
// //     if (this.wall) {
// //       fill(0);
// //     }
// //     noStroke(); // Light gray grid lines
// //     rect(this.i * w, this.j * h, w-1, h-1);
// //   };

// //   this.addNeighbors  = function(grid){
// //     var i = this.i;
// //     var j = this.j;
// //     if (i < cols - 1) {
// //       this.neighbors.push(grid[i + 1][j]);
// //     }
// //     if (i > 0) {
// //       this.neighbors.push(grid[i - 1][j]);
// //     }
// //     if (j < rows - 1) {
// //       this.neighbors.push(grid[i][j + 1]);
// //     }
// //     if (j > 0) {
// //       this.neighbors.push(grid[i][j - 1]);
// //     }
// //   }
// // }

// // function setup() {
// //   createCanvas(400, 400);
// //   console.log('A*');

// //   w = width / cols;
// //   h = height / rows;

// //   for (var i = 0; i < cols; i++) {
// //     grid[i] = new Array(rows);
// //   }

// //   for (var i = 0; i < cols; i++) {
// //     for (var j = 0; j < rows; j++) {
// //       grid[i][j] = new Spot(i, j);
// //     }
// //   }

// //   for (var i = 0; i < cols; i++) {
// //     for (var j = 0; j < rows; j++) {
// //       grid[i][j].addNeighbors(grid);
// //     }
// //   }

// //   start = grid[0][0];
// //   end = grid[cols - 1][rows - 1];

// //   openSet.push(start);

// //   console.log(grid);
// // }

// // // function draw() {
// // //   background(0);

// // //   if (openSet.length > 0) {
// // //     var winner = 0;
// // //     for (var i = 0; i < openSet.length; i++) {
// // //       if (openSet[i].f < openSet[winner].f) {
// // //         winner = i;
// // //       }
// // //     }

// // //     var current = openSet[winner];

// // //     if (current === end) {

// // //       // Find the path
// // //       path = [];
// // //       var temp = current;
// // //       path.push(temp);
// // //       while (temp.previous) {
// // //         path.push(temp.previous);
// // //         temp = temp.previous;
// // //       }
// // //       console.log("DONE!");
// // //     }

// // //     removeFromArray(openSet, current);
// // //     // openSet.remove(current);
// // //     closedSet.push(current);

// // //     var neighbors = current.neighbors;

// // //     for (var i = 0; i < neighbors.length; i++) {
// // //       var neighbor = neighbors[i];

// // //       if (!closedSet.includes(neighbor)) {
// // //         var tempG = current.g + 1;

// // //         if (openSet.includes(neighbor)) {
// // //           if (tempG < neighbor.g) {
// // //             neighbor.g = tempG;
// // //           }else{
// // //             neighbor.g = tempG;
// // //             openSet.push(neighbor);
// // //           }

// // //           neighbor.h = heuristic(neighbor,end);
// // //           neighbor.f = neighbor.g + neighbor.h;
// // //           neighbor.previous = current;
// // //         }
// // //       }
// // //     }

// // //     // we can keep going
// // //   } else {
// // //     // no solution
// // //   }

// // //   for (var i = 0; i < cols; i++) {
// // //     for (var j = 0; j < rows; j++) {
// // //       grid[i][j].show();
// // //     }
// // //   }

// // //   for (var i = 0; i < closedSet.length; i++) {
// // //     closedSet[i].show(color(255, 0, 0));
// // //   }

// // //   for (var i = 0; i < openSet.length; i++) {
// // //     openSet[i].show(color(0, 255, 0));
// // //   }

// // //   for (var i = 0; i < closedSet.length; i++) {
// // //     closedSet[i].show(color(255, 0, 0));
// // //   }

// // //   for (var i = 0; i < path.length; i++) {
// // //     path[i].show(color(0, 0, 255));
// // //   }

// // // }


// // function draw() {
// //   background(0);

// //   if (openSet.length > 0) {
// //     // Find the node with the lowest f value in the openSet
// //     var winner = 0;
// //     for (var i = 0; i < openSet.length; i++) {
// //       if (openSet[i].f < openSet[winner].f) {
// //         winner = i;
// //       }
// //     }

// //     var current = openSet[winner];

// //     // If the end node is reached
// //     if (current === end) {
      
// //       noLoop();
// //       console.log("DONE!");
// //     }

// //     removeFromArray(openSet, current);
// //     closedSet.push(current);

// //     // Process each neighbor
// //     var neighbors = current.neighbors;
// //     for (var i = 0; i < neighbors.length; i++) {
// //       var neighbor = neighbors[i];

// //       //Skip neighbior if it is a wall
// //       if (neighbor.wall || closedSet.includes(neighbor)) {
// //         continue;
// //       }

// //       var tempG = current.g + 1;

// //       // Check if neighbor is in openSet or needs better g value
// //       if (!openSet.includes(neighbor)) {
// //         openSet.push(neighbor);
// //       } else if (tempG >= neighbor.g) {
// //         continue; // Skip if this is not a better path
// //       }

// //       // Update neighbor values
// //       neighbor.g = tempG;
// //       neighbor.h = heuristic(neighbor, end);
// //       neighbor.f = neighbor.g + neighbor.h;
// //       neighbor.previous = current; // Update the path
// //     }
// //   } else {
// //     console.log("No solution");
// //     noLoop();
// //     return;
// //   }

// //   // Draw the grid and sets
// //   for (var i = 0; i < cols; i++) {
// //     for (var j = 0; j < rows; j++) {
// //       grid[i][j].show();
// //     }
// //   }

// //   // Closed set in red
// //   for (var i = 0; i < closedSet.length; i++) {
// //     closedSet[i].show(color(255, 0, 0));
// //   }

// //   // Open set in green
// //   for (var i = 0; i < openSet.length; i++) {
// //     openSet[i].show(color(0, 255, 0));
// //   }


// //   path = [];
// //   var temp = current;
// //   path.push(temp);
// //   while (temp.previous) {
// //     path.push(temp.previous);
// //     temp = temp.previous;
// //   }
// //   // Path in blue
// //   for (var i = 0; i < path.length; i++) {
// //     path[i].show(color(0, 0, 255));
// //   }
// // }



// function removeFromArray(arr, elt) {
//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === elt) {
//       arr.splice(i, 1);
//     }
//   }
// }

// function heuristic(a, b) {
//   // Use Diagonal distance (Chebyshev distance) for better optimization with diagonal movement
//   var d = max(abs(a.i - b.i), abs(a.j - b.j)); // Diagonal distance
//   return d;
// }

// var cols = 100;
// var rows = 100;
// var grid = new Array(cols);
// var w, h;
// var path = [];
// var openSet = [];
// var closedSet = new Set();  // Changed to Set for faster lookups
// var start;
// var end;
// var nosolution = false;

// function Spot(i, j) {
//   this.i = i;
//   this.j = j;
//   this.f = 0;
//   this.g = 0;
//   this.h = 0;
//   this.neighbors = [];
//   this.previous = undefined;
//   this.wall = false;

//   if (random(1) < 0.3) {
//     this.wall = true; // Randomly assign walls
//   }

//   this.show = function (col = color(255)) {
//     // fill(col);
//     if (this.wall) {
//       fill(0); 
//       noStroke();
//       ellipse(this.i * w + w/2, this.j*h + h/2, w/2, h/2); // Light grid lines
//     }
//   };

//   this.addNeighbors = function (grid) {
//     var i = this.i;
//     var j = this.j;
//     if (i < cols - 1) {
//       this.neighbors.push(grid[i + 1][j]);
//     }
//     if (i > 0) {
//       this.neighbors.push(grid[i - 1][j]);
//     }
//     if (j < rows - 1) {
//       this.neighbors.push(grid[i][j + 1]);
//     }
//     if (j > 0) {
//       this.neighbors.push(grid[i][j - 1]);
//     }
//     // Diagonal neighbors
//     if (i > 0 && j > 0) {
//       this.neighbors.push(grid[i - 1][j - 1]);
//     }
//     if (i < cols - 1 && j > 0) {
//       this.neighbors.push(grid[i + 1][j - 1]);
//     }
//     if (i > 0 && j < rows - 1) {
//       this.neighbors.push(grid[i - 1][j + 1]);
//     }
//     if (i < cols - 1 && j < rows - 1) {
//       this.neighbors.push(grid[i + 1][j + 1]);
//     }
//   };
// }

// function setup() {
//   createCanvas(400, 400);
//   console.log('A*');

//   w = width / cols;
//   h = height / rows;

//   for (var i = 0; i < cols; i++) {
//     grid[i] = new Array(rows);
//   }

//   for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {
//       grid[i][j] = new Spot(i, j);
//     }
//   }

//   for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {
//       grid[i][j].addNeighbors(grid);
//     }
//   }

//   start = grid[0][0];
//   end = grid[cols - 1][rows - 1];

//   // Ensure start and end are not walls
//   start.wall = false;
//   end.wall = false;

//   openSet.push(start);

//   console.log(grid);
// }

// function draw() {
//   background(255);

//   if (openSet.length > 0) {
//     // Sort openSet to find the node with the lowest f value (Priority Queue)
//     openSet.sort((a, b) => a.f - b.f);
//     var current = openSet[0];

//     // Check if we've reached the goal
//     if (current === end) {
//       console.log("Path found!");
//       noLoop();
//     }

//     removeFromArray(openSet, current);

//     // Only add non-wall nodes to closedSet
//     if (!current.wall) {
//       closedSet.add(current);  // Using Set instead of array
//     }

//     var neighbors = current.neighbors;
//     for (var i = 0; i < neighbors.length; i++) {
//       var neighbor = neighbors[i];

//       // Skip walls or already visited nodes
//       if (neighbor.wall || closedSet.has(neighbor)) continue;

//       var tempG = current.g + 1;
//       var newPath = false;

//       // Check if we need to update this neighbor
//       if (!openSet.includes(neighbor) || tempG < neighbor.g) {
//         neighbor.g = tempG;
//         neighbor.h = heuristic(neighbor, end);
//         neighbor.f = neighbor.g + neighbor.h;
//         neighbor.previous = current;

//         if (!openSet.includes(neighbor)) {
//           openSet.push(neighbor);
//         }
//       }
//     }
//   } else {
//     console.log("No solution");
//     noLoop();
//     return;
//   }

//   // Draw the grid
//   for (var i = 0; i < cols; i++) {
//     for (var j = 0; j < rows; j++) {
//       grid[i][j].show(color(255));
//     }
//   }

//   // Draw closedSet in red
//   for (var i = 0; i < closedSet.size; i++) {
//     // Array.from(closedSet)[i].show(color(255, 0, 0));
//   }

//   // Draw openSet in green
//   for (var i = 0; i < openSet.length; i++) {
//     // openSet[i].show(color(0, 255, 0));
//   }

//   // Reconstruct the path
//   path = [];
//   var temp = current;
//   path.push(temp);
//   while (temp.previous) {
//     path.push(temp.previous);
//     temp = temp.previous;
//   }
//   for (var i = 0; i < path.length; i++) {
//     // path[i].show(color(0, 0, 255)); // Blue for the path
//   }

//   noFill();
//   stroke(255, 0, 200);
//   beginShape();
//   strokeWeight(w/2);
//   for (var i = 0; i < path.length; i++) {
//     vertex(path[i].i*w + w/2, path[i].j*h + h/2);
//   }

//   endShape();




// }


// let xmlData;  // Variable to hold the loaded XML data
// let grid = [];
// let cols = 50;
// let rows = 50;
// let w, h;
// let openSet = [];
// let closedSet = new Set();
// let start;
// let end;
// let path = [];
// let nosolution = false;

// function preload() {
//   // Load the XML file from the data folder
//   xmlData = loadXML('data/openstreet.xml', () => {
//     console.log("XML loaded successfully");
//   }, (err) => {
//     console.error("Error loading XML:", err);
//   });
// }

// function setup() {
//   createCanvas(400, 400);
//   console.log('A* Algorithm with OpenStreetMap Integration');

//   w = width / cols;
//   h = height / rows;

//   for (let i = 0; i < cols; i++) {
//     grid[i] = new Array(rows);
//   }

//   // Initialize the grid and add random walls or map-specific obstacles
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       grid[i][j] = new Spot(i, j);
//     }
//   }

//   // Parse XML data and add obstacles (or walls) based on map data
//   if (xmlData) {
//     let relations = xmlData.getChildren('relation');
//     for (let i = 0; i < relations.length; i++) {
//       let relation = relations[i];
//       let name = relation.getChild('tag[k="name"]');
//       if (name && name.attribute('v') === 'Mumbai Suburban') {
//         // Assume you can mark specific areas as walls here based on the relation data
//         let node = relation.getChildren('member');
//         for (let j = 0; j < node.length; j++) {
//           let ref = node[j].attribute('ref');
//           // For demonstration purposes, mark certain areas as walls based on node reference
//           let x = int(ref % cols); // Use modulo to map the ref to grid coordinates
//           let y = int(ref % rows);
//           grid[x][y].wall = true;
//         }
//       }
//     }
//   }

//   // Set start and end positions (choose anywhere on the grid)
//   start = grid[0][0];
//   end = grid[cols - 1][rows - 1];

//   // Ensure start and end are not walls
//   start.wall = false;
//   end.wall = false;

//   openSet.push(start);

//   console.log(grid);
// }

// function draw() {
//   background(255);

//   if (openSet.length > 0) {
//     // Sort openSet to find the node with the lowest f value
//     openSet.sort((a, b) => a.f - b.f);
//     let current = openSet[0];

//     // If the goal is reached, stop the algorithm
//     if (current === end) {
//       console.log("Path found!");
//       noLoop();
//     }

//     removeFromArray(openSet, current);

//     if (!current.wall) {
//       closedSet.add(current); // Add to closedSet if not a wall
//     }

//     // Check neighbors
//     let neighbors = current.neighbors;
//     for (let i = 0; i < neighbors.length; i++) {
//       let neighbor = neighbors[i];
//       if (neighbor.wall || closedSet.has(neighbor)) continue;

//       let tempG = current.g + 1;
//       let newPath = false;

//       if (!openSet.includes(neighbor) || tempG < neighbor.g) {
//         neighbor.g = tempG;
//         neighbor.h = heuristic(neighbor, end);
//         neighbor.f = neighbor.g + neighbor.h;
//         neighbor.previous = current;

//         if (!openSet.includes(neighbor)) {
//           openSet.push(neighbor);
//         }
//       }
//     }
//   } else {
//     console.log("No solution");
//     noLoop();
//     return;
//   }

//   // Draw the grid and nodes
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       grid[i][j].show(color(255)); // Display the grid
//     }
//   }

//   // Reconstruct the path
//   path = [];
//   let temp = current;
//   path.push(temp);
//   while (temp.previous) {
//     path.push(temp.previous);
//     temp = temp.previous;
//   }

//   // Draw the path
//   for (let i = 0; i < path.length; i++) {
//     path[i].show(color(0, 0, 255)); // Blue for the path
//   }
// }

// function removeFromArray(arr, elt) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === elt) {
//       arr.splice(i, 1);
//     }
//   }
// }

// function heuristic(a, b) {
//   // Diagonal distance (Chebyshev distance) for optimization
//   var d = max(abs(a.i - b.i), abs(a.j - b.j));
//   return d;
// }

// function Spot(i, j) {
//   this.i = i;
//   this.j = j;
//   this.f = 0;
//   this.g = 0;
//   this.h = 0;
//   this.neighbors = [];
//   this.previous = undefined;
//   this.wall = false;

//   // Randomly assign some walls for testing
//   if (random(1) < 0.2) {
//     this.wall = true; // Randomly place some walls
//   }

//   this.show = function (col = color(255)) {
//     if (this.wall) {
//       fill(0); // Black for walls
//     } else {
//       fill(col); // White for free spaces
//     }
//     noStroke();
//     rect(this.i * w, this.j * h, w - 1, h - 1); // Grid cells
//   };

//   this.addNeighbors = function (grid) {
//     let i = this.i;
//     let j = this.j;
//     if (i < cols - 1) {
//       this.neighbors.push(grid[i + 1][j]);
//     }
//     if (i > 0) {
//       this.neighbors.push(grid[i - 1][j]);
//     }
//     if (j < rows - 1) {
//       this.neighbors.push(grid[i][j + 1]);
//     }
//     if (j > 0) {
//       this.neighbors.push(grid[i][j - 1]);
//     }
//     // Add diagonal neighbors for better pathfinding
//     if (i > 0 && j > 0) {
//       this.neighbors.push(grid[i - 1][j - 1]);
//     }
//     if (i < cols - 1 && j > 0) {
//       this.neighbors.push(grid[i + 1][j - 1]);
//     }
//     if (i > 0 && j < rows - 1) {
//       this.neighbors.push(grid[i - 1][j + 1]);
//     }
//     if (i < cols - 1 && j < rows - 1) {
//       this.neighbors.push(grid[i + 1][j + 1]);
//     }
//   };
// }




// var drawingOption = 0;

// var allowDaigonals = true;

// var canPassThroughCorners = false;

// var cols = 50;
// var rows = 50;

// //per. of cells that are walls
// var percentWalls = (allowDaigonals ? (canPassThroughCorners ? 0.4 : 0.3): 0.2);


// //Timer
// var t;
// var timings = {};

// function clearTimings(){
//   timings = {};
// }

// function startTime(){
//   t = millis();
// }

// function recordTime(n){
//   if (!timings[n]) {
//     timings[n] = {
//       sum : millis() - t,
//       count: 1
//     };
//   }else{
//     timings[n].sum = timings[n].sum + millis() - t;
//     timings[n].count = timings[n].count + 1;
//   }
// }

// function logTimings(){
//   for (var prop in timings) {
//     if (timings.hasOwnProperty(prop)) {
//       console.log(prop + "=" + (timings[prop].sum / timings[prop].count).toString() + "ms");
//     }
//   }
// }

// function SettingBox(label, x, y, isSet, callback){
//   this.label = label;
//   this.x = x;
//   this.y = y;
//   this.isSet = isSet;
//   this.callback = callback;

//   this.show = function(){
//     //nofill();
//     strokeWeight(1);
//     stroke(0);
//     text(label, this.x + 25, this.y + 15);
//   }

//   this.mouseClick = function(x, y){
//     if (x > this.x && x <= this.x + 20 &&
//       y> this.y && y <= this.y + 20) {
//       this.isSet = !this.isSet;
//       if (this.callback != null) {
//         this.callback(this);
//       }
//     }
//   }

//   // Set Button
//   function Button(label, x, y, w, h, callback){
//     this.label = label;
//     this.x = x;
//     this. y = y;
//     this.w = w;
//     this.h = h;
//     this.callback = callback;

//     this.show = function(){
//       stroke(0);
//       strokeWeight(1);
//       noFill();
//       rect(this.x, this.y, this.w, this.h);
//       fill(0);
//       noStroke();
//       text(this.label, this.x + 5, this.y + 5, this.w - 10, this.h - 10);
//     }

//     this.mouseClick = function(x, y){
//       if (this.callback != null &&
//         x > this.x && x <= this.x + this.w &&
//         y > this.y && y <= this.y + this.h) {
//         this.callback(this);
//       }
//     }
//   }

//    // Start and end
//   // start = grid[0][0];
//   // end = grid[cols - 1][rows - 1];
//   // start.wall = false;
//   // end.wall = false;


//   function step(button){
//     pauseUnpause(true);
//     stepsAllowed = 1;
//   }

//   function pauseUnpause(pause){
//     paused = pause;
//     runPauseButton.label = paused ? "run" : "pause";
//   }

//   function runpause(button){
//     pauseUnpause(!paused);
//   }

//   function restart(button){
//     logTimings();
//     clearTimings();
//     initialiseSearchExample(cols, rows);
//     pauseUnpause(true);
//   }

//   function toogleDaigonals(){
//     allowDaigonals = !allowDaigonals;
//   }

//   function mouseClicked(){
//     for(var i = 0; i < uiElements.length; i++){
//       uiElements[i].mouseClick(mouseX, mouseY);
//     }
//   }


//   function doGUI() {
//     for(var i = 0; i< uiElements.length; i++){
//       uiElements[i].show();
//     }
//   }


//   var gamemap;
//   var uiElements = [];
//   var paused = true;
//   var pathfinder;
//   var status = "";
//   var stepsAllowed = 0;
//   var runPauseButton;

//   function initialiseSearchExample(rows, cols){
//     mapGraphic = null;
//     gamemap = new MapFactory().getMap(cols, rows, 10, 10, 410, 410, allowDaigonals, percentWalls);
//     start = gamemap.grid[0][0];
//     end = gamemap.grid[ cols - 1][rows - 1];
//     start.wall = false;
//     end.wall = false;

//     pathfinder = new AStarPathFinder(gamemap, start, end, allowDaigonals);
//   }

//   function setup(){
//     startTime();

//     if (getURL().toLowerCase().indeexOf("fullscreen") === -1) {
//       createCanvas(600, 600);
//     }else{
//       var sz =min(windowWidth, windowHeight);
//       createCanvas(sz, sz);
//     }
//     console.log('A*');


//     initialiseSearchExample(cols, rows);

//     runPauseButton = new Button("run", 430, 20, 50, 30, runpause);
//     uiElements.push(runPauseButton);
//     uiElements.push(new Button("step", 430, 70, 50, 30, step));
//     uiElements.push(new Button("restart", 430, 120, 50, 30, restart));
//     uiElements.push(new SettingBox("AllowDiag", 430, 180, allowDaigonals, toogleDaigonals));

//     recordTime("Setup");
//   }

//   //Searching setup
//   function searchStep(){
//     if (!paused || stepsAllowed > 0) {
//       startTime();
//       var result = pathfinder.step();
//       recordTime("AStar Iteration");
//       stepsAllowed--;

//       switch (result) {
//         case -1:
//           status = "No Solution";
//           logTimings();
//           pauseUnpause(true);
//           break;
      
//           case 1:
//             status = "Goal reached";
//             logTimings();
//             pauseUnpause(true);
//             break;

//             case 0:
//               status = "Still Searching";
//               break;
//       }
//     }
//   }


//   //  Draw a MapGraphing
//   var mapGraphic = null;

//   function drawMap(){
//     if (mapGraphic == null) {
//       for(var i = 0; i < gamemap.cols; i++){
//         for(var j = 0; j < gamemap.rows; j++){
//           if (gamemap.grid[i][j].wall) {
//             gamemap.grid[i][j].show(color(255));
//           }
//         }
//       }
//       mapGraphic = get(gamemap.x, gamemap.y, gamemap.w, gamemap.h);
//     }
//     image(mapGraphic, gamemap.x, gamemap.y);
//   }


//   // Drawing a canvas 
//   function draw(){
//     searchStep();

//     // current state
//     background(255);

//     doGUI();

//     text("Search status -" + status, 10, 450);

//     startTime();

//     drawMap();

//     for(var i = 0; i < pathfinder.closedSet.length; i++){
//       pathfinder.closedSet[i].show(color(255, 0, 0, 50));
//     }

//     var infoNode = null;

//     for(var i = 0; i < pathfinder.openSet.length; i++){
//       var node = pathfinder.openSet[i];
//       node.show(color(0, 255, 0, 50));
//       if (mouseX > node.x && mouseX < node.x + node.width &&
//         mouseY > node.x && mouseY < node.y + node.height) {
//         infoNode = node;
//       }
//     }

//     recordTime(" Draw Grid");

//     fill(0);
//     if (infoNode != null) {
//       text("f = " + infoNode.f, 430, 230);
//         text("g = " + infoNode.g, 430, 250);
//         text("h = " + infoNode.h, 430, 270);
//         text("vh = " + infoNode.vh, 430, 290);
//     }

//     var path = calcPath(pathfinder.lastCheckedNode);
//     drawPath(path);
//   }


//   function calcPath(endNode){
//     startTime();

//     // finding the path by working
//     path = [];
//     var temp =  endNode;
//     path.push(temp);
//     while (temp.previous) {
//       path.push(temp.previous);
//       temp = temp.previous;
//     }
//     recordTime("Calc path");
//     return path;
//   }

//   function drawPath(path){
//     // Find the path by 
//     nofill();
//     stroke(255, 0, 200);
//     strokeWeight(gamemap.w / gamemap.cols / 2);
//     beginShape();
//     for(var i = 0; i < path.length; i++){
//       vertex(path[i].x + path[i].width / 2, path[i].y + path[i].height / 2);
//     }
//     endShape();
//   }
// }






// var spacing = 20
// var cols;
// var rows;
// var grid ;

// let solvedMaze = false;
// var openSet = [];
// var closedSet = [];  // Changed to Set for faster lookups
// var startCell;
// var endCell;

// //for gen the maze
// var stack = [];

// var current;

// var aStarPath = [];

// //for tracking the no of unvisited cells
// var unvisited;

// //gen the button
// var generate;

// var currentCell;

// var path = [];

// function removeFromArray(arr, cell) {
//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === cell) {
//       arr.splice(i, 1);
//     }
//   }
// }

// function heuristic(a, b) {
//   var distX = abs(a.j - b.j);
//   var distY = abs(a.i - b.i);
//   if (distX > distY) {
//     return 14*distY+10*(distY + distX);
//   }
//   return 14*distY+10*(distY - distX);
// }

// // function Spot(i, j) {
// //   this.i = i;
// //   this.j = j;
// //   this.f = 0;
// //   this.g = 0;
// //   this.h = 0;
// //   this.neighbors = [];
// //   this.previous = undefined;
// //   this.wall = false;

// //   if (random(1) < 0.3) {
// //     this.wall = true; // Randomly assign walls
// //   }

// //   this.show = function (col = color(255)) {
// //     // fill(col);
// //     if (this.wall) {
// //       fill(0); 
// //       noStroke();
// //       ellipse(this.i * w + w/2, this.j*h + h/2, w/2, h/2); // Light grid lines
// //     }
// //   };

// //   this.addNeighbors = function (grid) {
// //     var i = this.i;
// //     var j = this.j;
// //     if (i < cols - 1) {
// //       this.neighbors.push(grid[i + 1][j]);
// //     }
// //     if (i > 0) {
// //       this.neighbors.push(grid[i - 1][j]);
// //     }
// //     if (j < rows - 1) {
// //       this.neighbors.push(grid[i][j + 1]);
// //     }
// //     if (j > 0) {
// //       this.neighbors.push(grid[i][j - 1]);
// //     }
// //     // Diagonal neighbors
// //     if (i > 0 && j > 0) {
// //       this.neighbors.push(grid[i - 1][j - 1]);
// //     }
// //     if (i < cols - 1 && j > 0) {
// //       this.neighbors.push(grid[i + 1][j - 1]);
// //     }
// //     if (i > 0 && j < rows - 1) {
// //       this.neighbors.push(grid[i - 1][j + 1]);
// //     }
// //     if (i < cols - 1 && j < rows - 1) {
// //       this.neighbors.push(grid[i + 1][j + 1]);
// //     }
// //   };
// // }

// function setup() {
//   createCanvas(600, 600);
//   // console.log('A*');

//   //frameRate(10)

//   rows = floor(height/spacing);
//   cols = floor(width/spacing);

//   grid = new Array(rows);
//   generate = createButton("Generate Maze");
//   for(var i = 0; i < grid.length; i++){
//     grid[i] = new Array(cols);
//   }

//   generateTheMaze();
// }


// function draw() {
//   background(255);

//   if(openSet.length>0 && !solvedMaze) {
//     var lowestIndex=0;
//     for(var i=0;i<openSet.length;i++) {
//       if(openSet[i].f<openSet[lowestIndex].f) {
//         lowestIndex=i;
//       }
//     }
//     var currCell=openSet[lowestIndex];
//     if(currCell===endCell) {
//       console.log("Solved");
//       solvedMaze=true;
//     }
//     removeFromArray(openSet,currCell);
//     closedSet.push(currCell);
//     var neighbors=findTheCorrectNeighbors(currCell.getTheNeighbors(),currCell);

//     for(var i=0;i<neighbors.length;i++) {
//       var neighbor=neighbors[i];
//       if(!closedSet.includes(neighbor)) {
//         var tempG=currCell.g+1;
//         if(openSet.includes(neighbor)) {
//       //was temp better
//           if(tempG<neighbor.g) {
//             neighbor.g=tempG;
//           }
//         }else {
//           neighbor.g=tempG;
//           openSet.push(neighbor);
//         }
//         neighbor.h=heuristic(neighbor,endCell);
//         neighbor.f=neighbor.g+neighbor.h;
//         neighbor.previous=currCell;

//       }
//     }


//   }

//    //displays the maze
//    for(var i=0;i<rows;i++) {
//      for(var j=0;j<cols;j++) {
//        grid[i][j].show();
//      }
//   }

//    if(!solvedMaze) {
//    aStarPath=[];
//    var temp=currCell;
//    aStarPath.push(temp);
//    while(temp.previous!=null) {
//      aStarPath.push(temp.previous);
//      temp=temp.previous;
//    }
//   }
//    for(var i=0;i<aStarPath.length;i++) {
//      fill(0,0,255);
//      noStroke();

//      rect(4+aStarPath[i].x,4+aStarPath[i].y,spacing/2,spacing/2);
//    }

//   //generates the maze
//   generate.mousePressed(generateTheMaze);
//   //displays the path or the solution of the maze
//   for(var i=0;i<path.length;i++) {
//     fill(0,0,255);
//     noStroke();
//     rect(4+path[i].x,4+path[i].y,spacing/2,spacing/2);
//   }
  
// }


// function generateTheMaze(){
//   solvedMaze = false;

//   path = [];
//   aStartPath = [];
//   closedSet = [];
//   openSet = [];
//   for(var i = 0; i < rows; i++){
//     for(var j = 0; j < cols; j++){
//       grid[i][j] = new Cell(i,j);
//     }
//   }
//   current = grid[0][0];
//   currentCell = current;
//   grid[0][0].left = false;
//   grid[rows - 1][cols - 1].right = false;
//   unvisited = rows*cols - 1;
//   while (unvisited) {
//     var next = current.checkNeighbors();
//     if (next) {
//       stack.push(current);

//       //step 3
//       removeWalls(current,next);
//       current = next;
//       if (!current.visited) {
//         current.visited = true;
//         unvisited --;
//       }
//     }else if (stack.length > 0) {
//       var back = stack.pop();
//       current = back;
//     }
//   }
//   startCell = grid[0][0];
//   endCell = grid[rows - 1][cols - 1];
//   openSet.push(startCell);
// }


// //Removing the walls b/w curr and next cell
// function removeWalls(curr, next){
//   var i = curr.i - next.i;
//   var j = curr.j - next.j;
//   if (j === 1) {
//     curr.left = false;
//     next.right = false;
//   }else if (j === -1) {
//     curr.right = false;
//     next.left = false;
//   }
//   if (i === 1) {
//     curr.top = false;
//     next.bottom = false;
//   }else if (i === -1) {
//     curr.bottom = false;
//     next.top = false;
//   }
// }

// //for tracking the position of the curr cell
// function getTheSide(curr, next){
//   var i = curr.i - next.i;
//   var j = curr.j - next.j;
//   if (j == 1) {
//     return "left";
//   }else if (j == -1) {
//     return "right";
//   }
//   if (i == 1) {
//     return "above";
//   }else if (i == -1) {
//     return "below";
//   }
//   return "null";
// }

// //getting the correct neighbor from all neighbors
// function findTheCorrectNeighbor(neighbors,curr) {
//   var bestCell=undefined;
//   if(neighbors!=undefined) {
//   for(var i=0;i<neighbors.length;i++) {
//     var side=getTheSide(curr,neighbors[i]);
//     if(isCorrectPic(side,neighbors[i],curr)) {
//       bestCell=neighbors[i];
//       return bestCell;
//     }
//   }
// }
// }

// function findTheCorrectNeighbors(neighbors,curr) {
// var correctNeighbors=[];
// if(neighbors!=undefined) {
// for(var i=0;i<neighbors.length;i++) {
//   var side=getTheSide(curr,neighbors[i]);
//   if(isCorrectPic(side,neighbors[i],curr)) {
//     correctNeighbors.push(neighbors[i]);

//   }
// }
// }
// return correctNeighbors;
// }


// //checking if the choosen neighboring cell  is the correct one
// function isCorrectPic(side,neighbor,curr) {
// var correctPic=true;
// if(side==="right") {
//   if(neighbor.left  && curr.right) {
//     correctPic=false;
//   }
// }
// if(side==="left") {
//   if(neighbor.right && curr.left) {
//     correctPic=false;
//   }
// }
// if(side==="above") {
//   if(neighbor.bottom && curr.top ) {
//     correctPic=false;
//   }
// }
// if(side==="below") {
//   if(neighbor.top && curr.bottom) {
//     correctPic=false;
//   }
// }
// return correctPic;
// }

class Cell {
  constructor(pos) {
    this.pos = pos;
    // Whether there's a wall on the left/top side.
    this.left = this.top = false;
    this.visited = false;
    this.step = Infinity;
  }
  loc(dim = 1) {
    // Get 1D position
    if (dim === 1) return this.pos;
    // Get 2D position (x, y)
    if (dim === 2) return Cell.conv(this.pos);
    return null;
  }
  getNeighbors(hasWalls) {
    const [x, y] = this.loc(2);
    const neighbors = new Set;
    x > 0 && neighbors.add(Cell.at(x - 1, y));
    y > 0 && neighbors.add(Cell.at(x, y - 1));
    x < sizeMaze - 1 && neighbors.add(Cell.at(x + 1, y));
    y < sizeMaze - 1 && neighbors.add(Cell.at(x, y + 1));
    // Filter accessible neighbors when walls have been erected.
    if (hasWalls) {
      let n;
      !this.left && neighbors.delete(Cell.at(x - 1, y));
      !this.top  && neighbors.delete(Cell.at(x, y - 1));
      x < sizeMaze - 1 && !(n = Cell.at(x + 1, y)).left && neighbors.delete(n);
      y < sizeMaze - 1 && !(n = Cell.at(x, y + 1)).top  && neighbors.delete(n);
    }
    return [...neighbors].filter(cell => !cell.visited);
  }

  // Convert 1D position to 2D position and vice versa.
  static conv(arg1, arg2) {
    if (isNaN(arg2)) return [
      arg1 % sizeMaze,
      arg1 / sizeMaze | 0
    ];
    return arg2 * sizeMaze + arg1;
  }

  static at(arg1, arg2) {
    if (isNaN(arg2)) return maze[arg1];
    return maze[Cell.conv(arg1, arg2)];
  }

  static dist(cell1, cell2) {
    const [x1, y1] = cell1.loc(2);
    const [x2, y2] = cell2.loc(2);
    // 4-direction
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    // 8-direction
    // return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    // 360
    // return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }
}

const sizeMaze = 60;
const sizeRoom = 600;
const sizeCell = sizeRoom / sizeMaze;
const maze = Array(sizeMaze ** 2).fill().map((_, i) => new Cell(i));
let curr = maze[0];
curr.visited = true;

function setup() {
  createCanvas(sizeRoom, sizeRoom);
  frameRate(60);
}

function draw() {
  // Animate the maze generating process.
  if (!maze.start) {
    repeat(buildPath, 10);
    // Draw the exit when the map generation is completed.
    if (maze.exit) {
      noStroke();
      fill(255, 0, 0, 150);
      const [x, y] = maze.exit.loc(2);
      rect(x * sizeCell, y * sizeCell, sizeCell, sizeCell);
      return;
    }
    background(0);
    stroke(255);
    for (let i = 0; i < maze.length; i++) {
      const cell = maze[i];
      let [x, y] = cell.loc(2);
      x *= sizeCell;
      y *= sizeCell;
      x && !cell.left && line(x, y, x, y + sizeCell);
      y && !cell.top  && line(x, y, x + sizeCell, y);
    }
    return;
  }
  noStroke();
  // Animate the path finding algorithm.
  if (maze.exit) {
    fill(142, 68, 173, 100);
    repeat(() => {
      findPath();
      const [x, y] = curr.loc(2);
      if (!maze.exit) return false;
      rect(x * sizeCell, y * sizeCell, sizeCell, sizeCell);
    }, 10);
    return;
  }
  // If the path from exit to start has been drawn, quit.
  if (!retrievePath()) return;
  // Animate the drawing of the path from exit to start.
  const [x, y] = curr.loc(2);
  fill(243, 156, 18, 100);
  rect(x * sizeCell, y * sizeCell, sizeCell, sizeCell);
}

function repeat(func, times) {
  for (let i = 0; i < times; i++) {
    if (func() === false) return;
  }
};

function buildPath() {
  const neighbors = curr.getNeighbors();
  if (neighbors.length) {
    const chosen = random(neighbors);
    chosen.visited = true;
    const [x, y] = curr.loc(2);
    const [x2, y2] = chosen.loc(2);
    x2 === x - 1 && (curr.left   = true);
    x2 === x + 1 && (chosen.left = true);
    y2 === y - 1 && (curr.top    = true);
    y2 === y + 1 && (chosen.top  = true);
    curr = chosen;
    return;
  }
  // If all the neighbors of the current cell are visited, choose another cell on the board.
  // A better method is to go backward of the newly created path until there's a cell that has an unvisited neighbor.
  const remainingPaths = maze.filter(cell => (
    cell.visited &&
    cell.getNeighbors().length
  ));
  if (remainingPaths.length) {
    curr = random(remainingPaths);
    return;
  }
  // If the maze has been generated completely, choose a random exit and prepare for the path finding algorithm.
  const start = maze.start = maze[0];
  // const start = maze.start = random(maze.slice(1));
  const exit = maze.exit = random(maze.slice(1));
  maze.forEach(cell => (
    cell.visited = false,
    cell.dist = Cell.dist(start, exit)
  ));
  start.step = 0;
}

function findPath() {
  if (curr === maze.exit) { maze.exit = null; return }
  curr = maze.reduce((min, cell, score) => (
    score = cell.dist + cell.step,
    !cell.visited && score < min[0] && (
      min[0] = score,
      min[1] = cell
    ),
    min
  ), [Infinity, null])[1];
  curr.visited = true;
  const [x, y] = curr.loc(2);
  const neighbors = curr.getNeighbors(true);
  neighbors.forEach(cell => cell.step > curr.step + 1 && (
    cell.step = curr.step + 1,
    cell.parent = curr
  ));
}

function retrievePath() {
  if (curr === maze.start) return false;
  curr = curr.parent;
  return true;
}