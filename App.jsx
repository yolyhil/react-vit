
import './App.css'
import { Button } from 'antd'
import Navbar from './components/menunav/nav'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
function App() {
  return (
    <div>
      <Navbar />
      <Button>Elegir</Button>
      <ItemListContainer greeting='Bienvenidos'/>

      </div>
  )
}
export default App
