const createNode = () => {
  // const body: HTMLBodyElement | null = document.querySelector('body')
  // const h1 = document.createElement('h1')
  // const text = document.createTextNode('Hello World!')
  // h1.appendChild(text)
  // body?.appendChild(h1)

  const body: HTMLBodyElement | null = document.querySelector('body')
  const img: HTMLImageElement | null = document.createElement('img')

  if (img) {
    img.src = 'https://raw.githubusercontent.com/heldrida/vanilla-typescript-babel-sass-boilerplate/master/static/images/logo.png'
    body?.appendChild(img)
  }
}

export default createNode