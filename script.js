let calculatorDiv = document.createElement("div");
// calculatorDiv.setAttribute("class","calculator");
// calculatorDiv.setAttribute("id","calculator");

calculatorDiv.innerHTML +=  `
<div class="container">
<div class ="calculator">
<input type="text" placeholder="0" id="result"> </input>
<button onClick="clear()" id="clear">CL</button>
<button onClick="del()">DEL</button>
<button onClick="display(%)" id="percentage">%</button>
<button onClick="display(/)" id="division">/</button>
<button onClick="display(7)" id="7">7</button>
<button onClick="display(8)" id="8">8</button>
<button onClick="display(9)" id="9">9</button>
<button onClick="display(*)" id="multiply">*</button>
<button onClick="display(4)" id="4">4</button>
<button onClick="display(5)" id="5">5</button>
<button onClick="display(6)" id="6">6</button>
<button onClick="display(-)" id="subtract" >-</button>
<button onClick="display(1)" id="1">1</button>
<button onClick="display(2)" id="2">2</button>
<button onClick="display(3)" id="3">3</button>
<button onClick="display(+)" id="add">+</button>
<button onClick="display(.)" id="dot">0</button>
<button onClick="display(0)" id="0">0</button>
<button onClick="calculate()" id="equal" class="equal">=</button>
</div>
</div>
`
document.body.append(calculatorDiv);
