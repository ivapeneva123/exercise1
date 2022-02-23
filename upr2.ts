// let title = "Titanic"
// let movie_title: string = "Titanic 2 2022"
// let age: number = 22
// let bool: boolean = true
//
// console.log(movie_title,age,bool)
//
// let array: number[] = [10,20,30]
//
// type User = {
//     id: number,
//     first_name: string,
//     last_name: string,
//     is_active: boolean
// }
// type UserId = number;
// type UserFirstName = string;
// type UserLastName = string;
// type UserActivity = boolean;
//
// let user: User = {
//     id: 1,
//     first_name: "Ivan",
//     last_name: "Ivanov",
//     is_active: true,
//
//
// }
//
// //let object: object = {title: "test"};
// enum CAR_TYPE {
//     SEDAN = "sedan",
//     COMBI = "combi",
//     HATCHBACK = "hatchback"
// }
//
// class Car {
//     protected type: CAR_TYPE;
//     constructor(){
//         this.type = CAR_TYPE.SEDAN;
//     }
//
//     setType(type: CAR_TYPE){
//         this.type = type
//     }
//     getType(){
//         return this.type;
//     }
//
// }
// enum FERRARI_COLOR {
//     RED = "red",
//     YELLOW = "yellow",
//     GREEN = "green"
// }
// class ferrari extends Car {
//     private color: FERRARI_COLOR;
//     constructor(){
//         super();
//         this.color = FERRARI_COLOR.RED;
//     }
//     setColor(color: FERRARI_COLOR){
//         this.color = color;
//     }
//     getColor(){
//         return this.color;
//     }
// }
// const ferrari = new Ferrari();
// ferrari.setType(CAR_TYPE.SEDAN);
// ferrari.setType(FERRARI_COLOR.PINK);
// console.log(ferrari.getType())
//
//
//
// const car = new Car();
// car.setType(CAR_TYPE.HATCHBACK)
// console.log(car.getType())
///////////////////////////////////////////////23-02-2022////////////////////////////////
//Изпълнява се последователно/синхронно

(async () => {
    console.log(1)
    console.log(2)
console.log(await waitTwoSeconds())
   
    console.log(4)
})

console.log(3)
console.log(4)
