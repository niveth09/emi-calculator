var p_val = 100000;
var t_val = 1;
var i_val = 0;
var loadedValues = () => { 
    document.getElementById('p_value').value = 100000;
    document.getElementById('t_value').value = 1;
    document.getElementById('i_value').value = 0;
    p_range_value();
    t_range_value();
    i_range_value();
}
var p_range_value = () => {
    p_val = document.getElementById("p_range_values").value;
    document.getElementById('p_value').innerHTML = p_val;
    setValues();
}

var t_range_value = () => {
    t_val = document.getElementById("t_range_values").value;
    document.getElementById('t_value').innerHTML = t_val;
    t_val *= 12;
    setValues();
}

var i_range_value = () => {
    i_val = document.getElementById("i_range_values").value;
    document.getElementById('i_value').innerHTML = i_val;
    i_val = i_val / 1200;
    setValues();
}


var setValues = () => { 
    p_val = intConversion(p_val);
    t_val = intConversion(t_val);
    i_val = floatConversion(i_val);


    var emi = emiCalculation(p_val, t_val, i_val);
    emi = intConversion(emi);
    document.getElementById("monthly_emi").value = emi;

    var principal = intConversion(p_val);
    document.getElementById("principal").value = principal;

    var interest = interestCalculation(p_val, t_val, i_val);
    interest = intConversion(interest);
    document.getElementById("interest").value = interest;
    document.getElementById("payable_amount").value  = principal+interest;
}


var floatConversion = (val) => { 
    return parseFloat(val);
}

var intConversion = (val) => { 
    return parseInt(val);
}

var emiCalculation = (loan_amount, tenure,interest_rate) => {     
    var emi = 0;    
    var power_interest = (1 + (interest_rate)) ** (tenure)  
    emi = Math.round((loan_amount * (interest_rate) * power_interest) / (power_interest - 1));
    return emi;

}

var interestCalculation = (principal, tenure, interest_rate) => {
    var emi = emiCalculation(principal, tenure, interest_rate);
    var interest = Math.round((emi *t_val) - p_val);
    return interest;
}


  
