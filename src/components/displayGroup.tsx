import Display from "./display";
import VolumeBar from "./volume-bar";
import PowerSwitch from "./switch";

function DisplayGroup(){
    return(<div>
            <PowerSwitch />
            <VolumeBar />
            <Display />
        </div>
    )
}

export default DisplayGroup;