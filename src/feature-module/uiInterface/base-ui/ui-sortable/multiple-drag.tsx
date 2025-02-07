import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ITEM_TYPE = "ITEM";

const initialItems = [
  "Update website images.",
  "Create marketing banners.",
  "Revise product descriptions.",
  "Set up client meetings.",
  "Check email for urgent messages.",
  "Proofread customer communications.",
];

const MultipleDragList = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const toggleItemSelection = (index: number) => {
    const updatedSelection = new Set(selectedItems);
    if (updatedSelection.has(index)) {
      updatedSelection.delete(index);
    } else {
      updatedSelection.add(index);
    }
    setSelectedItems(updatedSelection);
  };

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { ids: Array.from(selectedItems) },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (draggedItem: any) => {
      console.log("Dropped items:", draggedItem.ids);
    },
  });

  return (
    <div ref={drop}>
      <ul
        className="list-group sortable-list"
        id="multiple-drag"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            ref={drag}
            className={`list-group-item ${
              selectedItems.has(index) ? "selected" : ""
            }`}
            onClick={() => toggleItemSelection(index)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedItems.has(index) ? "#d3d3d3" : "white",
              border: "1px solid #ccc",
              marginBottom: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MultipleDrag = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="card-body">
        <MultipleDragList />
      </div>
    </DndProvider>
  );
};

export default MultipleDrag;
