function run1()  {
	document.frn.result.value += "1";

}

function run2()  {
	document.frn.result.value += "2";

}

function run3()  {
	document.frn.result.value += "3";

}

function runplus()  {
	document.frn.result.value += "+";   }

function run4()
{document.frn.result.value += "4";}

function run5()
{document.frn.result.value += "5";}


function run6()
{document.frn.result.value += "6";}


function runminus()
{document.frn.result.value += "-";}

function run7()
{document.frn.result.value += "7";}

function run8()
{document.frn.result.value += "8";}

function run9()
{document.frn.result.value += "9";}

function run0()
{document.frn.result.value += "0";}

function runpoint()
{document.frn.result.value += ".";}

function rundivide()
{document.frn.result.value += "/";}

function runmultiply()
{document.frn.result.value += "*";}

function runclear()
{document.frn.result.value += "";}






function evalu()   {
    var evalo = eval(document.frn.result.value)

    document.frn.result.value = evalo;

}