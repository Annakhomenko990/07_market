
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
 let itemsArray = ['Мотокоса 43',
 'Електричний тример 110',
 'Електрична газонокосарка 32',
 'Акумуляторний Обприскувач 12 N'
]

//Отримання елементу з ідентифікатором items


//Виведення в консоль масиву
// console.log(itemsArray)
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
        let divgoods = document.getElementById('items')
     
         divgoods.innerHTML += `<div class="item"><!-- Блок назва товару -->
          <div class="item-title">${item.title}</div>
         
          <!-- Блок зображення товару -->
          <div class="item-image">
          <img src="${item.photo}" alt="Електричний тример 110">
          </div>
          
          <!-- Блок з оплатою частинами -->
          <div class="parts-pay">
          <div><img src="img/lapka.png" alt="">6</div>
          <div><img src="img/Privat24_Logo.png" alt="">8</div>
          </div>
          
          <!-- Блок ціни -->
          <div class="price">
          <div>${item.standard_price}</div>
          <div>${item.discounted_price}</div>
          </div>
          
          <!-- Блок бонусної ціни -->
          <div class="price bonus">
          <div>Ціна за купоном</div>
          <div>${item.coupon_price}</div>
          </div>
          </div>
         `
  
    })
}

buildgoods()