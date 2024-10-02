const obj = {name: 'Nico', age: 41, city: 'Moskow'};
const str = 'age'

function showOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

showOwnProperties(obj);


function checkProperty() {
    return (obj.hasOwnProperty(str));
}
console.log(checkProperty(str, obj))


const myObject = Object.create(null);
console.log(myObject);