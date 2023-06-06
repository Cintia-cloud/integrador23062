// EVENTS

const setName = (e) => {
    inpName.classList.remove('is-invalid')
}

const setLastname = (e) => {
    inpLastname.classList.remove('is-invalid')
}

const setEmail = (e) => {
    inpEmail.classList.remove('is-invalid')
}

const setCategory = (e) => {

    const option = e.target.value

    inpCategory.classList.remove('is-invalid')

    if (option === 'none') {
        resetCategories()
        return
    }

    category = option
    const index = categories[category].value
    const container = cardsContainer[index]

    selected = index

    if (option === 'd') {
        changeAllColor(cardsContainer)
    }
    else{
        changeColor(container, index)
    }

    eventsAssignmentAll()

    calculatePrice(quantity, category, price, categories[category].percent, totalText)
}

const setQuantity = (e) => {

    const { value } = e.target

    inpQuantity.classList.remove('is-invalid')

    if (value < 0 || isNaN(value)) {
        e.target.value = 0
        total = null
        return
    }

    quantity = value

    if(category != null){
        calculatePrice(quantity, category, price, categories[category].percent, totalText)
    }

}

const resetCategories = () => {
    total = null
    selected = null
    category = null
    eventsAssignmentAll()
    totalTag.innerText = totalText
}

// EVENTS: BUTTONS

const reset = (e) => {

    e.preventDefault()

    for (let input of inputs)
        input.value = ''

    select.value = 'none'

    resetCategories()
}

const buyTickets = (e) => {

    e.preventDefault()
    
    const verified = {
        firstname: inputName.value !== '',
        lastname: inputLastname.value !== '',
        email: inputEmail.value.includes('@'),
        quantity: inputQuantity.value > 0,
        category: inputCategory.value !== 'none'
    }

    if(inputName.value === '')
    {
        inpName.classList.add('is-invalid')
    }

    if(inputLastname.value === '')
    {
        inpLastname.classList.add('is-invalid')
    }

    if (!inputEmail.value.includes('@'))
    {
        inpEmail.classList.add('is-invalid')
    }

    if (inputQuantity.value <= 0)
    {
        inpQuantity.classList.add('is-invalid')
    }

    if (inputCategory.value === 'none')
    {
        inpCategory.classList.add('is-invalid')
    }

    const values = Object.values(verified)
    const submitAccepted = values.every(value => value)

    submitAccepted
        ? location.href = './ticket_confirm.html'
        :  Swal.fire({
          icon: 'error',
          text: 'Debe completar todos los campos correctamente.'
        })
}

// ASIGNACION DE EVENTOS
form.inputName.addEventListener('change', setName)
form.inputName.addEventListener('keyup', setName)

form.inputLastname.addEventListener('change', setLastname)
form.inputLastname.addEventListener('keyup', setLastname)

form.inputEmail.addEventListener('change', setEmail)
form.inputEmail.addEventListener('keyup', setEmail)

form.inputCategory.addEventListener('change', setCategory)

form.inputQuantity.addEventListener('change', setQuantity)
form.inputQuantity.addEventListener('keyup', setQuantity)

resetBtn.addEventListener('click', reset)
buyBtn.addEventListener('click', buyTickets)