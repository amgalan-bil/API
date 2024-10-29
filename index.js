const fs = require('fs');
// const content = 'Some content!';
// fs.appendFile('test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("DONE")
//   }
// });

// fs.writeFile('test.txt', 'Amgalan', (err, data)=>{
//     if(err){
//         console.log(data)
//     }else if (!err){
//         console.log("Written Successfully")
//     }
// })

// fs.readFile("test.txt" , 'utf8', (err,data)=>{
//     console.log(data)
// })

fs.unlink("test.txt", (err,data)=>{
    if(err){
        console.log("error")
    }else if(!err){
        console.log("File Deleted")
    }
})