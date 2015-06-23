### Lucky Number X

In this game, the application randomly chooses a sample size of numbers. Within the sample, a number at random will be deemed the lucky number and assigned the class ```lucky```.

Your goal is to find the lucky number programmatically with as few guesses as possible. Each guess will return one of two results: 

- You win!
- The lucky number is ```higher``` or ```lower``` than the value you guessed

### Assignment

Write a function that consistently finds the lucky number with the least number of guesses.

#### Anatomy

```html
<div data-value="32" class="number n32">32</div>
```

Each number is wrapped in a ```div``` that contains the data attribute ```value``` which stores the numeric value of the number. Remember, ```'32'``` is different from ```32```.

#### Classes

Each number has two classes when the application initializes. This first is ```number``` which can be used to identify all of the available numbers on the page. The second class is unique to each number and can be used to identify a specific number on the page. The naming of the unique class follows a simple pattern: the number prefixed with the letter "n". For example, number 32&rsquo;s unique class will be ```n32```. You&rsquo;ll need to make use of both of these classes when writing your algorithm to find the lucky number.

#### Guessing

Use the ```guess()``` function to make a guess:

```javascript
guess(number);
```

The ```guess()``` function accepts one argument which is the name of the unique class for a given number. For example, if you want to guess 32, write ```guess('.n32');```.