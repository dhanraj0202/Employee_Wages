// UC1 (Employee Presence)
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random()*10)%3;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}
// console.log(empCheck);


// UC2 (Employee Wage)
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// let empHrs = 0;
// let empCheck = Math.floor(Math.random()*10)%3;
// console.log(empCheck);
// switch(empCheck){
//     case IS_PART_TIME:
//         empHrs = PART_TIME_HOURS;
//         break;
//     case IS_FULL_TIME:
//         empHrs = FULL_TIME_HOURS;
//         break;
//     default:
//         empHrs = 0;
// }

// let empWage = empHrs*WAGE_PER_HOUR;
// console.log("Emp Wage: " + empWage);

// UC3 (getWorkingHours function added)
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;    
        default:
            return 0;
    }
}

// let empHrs = 0;
// let empCheck = Math.floor(Math.random()*10)%3;
// empHrs = getWorkingHours(empCheck);
// let empWage = empHrs*WAGE_PER_HOUR;
// console.log("Emp Wage: " + empWage);

// UC4 (Calculating Wages for a month(20 days))
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;

for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
}
// let empWage = empHrs*WAGE_PER_HOUR;
// console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);

// UC5 (max hours and max days implemented)
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
// while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
//     totalWorkingDays++;
//     let empCheck = Math.floor(Math.random()*10)%3;
//     totalEmpHrs += getWorkingHours(empCheck);
// }

// let empWage = empHrs*WAGE_PER_HOUR;
// console.log("UC5 - Total Days: " + totalWorkingDays +" Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

// UC6 (Save daily wage in an array)
function calcDailyWage(empHrs) {
    return empHrs*WAGE_PER_HOUR;
}
let empDailyWageArr = new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
// console.log("UC6 - Total Days: " + totalWorkingDays +" Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

// Array Helper Functions
// UC7A - Calc total wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +" Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
 function totalWages(totalWage, dailyWage) {
    return totalWage+dailyWage;
 }
 console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages,0));

//  UC7B - Show the day along with daily wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
