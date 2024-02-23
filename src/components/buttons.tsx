import { useDispatch } from "react-redux";
import {Q, W, E, A, S, D, Z, X, C} from '../features/drummer/drumSlice'

function Buttons(){
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-3 gap-2 w-52">
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(Q())}>Q</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(W())}>W</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(E())}>E</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(A())}>A</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(S())}>S</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(D())}>D</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(Z())}>Z</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(X())}>X</button>
            <button className="box-border h-16 w-16 p-4 bg-red-500" onClick={()=> dispatch(C())}>C</button>
        </div>
    )
}
export default Buttons;