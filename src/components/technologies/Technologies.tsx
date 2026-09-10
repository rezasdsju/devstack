import { use, useState } from "react"
import type { TechnologiesType } from "../../types/technologiesTypes"
import TechnologiesCard from "./technologiesCard/TechnologiesCard"

interface TechnologiesPropsTypes {
    technologiesPromise: Promise<TechnologiesType[]>
}

export default function Technologies({ technologiesPromise }: TechnologiesPropsTypes) {
    const technologies = use(technologiesPromise)
    const [selected, setSelected] = useState<TechnologiesType[]>([])
    console.log(technologies)
    console.log('selected: ',selected)
    return (
        <div className="mt-2 sm:mt-6 pl-2 sm:pl-4">
            <h2 className="text-3xl font-bold">Explore the <span className="text-[#D946EF]">Technologies</span></h2>
            <p className="pt-1">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-4 sm:mt-6">
                <div className="sm:col-span-9 grid grid-cols-1 sm:grid-cols-3 sm: gap-5 ">
                    
                        {
                            technologies.map(technology => <TechnologiesCard
                                key={technology.id}
                                selected={selected}
                                setSelected={setSelected}
                                technology={technology}></TechnologiesCard>)
                        }
                  
                </div>
                <div className="sm:col-span-3">
                    <div>
                        <h2>Your Stack</h2>
                        {/* <p>{selected? `${selected.length} Technologies are selected`: `No technologies selected yet.`}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
