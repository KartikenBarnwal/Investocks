window.onload=calculate
function calculate() {
	var principal = parseFloat(document.getElementById("amtinvested").value);
	var period = parseFloat(document.getElementById("nofoyears").value);
//  var freq = parseFloat(document.getElementById("frequency").value);
	var freq = 1
	var rateofreturn = parseFloat(document.getElementById("rateofreturn").value);	
	if (isNaN(principal)) {
        document.getElementById('amtinvested').style.borderColor="#fa5b3d"
    } else if (isNaN(period)) {
        document.getElementById('nofoyears').style.borderColor="#fa5b3d"
	}else if (isNaN(freq)) {
		alert("Please enter Frequency");
	} else if (isNaN(rateofreturn)) {
        document.getElementById('rateofreturn').style.borderColor="#fa5b3d"
	} else {
        document.getElementById('amtinvested').style.borderColor="#0d0d0d"
        document.getElementById('nofoyears').style.borderColor="#0d0d0d"
        document.getElementById('rateofreturn').style.borderColor="#0d0d0d"

		var instalment_amount = principal;
		var no_of_compounding_periods = (12/freq)*period;
		var int_rate_per_period = rateofreturn/(12/freq)/100;	
		var total_amount_invested = period*instalment_amount*12;
        var expected_amount_on_maturity =  instalment_amount*((Math.pow(1+int_rate_per_period, no_of_compounding_periods)-1)/int_rate_per_period)*(1+int_rate_per_period);
        var ans1=read(total_amount_invested.toFixed(2))
        var ans2=read(expected_amount_on_maturity.toFixed(2))
        document.getElementById("totalInvested").innerHTML = "Amount Invested: "+ans1;
		document.getElementById("expectedAmount").innerHTML = "Expected Amount: "+ans2;
		
    }
    

    //charts and statistics
    new Chart(document.getElementById("myChart"), {
        type: 'pie',
        data: {
          labels: ["Amount Invested","Expected Amount"],
          datasets: [{
            label: "Assets (rupees)",
            backgroundColor: ["#fa5b3d", "rgb(18, 88, 134)"],
            data: [total_amount_invested.toFixed(2),expected_amount_on_maturity.toFixed(2)],
            
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Amount Invested & Expected Amount'
          }
        }
    });

}

function read(num){
    if(num>10000000)
    {
        var main=parseFloat(num/10000000).toFixed(2) 
        return main+" Cr"
    }
    if(num>100000)
    {
        var main=parseFloat(num/100000).toFixed(2) 
        return main+" Lac"
    }
    return num 
    
}
