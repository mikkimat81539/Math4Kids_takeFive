/*
for date range set minimum of from date to current date
for to date, set min to anything after current date
save date range to local storage using JSON format {from: mm/dd/yyyy to: ,mm/dd/yyyy}
if page is refreshed, show user settings from local storage"
*/

const numQuestions = document.getElementById('numQuestions')
const subjectBox = document.querySelectorAll('.subjectBox')
const submitBtn = document.getElementById('submitBtn')
const fromDate = document.getElementById('fromDate')

numQuestions.addEventListener('input', numberInputStorage)

function numberInputStorage(){
	const regex = /^[^\d]+$/
	numQuestions.value = numQuestions.value.replace(regex, "")

	const numberNameAttr = numQuestions.getAttribute('name')

	if (numQuestions.value !== ''){
		localStorage.setItem(numberNameAttr, numQuestions.value)
	}

	else {
		localStorage.removeItem(numberNameAttr)
	}
}

function subjectStorage(){
	for (let i=0; i < subjectBox.length; i++) {
		const subjectNameAttr = subjectBox[i].getAttribute('name')
		subjectBox[i].style.cursor = "pointer"
	
		if(subjectBox[i].checked){
			localStorage.setItem(subjectNameAttr, 'selected')
		}

		else {
			localStorage.removeItem(subjectNameAttr)	
		}
	}

}

function DateRange(){
	const minAttr = fromDate.getAttribute('min')
	const currDay = new Date()
	const year = currDay.getFullYear()
	const month = currDay.getMonth()
	const date = currDay.getDate()

	const dateFormat = `${String(year)}-${String(month +1).padStart(2, "0")}-${String(date).padStart(2, "0")}` 
	fromDate.setAttribute("min", dateFormat)
}

DateRange()

submitBtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	numberInputStorage()
	subjectStorage()
})
