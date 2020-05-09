function callback() {

	console.log("Caiu aqui");
	var oResponse = this;
	var sResponseBody = oResponse.responseText;
	var oJSON = JSON.parse(sResponseBody);
	var sReais = oJSON.rates.BRL;
	console.log(sReais);

	//AQUI
	var oUrl = new URL(location.href); //criando um objeto da classe
	var sValorOrigem = oUrl.searchParams.get("valor_origem"); //pega o valor da url do input valor_origem
	console.log(sValorOrigem); //parametro que identifica o valor da url e mostra

	document.querySelector("#valor_destino").value = sReais * sValorOrigem;

}

function chamaAPI() {

	const sURL = "https://api.exchangeratesapi.io/latest?base=USD"; //declarando uma constante e carregando o link da api
	var oRequest = new XMLHttpRequest(); //principal classe nativa que permite fazer requisição de rede
	oRequest.addEventListener("load", callback);
	oRequest.open("GET", sURL);
	oRequest.send();
	console.log("ja passou pelo send (chamou)");
}

