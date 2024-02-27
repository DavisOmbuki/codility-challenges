function solution(A, K) {
    // Edge case: if K is 0 or equal to the length of A, return A as is
    if (K === 0 || K === A.length) {
        return A;
    }

    // Create a new array to store the rotated elements
    let rotatedA = new Array(A.length);

    // Iterate over each element in A
    for (let i = 0; i < A.length; i++) {
        // Calculate the new index by adding K and using modulo to handle overflow
        let newIndex = (i + K) % A.length;

        // Assign the element at the current index to the new index in the rotated array
        rotatedA[newIndex] = A[i];
    }

    // Return the rotated array
    return rotatedA;
}