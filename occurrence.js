function solution(A) {
    let result = 0; // Initialize the result variable to store the unpaired element
    for (let i = 0; i < A.length; i++) { // Iterate through the array
        result ^= A[i]; // Use XOR operation to find the unpaired element
        
    }
    return result; // Return the unpaired element
}

// Test
const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A)); // Output should be 7
