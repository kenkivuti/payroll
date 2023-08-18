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

    alert(basic+benefits);

    document.getElementById("error").innerText = forgrossalary(basic, benefits);
  }
});
function forgrossalary(x, y) {
  z = Number(x) + Number(y);
  return z;
}


