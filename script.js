function fibonacci(num) {
    // your code here
        let currentV = 0 , nextV = 1, sum;
        for (let index = 0; index < num; index++) {
            sum = currentV + nextV;
            currentV = nextV;
            nextV = sum;
        }
        return (num === 0 ? currentV : nextV);
    }
    
    module.exports = fibonacci;
    