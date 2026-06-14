 function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome Browser");
    } else {
        console.log("Launching Other Browser");
    }

}

launchBrowser("chrome"); 



function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Invalid Test Type");
    }

}

runTests("sanity");