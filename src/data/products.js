import sedan from './../assets/images/icon-sedans.svg';
import luxury from './../assets/images/icon-luxury.svg';
import suv from './../assets/images/icon-suvs.svg';

export const products = [
	{
		id: 1,
		type: 'sedan',
		desc:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		src: sedan,
	},
	{
		id: 2,
		type: 'suvs',
		desc:
			'Take an SUV for its spacious interior, power, and verstility. Perfect for your next family vacation and off-road adventures.',
		src: suv,
	},
	{
		id: 3,
		type: 'luxury',
		desc:
			'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		src: luxury,
	},
];
