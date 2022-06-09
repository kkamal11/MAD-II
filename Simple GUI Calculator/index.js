var exp = document.getElementById("expression").value;

function input_num(v){
    if (v == ""){
        exp = "";
        document.getElementById("expression").value = "";
        document.getElementById("expression").classList.remove("k");
    }
    if(exp == ""){
        exp = String(v);
    }
    else{
        exp = exp + String(v);

    }
    document.getElementById("expression").value = exp;
}

function calculate(){
    var exp = document.getElementById("expression").value;
    if (exp){
        console.log(exp);
        try{
            let ans = eval(exp);
            document.getElementById("expression").classList.add("k");
            document.getElementById("expression").value = "The answer is "+ ans;
            logs("The answer is " + ans);
            exp = "";
        }
        catch(e){
            logs( "Invalid");
            document.getElementById("expression").value = "";
        }
    }
    else{
        logs("Please enter an expression")
        document.getElementById("expression").value = "";
    }
}


    

function logs(msg){
    var ul = document.getElementById("log");
    var li = document.createElement("li");
    var msg_node = document.createTextNode(msg);
    li.appendChild(msg_node);
    ul.appendChild(li);

}