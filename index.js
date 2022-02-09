let title = "Title"; // moje da se promenq
console.log(title);
const age = 1;
console.log(title);

const ip_address = "192.168.0.1/255.255.255.0"; // const ne se promenq
console.log(ip_address);

let array = [
    title,
    ip_address,
    true


]
console.log(array.length)

let object = {
    title: "Borat",
    ip_address: "192.168.0.11/255.255.255.0"
}
console.log(object)

for(let i = 0; i <array.length; i++){
    console.log(array[i]);
}

for (let element of array){
    console.log(element);
}

let i = 0;
while (i < array.length){
    console.log(array[i]);
    i++;
}

function func(){
    console.log("Executed the function")
}
func();

const secondFunc = () => { //anonimna funkciq/arrow function/lambda funkciq
    console.log("Executed the function")
}

secondFunc();