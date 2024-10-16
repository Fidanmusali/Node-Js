// 1. "Tapma Oyunu" (Guessing Game)
// Bu oyun istifadəçinin bir ədəd tahmin etməsi ilə başlayır və proqram ədədin doğruluğunu yoxlayır. İstifadəçi doğru tahmin edənə qədər yeni tahminlər verməli olur.

// import { stdin, stdout } from 'process'
// import readline from 'readline'

// const rl = readline.createInterface({
//     input: stdin,
//     output: stdout
// })

// const random = Math.floor(Math.random() * 100) + 1;

// const sorgu = () => {
//     rl.question("1-100 arasi reqem tutun : ", (cvb) => {
//         const tutuguReqm = +cvb;
//         if (tutuguReqm > random) {
//             console.log('asagi');
//             process.exit()
//         }else if(tutuguReqm < random){
//             console.log('yuxari'); 
//         }else{
//             console.log("dogrudur");
//             process.exit()
//         }

//     })
// } 
// sorgu();


// 2. inquirer js ile istifadeciden username ve password alin
//     ve ozunuzde bir user obyekti olsun icerisinde username ve password olsun.eger istifadecinin daxil etdiyi melumatlar duzgundurse giris ugurla tamamlandi mesaji eks halda username ve ya password yalnisdir mesaji cixsin ekrana 



// 3. dataniz olsun,data array olacaq icerisinde obyektler olacaq.Obyektin icerisinde ad,soyad,finkod,dogum tarixi,doguldugu yer olsun.
//     inquirer ile istifadeciden fin kodu sorusun,kimin finkodunu yazsa onun datasi cixsin ekrana,eks halda bele data yoxdur desin
// import inquirer from "inquirer";
// const data = [
//     {
//         ad: 'user1',
//         soyad: 'admin',
//         finkod: '123',
//         dogumTarixi: '01.01.01',
//         dogulduguYer: 'Bakı'
//     },
//     {
//         ad: 'user2',
//         soyad: 'admin',
//         finkod: '123',
//         dogumTarixi: '01.01.01',
//         dogulduguYer: 'Bakı'
//     },
//     {
//         ad: 'user3',
//         soyad: 'admin',
//         finkod: '123',
//         dogumTarixi: '01.01.01',
//         dogulduguYer: 'Bakı'
//     },
// ];

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'finkod',
//             message: 'FİN kodunu daxil edin:',
//         },
//     ])
