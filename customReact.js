//! ========= 1) customReact Element Function to Render a Single Element
// const customReact = (reactElement, container) => {
//   const domElement = document.createElement(reactElement.type)
//   domElement.innerHTML = reactElement.children
//   domElement.setAttribute('href', reactElement.props.href)
//   domElement.setAttribute('target', reactElement.props.target)

//   container.appendChild(domElement)
// }

//! ========= 2) customReact Element Function to Render Render a Single Element but
//! ========= using loop to render multiple attributes of the element and also handling the case
//! ========= if element has no property
const customReact = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children

  for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: 'Click Here to Visit Link',
}

const mainContainer = document.getElementById('root')

customReact(reactElement, mainContainer)
