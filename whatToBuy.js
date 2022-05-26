function whatToBuy(cupcake_price, muffin_price){
	if (cupcake_price > muffin_price) {
		return "Buy a muffin";
	}else{
		return "Buy a cupcake";
	}
}

const muffinPriceElem = document.querySelector('.muffin_price');
const cupcakePriceElem = document.querySelector('.cupcake_price');
const CheckBtnElem = document.querySelector('.button');
const messageElem = document.querySelector('.message')

CheckBtnElem.addEventListener('click', whatToBuyTwo);
// this function compares the price of a muffin & a cupcake
function whatToBuyTwo(){
	var m_price = muffinPriceElem.value;
	var c_price = cupcakePriceElem.value;
	// Buy a muffin
	if (c_price > m_price) {
		return messageElem.innerHTML = ("Buy a muffin");
	}// But a cupcake
	else{
		return messageElem.innerHTML = ("Buy a cupcake");
	}
}
