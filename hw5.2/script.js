let pedometer = {

    footStep : 0,
    increase : function(){
    this.footStep++
    return this;

    },
    decrease : function(){
    this.footStep--
    return this;

    },
    reset : function(){
    this.footStep = 0
    return this;
    },
    read : function(){
    console.log(`FootStep : ${this.footStep}`)
    return this;
    }
}
pedometer.decrease().increase().increase().read().reset().read()