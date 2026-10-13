import Color from "./components/Color"
import Fejlec from "./components/Fejlec"
import Lablec from "./components/Lablec"

function App() {
  return (
    <>

      <Color>
        <Fejlec />
        <Lablec
          cim="ColorChanger"
          feladat="2"
        />
      </Color>
    </>
  )
}

export default App
