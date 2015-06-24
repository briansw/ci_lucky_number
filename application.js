var App = {
  numbers : [],
  guesses : 0,
  lucky_number : null
};

$('.content').append(numbers);

function numbers() {
  var total_numbers  = Math.floor(Math.random() * 300),
      class_name, number;

  App.lucky_number = Math.floor(Math.random() * total_numbers);

  for (var i = 0; i < total_numbers; i++) {
    class_name = i == App.lucky_number ? 'lucky' : 'unlucky';
    number = '<div data-value="' + i + '" class="number ' + class_name + ' n' + i + '">' + i + '</span>';
    App.numbers.push(number);
  };

  return App.numbers;
}

function guess(number) {
  var value = $(number).data('value'),
      higher_lower, response;

  if (value == App.lucky_number) {
    alert('You win!');
    response = 'correct';
  } else {
    higher_lower = value < App.lucky_number ? 'Higher' : 'Lower';
    alert(higher_lower);
    response = 'incorrect';
  }

  $(number).addClass(response);
}

$('.number').click(function() {
  guess(this);
});