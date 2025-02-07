import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const DisableSorting = () => {
  const [leftTasks, setLeftTasks] = useState([
    "Write customer service script.",
    "Schedule team training.",
    "Edit presentation slides.",
    "Generate weekly schedule.",
    "Review expense reports.",
    "Create product catalog.",
  ]);

  const [rightTasks, setRightTasks] = useState([
    "Brainstorm blog topics.",
    "Draft press release.",
    "Update employee handbook.",
    "Design event tickets.",
    "Summarize research findings.",
    "Plan office layout.",
  ]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId !== "disabling-sorting-left") return;

    if (source.droppableId === destination.droppableId) return;

    const sourceList = Array.from(leftTasks);
    const destinationList = Array.from(rightTasks);

    const clonedItem = sourceList[source.index];
    destinationList.splice(destination.index, 0, clonedItem);

    setRightTasks(destinationList);
  };

  return (
    <div className="card-body">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row">
          <div className="col-xl-6">
            <Droppable droppableId="disabling-sorting-left">
              {(provided) => (
                <ul
                  className="list-group sortable-list"
                  id="disabling-sorting-left"
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
            <Droppable droppableId="disabling-sorting-right">
              {(provided) => (
                <ul
                  className="list-group sortable-list"
                  id="disabling-sorting-right"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {rightTasks.map((task, index) => (
                    <li key={index} className="list-group-item">
                      {task}
                    </li>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default DisableSorting;
