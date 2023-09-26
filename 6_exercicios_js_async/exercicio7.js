const resolverEm1s = new Promise(resolve => setTimeout(resolve, 1000));
for (let i = 0; i < 10; i++) {
    resolverEm1s.then(() => console.log("oi"))
}

// oi 10x, after one second