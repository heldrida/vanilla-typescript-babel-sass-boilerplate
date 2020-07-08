const createNode = (title: string) => {
  const body: HTMLBodyElement | null = document.querySelector('body')
  const h1 = document.createElement('h1')
  const text = document.createTextNode('Hello World!')
  h1.appendChild(text)
  body?.appendChild(h1)
}

export default createNode