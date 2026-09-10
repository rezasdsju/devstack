import { FaXmark } from "react-icons/fa6"
import type { TechnologiesType } from "../../../types/technologiesTypes"

interface SelectedTechnologiesCardPropsType {
    technology: TechnologiesType
}

export default function SelectedTechnologiesCard({ technology }: SelectedTechnologiesCardPropsType) {
    return (
        <div className="grid grid-cols-12 border border-slate-100 rounded-2xl">
            <div className="col-span-4 flex items-center">
                <img src={technology.icon} alt=""  className="h-8"/>
                <div >
                    <h2>{technology.name}</h2>
                    <p>{technology.category}</p>
                </div>
            </div>
            <span className="col-span-8 flex items-center justify-end"><FaXmark /></span>
        </div>
    )
}
