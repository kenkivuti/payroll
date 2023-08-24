let myform = document.getElementById("myform");

myform.addEventListener("submit", function getdata(e) {
  //Prevent the webpage from refreshing
  e.preventDefault();
  //Check if inputs have values
  if (
    document.getElementById("basicsalary").value.length == 0 ||
    document.getElementById("benefits").value.length == 0
  ) {
    document.getElementById("error").innerText = "Ensure all Fields are set";
  } else {
    let basic = Number( document.getElementById("basicsalary").value);
    let benefits = Number(document.getElementById("benefits").value);

    let gs = forgrossalary(basic,benefits)
    document.getElementById("gross").innerText = gs

    

    let ns = forNSSF(gs)
    document.getElementById("nssf").innerText = ns

    let nhd = forNHDF(gs)
    document.getElementById("nhdf").innerText = nhd

    let nhi = forNHIF(gs)
    document.getElementById("nhif").innerText = nhi

    let tx = forTaxableIncome(gs,nhd,ns)
    document.getElementById("taxable").innerText = tx

    let py = forpayee(tx)
    document.getElementById("payee").innerText = py.toFixed(2)

    let np = fornet(gs,nhd,ns,nhi,payee)
    document.getElementById("net").innerText = np
 
  }
});

function forgrossalary(basicsalary, benefits) {
  grossalary = basicsalary + benefits;
  return grossalary;
}

function forNSSF(grossalary, NSSFrate = 0.06) {
  let NSSF = grossalary * 0.06;

  if (grossalary <= 18000) {
    NSSF = grossalary * 0.06;
  } else {
    NSSF = 18000 * 0.06;
  }
  return NSSF;
}

function forNHDF(grossalary,NHDFrate = 0.03){
  let NHDF = 0;
  if(grossalary<=83400){
   NHDF= grossalary * NHDFrate
  }else{
    NHDF = 2500
  }
  return NHDF;
}

function forNHIF(grossalary) {
  NHIFContribution = 0
  if (grossalary>0 && grossalary <= 5999) {
    NHIFContribution = 150;
  } else if (grossalary >= 6000 && grossalary <= 7999) {
    NHIFContribution = 300;
  } else if (grossalary >= 8000 && grossalary <= 11999) {
    NHIFContribution = 400;
  } else if (grossalary >= 12000 && grossalary <= 14999) {
    NHIFContribution = 500;
  } else if (grossalary >= 15000 && grossalary <= 19999) {
    NHIFContribution = 600;
  } else if (grossalary >= 20000 && grossalary <= 24999) {
    NHIFContribution = 750;
  } else if (grossalary >= 25000 && grossalary <= 29999) {
    NHIFContribution = 850;
  } else if (grossalary >= 30000 && grossalary <= 34999) {
    NHIFContribution = 900;
  } else if (grossalary >= 35000 && grossalary <= 39999) {
    NHIFContribution = 950;
  } else if (grossalary >= 40000 && grossalary <= 44999) {
    NHIFContribution = 1000;
  } else if (grossalary >= 45000 && grossalary <= 49999) {
    NHIFContribution = 1100;
  } else if (grossalary >= 50000 && grossalary <= 59999) {
    NHIFContribution = 1200;
  } else if (grossalary >= 60000 && grossalary <= 69999) {
    NHIFContribution = 1300;
  } else if (grossalary >= 70000 && grossalary <= 79999) {
    NHIFContribution = 1400;
  } else if (grossalary >= 80000 && grossalary <= 89999) {
    NHIFContribution = 1500;
  } else if (grossalary >= 90000 && grossalary <= 99999) {
    NHIFContribution = 1600;
  } else if(grossalary > 99999) {
    NHIFContribution = 1700;
  }
  else{
    NHIFContribution = 0
  }
  return NHIFContribution
}

function forTaxableIncome(grossalary, NSSF, NHDF) {
  let taxableincome = grossalary - (NSSF + NHDF);
  return taxableincome;
}

function forpayee(taxableincome){
  payee = 0;
  if (taxableincome > 0 && taxableincome <= 24000) {
    payee = ((24000 * 0.1) - 2400)
} else if (taxableincome > 24001 && taxableincome <= 32333) {
  payee = ((taxableincome * 0.1) + (8333 * 0.25)- 2400)
  
}else if(taxableincome > 32334 && taxableincome <= 500000 ) {
  payee = ((24000 * 0.01) +(8333 * 0.25) +((taxableincome - 32333) * 0.3)- 2400);

}else if (taxableincome > 500001){
  payee =((24000 * 0.01) +(8333 * 0.25) +((taxableincome - 32333) * 0.35)- 2400)
}else{
  payee = 0
}
return payee
}

function fornet( gs,ns,nhd,nhi,np){
  netpay = (gs - (ns + nhd + nhi + np))
  return netpay;
}