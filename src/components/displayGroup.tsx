import Display from "./display";
import VolumeBar from "./volume-bar";

function DisplayGroup(){
    return(<div>
            <VolumeBar />
            <Display />
        </div>
    )
}

export default DisplayGroup;