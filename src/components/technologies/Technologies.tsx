import { use } from "react"
import type { TechnologiesType } from "../../types/technologiesTypes"

interface TechnologiesPropsTypes {
    technologiesPromise: Promise<TechnologiesType[]>
}

export default function Technologies({technologiesPromise}:TechnologiesPropsTypes) {
  const technologies = use(technologiesPromise)
  console.log(technologies)
  return (
    <div className="mt-2 sm:mt-6 pl-2 sm:pl-4">
        <h2 className="text-3xl font-bold">Explore the <span className="text-[#D946EF]">Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
    </div>
  )
}
