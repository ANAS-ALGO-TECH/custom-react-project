import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// random variable
const data = 'New Google Account'

// ! case - 1
export const MyApp = () => {
  return <div>My App Component</div>
}

// ! case - 2
const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: 'Click Here to Visit Link',
}

// ! case - 3
const reactElem = (
  <a href='https://www.google.com' target='_blank'>
    Visit Google
  </a>
)

//! case - 4
const anOtherReactElement = React.createElement(
  'a', // element type
  // element attributes
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click Here to Visit Link', // element children
  data // after the tree completes, variables will be injected
)

ReactDOM.createRoot(document.getElementById('root')).render(anOtherReactElement)

// ? Use Cases you can try
// <MyApp/> //! Code will execute
// MyApp() //! Code will execute
// reactElement //! Error In Console
// <reactElement /> //! Error In Console
// reactElem //! Code will execute
