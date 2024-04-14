//Write a function which generates a randomUserIp.
function generateRandomUserIp() {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    const num4 = Math.floor(Math.random() * 256);
    return `${num1}.${num2}.${num3}.${num4}`;
}

const randomUserIp = generateRandomUserIp();
console.log("Random user IP:", randomUserIp);
