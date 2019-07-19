function checkNum(num){
    return new Promise((resolve, reject) =>{
        let ten = 10;
        setTimeout(() => num > ten ? resolve() : reject(), 500);
    });
}
//number to check
let x = 20;

checkNum(che).then(function(){
    console.log('True');
}).catch(function(){
    console.log('The number is smaller or equael to Ten');
})
 

