var x = 100;

while (x <= 200) {
    (x % 3 === 0) ? ((x % 4 === 0) ? console.log("LoopyLighthouse") : console.log("Loopy")) : ((x % 4 === 0) ? console.log("Lighthouse") : console.log(x));
    x++;
}