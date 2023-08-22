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
    let basic = document.getElementById("basicsalary").value;
    let benefits = document.getElementById("benefits").value;

    let gs = forgrossalary(basicsalary,benefits)
    document.getElementById("gross") = gs

    

    let ns = forNSSF(gs)
    document.getElementById("nssf") = ns

    let nhd = fornhdf(gs)
    document.getElementById("nhdf") = nhd

    let nhi = fornhif(gs)
    document.getElementById("nhif") = nhi
 
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


