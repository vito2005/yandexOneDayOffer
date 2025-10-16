/*
 Imagine that you're exploring a mysterious labyrinth in the shape of a rectangular matrix, which contains obstacles and teleports.
  Starting from the upper-left corner, your goal is to reach the lower-right corner by only moving to the right. 
  You are given integers n and m representing the dimensions of the labyrinth. You are also given obstacles and teleports, which are lists of the cells that contain all the obstacles and teleports, respectively. 
  Here are details about the labyrinth: An obstacle cannot be traversed - you must stop immediately if you reach a cell containing an obstacle. A teleport is a pair of cells (start, end). If you reach the start cell, you immediately move to the end cell. 
  Note that this doesn't work backwards: you cannot teleport from the end cell to the start cell. It is guaranteed that all teleports have unique start cells (i.e. each cell in the labyrinth has one teleport at most).
   It is guaranteed that the end cell for a teleport cannot be a start cell for another teleport. It is also guaranteed that both the start and end cells of a teleport do not contain obstacles.
    Any cell that doesn't contain an obstacle or a teleport is considered a free cell, and you can travel through it normally. You start at the upper-left corner cell with coordinates (0, 0), and the goal is to reach the exit located at the cell with coordinates (n - 1, m - 1). 
    You move according to the following rules: You will always move to the right: if you're currently on the cell with coordinates (row, col), you will try moving to the cell with coordinates (row, col + 1). 
    If you move to a cell that's the starting point of a teleport, proceed to the coordinates of the end cell. If you try to move to a cell that either contains an obstacle or is outside the bounds of the labyrinth, stop moving and stay where you are. 
    Your task is to check whether you can reach the goal (exit of the labyrinth) by following the algorithm above, and to return the total number of cells you travelled through to reach the exit. 
    Note that you should count all cells travelled, including the starting cell (0, 0), and both the start and end cells of all teleports.
     If it is not possible to reach the exit, return -1 if it's because of an obstacle or due to trying to go outside the bounds of the labyrinth, or -2 if it's because of teleportation (i.e., an infinite teleport loop). 
     It's guaranteed that the starting cell (0, 0) and the exit cell (n - 1, m - 1) do not contain an obstacle, or be the starting point of a teleport. Note: You are not expected to provide the most optimal solution, 
 but a solution with time complexity not worse than O(n · m · (obstacles.length + teleports.length) will fit within the execution time limit. Example For n = 3, m = 3, obstacles = [[2, 1]], and teleports = [[0, 1, 2, 0]], 
 the output should be solution(n, m, obstacles, teleports) = -1.
*/
