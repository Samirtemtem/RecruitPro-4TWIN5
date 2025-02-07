import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const Cloning = () => {
  const [leftTasks, setLeftTasks] = useState([
    "Update social media profiles.",
    "Draft project budget.",
    "Brainstorm domain names.",
    "Revise resume content.",
    "Test website functionality.",
    "Edit meeting agenda.",
  ]);

  const [rightTasks, setRightTasks] = useState([
    "Create mood board.",
    "Design event flyer.",
    "Research industry trends.",
    "Format spreadsheet cells.",
    "Outline marketing strategy.",
    "Compile data report.",
  ]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceList =
      source.droppableId === "cloning-left"
        ? Array.from(leftTasks)
        : Array.from(rightTasks);
    const destinationList =
      destination.droppableId === "cloning-left"
        ? Array.from(leftTasks)
        : Array.from(rightTasks);

    const clonedItem = sourceList[source.index];

    if (source.droppableId === destination.droppableId) {
      destinationList.splice(destination.index, 0, clonedItem);
      if (destination.droppableId === "cloning-left") {
        setLeftTasks(destinationList);
      } else {
        setRightTasks(destinationList);
      }
    } else {
      destinationList.splice(destination.index, 0, clonedItem);

      if (source.droppableId === "cloning-left") {
        setRightTasks(destinationList);
      } else {
        setLeftTasks(destinationList);
      }
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="card-body">
          <div className="row">
            <div className="col-xl-6">
              <Droppable droppableId="cloning-left">
                {(provided) => (
                  <ul
                    className="list-group sortable-list"
                    id="cloning-left"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {leftTasks.map((task, index) => (
                      <Draggable key={task} draggableId={task} index={index}>
                        {(provided) => (
                          <li
                            className="list-group-item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task}
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
            <div className="col-xl-6">
              <Droppable droppableId="cloning-right">
                {(provided) => (
                  <ul
                    className="list-group sortable-list"
                    id="cloning-right"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {rightTasks.map((task, index) => (
                      <Draggable key={task} draggableId={task} index={index}>
                        {(provided) => (
                          <li
                            className="list-group-item"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task}
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default Cloning;
