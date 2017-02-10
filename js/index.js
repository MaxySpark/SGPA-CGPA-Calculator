console.log("Author : MaxySpark (Bhargab Hazarika)");
console.log("Email : me@bhargab.me");
console.log("Github : http://git.maxyspark.com");

var click_count = 0;
function addInputRow() {
    var input_row = document.getElementsByClassName("input-row")[0];
    var cln = input_row.cloneNode(true);
    var insert = document.getElementById("in");
    var p_node = document.getElementById("cgpa");
    p_node.insertBefore(cln,insert);
    click_count++;

    if(click_count >=7 ) {
        document.getElementById("insert-sem").disabled = true;
    }
}

var total_credit = 0;
var total_sgpa_credit = 0;

function cgpaCalculate(){
    var sgpa_arr = document.getElementsByClassName("sgpa_in");
    var credit_arr = document.getElementsByClassName("credit_in");
    elem_count = 0;

    while(elem_count < sgpa_arr.length) {
        var sgpa = sgpa_arr[elem_count].value;
        if(sgpa=="") {
            sgpa = 0;
        } else {
            sgpa = parseFloat(sgpa);
        }
        var credit = credit_arr[elem_count].value;
        if(credit=="") {
            credit = 0;
        } else {
            credit = parseFloat(credit);
        }
        var cgpa = ((sgpa * credit) / credit);
        total_credit += credit;
        total_sgpa_credit += (sgpa * credit);
        if(isNaN(cgpa)) cgpa = 0;

        document.getElementsByClassName("cgpa_out")[elem_count].value = cgpa;
        elem_count++;

        console.log("\nSGPA : "+ sgpa);
        console.log("CREDIT : "+ credit);
        console.log("CGPA : "+ cgpa);
    }

    var total_cgpa = (total_sgpa_credit / total_credit);
    if(isNaN(total_cgpa)) total_cgpa = 0;
    document.getElementById("total_cgpa").innerHTML = total_cgpa;  
}