async function timeout() {
    return 'hello world'
}
timeout().then(result=>{
    console.log(result);
});
console.log('虽然在后面，但是我先执行');

async function timeout2(flag){
    if(flag){
        return 'happy';
    }else{
        throw 'sad';
    }
}
timeout2(true).then(result=>{
    console.log(result);
});
timeout2(false).catch(err => {
    console.log(err)
})

// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}
async function testResult() {
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log(first + second + third);
}

testResult();