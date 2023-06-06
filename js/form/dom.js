// DOM

const form = document.forms.formBuy
const inputs = form.getElementsByTagName('input')
const select = form.getElementsByTagName('select')[0]

const inpName = document.getElementById('inputName')
const inpLastname = document.getElementById('inputLastname')
const inpEmail = document.getElementById('inputEmail')
const inpQuantity = document.getElementById('inputQuantity')
const inpCategory = document.getElementById('inputCategory')

const totalTag = document.getElementById('totalPay')

const resetBtn = document.getElementById('btn-clear')
const buyBtn = document.getElementById('btn-buy')
