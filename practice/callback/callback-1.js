function orderPizza(type, name, callback) {

  console.log(`${type} ${name} pizza is ordered`);

  setTimeout(() => {
    const pizza = `${type} ${name} pizza is ready`;
    callback(pizza);
  }, 3000);

}


function notify(message)  {
  console.log(message);
}




orderPizza('veg', 'Cheese Barbeque', notify);