import { Bill } from "./components/Bill"
import styled from "styled-components"
function App() {

  return (
    <Container className="App">
      <Bill />
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`