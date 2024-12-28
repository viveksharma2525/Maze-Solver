
# Recursive Maze Generator with A* Solver

## Description

This project implements a **recursive maze generator** and an **A* pathfinding algorithm** to create and solve mazes. The maze is generated randomly using a recursive backtracking algorithm, and the A* algorithm is used to find the shortest path between a start and end point in the maze. The project is built using **p5.js** for visualization and **JavaScript** for algorithm implementation.

The purpose of this project is to provide an interactive, visual representation of how mazes are generated and solved using these two techniques, and to deepen understanding of both algorithms.

## Features

- **Recursive Maze Generation**: A maze is generated using a recursive backtracking algorithm, creating a random but solvable maze.
- **A* Pathfinding**: The A* algorithm is used to find the shortest path from the start point to the end point within the maze.
- **Interactive Visualization**: Both the maze generation and the pathfinding process are visualized in real-time.
- **Adjustable Maze Size**: Users can change the size of the maze and see the updated results instantly.
- **Performance Optimization**: The algorithm's performance is optimized for real-time visualization, with adjustable speeds.

## Installation

### Prerequisites

- Ensure you have the latest version of **Node.js** installed.
- Clone this repository to your local machine.

### Steps to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/recursive-maze-a-star.git
   cd recursive-maze-a-star
   ```

2. **Install Dependencies**:

   You can run the project by simply opening the HTML file in your browser. However, for local development and testing, you may want to install dependencies using **npm**:

   ```bash
   npm install
   ```

3. **Run the Project**:

   Start the project by running:

   ```bash
   npm start
   ```

   The project will now be available in your browser at `http://localhost:3000`.

4. **Open the Project in the Browser**:

   Simply open `index.html` in a browser to start using the application.

## Usage

1. **Generate a New Maze**:  
   Click the **"Generate Maze"** button to create a new random maze.

2. **Solve the Maze**:  
   Click the **"Solve Maze"** button to initiate the A* pathfinding algorithm, which will find and display the shortest path.

3. **Adjust Maze Size**:  
   You can adjust the maze's dimensions by modifying the grid size. Larger grids may take longer to generate and solve.

4. **Speed Controls**:  
   You can adjust the speed of the visualization to suit your preferences.

5. **Clear the Maze**:  
   Click the **"Clear Maze"** button to reset the maze and start over.

## Algorithms

### Recursive Backtracking (Maze Generation)

The maze is generated using a **recursive backtracking** algorithm, which involves:

1. Starting at a random cell.
2. Moving to a neighboring cell that has not been visited yet.
3. Recursively repeating the process until the maze is fully generated.

This algorithm ensures that the maze is solvable and guarantees a single solution path.

### A* Algorithm (Pathfinding)

The **A* algorithm** is used to find the shortest path from the start point to the end point within the maze. A* works by:

1. Calculating the cost to move to each neighboring cell using a heuristic function (e.g., Manhattan distance).
2. Expanding the most promising cell based on the total cost (g + h), where `g` is the cost from the start and `h` is the estimated cost to the end.
3. Continuing this process until the end point is reached.

A* is efficient because it balances between greedy and Dijkstra’s approach by considering both the current cost and the estimated cost.

## File Structure

```
/recursive-maze-a-star
├── /assets
│   └── (images, icons, etc.)
├── /src
│   ├── maze.js         # Maze generation and management
│   ├── astar.js        # A* algorithm implementation
│   ├── sketch.js       # p5.js visualization setup
│   └── utils.js        # Utility functions
├── index.html          # HTML entry point
├── style.css           # Styling
└── README.md           # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [p5.js](https://p5js.org/) for easy-to-use, flexible JavaScript library for creative coding.
- [The Coding Train](https://www.youtube.com/c/TheCodingTrain) for inspiration and educational content on algorithms and visualization.
