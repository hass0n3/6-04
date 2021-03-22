function MyFunction() {
                var age  =  document.getElementById("age").value;
                var day  =  document.getElementById("day").value;

                if ((day == "Tuseday" || day == "Thursday") || (age < 12 && age <21 )){
                  document.getElementById("demo1").innerHTML ="your eligible for student pricing!";
                }else {
                  document.getElementById("demo1").innerHTML = "you must pay regular a price." ;
                }
} 