document.getElementById("concatenate").addEventListener("click", concatenate);
document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);

result = document.getElementById("result");

function concatenate()
{
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const concatenated = a + b;
  result.innerHTML = concatenated;
}

function add()
{
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const added = a + b;
  result.innerHTML = added;
}

function subtract()
{
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const subtracted = a - b
  result.innerHTML = subtracted;
}

function multiply()
{
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const multiplied = a * b;
  result.innerHTML = multiplied;
}

function divide()
{
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const divided = a / b;
  result.innerHTML = divided;
}