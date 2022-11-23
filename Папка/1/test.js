function getDateMy() {
    let day = new Date();
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    switch (day.getDay()){
        case 0: day = "Воскресенье";
            break;
        case 1: day = "Понедельник";
            break;
        case 2: day = "Вторник";
            break;
        case 3: day = "Среда";
            break;
        case 4: day = "Четверг";
            break;
        case 5: day = "Пятница";
            break;
        case 6: day = "Суббота";
            break;
    }
    let today = console.log("Сегодня: " + day + '\n' + "Текущее время: " + hour + " : " + minute + " : " + second)
    return today;
}

getDateMy()