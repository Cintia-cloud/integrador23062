// UTILS

const colors = ['bg-primary', 'bg-success', 'bg-warning']
const transparent = 'bg-transparent'

const changeColor = (container, index, revert = false) => {

    const i = Number(index)

    revert
        ? container.classList.replace(colors[i], transparent)
        : container.classList.replace(transparent, colors[i])
}

const changeAllColor = (containerALL) => {

    const lenCon = containerALL.length
    const lenCol = colors.length

    for(let i = 0; i < lenCon; i++)
    {
        for(let j = 0; j < lenCol; j++)
        {
            containerALL[i].classList.replace(colors[j], transparent)
        }
    }
}

const matchCategory = (selection) => {

    switch (selection) {
        case "0":
            form.inputCategory.value = 'a'
            break
        case "1":
            form.inputCategory.value = 'b'
            break
        case "2":
            form.inputCategory.value = 'c'
            break
        default:
            throw new Error('No se pudo asociar la categoría.')
    }
}