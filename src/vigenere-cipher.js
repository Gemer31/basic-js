const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    direct = true;
    allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    constructor(isDirect) {
        this.direct = isDirect !== false;
    }

    encrypt(message, key) {
        this.throwNoVarsError(message, key);

        let allKey = "";
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            if (keyIndex === key.length) {
                keyIndex = 0;
            }

            if (this.allChars.includes(message[i].toUpperCase())) {
                allKey += key.toUpperCase()[keyIndex];
                keyIndex++;
            } else {
                allKey += message[i];
            }
        }

        let encryptStr = "";
        for (let i = 0; i < message.length; i++) {
            if (this.allChars.includes(message[i].toUpperCase())) {
                const messageIndex = this.allChars.indexOf(message[i].toUpperCase());
                const keyIndex = this.allChars.indexOf(allKey[i].toUpperCase());
                encryptStr += this.allChars[(messageIndex + keyIndex) % 26];
            } else {
                encryptStr += message[i];
            }
        }

        return this.direct ? encryptStr : encryptStr.split("").reverse().join("");
    }

    decrypt(encryptedMessage, key) {
        this.throwNoVarsError(encryptedMessage, key);

        let allKey = "";
        let keyIndex = 0;

        for (let i = 0; i < encryptedMessage.length; i++) {
            if (keyIndex === key.length) {
                keyIndex = 0;
            }

            if (this.allChars.includes(encryptedMessage[i].toUpperCase())) {
                allKey += key.toUpperCase()[keyIndex];
                keyIndex++;
            } else {
                allKey += encryptedMessage[i];
            }
        }

        let decryptStr = "";
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (this.allChars.includes(encryptedMessage[i].toUpperCase())) {
                const messageIndex = this.allChars.indexOf(encryptedMessage[i].toUpperCase());
                const keyIndex = this.allChars.indexOf(allKey[i].toUpperCase());
                const charIndex = (messageIndex - keyIndex) % 26;

                decryptStr += this.allChars[charIndex < 0 ? (charIndex + 26) % 26 : charIndex];
            } else {
                decryptStr += encryptedMessage[i];
            }
        }

        return this.direct ? decryptStr : decryptStr.split("").reverse().join("");
    }

    throwNoVarsError(m, k) {
        if (m === undefined || k === undefined) {
            throw Error('Incorrect arguments!');
        }
    }
}

module.exports = {
    VigenereCipheringMachine
};
