import { useDispatch } from "react-redux";
import {Q, W, E, A, S, D, Z, X, C} from '../features/drummer/drumSlice'
import { useEffect } from "react";

declare global {
    interface WindowEventMap {
        keydown: React.KeyboardEvent<HTMLInputElement>
    }
}

function Keys(){
    const dispatch = useDispatch();

    const handleUserKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = event
        if(key=== 'Q' || key === 'q'){
            dispatch(Q());
        }

        //W
        if(key === 'W' || key === 'w'){
            dispatch(W());
        }

        //E
        if(key === 'E' || key === 'e'){
            dispatch(E());
        }

        //A
        if(key === 'A' || key === 'a'){
            dispatch(A());
        }

        //S
        if(key === 'S' || key === 's'){
            dispatch(S());
        }

        //D
        if(key === 'D' || key === 'd'){
            dispatch(D());
        }

        //Z
        if(key === 'Z' || key === 'z'){
            dispatch(Z());
        }

        //X
        if(key === 'X' || key === 'x'){
            dispatch(X());
        }

        //C
        if(key === 'C' || key === 'c'){
            dispatch(C());
        }
    }
    
    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress)
    
        return () => {
            window.removeEventListener('keydown', handleUserKeyPress)
        }
    })
    
    return (
        <div className="grid grid-cols-3 gap-2 w-52 basis-52">
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
export default Keys;