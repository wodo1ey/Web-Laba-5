document.getElementById("form").onsubmit = function () {

    let side1 = +document.getElementById("side-1").value;
    let side2 = +document.getElementById("side-2").value;
    let side3 = +document.getElementById("side-3").value;

    if (side1 + side2 > side3) {
        if (side1 + side3 > side2) {
            if (side2 + side3 > side1) {
                let p = (side1 +side2 + side3) / 2;
                let S = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
                return alert("Такой треугольник сущетсвует" + '\n' + "Его площадь " + S);
            } else {
                return alert("Такого треугольника не существует" + '\n' + "Проверьте данные");
            }
        } else {
            return alert("Такого треугольника не существует" + '\n' + "Проверьте данные");
        }
    } else {
        return alert("Такого треугольника не существует" + '\n' + "Проверьте данные");
    }

}