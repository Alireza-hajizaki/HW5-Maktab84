const uesr = {}
const nameSetter = setterGenerator("name")
nameSetter("Jack")
console.log(uesr) // {name: ‘jack’}

function setterGenerator(inputKey){
    return function(inputValue){
        function test(){
            console.log(inputKey)
            console.log(inputValue)
            this[inputKey] = inputValue
            
            console.log(this[inputKey])
        }
        return test.call(uesr)
    }
}