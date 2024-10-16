// Kullanıcıdan en az 10 tane sayı girmesini isteyelim
// Girilen her bir sayı tek ise "tekSayilar" dizisine, çift ise "ciftSayilar" dizisine eklensin.
// Daha sonra console'da "tek sayılar : " ve "çift sayılar : " diye yazdıralım.

let tekSayilar = [];
let ciftSayilar = [];

function sayilar() {
  for (let i = 0; i < 10; i++) {
    let sayi = Number(prompt("Sayi giriniz. "));

    if (sayi % 2 === 0) {
      ciftSayilar.push(sayi);
    } else {
      tekSayilar.push(sayi);
    }
  }
  console.log("Tek sayilar: ", tekSayilar);
  console.log("Cift sayilar", ciftSayilar);
}

sayilar();
