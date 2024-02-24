import { useDispatch } from "react-redux";
import {Q, W, E, A, S, D, Z, X, C} from '../features/drummer/drumSlice'

function Keys(){
    const dispatch = useDispatch();

    var addEvent = document.addEventListener ? function(target: DocumentEventMap,type: String, action: boolean){
        if(target){
            target.addEventListener(type,action,false);
        }
    } : function(target: Document,type: String,action: boolean){
        if(target){
            target.attachEvent('on' + type,action,false);
        }
    }
    
    addEvent(document,'keydown',function(e){
        e = e || window.event;
        var key = e.which || e.keyCode;
        //Q
        if(key===81){
            dispatch(Q());
        }

        //W
        if(key===87){
            dispatch(W());
        }

        //E
        if(key===69){
            dispatch(E());
        }

        //A
        if(key===65){
            dispatch(A());
        }

        //S
        if(key===83){
            dispatch(S());
        }

        //D
        if(key===68){
            dispatch(D());
        }

        //Z
        if(key===90){
            dispatch(Z());
        }

        //X
        if(key===88){
            dispatch(X());
        }

        //C
        if(key===67){
            dispatch(C());
        }
    });

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
export default Keys;