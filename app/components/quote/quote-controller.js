function QuoteController() {
	var qc = this;
	var qs = new QuoteService()
	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
		drawQuote(quote)
	})
	var quoteElem = document.getElementById('quote');
	function drawQuote(quote) {
		var template = ''
		template = `
	    ☮.Quote: ${quote.quote} - ${quote.author}
		`
		quoteElem.innerText = template
	}
}