var total = 0;

var holiday = { 
 "bali": 12999,
 "mauritius": 15000,
 "london": 22000,
};
 

function addToCart()      {
    var cartPrice = prompt("Where are you flying to?", JSON.stringify(holiday));
    total = total + holiday[cartPrice]
    alert(total);
    sessionStorage.setItem("total",total);
};

function store() {
	sessionStorage.setItem("total",total);
}


function showUs() {
	alert(sessionStorage.getItem("total"));
}

function confirmOrder()  {
	var randomNumber = Math.floor(Math.random()*20000);
	alert("Thank You, your order number is"+ randomNumber);
}

function myDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show'))  {
				openDropdown.classList.remove('show');
			}
		}
	}
}









