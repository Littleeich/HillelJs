let data = [
	[
		`Project Brief`,
		[
			[`Project Documents`],
			[
				`Project Goals`,
				[
					`Design brand identity`,
					`Design mobile app`,
					`Design web app`,
					`Design marketing website`
				],
				`checkbox`
			],
			[
				`Success Metrics`,
				[
					`The brand would be distinctive and easily recognizable by potential users`,
					`The web/mobile applications would be user friendly and easy to navigate`,
					`The website would provide all information needed for the user to get started`,
					`The business objectives for the platform would be reached`
				],
				`checkbox`
			],
		]
	],
	[
		`Brand Identity`,
		[
			[`Strategy Document`],
			[
				`Design Deliverables`,
				[
					`Logo`,
					`Typeface`,
					`Colour`
				],
				`radio`
			],
			[
				`Brand Guidelines`
			],
		]
	],
	[
		`Product Design`,
		[
			[
				`User Research`,
				`A preliminary research stage to discover the user goals and business objectives, analyze competitors, and define the product solution clearly.`
			],
			[
				`Information Architecture`,
				`This is used to determine the number of views to design and how the user can navigate through the platform.`
			],
			[
				`Wireframes`,
				`Preliminary sketches to determine the structure of content on each section of the platform.`
			],
		]
	],
	[
		`Marketing Website`,
		[
			[`Sitemap`],
			[`Wireframes`],
			[`Visual Design`]
		]
	]
]

function createFormData(formName, arr, type) {
	let newName = updateFormName(formName)
	let formData = arr.map(function(el, iter){
		return `
		<div class="form-check">
			<input class="form-check-input" type="${type}" name="${newName}" id="${newName}-${iter}">
			<label class="form-check-label" for="${newName}-${iter}">
				${el}
			</label>
	 	</div>
		`
	})
	return formData.join('')
}

function updateFormName(formName) {
	return formName.toLowerCase().replace(' ', '_')
}

function getImageName(cardTitle) {
	return cardTitle.replace(' ', '')
}

function createOptionCounter(arr) {
	return `<span class="badge bg-primary rounded-pill">${arr.length}</span>`
}

function createListItem(arr) {
	let inputData = '', 
		counter= ''

	if(arr.length === 3) {
		inputData = createFormData(...arr)
		counter = createOptionCounter(arr[1])
	}

	return `
	<li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">${arr[0]}</div>
			${inputData}
        </div>
		${counter}
    </li>
	`
}

function createTrelloRow(arr) {
	let listItems = arr[1].map(function(el){
			return createListItem(el)
	})
	return `
	<div class="col-sm-12 col-md-6 col-lg-3 p-3">
		<div class="card">
		<img src="images/${getImageName(arr[0])}.jpeg" class="card-img-top" alt="${arr[0]}">
		<div class="card-body">
			<h5 class="card-title">${arr[0]}</h5>
			<ol class="list-group list-group-numbered">
				${listItems.join('')}
			</ol>
			</div>
		</div>
    </div>	
	`
}

function renderTrelloBoard(serverResponce) {
	let trelloBody = serverResponce.map( function(trelloBlock) {
		return createTrelloRow(trelloBlock)
	})

	document.write(`
	<div class="container">
         <div class="row">
		 	${trelloBody.join('')}
		 </div>
	</div>
	`)
}

renderTrelloBoard(data)