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

// четвертая задача

answerArray = [];

let imgPrevMax = data[0];
for (let i = 1; i < data.length; i++) {
    let imgCurrentMax = data[i];
    if (imgCurrentMax.nice > imgPrevMax.nice) {
        imgPrevMax = imgCurrentMax;
    }
}
for (let i = 0; i < data.length; i++) {
    let imgCurrent = data[i];
    if (imgCurrent.nice == imgPrevMax.nice) {
        answerArray.push(imgCurrent);
    }
}
let imgPrevMin = data[0];
for (let i = 1; i < data.length; i++) {
    let imgCurrentMin = data[i];
    if (imgCurrentMin.nice < imgPrevMin.nice) {
        imgPrevMin = imgCurrentMin;
    }
}
for (let i = 0; i < data.length; i++) {
    let imgCurrent = data[i];
    if (imgCurrent.nice == imgPrevMin.nice) {
        answerArray.push(imgCurrent);
    }
}

for (let index = 0; index < answerArray.length; index++) {
    for (let i = 0; i < answerArray.length - 1 - index; i++) {
        let imgCurrent = answerArray[i];
        let imgNext = answerArray[i + 1];
        if (imgCurrent.porn > imgNext.porn) {
            answerArray[i] = imgNext;
            answerArray[i + 1] = imgCurrent;
        }
    }
}



draw(answerArray);









