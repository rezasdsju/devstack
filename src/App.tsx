import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
// import Technologies from "./components/technologies/Technologies"
import type {  TechnologiesType } from "./types/technologiesTypes"
import Technologies from "./components/technologies/Technologies"

const technologiesFetch = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {
  const technologiesPromise = technologiesFetch()

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.....</p>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
    </>
  )
}

export default App
