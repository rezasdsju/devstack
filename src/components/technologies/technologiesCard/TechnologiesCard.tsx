import { FaStar } from "react-icons/fa"
import type { TechnologiesType } from "../../../types/technologiesTypes"

interface TechnologyPropsTypes {
    technology: TechnologiesType
}
export default function TechnologiesCard({ technology }: TechnologyPropsTypes) {
    return (
        <div className="border border-gray-100 sm: gap-5">
            <div className="flex justify-between">
                <img src={technology.icon} alt="" className="h-10" />
                <p>{technology.badge}</p>
            </div>
            <h2 className="font-bold text-2xl">{technology.name}</h2>
            <p>{technology.description}</p>
            <div className="flex gap-5">
                <button className="btn btn-soft">{technology.category}</button>
                <p>{technology.difficulty}</p>
                <p><FaStar />{technology.rating}</p>

            </div>
            <button className="text-white px-10">Add to Stack</button>
        </div>
    )
}
