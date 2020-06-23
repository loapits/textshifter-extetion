const input = document.querySelector('.inputTextarea')
const output = document.querySelector('.outputTextarea')

const replacer = {
  "q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г", 
  "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы", 
  "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д", 
  ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
  "n":"т", "m":"ь", ",":"б", ".":"ю", "/":".", "&":"?", "|":"/",
  ":":"Ж", "\"":"Э", "?":",", "{":"Х", "}":"Ъ", ">":"Ю", "<":"Б",
  "#":"№", "$":";", "^":":", "~":"Ё", "`":"ё"
}

const replace = (replacer, enterText, replace) => {
  for (let i = 0; i < enterText.length; i++) {                        
    if( replacer[enterText[i].toLowerCase()] !== undefined ) {
      if (enterText[i] === enterText[i].toLowerCase()) {
        replace = replacer[enterText[i].toLowerCase()]    
      } else if (enterText[i] === enterText[i].toUpperCase()) {
        replace = replacer[enterText[i].toLowerCase()].toUpperCase();
      }
      enterText = enterText.replace(enterText[i], replace)        
    }
  }
  return enterText
}

document.querySelector('#uppercase').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    const text = enterText.toUpperCase()
    output.innerHTML = text
  }
})

document.querySelector('#lowercase').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    const text = enterText.toLowerCase()
    output.innerHTML = text
  }
})

document.querySelector('#firstTitle').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    const text = enterText[0].toUpperCase() + enterText.slice(1) 
    output.innerHTML = text
  }
})

document.querySelector('#registerInversion').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    let text = ''
    for (let i = 0; i < enterText.length; i++) {
      enterText[i].toUpperCase() === enterText[i] 
        ? text += enterText[i].toLowerCase()
        : text += enterText[i].toUpperCase()
    }
    output.innerHTML = text
  }
})

document.querySelector('#startAsUppercase').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    const text = enterText.replace(/(^|\s)\S/g, txt => txt.toUpperCase())
    output.innerHTML = text
  }
})

document.querySelector('#sentence').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    const text = enterText[0].toUpperCase() + (enterText.replace(/(^|[?!.;]\s[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}])/gu, txt => txt.toUpperCase())).slice(1)
    output.innerHTML = text
  }
})

document.querySelector('#replace').addEventListener('click', () => {
  const enterText = input.value
  if (enterText) {
    Object.keys(replacer).forEach((key) => {
      return replacer[replacer[key]] = key
    })

    const text = replace(replacer, enterText, '')
    output.innerHTML = text
  }
})