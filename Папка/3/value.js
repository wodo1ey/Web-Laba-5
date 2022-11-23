let value = +prompt("Введите число");


let arr = [];
let sum = 0;
for (let i = 1; i < value; i++) {
    if (value % i === 0)
        arr.push(i);
}

for (let i = 0; i < arr.length; i++) {
    sum+= arr[i];
}

if (sum == value) {
    alert("Совершенное число")
} else {
    alert("Число несовершенное")
}