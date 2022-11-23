const students = new Map([
    ["Ида", 37],
    ["Лена", 46],
    ["Артур", 70],
    ["Платон", 88],
])



function putMark(mark) {
    let x;
    if (mark < 60) x = "Незачёт";
    else if (mark < 70) x = 3;
    else if(mark < 90) x = 4;
    else if (mark < 100) x = 5;

    return x;
}

students.set("Ида", putMark(students.get("Ида")));
students.set("Лена", putMark(students.get("Лена")));
students.set("Артур", putMark(students.get("Артур")));
students.set("Платон", putMark(students.get("Платон")));