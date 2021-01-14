/*Joy Bradshaw 10/20/2020*/
//step 1 -- create an array of menu objects ✌
//step 2 -- add products to web page ✌
//step 3 -- set up shopping cart area
//step 4 -- build selectItem function so that when a product image is clicked,
// it is added to shopping cart
//step 5 -- add event listeners to images to run selectItem function
//step 6 -- build removeItem function so that when a selected image is clicked, it is removed from shopping cart
//step 7 -- set up total and shipping areas 1/13/2021
//step 8 -- build shippingCost function to add latest shipping choice
//step 9 -- add shipppingCost event listener

//step 1 -- create an array of menu objects ✌
let menu = [
  {
    id: 1,
    IMGE: "coffee.jpg",
    type: "A cup of coffee",
    description: "What you probably need to get through the day.",
    price: 3.05,
  },
  {
    id: 2,
    IMGE: "espresso.jpg",
    type: "One shot of Espresso",
    description:
      "It'll give you that extra kick... For your own safety tho, we're limiting you to 3 a day, because yes, it's that strong.",
    price: 3.59,
  },
  {
    id: 3,
    IMGE: "oreo-frappe.jpg",
    type: "Oreo Frappe",
    description:
      "If you like oreo flavored things, this cup was made especially for you.",
    price: 5.35,
  },
  {
    id: 4,
    IMGE: "whiteChocolateMocha.jpg",
    type: "White Chocolate Mocha",
    description: "And we don't hold back on the chocolate or whipped cream!!",
    price: 5.0,
  },
  {
    id: 5,
    IMGE: "nerveTea.jpg",
    type: "Ginger Lemon Honey Lavender Tea",
    description: "Our own special concoction of tea, good for relaxation.",
    price: 3.59,
  },
];

//global variable
let total = 0;
//step 2 -- add products to web page ✌
const menuMapper = (product) => {
  let productDescription = document.createElement("p");
  productDescription.textContent = product.description;
  outerwrapper.append(productDescription);

  let productType = document.createElement("p");
  productType.textContent = `${product.type}: $${product.price}`;
  outerwrapper.append(productType);

  let productImage = document.createElement("img");
  productImage.src = product.IMGE;
  productImage.alt = product.description;
  // productImage.id = `ShoppingCartImage${product.id}`;
  //step 5 -- add event listeners to images to run selectItem function
  productImage.addEventListener("click", (event) => {
    let div = document.createElement("div");

    //div.innerHTML = `${product.type}`;

    let shoppingCartProductImage = document.createElement("img");
    shoppingCartProductImage.src = product.IMGE;
    div.append(shoppingCartProductImage);

    outerwrapper.appendChild(div);

    let productTotal = document.createElement("h2");
    console.log(productTotal);
    total = product.price + total;
    productTotal.textContent = `Product Total: $${total}`;

    outerwrapper.append(productTotal);
//paragraph for .type
    let productType = document.createElement("p");
    productType.textContent = `${product.type}`;
    console.log(productType);
   // product.type += total;
    //productTotal.textContent = `Product Total: $${total}`;

    outerwrapper.append(productType);
    //button element to attach to each shopping cart item
    let createButton = document.createElement("button");
    createButton.textContent = `remove`;
    createButton.addEventListener("click", (event) => {
     product.price -= total;
      shoppingCartProductImage.remove();
      productDescription.remove();
      productTotal.remove();
      //product.type.remove();
      //productImage.remove();
      productType.remove();
      createButton.remove();

    //productTotal.textContent = `Product Total: $${total}`;// make this seperate from each image so total 
    //always shows at bottom of shopping cart.


      
      //shoppingCartProductImage.remove();
  
    

      // Remove remaing Items:
      // Remove Text (p tag containg title on line 74)
      // Remove Remove button
      //BONUS:
      
      // Add other information from Product objects, and set them to be removed on the remove button.
    });
    outerwrapper.appendChild(createButton);
  });

  outerwrapper.append(productImage);
  
  // step 7: set up total and shipping areas

  //
  /* producClickEventHandler (e)
          --- Get Image from target
          --- Get title from Target 
    
          -- Create Div for Shopping Cart
          -- Use Image and Title to create shopping cart item. 
          */
};

menu.forEach(menuMapper);

//to make drop down list

function dropDownList() {
  // -- Create Shopping Cart Item
  //console.log('I was clicked');
  let delivery = document.createElement("delivery");
  //delivery.id = 'companyDeliveryName';
  //delivery.className = 'drinks';
  // delivery.innerHTML = `<select name="drinks" id="drinkMenu">
  //                         <option value="UpliftCoffee">UpliftCoffee</option>
  //                         <option value="johnnys">johnnys</option>
  //                         <option value="dailywire">dailycoffee</option>
  //                         <option value="coriander">tea</option>
  //                      </select>
  //                      <input type="submit" value="Submit">`;
  delivery.innerHTML = `<label for="drinks">Shipping:</label>
        <select name="drinkShipping" id="menuShipping">
          <option value="USPS">USPS: free</option>
          <option value="UPS">UPS: $5:00</option>
          <option value="Ebay">Ebay: $20</option>
          <option value="Amazon">Amazon: $4</option>
          <option value="FEDEX">FEDEX: $600</option>
        </select>
        <br><br>
        <input type="submit" value="Submit" ${onclick="myFunction()"}>`;
        //<button onclick="myFunction()">Click me</button>
        //<input type="submit" value="Submit">
//Instead I would create the <button> directly with createElement() and then add it to DOM with appendChild()

  // <img src="${product.IMGE}" />`;
  //`<select name="people" id="people">${options}</select>`;
  //'<option value="' + person.id + '">'
  //        <input type="submit" value="Submit">
  let usps = 0;
  let ups = 5;
  let ebay = 20;
  let amazon = 4;
  let value = 600;
  outerwrapper.appendChild(delivery);

  if (delivery === "USPS") {
    productTotal.textContent = `Product Total: $${total + usps}`;
  } else if (delivery === "UPS"){
    productTotal.textContent = `Product Total: $${total + ups}`;

  }
  else if (delivery === "Ebay"){
    productTotal.textContent = `Product Total: $${total + ebay}`;

  }
  else if (delivery === "Amazon"){
    productTotal.textContent = `Product Total: $${total + amazon}`;

  }
  else if (delivery === "FEDEX"){
    productTotal.textContent = `Product Total: $${total + value}`;

  }
  //add onclick event so that if one of these shipping options is selected,
  // the the total (    productTotal.textContent = `Product Total: $${total + value}`;)
//will shop up when the submit button is clicked 1/13/2021
  //outerwrapper.append(productImage);

  // HINTS:
  // Look at onChange event (although the click event might work)
  // Look at how to retrieve values from select elements
  // Remember our global total variable.
}
dropDownList();

//https://stackoverflow.com/questions/21325576/how-to-remove-added-item-in-cart
