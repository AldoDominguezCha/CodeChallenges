const getMaxArea = (height) => {

    let rightWallIndex = height.length - 1;
    let leftWallIndex, maxArea, currentArea;

    leftWallIndex = maxArea = currentArea = 0;

    let rightIsHigher = false;

    while(rightWallIndex > leftWallIndex) {
        
        rightIsHigher = height[rightWallIndex] > height[leftWallIndex];

        currentArea = (rightWallIndex - leftWallIndex) * 
            (rightIsHigher ? height[leftWallIndex] : height[rightWallIndex]);
        
        if (currentArea > maxArea)
            maxArea = currentArea;
        
        if (rightIsHigher) {
            leftWallIndex++;
        } else {
            rightWallIndex--;
        }
    }

    return maxArea;
};

console.log(getMaxArea([1,1]));