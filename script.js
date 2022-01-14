function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <=0 ) {   // check for a valid positive input principal value
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // calculate total amount
    var amount = principal + interest;

    // show result in result span
    document.getElementById("result").innerHTML="If you deposit <span class=\"number\">"+principal+"</span>,\<br\>at an interest rate of <span class=\"number\">"+rate+"%</span>\<br\>You will receive an amount of <span class=\"number\">"+amount+"</span>,\<br\>in the year <span class=\"number\">"+year+"</span>\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + " %";
}