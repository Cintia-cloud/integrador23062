// UTILS

const totalPrice = (valTicket, valCategory, valPrice, valCategories, valTotalText) => {

    if (!valTicket || !valCategory) return;

    const totalValue = valPrice * valTicket
    const discount = (totalValue / 100) * valCategories

    total = totalValue - discount

    totalTag.innerText = valTotalText + total
}

