import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SortingHandle: React.FC = () => {
  const [tasks, setTasks] = useState([
    "Analyze market trends.",
    "Edit video content.",
    "Plan social media calendar.",
    "Update company policies.",
    "Compile sales reports.",
    "Schedule client calls.",
  ]);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="card-body">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks-list">
          {(provided) => (
            <ol
              className="list-group sortable-list list-item-numbered"
              id="sorting-with-handle"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={task} draggableId={task} index={index}>
                  {(provided) => (
                    <li
                      className="list-group-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <i
                        className="fas fa-arrows-alt me-2 text-dark fs-16 handle lh-1"
                        {...provided.dragHandleProps}
                      />
                      {task}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SortingHandle;
