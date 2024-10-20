// Task1. Fayldan yazıları oxuyun, uppercase edib digər fayla yazın. 

// import fs from 'fs'

// function upperCaseAndWrite(inputFile, outputFile) { 
//     fs.readFile(inputFile, (err,data)=>{
//         if(err){
//             console.error('fayl oxunmadi:', err )
//             return;
//         }
//         const upperCaseData = data.toString().toUpperCase()
//         fs.writeFile(outputFile, upperCaseData,(err)=>{
//             if(err){
//                 console.error('fayl oxunmadi:', err )
//                 return;
//             }
//         })
//     })
// }

// upperCaseAndWrite('data.txt','newData.txt')





// Task2. Funksiya yaradın. Belə ki, onun işi kopyalamaq olsun. 2 dənə string alsın, faylın adları. Birinci faylı kopyalasın ikinci fayl yaratsın.

// #task .txt fayllarindan ibaret bir papka olsun. Proqram yazin ki,
// 1. node index.js open test.txt desem, hemin faylin icindekileri mene gostersin.
// 2.  node index.js write test.txt bu elave text-dir. Istediyim qeder soz yaza bilerem. yazsam, test.txt-e  bu elave text-dir. Istediyim qeder soz yaza bilerem. sozlerini elave etsin.


// Task1. Ele proqram yazin ki,  terminalda:  node app 5 * 6 yazandan sonra, netice.txt faylina bu setir elave edilsin: 5 * 6 = 30. Ikinci defe yazanda, node app 12 / 4, netice.txt-ye 12 / 4 = 3. setiri elave edilsin. Diqqet edin ki, her yeni setir elave edilende evvelki setir silinmesin.

// Task2. Ele proqram yazin ki, terminalda node app ali cumle basladi ali task verdi ali bilir js-i yazanda, ali sozunu ali-den sonra olan sozlerde (onlar eslinde cumledirler) axtarsin ve sayini console-a cixarsin. (misal ucun burada, 2 olmalidi) Mes:
// node app test  bu bir test ucundur, testlere nifret edirem amma test etmek olar // 3
// node app soz sair deyir soz var sozu yandirar soz var kodu yandirar, esas odur soz var olsun soz //  5






// Hava haqqinda melumat burosu: weather.txt
// node app Baki +27 yazsam   weather.txt faylina Baki: +27C yazsin, mes:
// node app Lenkeran +5 -> Lenkeran: +5C
// node app Sibir -10 -> Sibir: -10C



// #Task1.  Istifadeci adini goturun ve user_name.txt faylina yazin.
// #Task2 . https://catfact.ninja/breeds endpoint-den breed ve country-ni cats-info.txt faylina yazin. Mes:
// Cat Breed: Abyssinian
// Cat Country: Ethiopia
// —————————
// Cat Breed : Aegean
// Cat Country: Greece