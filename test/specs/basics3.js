var marks = Array(6)
var marks=new Array(20,30,40,50,100) 
var marks = [20,30,40,50,100]
 submarks= marks.slice(2,4)
console.log(submarks)
console.log(marks[2])
marks[3] = 14
console.log(marks[3])
marks.push(70)
marks.pop()
marks.unshift(12)
console.log(marks)
console.log(marks.length)
console.log(marks.indexOf(12))
console.log(marks.includes(120))
var sum =0;
for(let i =0; i< marks.length;i++){
    sum = sum + marks[i]
    
}
console.log("total = " +sum)
//reduce filter map
let total =marks.reduce((sum, mark)=> sum + mark, 0)
console.log("The total from reduce filter map is " + total)  
var scores = [12,13,14,16]
//print array elements which are even numbers and multiply each value with 3 and sum them
var sum = 0 
var evenScores = [];
for(let i =0; i<scores.length; i++){
    if(scores[i] % 2 == 0){
        sum = sum + scores[i]*3
        evenScores.push(scores[i]*3);
    }
}
console.log("sum is " +sum)
console.log(evenScores);
// filter
let filterEvenScores = scores.filter(score => score % 2 ==0)
console.log(filterEvenScores)
//map 
let mappedArray =filterEvenScores.map(score=>score*3)
console.log(mappedArray);
let summedMappedArr=mappedArray.reduce((sum,mappedArrElem)=> sum + mappedArrElem, 0);
console.log(summedMappedArr);
var scores1= [12,13,14,16]
let finalValue=scores.filter(score => score % 2 ==0).map(score=>score*3).reduce((sum,value) => sum +value,0);
console.log("Final value = " + finalValue);
let fruits = ["banana", "mango", "orange", "apple"]
fruits.sort()
fruits.reverse()
console.log(fruits);
var scores= [12,19,003,14,16];
scores.sort()
console.log(scores)
scores.sort(function(a,b){
    return a-b
})
console.log(scores.sort((a,b) => a-b))
console.log(scores.sort((a,b) => b-a))