import { FaStar } from "react-icons/fa"
import type { TechnologiesType } from "../../../types/technologiesTypes"
import type React from "react"
// import { useState } from "react"
import { Bounce, toast } from "react-toastify"

interface TechnologyPropsTypes {
    technology: TechnologiesType,
    selected: TechnologiesType[]
    setSelected: React.Dispatch<React.SetStateAction<TechnologiesType[]>>,

}
export default function TechnologiesCard({ technology, selected, setSelected }: TechnologyPropsTypes) {

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
    const handleAddToCart = () => {
        console.log('added')
        const newSelected = [...selected, technology]
        setSelected(newSelected)
        // setIsSelected(true)

        toast.success(`Stack ${technology.name} Added`, {
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
    const findInSelected = selected.find(s => s.id === technology.id)
    console.log('Find in Selected: ',findInSelected)
    return (
        <div className="border border-gray-100 rounded-2xl pt-3 pb-3 space-y-2">
            <div className="flex justify-between mx-2">
                <img src={technology.icon} alt="" className="h-10" />
                <button className={`${badgeColors[technology.badge]} rounded-xl px-4 `}>{technology.badge && technology.badge}</button>
            </div>
            <h2 className="font-bold text-2xl pl-2">{technology.name}</h2>
            <p className="pl-2">{technology.description}</p>
            <div className="flex flex-wrap gap-5 sm:gap-4 items-center border-t border-slate-200 w-[90%] mx-4 pt-2 pb-2">
                <button className="btn btn-soft">{technology.category}</button>
                <p>{technology.difficulty}</p>
                <p className=" flex  sm:basis-full md:basis-auto items-center"><FaStar />{technology.rating}</p>

            </div>
            <button onClick={handleAddToCart} className={`flex items-center ${findInSelected ? 'bg-slate-300' : 'bg-black'} text-white px-14 rounded-2xl mx-auto py-2`} disabled={findInSelected === undefined ? false : true}>{findInSelected ? 'Added' : 'Add to Stack'}</button>
        </div>
    )
}
