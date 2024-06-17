const robot = require("robotjs");

// Function to type an emoji using RobotJS
function typeEmoji(emojiUnicode) {
    // Convert emoji Unicode to a hexadecimal string
    const hexString = emojiUnicode.replace(/\+/g, "");
    const hexCode = parseInt(hexString, 16);

    // Convert hexadecimal code to a UTF-16 character
    const emojiCharacter = String.fromCodePoint(hexCode);

    // Type the emoji character using RobotJS
    robot.typeString(emojiCharacter);
}

// Example usage: Type a smiling face emoji 😊
typeEmoji("1F60A");






