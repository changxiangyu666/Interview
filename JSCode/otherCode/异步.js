function f1(){
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        resolve(5);
        console.log(2);
    }).then(val => {
        console.log(val);
    });

    promise.then(() => {
        console.log(3);
    });

    console.log(4);

    setTimeout(function() {
        console.log(6);
    });
}

function f2() {
    async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end');
    }
    async function async2() {
        console.log('async2');
    }
    console.log('script start');
    setTimeout(function() {
        console.log('setTimeout');
    }, 0);
    async1();
    new Promise(function(resolve) {
        console.log('promise1');
        resolve();
    }).then(function() {
        console.log('promise2');
    });
    console.log('script end');
}

function f3() {
    async function async1() {
        console.log('async1 start');
        await async2();
        //更改如下：
        setTimeout(function() {
            console.log('setTimeout1')
        },0)
    }
    async function async2() {
        //更改如下：
        setTimeout(function() {
            console.log('setTimeout2')
        },0)
    }
    console.log('script start');

    setTimeout(function() {
        console.log('setTimeout3');
    }, 0)
    async1();

    new Promise(function(resolve) {
        console.log('promise1');
        resolve();
    }).then(function() {
        console.log('promise2');
    });
    console.log('script end');
}

function f4() {
    async function a1 () {
        console.log('a1 start');
        await a2();
        console.log('a1 end')
    }
    async function a2 () {
        console.log('a2')
    }

    console.log('script start');

    setTimeout(() => {
        console.log('setTimeout')
    }, 0);

    Promise.resolve().then(() => {
        console.log('promise1')
    });

    a1();

    let promise2 = new Promise((resolve) => {
        resolve('promise2.then');
        console.log('promise2')
    });

    promise2.then((res) => {
        console.log(res);
        Promise.resolve().then(() => {
            console.log('promise3')
        })
    });
    console.log('script end')
}
// f1();
// f2();
// f3();
f4();
