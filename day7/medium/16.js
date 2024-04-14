//Write a function which generates a randomMacAddress
function generateRandomMacAddress() {
    const hexChars = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 2; j++) {
            macAddress += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
        }
        if (i < 5) {
            macAddress += ":";
        }
    }
    return macAddress;
}

// Example usage:
const randomMacAddress = generateRandomMacAddress();
console.log("Random MAC Address:", randomMacAddress);
