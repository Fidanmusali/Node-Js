// 1. "Tapma Oyunu" (Guessing Game)
// Bu oyun istifadəçinin bir ədəd tahmin etməsi ilə başlayır və proqram ədədin doğruluğunu yoxlayır. İstifadəçi doğru tahmin edənə qədər yeni tahminlər verməli olur.


import { stdin, stdout } from 'process'
import readline from 'readline'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const random = Math.floor(Math.random() * 100) + 1;

const sorgu = () => {
    rl.question("1-100 arasi reqem tutun : ", (cvb) => {
        const tutuguReqm = +cvb;
        if (tutuguReqm > random) {
            console.log('asagi');
            sorgu()
        } else if (tutuguReqm < random) {
            console.log('yuxari');
            sorgu()

        } else {
            console.log("dogrudur");
            process.exit()
        }

    })
}
sorgu();

// ---------------------
// Izah 1: texmini/random eded tutmasi ucun math.random istifade edilir. 1-100 araliginda eded istediyimiz ucun 100 vururuq. tam eded alamq ucun math.floor istefade edirik. math.floor yuvarlasdirdigi ucun 100 cixmir ona gore de +1 yaziriq

// Izah 2: sual vermek ucun rl.question istifade edirik ve bixden call back alir ve hemin  call back-e sert veririk Verdiyimiz her bir sertde sorgu(yazdigimiz funksiyani) cagirmaliyiq
// ---------------------


// 2. inquirer js ile istifadeciden username ve password alin
//     ve ozunuzde bir user obyekti olsun icerisinde username ve password olsun.eger istifadecinin daxil etdiyi melumatlar duzgundurse giris ugurla tamamlandi mesaji eks halda username ve ya password yalnisdir mesaji cixsin ekrana


const user = {
    username: 'admin',
    password: '12345'
}

const question = [
    {
        name: "username",
        message: "enter your username"
    },
    {
        name: "password",
        message: "enter your password",
        type: "password",
        mask: "*"
    }
]

inquirer.prompt(question).then((cavablar) => {
    if (cavablar.username === user.username && cavablar.password === user.password) {
        console.log('giris olundu');
    } else {
        console.log('xeta');

    }

})

// ----------------
// Izah 1: inquirer js-de username ve password aldigimizda hemin data promise dusur. Promise-den cixmasi ucun then istifade edilir 

// Izah 2: inquirer.prompt(question) sual sorusulur ve yaninda callback cavab alinir ve him cavaba sert verilir
// ---------------------


// 3. dataniz olsun,data array olacaq icerisinde obyektler olacaq.Obyektin icerisinde ad,soyad,finkod,dogum tarixi,doguldugu yer olsun.
//     inquirer ile istifadeciden fin kodu sorusun,kimin finkodunu yazsa onun datasi cixsin ekrana,eks halda bele data yoxdur desin
import inquirer from "inquirer";
const data = [
    {
        ad: 'user1',
        soyad: 'admin',
        finkod: '123',
        dogumTarixi: '01.01.01',
        dogulduguYer: 'Bakı'
    },
    {
        ad: 'user2',
        soyad: 'admin',
        finkod: '123',
        dogumTarixi: '01.01.01',
        dogulduguYer: 'Bakı'
    },
    {
        ad: 'user3',
        soyad: 'admin',
        finkod: '123',
        dogumTarixi: '01.01.01',
        dogulduguYer: 'Bakı'
    },
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'finkod',
            message: 'FİN kodunu daxil edin:',
        },
    ]).then((cavab) => {
        const user = data.find((user) => user.finkod === cavab.fin);
        if (user) {
            console.log(user);
        }
        else {
            console.log('bele istifadeci yocdur');

        }
    })


// ----------------
// Izah 1: inquirer js-de username ve password aldigimizda hemin data promise dusur. Promise-den cixmasi ucun then istifade edilir

// Izah 2: verilmis serte gore "kimin finkodunu yazsa onun datasi cixsin ekrana,eks halda bele data yoxdur desin " eger hansisa bir dataani axtarirsa  find methodan istifade edilir
// ----------------