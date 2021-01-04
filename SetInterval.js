setInterval(print, 1000);
let c = 0;
function print() {
    if (c == 0) console.log("Halo !");
    if (c == 1) console.log("Saya sedang belajar di Purwadhika");
    if (c == 2) console.log("Hari ini kita belajar tentang Function");
    if (c == 3) console.log("Wish me luck !\n");

    c++;

    if (c == 4) c = 0;// ini maksudnya seperti apa?
}    