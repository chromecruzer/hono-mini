import { Hono } from 'hono'
import type { FC } from 'hono/jsx'
import { Layout } from './seo-ui/Layout'

const home = new Hono()

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout title="Home Page" description="Welcome to the home page">
      <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-blue-600">Hello Hono!</h1>
        <ul className="list-disc list-inside mb-6 space-y-4">
          {props.messages.map((message, index) => {
            return (
              <li key={index} className="text-xl text-gray-800 bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition duration-200 ease-in-out"> 
                {message}!!
              </li>
            )
          })}
        </ul>
        <button 
          className="bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200 ease-in-out"
          hx-get="/page/alert" 
          hx-target="#message" 
          hx-swap="innerHTML"
        >
          HI
        </button>
        <div id="message" className="mt-4 text-gray-700 font-medium"></div> {/* This will display the response */}
      </div>
    </Layout>
  )
}

home.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})

export default home
