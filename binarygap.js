function solution(N) {
    // Convert the integer N to binary representation
    let binary = N.toString(2);
    
    // Initialize variables to keep track of the longest binary gap and the current binary gap
    let longestGap = 0;
    let currentGap = 0;
    
    // Iterate through the binary representation of N
    for (let i = 0; i < binary.length; i++) {
        // If the current character is '1', it means we have found the end of a binary gap
        if (binary[i] === '1') {
            // Update the longest binary gap if the current binary gap is longer
            if (currentGap > longestGap) {
                longestGap = currentGap;
            }
            
            // Reset the current binary gap to 0
            currentGap = 0;
        } else {
            // If the current character is '0', it means we are in a binary gap
            // Increment the current binary gap by 1
            currentGap++;
        }
    }
    
    // Return the length of the longest binary gap
    return longestGap;
}