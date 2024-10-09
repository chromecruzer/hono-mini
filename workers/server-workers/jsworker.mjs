// fibonacciWorker.ts
//workers thread
import { parentPort, workerData } from 'worker_threads';

// Fibonacci function
export function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

// Run the Fibonacci calculation in the worker
if (workerData && workerData.n !== undefined) {
    const result = fibonacci2(workerData.n);
    parentPort?.postMessage(result); // Send result back to the main thread
}
