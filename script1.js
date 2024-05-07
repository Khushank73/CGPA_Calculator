function cal() {
  let c1 = 16.5;
  let c2 = 16.5;
  let c3 = 23;
  let c4 = 23;
  let c5 = 24.5;
  let c6 = 23;
  let c7 = 16.5;
  let c8 = 17;

  let csum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;

  let ts;

  const sem1 = document.getElementById("sem1").value;
  const s1 = parseFloat(sem1);
  const sem2 = document.getElementById("sem2").value;
  const s2 = parseFloat(sem2);
  const sem3 = document.getElementById("sem3").value;
  const s3 = parseFloat(sem3);
  const sem4 = document.getElementById("sem4").value;
  const s4 = parseFloat(sem4);
  const sem5 = document.getElementById("sem5").value;
  const s5 = parseFloat(sem5);
  const sem6 = document.getElementById("sem6").value;
  const s6 = parseFloat(sem6);
  const sem7 = document.getElementById("sem7").value;
  const s7 = parseFloat(sem7);
  const sem8 = document.getElementById("sem8").value;
  const s8 = parseFloat(sem8);

  ts =
    s1 * c1 +
    s2 * c2 +
    s3 * c3 +
    s4 * c4 +
    s5 * c5 +
    s6 * c6 +
    s7 * c7 +
    s8 * c8;

  let ans;
  ans = ts / csum;

  const displayElement = document.getElementById("result");
  displayElement.textContent = "CGPA: " + ans;
}
