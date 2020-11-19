# FindEvenSumOfFib

## Info
Because I used web workers to solve this problem a browser is required. Without a local server you can open this in Firefox and you may view the console output.
Alternatively, you can remove the `getFibNums` from the fibonacci-worker.js file and call the function with `{data: AnyNumber}`.

This program (with the service worker) works best in a library like React where changes to state force rerenders. And the value will be saved to the state.

My decision to use web workers was made because this could be a pretty expensive task to run and using web workers will prevent the browser from being blocked while the value is calculated.

This program will run in O(n) time.
If this was a function that would potentially be called many times, memoization could be used to help speed up the program if the function was called with same arguments in the future.
