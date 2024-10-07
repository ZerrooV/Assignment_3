// MUHAMMAD VEKA SYAHPUTRA

function isArithmeticProgression(numbers) {
    if (numbers.length <= 1) return true;  

    let diff = numbers[1] - numbers[0]; 

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] !== diff) {
            return false;
        }
    }
    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5]));    
console.log(isArithmeticProgression([1, 2, 4, 6, 12, 24]));  
console.log(isArithmeticProgression([2, 4, 6, 8]));        
console.log(isArithmeticProgression([2, 4, 8, 16, 54]));    
console.log(isArithmeticProgression([1, 3, 5, 7, 9]));     
console.log(isArithmeticProgression([2, 4, 6, 9]));         
