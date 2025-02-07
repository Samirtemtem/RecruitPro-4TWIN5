import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SimpleList = () => {
  const [tasks, setTasks] = useState([
    "Design logo for fictional company",
    "Draft 300-word blog post",
    "Create project plan with milestones",
    "Develop sample interview questions",
    "Generate customer feedback for product.",
    "Write email template for newsletter.",
  ]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <>
      {" "}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ol
              className="list-group sortable-list list-group-numbered"
              id="simple-list"
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
      </DragDropContext>
    </>
  );
};

export default SimpleList;
