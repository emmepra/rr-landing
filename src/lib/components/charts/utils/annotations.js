let us_part = [{
				text: 'Prova 2',
				top: '18%',
				left: '30%',
				arrows: [{
						clockwise: false, // true or false, defaults to true
						source: {
							anchor: 'left-bottom', // can be `{left, middle, right},{top-middle-bottom}`
							dx: -2,
							dy: -7
						},
						target: {
							x: '28%',
							y: '75%'
						}
				}]
}];

let eu_part = [{
				text: 'Prova 1',
				top: '30%',
				left: '10%',
				arrows: [{
						clockwise: true, // true or false, defaults to true
						source: {
							anchor: 'right-top', // can be `{left, middle, right},{top-middle-bottom}`
							dx: 2,
							dy: 0
						},
						target: {
							x: '80%',
							y: '20%'
						}
				}]
}];

export const chart_ann = { us: us_part, eu: eu_part };