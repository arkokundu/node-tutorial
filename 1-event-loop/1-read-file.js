const {readFile} = require('fs')
 
console.log('started a first task');
//CHECK FILE PATH


// ReadFile is asynchronous, event loop will offload it to a filesystem
// only when filesystem is done reading the txt file and is ready with err/result
// execute the console.log('completed first task')
readFile('../content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');