/*Using the JavaScript language, have the function SimpleAdding(num) 
add up all the numbers from 1 to num. For example: if the input 
is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number 
from 1 to 1000. 

Sample Test Cases
Input:12
Output:78

Input:140
Output:9870 */


SimpleAdding(12)

function SimpleAdding(num){
let result = 0
for(let i=num;i>0;i--){
    result = result + i
}
return result
}