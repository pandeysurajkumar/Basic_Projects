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