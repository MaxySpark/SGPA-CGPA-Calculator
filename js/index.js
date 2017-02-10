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

function cgpaCalculate(){
    var sgpa = document.getElementsByClassName("sgpa_in")[0].value;
    if(sgpa=="") {
        sgpa = 0;
    }
    var credit = document.getElementsByClassName("credit_in")[0].value;
    if(credit=="") {
        credit = 0;
    }
    var cgpa = ((sgpa * credit) / credit);
    if(isNaN(cgpa)) cgpa = 0;

    console.log("SGPA : "+ sgpa);
    console.log("CREDIT : "+ credit);
    console.log("CGPA : "+ cgpa);  
}