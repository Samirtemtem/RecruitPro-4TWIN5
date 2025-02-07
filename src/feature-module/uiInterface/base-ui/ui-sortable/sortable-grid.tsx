import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const SortableGrid: React.FC = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, index) => `Item-${index + 1}`)
  );

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const updatedItems = Array.from(items);
    const [movedItem] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, movedItem);

    setItems(updatedItems);
  };

  return (
    <div className="card-body" id="sortable-grid">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="grid" direction="horizontal" type="GRID">
          {(provided) => (
            <div
              className="grid-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <div
                      className="grid-square"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span className="fw-medium">{item}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SortableGrid;
