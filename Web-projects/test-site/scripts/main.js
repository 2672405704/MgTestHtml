let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc ==='images/haha.png'){
        myImage.setAttribute('src','images/mgeee.png');
    } else {
        myImage.setAttribute('src','images/haha.png');
    }
}

function multiply(num1,num2) {
    let  result = num1*num2;
    return result;
}


// document.querySelector('html').onclick=function () {
//  alert('别戳我，我怕疼');
// }
//等价于
// let myHTML = document.querySelector('html');
// myHTML.onclick = function () {
//     alert('别戳我，我怕疼');
// }
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了,'+name+'!';

}
function setUsername() {
    let myName = prompt('请输入您的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
}
let storedName = localStorage.getItem('name');
if (!storedName){
    setUsername();
}else {
    setHeading(storedName);
}
let mybutton = document.querySelector('button');
mybutton.onclick = setUsername();