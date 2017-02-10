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
