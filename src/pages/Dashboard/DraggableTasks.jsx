import './DraggableTasks.css';

const DraggableTasks = () => {

    /* const handleOnDrop = (e) => {
        e.preventDefault();
        console.log("handleOnDrop");
    } */
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-red-600 text-center">Draggable Tasks</h2>
            <p>Drag the W3Schools image into the rectangle:</p>

            <div id="div1" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
            <p>Drag the W3Schools image into the rectangle:</p>
            <div id="div2" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}></div>
            <br />
            <img id="drag1" src="https://www.w3schools.com/html/img_logo.gif" draggable="true" onDragStart={(event) => drag(event)} width="336" height="69" />

            {/* <div draggable id="to-do">
                <div>
                    <h2>ToDo</h2>
                </div>
            </div>
            <div draggable onDrop={(e) => handleOnDrop(e)} id="ongoing">
                <h2>Ongoing</h2>
            </div>
            <div draggable id="completed">
                <h2>Completed</h2>
            </div> */}
        </div>
    );
};

export default DraggableTasks;