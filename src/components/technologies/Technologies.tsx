import { use, useState } from "react"
import type { TechnologiesType } from "../../types/technologiesTypes"
import TechnologiesCard from "./technologiesCard/TechnologiesCard"
import SelectedTechnologiesCard from "./selectedTechnologies/SelectedTechnologiesCard"
import { Bounce, toast } from "react-toastify"

interface TechnologiesPropsTypes {
    technologiesPromise: Promise<TechnologiesType[]>
}

export default function Technologies({ technologiesPromise }: TechnologiesPropsTypes) {
    const technologies = use(technologiesPromise)
    // const [technologies, setTechnologies] = useState<TechnologiesType[]>(technologiesData)
    const [selected, setSelected] = useState<TechnologiesType[]>([])
    // const [isSelected, setIsSelected] = useState<boolean>(false)
    // console.log(technologies)
    // console.log('selected: ',selected)

    const handleDeleteAll = () => {
        setSelected([])
        toast.info(`Removed All Selected Stack `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    return (
        <div className="mt-2 sm:mt-6 pl-2 sm:pl-4">
            <h2 className="text-3xl font-bold">Explore the <span className="bg-linear-to-r from-[#ff4b2b] via-[#e91e63] to-[#8e2de2] bg-clip-text text-transparent font-bold">Technologies</span></h2>
            <p className="pt-1">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-4 sm:mt-6">
                <div className="sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm: gap-5 ">

                    {
                        technologies.map(technology => <TechnologiesCard
                            key={technology.id}
                            selected={selected}
                            setSelected={setSelected}
                            technology={technology}
                        ></TechnologiesCard>)
                    }

                </div>
                <div className="sm:col-span-3 sm:ml-3 border border-slate-200 rounded-2xl mx-auto px-3 py-3 mt-15 sm:mt-0">
                    <div>
                        <h2>Your Stack</h2>
                        <p>{selected.length > 0 ? `${selected.length} Technologies selected` : `No technologies selected yet.`}</p>
                        {selected.length === 0 ?
                            <div className="border border-gray-200 px-4 py-7 mt-4 rounded-2xl">
                                <h2>Your Stack is Empty</h2>
                            </div> : <div>
                                {selected.map(technology => <SelectedTechnologiesCard
                                    key={technology.id}
                                    technology={technology}
                                    selected={selected}
                                    setSelected={setSelected}


                                ></SelectedTechnologiesCard>)}
                            </div>}
                        {/* <div>
                            {selected.map(technology=> <SelectedTechnologiesCard 
                            key={technology.id} 
                            technology={technology}
                            selected={selected}
                            setSelected={setSelected}
                          
                         
                            ></SelectedTechnologiesCard>)}
                        </div> */}
                    </div>
                    {selected.length !== 0 ?
                        <div className="border border-gray-200   rounded-2xl mt-4">
                            <button onClick={handleDeleteAll} className="block text-red-400 text-xl font-bold mx-auto py-4">Remove All</button>
                        </div> : ''}
                </div>

            </div>
        </div>
    )
}
