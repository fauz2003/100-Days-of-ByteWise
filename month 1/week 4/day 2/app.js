function addOption(){
    var optName = prompt('Enter Option Name')
    
    const container = document.querySelector('.container');
    const opt = document.createElement('div');
    const h = document.createElement('h2');

    opt.classList.add('option');
    h.innerText = optName;
    opt.appendChild(h);
    container.appendChild(opt);

}

function removeOption(){
    var optNum = prompt('Enter Option Number(Starting from 0)');

    const container = document.querySelector('.container');
    const childList = container.children;
    childList[optNum].remove();
}

function styleOption(){
    const optNum = prompt('Enter Option Number(Starting from 0)');
    const optColor = prompt('Enter Option Color');

    const container = document.querySelector('.container');
    const childList = container.children;
    childList[optNum].style.backgroundColor = optColor;
}

function modifyOption(){
    const optNum = prompt('Enter Option Number(Starting from 0)');
    const optName = prompt('Enter Option Name');

    const container = document.querySelector('.container');
    const childList = container.children;
    childList[optNum].firstChild.nextSibling.innerText = optName;
}

const container = document.querySelector('.mod');

container.addEventListener("click", modifyOption);
