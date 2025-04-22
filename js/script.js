
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js')

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Вивід знайденого елементу
    //console.log(itemsDiv)

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')

}
//Визначення масиву товарів
let itemsArray = ['','','','']

//Виведення в консоль масиву
console.log(itemsArray)
//Отримання даних з JSON-файлу
async function getObjectsFromFile(file) {
    try{
        const response = await fetch(file);
        if (!response.ok){
            throw new Error('HTTP помилка! статус: ${response.status}');
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error('Помилка Fetching JSON:', error);
    } finally{
        console.log('Fetch завершено!');
    }
    
}
async function buildgoods() {
    const arrayOfgoods = await getObjectsFromFile ('js/market.JSON')
    console.log(arrayOfgoods)

    if (!arrayOfgoods) {
        console.error('ВІдсутні дані у JSON-файлі!');
        return;
    }

    arrayOfgoods.forEach((item, index) => {
        //console.log("елемент №, index, item")
        let divgoods = document.createElement('div')
        divgoods.classList.add('goods')
        divgoods.innerHTML =
  
    })
}