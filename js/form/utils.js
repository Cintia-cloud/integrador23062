// UTILS

const calculatePrice = (valQuantity, valCategory, valPrice, valCategories, valTotalText) => {

    if (!valQuantity || !valCategory) return;

    const totalValue = valPrice * valQuantity
    const discount = (totalValue / 100) * valCategories

    total = totalValue - discount
    totalTag.innerText = valTotalText + total
}

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })