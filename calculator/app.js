document.getElementById("btn").addEventListener("click", () => {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let sop = document.getElementById("sop").value;

    switch(sop) {
        case "plus":
            result.innerHTML = +num1 + +num2;
            break;
        case "min":
            result.innerHTML = +num1 - +num2;
            break;
        case "div":
            result.innerHTML = +num1 / +num2;
            break;
        case "multi":
            result.innerHTML = +num1 * +num2;
            break;
        case "mod":
            result.innerHTML = +num1 % +num2;
    };
});