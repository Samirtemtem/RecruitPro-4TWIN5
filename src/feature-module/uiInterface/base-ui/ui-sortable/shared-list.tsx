import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
const SharedList = () => {
  const [leftTasks, setLeftTasks] = useState([
    "Sketch a website homepage",
    "Plan team-building activity.",
    "Summarize meeting minutes.",
    "Code a simple webpage.",
    "Create survey questions.",
    "Schedule team meeting.",
  ]);

  const [rightTasks, setRightTasks] = useState([
    "Edit product description.",
    "Brainstorm marketing ideas.",
    "Write slogan for brand.",
    "Update contact information.",
    "Proofread blog post.",
    "Analyze sales data.",
  ]);

  const handleDragEndShared = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const tasks =
        source.droppableId === "shared-left"
          ? Array.from(leftTasks)
          : Array.from(rightTasks);
      const [movedItem] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, movedItem);

      source.droppableId === "shared-left"
        ? setLeftTasks(tasks)
        : setRightTasks(tasks);
    } else {
      const sourceTasks =
        source.droppableId === "shared-left"
          ? Array.from(leftTasks)
          : Array.from(rightTasks);
      const destinationTasks =
        destination.droppableId === "shared-left"
          ? Array.from(leftTasks)
          : Array.from(rightTasks);

      const [movedItem] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedItem);

      if (source.droppableId === "shared-left") {
        setLeftTasks(sourceTasks);
        setRightTasks(destinationTasks);
      } else {
        setLeftTasks(destinationTasks);
        setRightTasks(sourceTasks);
      }
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEndShared}>
        <div className="card-body">
          <div className="row">
            <div className="col-xl-6">
              <Droppable droppableId="shared-left">
                {(provided) => (
                  <ol
                    className="list-group sortable-list list-group-numbered"
                    id="shared-left"
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
                  </ol>
                )}
              </Droppable>
            </div>
            <div className="col-xl-6">
              <Droppable droppableId="shared-right">
                {(provided) => (
                  <ol
                    className="list-group sortable-list list-group-numbered"
                    id="shared-right"
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
                  </ol>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default SharedList;
