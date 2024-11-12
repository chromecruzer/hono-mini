// src/App.tsx
import { useState } from 'hono/jsx'
import { AboutUs } from './AboutUs.js'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export function App() {
  const [showAboutUs, setShowAboutUs] = useState(false)

  return (
    <html>
      <body>
        {/* Nav Bar Button */}
        <div style={{ padding: '10px', background: '#007bff', color: 'white' }}>
          <button
            onClick={() => setShowAboutUs(!showAboutUs)}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {showAboutUs ? 'Back to Counter' : 'Go to About Us'}
          </button>
        </div>

        {/* Conditionally render Counter or AboutUs */}
        {showAboutUs ? <AboutUs /> : <Counter />}
      </body>
    </html>
  )
}
