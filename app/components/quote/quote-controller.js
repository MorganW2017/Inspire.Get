function QuoteController() {

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote');


	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
	})

	function drawQuote(quote) {
		var template = ''
		template += `
	<div>
	<h3>${quote.quote}</h3>
	</div>

	`

	}
	qs.getQuote(drawQuote)
}
