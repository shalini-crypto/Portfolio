import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height =''
    weight =''
    bmiValue =''
    result =''
    inputHandler(event){
        const{name, value} = event.target

        if(name === "height"){
            this.height = value
        }if(name === "weight"){
            this.weight = value
        }
    }

    submitHandler(event){
        event.preventDefault()
        console.log("height", this.height)
        console.log("weight", this.weight)
        this.calculate()
    }

    calculate(){
        // BMI = weight in KG /(height in m * height in m)
        let height = Number(this.height)/100
        let bmi = Number(this.weight) / (height*height);
        console.log("BMI : ", bmi)
        this.bmiValue = Number(bmi.toFixed(2))

        if (this.bmiValue < 18.5) {
            this.result = "Underweight"
        } else if( this.bmiValue >= 18.5 && this.bmiValue <=24.9){
            this.result = "Healthy"
        } else if(this.bmiValue > 24.9 && this.bmiValue <=29.9 ){
            this.result = "Overweight"
        }else{
            this.result = "Obese"
        }
    }

    recalculate(){
        this.height = ''
        this.weight = ''
        this.bmiValue = ''
        this.result = ''
       

    }
}

