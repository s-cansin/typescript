let promise: Promise<string> = new Promise((resolve: (value: string) => void, reject: (reason?: any) => void) => {
    setTimeout(() => resolve("resolved"), 1000);
});

promise.then((msg: string) => console.log('Success', msg)).catch((err:any) => console.log('Error:', err));