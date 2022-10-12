let otvet = 0;

//первая задача
for (let index = 0; index < 10; index++) {
    let addToOtvet = index + 1;
    otvet = otvet + addToOtvet;
    console.log(addToOtvet + ' -> ' + otvet);
}
console.log(otvet);


//вторая задача
for (let row = 0; row < 5; row++) {
    let str = '';
    let minDayIndex = row * 7;
    let maxDayIndex = (row + 1) * 7;
    if (maxDayIndex > 31) {
        maxDayIndex = 31;
    }
    for (let dayIndex = minDayIndex; dayIndex < maxDayIndex; dayIndex++) {
        let addionalSpace = '';
        if (dayIndex < 9) {
            addionalSpace = ' ';
        }

        str = str + "   " + addionalSpace + (dayIndex + 1);
    }
    console.log(str);
}





// третья задача

let answerArray = [];

for (let i = 0; i < data.length; i++) {
    const img = data[i];
    if (img.porn < img.nice) {
        answerArray.push(img);
    }
}
draw(answerArray);










