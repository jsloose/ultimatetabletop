import Draggable from 'react-draggable';
import './dragList.css'

const DragList = () => {

    const NameList = (props) => {
        return (
            <Draggable>
                <div>
                    <div>
                        <center>
                            {props.entry}
                        </center>
                    </div>
                </div>
            </Draggable>
        );
    }

    const npcNames = ['Monster 1','Monster 2','Monster 3','Monster 4'];

    return (
        <div className="dragMenu">
            {npcNames.map((name) => <NameList entry={name} />)}
        </div>
    );
};

export default DragList;