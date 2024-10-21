(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()



const slider = document.querySelector('#priceSlider')
const display = document.querySelector('#sliderValue')
const products = document.querySelectorAll('.product')

slider.oninput = function() {
    const sliderValue = parseInt(this.value)
    display.textContent = `\$${sliderValue}`
    
    products.forEach(product => {
        const price = parseInt(product.dataset.price)

        if (sliderValue > parseInt(this.min) && sliderValue < parseInt(this.max)) {
            if (sliderValue >= price) {
                gsap.to(product, {autoAlpha: 1, scale: 1, duration: 0.5})
            } else {
                gsap.to(product, {autoAlpha: 0, scale: 0.8, duration: 0.5})
            }
        } else {
            gsap.to(product, {autoAlpha: 1, scale: 1, duration: 0.5})
        }
    });
};


// Card Slider 
