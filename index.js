

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => dataDisplay(data));

function dataDisplay(data) {
    
    let divcontain = document.querySelector('.div');

    console.log(data)
    for (let index = 0; index < data.categories.length; index++) {
        const element = data.categories[index];
        console.log(element.strCategory);
        let div = document.createElement('div');
        div.className='div2'
        let h3 = document.createElement('h3');
        h3.innerText = element.strCategory;
        let p = document.createElement('p');
        p.innerText = element.strCategory;
        
        div.appendChild(h3);
        div.appendChild(p);
        divcontain.appendChild(div)
    }

}