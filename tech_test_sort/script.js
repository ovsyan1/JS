const inputName = document.querySelector('#name');
const addButton = document.querySelector('#add-button');
const sortNameButton = document.querySelector('#sort-name-button');
const sortValueButton = document.querySelector('#sort-value-button');
const showXMLButton = document.querySelector('#show-xml-button');
let outPut = document.querySelector('#out');
const deleteButton = document.querySelector('#delete-button');
let arr = [];
let id = 0;
let check = false;


function takePair(str){
    const item = str.split('=');
    const name = item[0].trim();
    const value = item[1].trim();
     //arr.push({name: name, value: value, id: id})
     arr.push({name, value, id})
    id++;
    console.log(arr)
}

function checkValid(str){
    return str.match(/^\w+\s*=\s*\w+$/i) !== null;
}

function addValidValue(){
    let input = inputName.value;
    if(check){
        if(checkValid(input)){
            outPut.innerHTML = '';

            arr.forEach(item => {
                
                console.log(item.name)
                console.log(item.value)
                outPut.innerHTML += `${item.name}=${item.value} <br>`;
            })
            takePair(input)
        }
    }
    if(checkValid(input)){
        inputName.value = '';
        outPut.innerHTML += `${input} <br>`;
        takePair(input);
        
    }else{
        inputName.value = '';
        console.log('wrong')
    } 
}

function nameSorting(){
    arr = arr.sort((a, b) => {
        if(a.name > b.name) return 1
        if(a.name < b.name) return -1
        
    })
    outPut.innerHTML = '';
    arr.forEach(item => {
        outPut.innerHTML += `${item.name}=${item.value} <br>`
    })
    
    console.log(arr)
}
function valueSorting(){
    arr = arr.sort((a, b) => {
        if(a.value > b.value) return 1
        if(a.value < b.value) return -1
    });
    outPut.innerHTML = '';
    arr.forEach(item => {
        outPut.innerHTML += `${item.name}=${item.value} <br>`
    })
}
function deleteInfo(){
    arr = [];
    outPut.innerHTML = '';
}
function showXMLTxt(){
    outPut.innerHTML = '&#060;?xml version="1.0" encoding="UTF-8"?><br>&#060;page><br>';

    arr.forEach(item => {
        outPut.innerHTML = outPut.innerHTML + 
            '&emsp;&emsp;&#060;pair>' + `${item.name}` + '&#060;/pair><br>' +
            '&emsp;&emsp;&#060;name>' + `${item.value}` + '&#060;/name><br>';
    })
    outPut.innerHTML = outPut.innerHTML + '&#060;/page>';
    check = true;
}

addButton.addEventListener('click', addValidValue);
sortNameButton.addEventListener('click', nameSorting);
sortValueButton.addEventListener('click', valueSorting);
deleteButton.addEventListener('click', deleteInfo);
showXMLButton.addEventListener('click', showXMLTxt);