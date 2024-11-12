// src/main.ts

import { render } from 'hono/jsx/dom'
import { App } from './App'
import '../style.css';  // Import your CSS

// Select the root element from the HTML
const root = document.getElementById('root')

// Render the App component into the root element
if (root) {
  render(<App/>, root)
}
