import { FaXmark } from "react-icons/fa6"
import type { TechnologiesType } from "../../../types/technologiesTypes"
import { Bounce, toast } from "react-toastify"

interface SelectedTechnologiesCardPropsType {
    technology: TechnologiesType,
    selected: TechnologiesType[],
    setSelected: React.Dispatch<React.SetStateAction<TechnologiesType[]>>,

}

export default function SelectedTechnologiesCard({ technology, selected, setSelected }: SelectedTechnologiesCardPropsType) {

    const handleDelete = () => {
        const restTechnologies = selected.filter(s => s !== technology)
        setSelected(restTechnologies)
        // setIsSelected(false)

        toast.info(`Removed Stack ${technology.name}`, {
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
        <div className="grid grid-cols-12 border border-slate-100 rounded-2xl mt-2 px-2 py-2">
            <div className="col-span-4 flex items-center gap-4">
                <img src={technology.icon} alt="" className="h-8" />
                <div >
                    <h2 className="text-bold text-xl">{technology.name}</h2>
                    <p>{technology.category}</p>
                </div>
            </div>
            <span onClick={handleDelete} className="col-span-8 flex items-center justify-end"><FaXmark /></span>
        </div>
    )
}
