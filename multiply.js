function multiplyBy() 
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    alert(num1 * num2);
}
function divideBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    alert(num1 / num2);
}
function logout()
{
    alert("Are You Sure");
    window.location = "index.html";
}