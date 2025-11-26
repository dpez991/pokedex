import { Button } from './components/Button'
import { HeroPanel } from './components/HeroPanel'

function App() {
  return (
    <>
      <HeroPanel photoId="25" />
      <div>
        <Button className="" >
          <span>Haz Click</span>
        </Button>
        <Button className="principal" >
          <span>Principal</span>
        </Button>
      </div>
    </>
  )
}

export default App
