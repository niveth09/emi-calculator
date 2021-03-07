var p_val = 100000;
var t_val = 1;
var i_val = 0;

document.getElementById('p_value').value = 100000;
document.getElementById('t_value').value = 1;
document.getElementById('i_value').value = 0;


var loadedValues = () => { 
    p_range_value();
    t_range_value();
    i_range_value();
}
var p_range_value = () => {
    // console.log(p_val);
    p_val = document.getElementById("p_range_values").value;
    document.getElementById('p_value').innerHTML = p_val;
    setValues();
    // set_p_value(val);
}


var t_range_value = () => {
    t_val = document.getElementById("t_range_values").value;
    // console.log(t_val);
    document.getElementById('t_value').innerHTML = t_val;
    setValues();

}

var i_range_value = () => {
    i_val = document.getElementById("i_range_values").value;
    document.getElementById('i_value').innerHTML = i_val;
    setValues();
}


var setValues = () => { 
    p_val = intConversion(p_val);
    t_val = intConversion(t_val);
    i_val = floatConversion(i_val);

    // console.log(p_val, t_val, i_val);

    var emi = emicalculation(p_val, t_val, i_val);
    emi = intConversion(emi);
    document.getElementById("monthly_emi").value = emi;

    var interest = interestCalculation(p_val, t_val, i_val);
    var principal = p_val - interest;
    principal = intConversion(principal);
    document.getElementById("principal").value = principal;

    // console.log(interest);
    interest = intConversion(interest);
    document.getElementById("interest").value = interest;

    var totalAmount = totalAmountCalculation(principal, interest);
    document.getElementById("payable_amount").value  = totalAmount;
}


var floatConversion = (val) => { 
    return parseFloat(val);
}

var intConversion = (val) => { 
    return parseInt(val);
}

var emicalculation = (loan_amount, tenure,interest_rate) => {     
    var emi = 0;
    emi = (loan_amount * (interest_rate / 100) * (1 + (interest_rate / 100)) * tenure) / ((1 + (interest_rate / 100)) * (tenure - 1));
    return emi;

}

// var principalCalculation = (tenure, interest_rate) => { 
//     console.log(tenure, interest_rate);
//     var principal = (interest_rate/100) / ((interest_rate/100) * (tenure*12));
//     console.log(principal);
//     return principal;
// }

var interestCalculation = (principal, tenure, interest_rate) => {
    console.log(principal, tenure, interest_rate);
    var interest = principal * (interest_rate/100) * tenure;
    console.log(interest);
    return interest;
}

var totalAmountCalculation = (principal, interest) =>
{ 
    var totalAmount = principal + interest; 
    return totalAmount;
}
  
