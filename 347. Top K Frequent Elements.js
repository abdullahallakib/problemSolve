function topKFrequent(nums, k) {
    const freqMap = new Map();

    // Step 1: Count frequency of each number
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Convert map to array and sort by frequency
    const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    // Step 3: Get top k elements
    return sorted.slice(0, k).map(entry => entry[0]);
}