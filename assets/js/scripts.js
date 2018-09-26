function Drink(drink, coffeehouse, thumbnail) {
  this.drink = drink;
  this.coffeeHouse = coffeeHouse;
  this.thumbnail = thumbnail;
}

$(document).ready(function() {
  $("#submissionForm").submit(function(event) {
    alert("Your submission has been added!");

    let drink = $("#DrinkInputValue").val();
    let coffeeHouse = $("#CoffeeHouseInputValue").val();
    $("#DrinkName").text(drink);
    $("#CoffeeHouse").text(coffeeHouse);

    event.preventDefault();
  });
});
