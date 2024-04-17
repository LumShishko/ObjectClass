const BMW = {
    speed: 120 + " " + "km/h",
    manufacturer: "BMW",
    color: "white",
    model: "m5",
    accelerate: function(){
        console.log(120 + 10)
    },
    brake: function(){
        this.speed - 5,
        console.log(95 - 5)
    },
  

};

const Mercedes = {
    speed: 95 + "km/h",
    model: "Mercedes",
    color: "white",
    model: "a-class",
    accelerate: function(){
        console.log(120 + 10)
    },
    brake: function(){
        console.log(95 - 5)
    }

}

BMW.accelerate();
BMW.brake();


Mercedes.accelerate();
Mercedes.brake();




