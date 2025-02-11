// // რიცხვების დაბეჭდვა 1-დან 10-მდე
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // ლუწი რიცხვების დაბეჭდვა 2-დან 20-მდე
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// //  დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე. 
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(`რიცხვების ჯამი 1-დან 100-მდე: ${sum}`);



// // რიცხვების დაბეჭდვა 10-დან 1-მდე
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის ლუწი თუ კენტი. თუ რიცხვი ლუწია, დაბეჭდეთ "რიცხვი ლუწია", ხოლო თუ კენტია - "რიცხვი კენტია".

// const checkEvenOdd = num => console.log(num % 2 === 0 ? "რიცხვი ლუწია" : "რიცხვი კენტია");


//  // დაწერეთ კოდი, რომელიც იღებს წელს და ამოწმებს, არის თუ არა ის ნაკიანი. ნაკიანი წელია, რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა ის იყოფა 400-ზე. თუ წელი ნაკიანია, დაბეჭდეთ "წელი ნაკიანია", წინააღმდეგ შემთხვევაში - "წელი არ არის ნაკიანი". 

//  const isLeapYear = year => 
//     console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "წელი ნაკიანია" : "წელი არ არის ნაკიანი");

//  // დაწერეთ კოდი, რომელიც იღებს პირის ასაკს და დაბეჭდავს შესაბამის კატეგორიას: 

//  const getAgeCategory = age => {
//     console.log(
//         age <= 12 ? "ბავშვი" :
//         age <= 17 ? "მოზარდი" :
//         age <= 64 ? "ზრდასრული" :
//         "ხანდაზმული"
//     );
// };



// // დაწერეთ კოდი, რომელიც იღებს რიცხვს და დაბეჭდავს შეტყობინებას, თუ რამდენი ციფრი აქვს მას. მაგალითად, თუ რიცხვი არის 123, დაბეჭდეთ "რიცხვს აქვს 3 ციფრი"

// const countDigits = num => console.log(`რიცხვს აქვს ${num.toString().length} ციფრი`);


// // დაწერეთ კოდი, რომელიც იღებს კვირის დღის ნომერს (1-დან 7-მდე, სადაც 1 შეესაბამება ორშაბათს და 7 - კვირას) და დაბეჭდავს შეტყობინებას, არის თუ არა ეს დღე სამუშაო დღე თუ დასვენების დღე. 

// // let day = prompt("კვირის დღე - რიცხვით");
// // let week = day % 7 ===0 || day % 7 ===6 ? " უქმე":" სამუშაო დღე"
// // console.log(week);





// 5 თებერვალი

// let numbers=[10,20,30,40,50];
// for (let item of numbers) {
//     console.log(item);
    
// }

// let number = 12345;
// let result = number.toString().length;
// console.log(result);

// let day = 2;
// if (day % 7 === 0 || day % 7 ===6) {
//     console.log("უქმე");    
// }else{
//     console.log('სამუშაო დღე');
// }

// if(day >= 1 && day <=5 ){
//     console.log("work");    
// }else if (day === 6 || day === 7) {
//     console.log("not work")
// }else{
//     console.log("it is not right number");
    
// }
// let age =19;
// if( age > 18 ){
//     console.log("can drink wine");    
// }else{
//     console.log(can drink water);    
// }

// age > 18 ? 'wine' : 'water'
// // let result ='wine'

// let number =[1,2,3,4,5]
// for ( let num of number){
//     console.log(num);
    
// }


                               10 თებერვლის დავალება

// 4.დაწერეთ ფუნქცია, რომელიც მიიღებს რამდენიმე სახელს და მათ ყველას მიესალმება.

function greetNames(...names) {
    names.forEach(name => {
        console.log(`გამარჯობა, ${name}!`);
    });
}


// 1. დაწერეთ ფუნქცია რომელიც დააბრუნებს მაქსიმალურ რიცხვს

function findMax(...numbers) {
    return Math.max(...numbers);  (Declaration)
}

const findMax = function(a, b) {
    return a > b ? a : b;
};

console.log(findMax(10, 20)); // 20(Expression)



const findMax = (a, b) => a > b ? a : b;

console.log(findMax(10, 20)); // 20 (Arrow)




// 2.ფუნქცია უნდა მიიღებდეს ორი პარამეტრი (start და end), რომლებიც არის რიცხვები.

function findMaxInRange(start, end) {
    return Math.max(start, end);
}

// 3. ფუნქციამ უნდა დააბრუნოს მასივი სადაც იქნება ამ რიცხვებს შორის არსებული ყველა რიცხვი მაგ ( თუ გადავცემ 3 და 9 , დააბრუნებს 3,4,5,6,7,8,9 -ს  )

function getRange(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}  