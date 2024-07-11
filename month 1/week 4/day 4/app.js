let isSimpleMode = true;

function change_color() {
    if (isSimpleMode) {
        const containerElement = document.querySelector(".colorChange");
        const currentColor = containerElement.style.backgroundColor;
        const containerText = document.querySelector("#color");

        if (currentColor === "coral") {
            containerElement.style.backgroundColor = "white";
            containerText.innerText = "#FFFFFF";
            
        } else { 
            containerElement.style.backgroundColor = "coral";
            containerText.innerText = "#FF7F50";
        }
    }
    else{
        const containerElement = document.querySelector(".colorChange");
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        containerElement.style.backgroundColor = newColor;

        const containerText = document.querySelector("#color");
        containerText.innerText = newColor;
    }
}

function toggleColorMode(e){
    let elementId = e.target.id;

    if(elementId == "simple"){
        isSimpleMode = true;
    }
    else{
        isSimpleMode = false;
    }
}
