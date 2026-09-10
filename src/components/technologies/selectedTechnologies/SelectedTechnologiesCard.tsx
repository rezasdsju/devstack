import { FaXmark } from "react-icons/fa6"
import type { TechnologiesType } from "../../../types/technologiesTypes"

interface SelectedTechnologiesCardPropsType {
    technology: TechnologiesType,
    selected: TechnologiesType[],
    setSelected: React.Dispatch<React.SetStateAction<TechnologiesType[]>>,

}

export default function SelectedTechnologiesCard({ technology,selected,setSelected }: SelectedTechnologiesCardPropsType) {
    
    const handleDelete = ()=>{
        const restTechnologies = selected.filter(s=>s!==technology)
        setSelected(restTechnologies)
        // setIsSelected(false)
    }
    return (
        <div className="grid grid-cols-12 border border-slate-100 rounded-2xl mt-2 px-2 py-2">
            <div className="col-span-4 flex items-center gap-4">
                <img src={technology.icon} alt=""  className="h-8"/>
                <div >
                    <h2 className="text-bold text-xl">{technology.name}</h2>
                    <p>{technology.category}</p>
                </div>
            </div>
            <span onClick={handleDelete} className="col-span-8 flex items-center justify-end"><FaXmark /></span>
        </div>
    )
}
