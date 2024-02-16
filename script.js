let calculatorDiv = document.createElement("div");

calculatorDiv.innerHTML += `

<h1 id="title">Simple Calculator</h1>
<p id="description">A basic calculator for performing arithmetic operations.</p>
<div class="container">
<div class ="calculator">
<input type="text" placeholder="0" id="result"> </input>
<button onClick="clearInput()" id="clear">CL</button>
<button onClick="del()">DEL</button>
<button onClick="display('%')" id="percentage">%</button>
<button onClick="display('/')" id="division">/</button>
<button onClick="display('7')" id="7">7</button>
<button onClick="display('8')" id="8">8</button>
<button onClick="display('9')" id="9">9</button>
<button onClick="display('*')" id="multiply">*</button>
<button onClick="display('4')" id="4">4</button>
<button onClick="display('5')" id="5">5</button>
<button onClick="display('6')" id="6">6</button>
<button onClick="display('-')" id="subtract" >-</button>
<button onClick="display('1')" id="1">1</button>
<button onClick="display('2')" id="2">2</button>
<button onClick="display('3')" id="3">3</button>
<button onClick="display('+')" id="add">+</button>
<button onClick="display('.')" id="dot">.</button>
<button onClick="display('0')" id="0">0</button>
<button onClick="calculate()" id="equal" class="equal">=</button>
</div>
</div>
`;
document.body.append(calculatorDiv);

let result = document.getElementById("result");

function display(num) {
  result.value += num;
}

function calculate() {

   // Check if the input field is empty
   if (result.value.trim() === "") {
    alert("Please enter an expression.");
    return; // Exit the function if the input is empty
}

  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("invalid");
  }
}

function clearInput() {
    result.value = "";
}



function del(){
    console.log('in line 52');

    result.value = result.value.slice(0,-1);
}