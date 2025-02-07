import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ITEM_TYPE = "ITEM"; // Define the drag item type

// Initial list items
const initialItems = [
  "Test software functionality.",
  "Brainstorm team-building activities.",
  "Format spreadsheet cells.",
  "Plan virtual team event.",
  "Edit meeting agenda.",
  "Compile weekly progress report.",
];

const SwapDragList = () => {
  const [items, setItems] = useState(initialItems);

  // Handle the drag logic
  const moveItem = (draggedIndex: number, targetIndex: number) => {
    const updatedItems = [...items];
    // Swap the items in the list
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  // Handle drag for each list item
  const ListItem = ({ item, index }: any) => {
    const [, drag] = useDrag({
      type: ITEM_TYPE,
      item: { index }, // Sending the index of the item as the drag source
    });

    const [, drop] = useDrop({
      accept: ITEM_TYPE,
      hover: (draggedItem: any) => {
        if (draggedItem.index !== index) {
          moveItem(draggedItem.index, index);
          draggedItem.index = index; // Update the dragged item's index
        }
      },
    });

    return (
      <li
        ref={(node) => drag(drop(node))} // Combine both drag and drop refs here
        className="list-group-item"
        style={{
          cursor: "move",
          padding: "10px",
          margin: "5px 0",
          background: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        {item}
      </li>
    );
  };

  return (
    <ul className="list-group sortable-list" id="sortable-swap">
      {items.map((item, index) => (
        <ListItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

// Main App component to wrap everything in DndProvider
const SwapDrag = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="card-body">
        <SwapDragList />
      </div>
    </DndProvider>
  );
};

export default SwapDrag;
