const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class Runner {
    constructor(){
        this.testFiles = [];
    }
async runTests(){
for(let file of this.testFiles){
    const beforeEaches = [];
    global.it= (desc,fn) =>{
        beforeEaches.forEach(func=>func());
        try{
            console.log(chalk.green(`OK - ${desc}`));
            fn();}
        catch(error){
            console.log(chalk.red(`FAIL X - ${desc}`));
            console.log('/t',error.message);}
    };
    
    global.beforeEach= (fn) =>{
        beforeEaches.push(fn);
    };

    try{
        require(file.name)
    }
    catch(error){console.log(chalk.red(error.message));}
}
}

    async collectFiles(targetPath){
 const files = await fs.promises.readdir(targetPath)
 for(let file in files){
    const filePath = path.join(targetPath,file); 
    const stats = await fs.promises.lstat(filePath);

    // TODO: improve this with decorator/factory/some design pattern
    if(stats.isDirectory()){
        const children = await fs.promises.readdir(filePath);
        files.push(...children.map(f=>path.join(file,f)));
    }else if(stats.isFile()){
        if(file.includes('.test.js','.test.ts')){
            const fileType='js';
this.testFiles.push({name:filePath,type:fileType});
        }
    }
    }
    }
}

module.exports = Runner;