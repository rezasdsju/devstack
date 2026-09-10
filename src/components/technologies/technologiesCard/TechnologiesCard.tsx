import { FaStar } from "react-icons/fa"
import type { TechnologiesType } from "../../../types/technologiesTypes"

interface TechnologyPropsTypes {
    technology: TechnologiesType
}
export default function TechnologiesCard({ technology }: TechnologyPropsTypes) {
    const badgeColors: Record<string, string> = {
        Popular: "bg-blue-100 text-blue-700",
        Trending: "bg-blue-100 text-blue-700",
        React: "bg-blue-100 text-blue-700",

        "Top SQL": "bg-green-100 text-green-700",
        NoSQL: "bg-green-100 text-green-700",

        Essential: "bg-purple-100 text-purple-700",
        Python: "bg-purple-100 text-purple-700",

        Backend: "bg-orange-100 text-orange-700",
        DevOps: "bg-orange-100 text-orange-700",
    }
    return (
        <div className="border border-gray-100 rounded-2xl pt-3 pb-3 space-y-2">
            <div className="flex justify-between mx-2">
                <img src={technology.icon} alt="" className="h-10" />
                <button className={`${badgeColors[technology.badge]} rounded-xl px-4 `}>{technology.badge && technology.badge}</button>
            </div>
            <h2 className="font-bold text-2xl pl-2">{technology.name}</h2>
            <p className="pl-2">{technology.description}</p>
            <div className="flex gap-5 items-center border-t border-slate-200 w-[90%] mx-4 pt-2 pb-2">
                <button className="btn btn-soft">{technology.category}</button>
                <p>{technology.difficulty}</p>
                <p className="flex items-center"><FaStar />{technology.rating}</p>

            </div>
            <button className="flex items-center bg-black text-white px-14 rounded-2xl mx-auto py-2">Add to Stack</button>
        </div>
    )
}
