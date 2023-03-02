/*Brick Volume
A brick manufacturer approached us to help him develop a program which calculates cost to manufacture
 bricks for him.
 Default dimensions of the block are length = 100 units, width = 60 units and height = 40 units. 
And to manufacture 1 cubic unit costs him 0.00005 rupees. Sometimes the customers might ask him to manufacture custom bricks. 
Customer can ask either to change width or height or both of them.

Now we have to take total bricks count and dimensions of the brick and return the cost to manufacture them.

First line contains bricks count.

Second line contains y z dimensions of brick, which are width and height.

y z can be any positive integer, if he chooses default values then he chooses -1 for that dimension.

Input
10

-1 50

First line N positive intger. Total number of bricks.

Here he choose width default value which is 60, and for height he choose 50

Output
Single line returning the cost. This will be integer rounded to the closest integer.

Example
Input:

10

-1 30

Output:

90

Length will always be 100. If first element is -1 then width is 60, if second element is -1 then height is 40.
 He can choose one of them as -1 or both of them.*/