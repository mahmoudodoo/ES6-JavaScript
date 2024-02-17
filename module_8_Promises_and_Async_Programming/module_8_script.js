
// Example of a Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded successfully'), 2000);
});

promise.then(data => console.log(data));

// Example of async/await
async function fetchData() {
    let response = await promise;
    console.log(response);
}

fetchData();
