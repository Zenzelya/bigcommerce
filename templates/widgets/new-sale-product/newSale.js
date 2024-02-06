import $ from 'jquery';

export default function newSale () {
	let result = `<h3 style="text-align: center;">No New Products With Discount</h3>`,
		currentDate = new Date(),
	    pastDate = new Date(),
		data,
		$container = $('#newSale .productCarousel');

	if (!$container.length) {
		return
	}

	pastDate.setDate(currentDate.getDate() - 5);
	data = window.customeData.site.newestProducts.edges.filter( (item) => isNewsaleitem(item, pastDate));

	if (data.length === 0) {
		$container.html(result)
	} else if (data.length < 4 ) {
		result = renderCarousel(data);
		$container.html(result)
	} else if (data.length > 3) {
		result = renderCarousel(data);
		$container.html(result).slick({
			"infinite": true,
			"mobileFirst": true,
			"slidesToShow": 2,
			"slidesToScroll": 1,
			"responsive": [
				{
					"breakpoint": 800,
					"settings": {
						"slidesToShow": 4,
						"slidesToScroll": 1
					}
				},
				{
					"breakpoint": 550,
					"settings": {
						"slidesToShow": 3,
						"slidesToScroll": 1
					}
				}
			]
		})
	}
};

function isNewsaleitem (item, pastDate) {
	const incomingDate = new Date(item.node.createdAt.utc);
	return incomingDate > pastDate && item.node.prices.bulkPricing.length;
}
function renderCarousel (data) {
	let result = '';
	result += data.reduce(
		(accumulator, currentValue) => accumulator + renderCarouselItem(currentValue),
		'',
	);
		return result;
}
function renderCarouselItem (item) {
	return (`<div class="productCarousel-slide">`
			+ `<article class="card">`
			+ `<figure class="card-figure">`
            + `<a class="card-figure__link" href="${item.node.path}">`
			+ `<div class="card-img-container">`
			+ `<img class="card-image lazyautosizes lazyloaded" src="${item.node.defaultImage.url}">`
           	+   `</div>`
			+   `</a>`
			+   `</figure>`
            + `<div class="card-body">`
		    + `<h3 class="card-title">${item.node.name}</h3>`
			+ `<p class="price-section price-section--withoutTax">`
			+ `<span>${item.node.prices.price.value}</span>`
            + `<spa>${item.node.prices.price.currencyCode}</spa></p>`
            + `</div>`
            + `</article>`
           	+ `</div>`
        	+ `</section>`);
}