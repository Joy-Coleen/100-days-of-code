/*
*** forEach example **
const someWords = ['I', 'Like', 'Cake']

console.log(someWords[0])

console.log(someWords[1])

console.log(someWords[2])

someWords.forEach(word => {
    console.log(word)
})
*/

//step 2 

/*original step 2*/
// let outerwrapper = document.getElementById('outerwrapper');

// menu.forEach(product => {

//     let productDescription = document.createElement('p');
//     productDescription.textContent = product.description;
//     outerwrapper.append(productDescription);

//     let productType = document.createElement('p');
//     productType.textContent = `${product.type}: $${product.price}`;
//     outerwrapper.append(productType);

//     let productImage = document.createElement('img');
//     productImage.src = product.IMGE;
//     productImage.alt = product.description;
//     /* Add Event Handler to image. 
//         -- Inside event handler, add this product to the shopping cart
//     */
//     outerwrapper.append(productImage);

// });

// function shoppingcart() {
//     let productCart = document.createElement('button');
//     outerwrapper.append(productCart);
// };
// shoppingcart();


// menu.forEach(shoppingcart => {

//     let selectProduct = document.createElement('select');
//     selectProduct.label = "Menu";
//     selectProduct.name = "drinks";t


// });


// document.body.appendChild(div);
//let ul = document.createElement("ul");
//outerwrapper.appendChild(ul);

// Function that add's elements to Outer Wrapper

/* producClickEventHanlder (e)
      --- Get Image from target
      --- Get title from Target 

      -- Create Div for Shopping Cart
      -- Use Image and Title to create shopping cart item.  

let li = document.createElement('li');
li.label = "menu";
li.name = "drinks";
let paragraph = document.createElement('p').textContent = menu.type;
paragraph.textContent = 
paragraph.textContent = "drinks";

outerwrapper.appendChild(paragraph);
/* <option value="coffeedrink">coffee</option> */
// li.id = "list4Drinks"
// li.option = menu.type;
// //li.value = menu.forEach(IMGE);
// //li.textContent = type;
// li.textContent = li.options;
// outerwrapper.appendChild(li);

// li = document.createElement('li');


/* First Class Function Example
    function myFunc(f) {
        f('pizza');
    }


    function funcParam(arg1) {
        console.log(arg1);
    }

    myFunc(funcParam);



    myFunc((word => {
        console.log(word)
    }))


    myFunc === (word => { console.log(word) })
*/

// Output: pizza



//copied text
// const menuMapper = (product) => {
// menu.forEach
// menu.forEach(menuMapper => {


//
//  <!-- <label for="drinks">Choose a drink:</label>
/* <select name="drinks" id="drinkMenu">
<option value="coffeedrink">coffee</option>
<option value="espressodrink">espresso</option>
<option value="oreofrappedrink">oreofrappe</option>
<option value="whitechocolatemochadrink">whitechocolatemochadrink</option>
<option value="teadrink">tea</option>
</select>
<br><br>
<input type="submit" value="Submit"
</form>  --> */

/*
<div id="shoppingCart">
        <div class="selected-item">
            <p> Title </p>
            <img src="/path/to/productimage" />
            <button>Remove </button>
        </div>
<div id="outerwrapper">
*/

// var images = document.querySelectorAll('#PICS img');
// var elem = document.getElementById("imageDescription");

// images.forEach(function(image) {
//   image.addEventListener('click', function() {
//     elem.innerHTML = image.getAttribute('alt');
//   });
// });



//li.textContent = 'About Us';

// select the ul menu element
//const productmenu = document.querySelector('#productmenu');
// outerwrapper.appendChild(li);


// menu.forEach(picture => {
// var images = document.querySelectorAll('IMGE img');
// //var elem = document.getElementById("imageDescription");

// images.forEach(function(picture) {
//   picture.addEventListener('click', function() {
//     elem.innerHTML = picture.getAttribute('type');
//   });
// });


/*
    <div id="outerwrapper">
        <div class="selected-item">
            <p> Title </p>
            <img src="/path/to/productimage" />
            <button>Remove </button>
        </div>
    <div id="outerwrapper">




*/



//https://www.javascripttutorial.net/javascript-dom/javascript-createelement/                 https://www.javascripttutorial.net/javascript-dom/javascript-createelement/