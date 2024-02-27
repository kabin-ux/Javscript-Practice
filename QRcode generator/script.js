let imgBox = document.querySelector("#img-box");
let qrImage = document.querySelector("#qr-img");
let qrText = document.querySelector("#qr-text");

const generateQr = () => {
    if(qrText.value.length > 0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + qrText.value;
        imgBox.classList.add("show-img");
        console.log("GG");

    }else{
        qrText.classList.add("error");
        setTimeout(() => {qrText.classList.remove("error")}, 1000)
    }
};