const myList=document.getElementById("myList");//parent element
//create array to append
const fruitList=['Banana','Orange','Apple','Mango','Lemon'];
//izminuvanje na listata
for(let fruit of fruitList){
    //kreirame li item za sekoj element od array-ot
    let newListItem=document.createElement('li');
    newListItem.textContent=fruit;
    myList.appendChild(newListItem);
}
const pineapple=document.createElement('li');
const banana=document.getElementById('banana');
pineapple.textContent='Pineapples';
myList.insertBefore(pineapple,banana);