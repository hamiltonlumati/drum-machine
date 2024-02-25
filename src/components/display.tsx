import { RootState } from "../app/store";
import { useSelector } from "react-redux";

function Display(){
    const key = useSelector((state: RootState) => state.drum.key)
    return(
        <div className="w-52 text-center h-10 bg-red-500 basis-10 py-2" id="display">
            {key}
        </div>
    )
}

export default Display;