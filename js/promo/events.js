// EVENTOS

const eventsAssignmentAll = () => {

    for (let container of cardsContainer) {

       // eventCleaner(container)

        const { index } = container.dataset
        
        if (index !== selected) {
        //    eventAssignment(container)
            changeColor(container, index, true)
        }
    }
}

// EVENTOS: ASIGNACION

eventsAssignmentAll()