// EVENTS

const resetCategories = () => {
    total = null
    selected = null
    category = null
    eventsAssignmentAll()
    totalTag.innerText = totalText
}

const setCategory = (e) => {

    const option = e.target.value

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

    totalPrice(tickets, category, price, categories[category].percent, totalText)
}

const setTicket = (e) => {

    const { value } = e.target

    if (value < 0 || isNaN(value)) {
        e.target.value = 0
        total = null
        return
    }

    tickets = value

    if(category != null){
        totalPrice(tickets, category, price, categories[category].percent, totalText)
    }

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
        email: inputCorreo.value.includes('@'),
        tickets: inputQuantity.value > 0,
        category: inputCategory.value !== 'none'
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

form.inputCategory.addEventListener('change', setCategory)

form.inputQuantity.addEventListener('change', setTicket)
form.inputQuantity.addEventListener('keyup', setTicket)

resetBtn.addEventListener('click', reset)
buyBtn.addEventListener('click', buyTickets)