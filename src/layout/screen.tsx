import Keys from "../components/keys";
import Display from "../components/display";

function Screen(){
    return (
        <div className="p-2 flex flex-col gap-2 h-fit w-fit bg-gray-dark" id="drum-machine">
            <Display />
            <Keys />
        </div>
    )
}

export default Screen;