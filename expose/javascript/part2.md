# part2
q1:   
- 3 because as the length of the input array is length of 3, and var is accessible anywhere in the function so it can be accessed even out of the for loop
q2:  
- 150; because the discounted price is also a var, and can be accessed out side of block, as long as they are in the same function.
q3:
- 150: because the var is accessible within the function, so final price is able to access discountedPrice and do the math to it to get a value same as discounted price.

q4: 
- [ 50, 100, 150 ]; because each time the program get a finalPrice, it will be pushed into the price array and recourded. 

q5:
- error, because let can only be accessed within the block, so that let i can not be accessed outside of the for loop.

q6:
- error, because let discountedPrice is also defined within the for loop, thus, it can not be accessed anywhere outside the loop. 

q7:
- 150, Because let finalPrice is definded in the function. It then can be accessed and modified in the for loop inside this function. the function looped 3 times and get the 1/2 of 300, which is 150

q8:
- [ 50, 100, 150 ]; because each time the program get a finalPrice, it will be pushed into the price array and recourded. the array is defined in the function scope, so it can be accessed and modified within the function.

q9:
- error, the same reason as question 5, const i can not be accessed out side the for loop block

q10:
- 3, because const is defined within the function, and it was set as the length of the input array, which is 3.

q11:
- [ 50, 100, 150 ], because the array is defined in the fuction, while the discountedPrice is assigned each time the for loop excuted. thus, the correct helfed price can be successfully pushed into the array.and be returned with in the function(block) it was created.  

q12:  
- A. student.name
- B. student["Grad Year"]
- C. student.greeting()
- D. student["Favorite Teacher"].name
- E. student.courseLoad[0]

q13:
- A: 32, because 2 was maped to a string
- B: 1, because 3 is converted to a number(- can not be applied to the string.)
- C: 3, because null was converted to the number 0
- D: 3null, because null was mapped to the string 'null'
- E: 4, because true was converted to the number 1
- F: 0, because false and null both been transfered to number.
- G: 3undefined, because undefined was converted to the type string.
- H: NaN, because undefined can not be converted to a number.

q14: 
- A: true, because '2' was converted to 2 during the compairson.
- B: false,  because 2 and 12 were both converted to numbers.
- C: true, because '2' was mapped to 2 during the compairson.
- D: false, because '2' and 2 are not the same data type.
- E: false, because true was pammed to 1, but 1!=2, so it returns true.
- F: true, because 2 was converted to an bollean befor the compairson. And 2 would be maped to 2 as a bollean.

q15:
- == would only compair the value, while ===compairs value and data type.

q16: in the folder.

q17: 
- [2,4,6], because we call modifyArray first and passin in arrey[1,2,3], then we entered the for loop, in each loop we call dosometiong function in the number index i in the passed in array, and push it to the newArr. by the end the newArr would store each element in the original array element doubled.

Q18: in the folder.

q19: 1,4,3,2 because 1,4 excuted with no delay, 3 with a delay of 0, and 2 with delay of 1000;
