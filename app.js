const outputField = document.querySelector('#resultMessage');
const noMessagesDiv = document.querySelector('.no-messages');
const resultDiv = document.querySelector('.result');
const copyButton = document.querySelector('#copy-last');
const encryptButton = document.querySelector('.encrypt');
const decryptButton = document.querySelector('.decrypt');
const inputField = document.querySelector('#inputText');

//display change for content
function checkMessages() {
    if (outputField.textContent === '') {
        noMessagesDiv.style.display = 'block';
        resultDiv.style.display = 'none';
        copyButton.style.display = 'none';
      } else {
        noMessagesDiv.style.display = 'none';
        resultDiv.style.display = 'block';
        copyButton.style.display = 'block';
      }
}

// Encryption function
function encrypt(word) {
    const replacements = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
    
    return word.split('').map(char => replacements[char] || char).join('');
}
  
  // Decryption function
function decrypt(word) {
    const replacements = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
    
    return word.split(/(enter|imes|ai|ober|ufat)/).map(part => replacements[part] || part).join('');
}

function copiar(){
    const textToCopy = outputField.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('El texto ha sido copiado en el portapapeles');
        })
        .catch((error) => {
            console.log('Hubo un error al intentar copiar el texto: ' + error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    checkMessages();
});

encryptButton.addEventListener('click', () => {
    outputField.textContent = encrypt(inputField.value);
    checkMessages();
});
  
decryptButton.addEventListener('click', () => {
    outputField.textContent = decrypt(inputField.value);
    checkMessages();
});

copyButton.addEventListener('click', () => {
    copiar();
    checkMessages();
});

