#!/usr/bin/env node
const Runner =require('/runner');
const runner =new Runner();
console.log("Testing Started.....");
console.log("Testing in progress");

const run = async () => {
    await runner.collectFiles(process.cmd());
    // console.log(runnerFiles);
    runner.runTests();
};

run();