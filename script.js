document.addEventListener('DOMContentLoaded', function (event) {
  let buttons = document.querySelectorAll('button')

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', listener, false)
  }

  function listener(e) {
    e.preventDefault()

    let currentValue = e.target.innerHTML

    if (currentValue === '=') {
      let expression = document.getElementById('inputBox').value
      let result = eval(expression)

      document.getElementById('inputBox').value = result
    } else if (currentValue === 'AC') {
      document.getElementById('inputBox').value = ''
    } else if (currentValue === 'DEL') {
      let existingValue = document.getElementById('inputBox').value
      document.getElementById('inputBox').value = existingValue.slice(0, -1)
    } else {
      document.getElementById('inputBox').value += currentValue
    }
  }
})
