import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SortingFilter: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Analyze market trends.", isFiltered: false },
    { id: "2", text: "Edit video content.", isFiltered: false },
    { id: "3", text: "Plan social media calendar.", isFiltered: false },
    { id: "4", text: "Update company policies.", isFiltered: true },
    { id: "5", text: "Compile sales reports.", isFiltered: false },
    { id: "6", text: "Schedule client calls.", isFiltered: false },
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
            <ul
              className="list-group sortable-list"
              id="sorting-with-filter"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) =>
                task.isFiltered ? (
                  <li key={task.id} className="list-group-item filtered">
                    {task.text}
                  </li>
                ) : (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        className="list-group-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.text}
                      </li>
                    )}
                  </Draggable>
                )
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SortingFilter;
