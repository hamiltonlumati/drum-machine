import { RootState } from "../app/store";
import { useSelector } from "react-redux";

function Display(){
    const key = useSelector((state: RootState) => state.drum.key)
    return(
        <div>
            {key}
        </div>
    )
}

export default Display;