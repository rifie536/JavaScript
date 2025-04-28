function omikuji (year) {
    const box = ["大吉", "中吉", "吉", "小吉", "凶", "大凶"];
    let index = Math.floor(Math.random() * 6);
    let result = box[index];
    console.log(`${year}年の運勢は…${result}です！`);
}

for (let i = 2025; i < 2125; i++) {
    omikuji();
}