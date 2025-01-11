import Header from '../components/Header'
import Body from '../components/Body.jsx'
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;
export default function App() {
  return (
    <>
      <Header /> 
      <Body />
    </>
  )
}
