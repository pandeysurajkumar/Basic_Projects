# Project related to DOM


## project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    });
});

```

## Project 2
```javascript
const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault() // prevent the form from submitting
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <=0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`
    }
    else if(weight === '' || weight <=0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        //show the credit
        let category = '';
        let color = '';
        if(bmi < 18.5){
            catogry = `Under Weight`;
            color = `red`;
        }
        else if(bmi > 18.5 && bmi < 24.9){
            catogry = `Normal Weight`;
            color = `green`;
        }
        else{
            catogry = `Over Weight`;
            color = `red`;
        }
            results.innerHTML = `<span>Your BMI is ${bmi}</span><br><span style="color: ${color}">Category: ${catogry}</span>`;
    }
    
});

```

## Project 3
```javascript
const clock = document.getElementById("clock")

setInterval(function(){
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.style.color = "black";
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```