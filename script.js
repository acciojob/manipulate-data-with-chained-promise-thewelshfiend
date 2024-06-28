//your JS code here. If required.
const output = document.getElementById('output');
const arr = [1, 2, 3, 4];

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(arr)}, 1000);
});

promise
    .then((a) => {
        const A = a.filter((n) => (n % 2 == 0));
        const output1 = document.createElement('p');
        output1.innerHTML = `The filtered array is: [${A.join(', ')}]`;
        output.appendChild(output1);

        return A;
    })
    .then((b) => {
        setTimeout(() => {
            const B = b.map((n) => (n * 2));
            const output2 = document.createElement('p');
            output2.innerHTML = `The squared array is: [${B.join(', ')}]`;
            output.appendChild(output2);
        }, 2000);
    });