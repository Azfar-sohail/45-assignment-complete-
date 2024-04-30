//Define Fucntion create a Car Object.

type car = {
    manufacture: string
    modle: string
    [key: string]: any,
    

}
function createCar(manufacture: string,modle:string, optional: Record<string, any>): car {
    return{
        manufacture,
        modle,
        ...optional
    }
}
const mycar: car = createCar("honda", "civic", {color: "white" , year:2024})
console.log(mycar)