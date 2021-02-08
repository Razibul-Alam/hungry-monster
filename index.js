

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => dataDisplay(data));

function dataDisplay(data) {
    let ul = document.getElementById('ul');
    //console.log(data)
    for (let index = 0; index < data.categories.length; index++) {
        const element = data.categories[index];
        console.log(element.strCategory)
        let li = document.createElement('li');
        li.innerText = element.strCategory;
        ul.appendChild(li);
    }

}