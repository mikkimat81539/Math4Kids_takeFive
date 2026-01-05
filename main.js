/* have number input set to only numbers
store number input in local storage when save button is pressed
save checked subjects in local storage
remove if unchecked

if page is refreshed, show user settings from local storage"
*/

const numQuestions = document.getElementById('numQuestions')
const subjectBox = document.querySelectorAll('subjectBox')
const submitBtn = document.getElementById('submitBtn')

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

submitBtn.addEventListener('click', (ev) => {
	ev.preventDefault()
	numberInputStorage()

})
