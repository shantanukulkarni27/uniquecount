arr = [10,20,30,30,40,40,40.50,60,50];
let obj ={};
for(i=0;i<arr.length;i++){
    let temp = arr[i];
    if(obj[temp]){
        obj[temp]=obj[temp]+1;

    }else{
        obj[temp]=1;
    }
}
console.log("obj is ",obj)