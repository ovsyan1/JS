let users = [{
    name: 'name1', surname: 'surname1', age: 30
},
{
    name: 'name2', surname: 'surname2', age: 30
},
{
    name: 'name3', surname: 'surname3', age: 30
},
{
    name: 'name4', surname: 'surname4', age: 30
},
{
    name: 'name5', surname: 'surname5', age: 30
},
{
    name: 'name6', surname: 'surname6', age: 30
},
{
    name: 'name7', surname: 'surname7', age: 30
},
{
    name: 'name8', surname: 'surname8', age: 30
},
{
    name: 'name9', surname: 'surname9', age: 30
},
{
    name: 'name10', surname: 'surname10', age: 30
},
{
    name: 'name11', surname: 'surnam11', age: 30
},
{
    name: 'name12', surname: 'surname12', age: 30
},
{
    name: 'name13', surname: 'surname13', age: 30
},
];

let table = document.querySelector('#table')
let pagination = document.querySelector('#pagination')

let notesOnPage = 6;
let countOfItems = Math.ceil(users.length / notesOnPage);
/*--------создание динамической пагинации-----*/
let items = [];
for(let i = 1; i <= countOfItems;i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li)//в пустой массив закидываем все лишки
}
showPage(items[0])

for (let item of items) {
    item.addEventListener('click', function () {
        showPage(this);
    });      
}

function showPage(item){

    let active = document.querySelector('#pagination li.active');
    /*---если нашлась активная кнока тогда удали предыдущую---------*/
    if(active){
    active.classList.remove('active')
    };
    item.classList.add('active')//добавление класса для того чтобы оставался backgroundcolor после нажатия на страницу пагинации
    let pageNum = item.innerHTML;
    /*1 - 0 - 3
      2 - 3 - 6
      3 - 6 - 9
      4 - 9 - 12
      5 - 12
      6 - 15
      7 - 18
    */
    let start = (pageNum - 1) * notesOnPage
    let end = start + notesOnPage
    let notes = users.slice(start, end)
    table.innerHTML = '';
    for (let note of notes) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        createCell(note.name, tr);
        createCell(note.surname, tr);
        createCell(note.age, tr);
    }
}

function createCell(text, tr){
    let td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}