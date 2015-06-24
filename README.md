# Lucky Number X

In this game, the application randomly determines a sample size of numbers. Within the sample, a number is assigned the lucky number.

Your job is to find the lucky number programmatically using as few guesses as possible. Each guess will return one of three results: 

- ```higher``` The lucky number is higher than your guess
- ```lower``` The lucky number is lower than your guess
- ```win``` You guessed the lucky number

### Assignment

Write a function that consistently finds the lucky number with the least number of guesses.

#### Anatomy

```html
<div data-value="32" class="number n32">32</div>
```

Each number is wrapped in a ```div``` that contains the data attribute ```value``` which stores the numeric value of the number. Remember, ```"32"``` is different from ```32```.

#### Classes

Each number has two classes when the application initializes: 

- ```number```
- ```n[X]```

The ```number``` class can be used to identify all of the available numbers on the page. 

The second class, ```n[X]``` is unique to each number and can be used to identify a specific number on the page. The naming of the unique class follows a simple pattern: the number prefixed with the letter "n". For example, number 32&rsquo;s unique class will be ```n32```. 

HINT: You&rsquo;ll need to make use of both of these classes when writing your algorithm to find the lucky number.

#### Guessing

Use the ```guess()``` function to make a guess:

```javascript
guess(number);
```

The ```guess()``` function accepts one argument which is the name of the unique class for a given number. For example, if you want to guess 32, write ```guess('.n32');```.