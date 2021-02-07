
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=>res.json())
.then(data=>dataDisplay(data));

function dataDisplay(data){
data.categories.forEach(element => {
    console.log(element.strCategory)
})
}