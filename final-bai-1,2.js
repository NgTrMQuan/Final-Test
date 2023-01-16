function sum(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sum = 0;
    for(let i=a; i <= b; i++){
        for(let j=2; j < i - 1; j++){
          if(i % j == 0){
            isPrime = false;
            break;
          }
        }
        if(isPrime){
          console.log(i);
          sum += i;
        }
        isPrime = true;
      }
    document.getElementById("result").value = sum;
}

function numberOneTriangle(){
    let n = document.getElementById("num3").value;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            document.write("* ");
        }
            document.write("<br/>");
    }
}