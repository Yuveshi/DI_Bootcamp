// Helper function: Convert HEX to RGB
function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16); // Remove the '#' and parse
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

// Helper function: Convert RGB to HEX
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Main function: Auto-detect format
function convertColorFormat(input) {
    // Check if the input is in HEX format
    if (input[0] === '#') {
        return hexToRgb(input);
    }
    
    // Check if the input is in RGB format
    if (input.startsWith('rgb')) {
        let rgbValues = input.match(/\d+/g).map(Number); // Extract the numeric RGB values
        return rgbToHex(rgbValues[0], rgbValues[1], rgbValues[2]);
    }
    
    return "Invalid format";
}

// Test cases
console.log(convertColorFormat("#FF5733")); 
// rgb(255, 87, 51)

console.log(convertColorFormat("rgb(255, 87, 51)")); 
// #FF5733
