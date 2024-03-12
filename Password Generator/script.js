const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
};

// selectors
const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");



const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }

    if(password.length < totalChar.value){
        return generatePassword(password)
    }

    passBox.innerHTML = truncateString(password, totalChar.value)

};

generatePassword();

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

document.querySelector("#btn").addEventListener("click", () => {
    generatePassword();
    
});
generatePassword();