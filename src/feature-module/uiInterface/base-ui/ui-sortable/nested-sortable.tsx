import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ITEM_TYPE = "NESTED_ITEM";

const initialData = [
  {
    id: "1",
    text: "Item 1.1",
    children: [
      {
        id: "2",
        text: "Item 2.1",
        children: [],
      },
      {
        id: "3",
        text: "Item 2.2",
        children: [
          { id: "4", text: "Item 3.1", children: [] },
          { id: "5", text: "Item 3.2", children: [] },
          { id: "6", text: "Item 3.3", children: [] },
          { id: "7", text: "Item 3.4", children: [] },
        ],
      },
      {
        id: "8",
        text: "Item 2.3",
        children: [],
      },
      {
        id: "9",
        text: "Item 2.4",
        children: [],
      },
    ],
  },
  {
    id: "10",
    text: "Item 1.2",
    children: [],
  },
  {
    id: "11",
    text: "Item 1.3",
    children: [],
  },
  {
    id: "12",
    text: "Item 1.4",
    children: [
      {
        id: "13",
        text: "Item 2.1",
        children: [],
      },
      {
        id: "14",
        text: "Item 2.2",
        children: [],
      },
      {
        id: "15",
        text: "Item 2.3",
        children: [],
      },
      {
        id: "16",
        text: "Item 2.4",
        children: [],
      },
    ],
  },
  {
    id: "17",
    text: "Item 1.5",
    children: [],
  },
];

const NestedItem = ({ item, moveItem, parentId, level }: any) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { id: item.id, parentId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (draggedItem: any) => {
      if (draggedItem.id !== item.id) {
        moveItem(draggedItem.id, draggedItem.parentId, item.id, parentId);
      }
    },
    canDrop: () => true,
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`list-group-item nested-${level}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        marginLeft: `${level * 20}px`,
        padding: "10px",
        background: "#f8f9fa",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "5px",
      }}
    >
      {item.text}
      {item.children.length > 0 && (
        <div className="nested-sortable">
          {item.children.map((child: any) => (
            <NestedItem
              key={child.id}
              item={child}
              moveItem={moveItem}
              parentId={item.id}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedSortable = () => {
  const [data, setData] = useState(initialData);

  const findItem = (items: any[], id: string): [any, any[]] | null => {
    for (const item of items) {
      if (item.id === id) return [item, items];
      if (item.children.length > 0) {
        const result = findItem(item.children, id);
        if (result) return result;
      }
    }
    return null;
  };

  const moveItem = (
    draggedId: string,
    draggedParentId: string,
    targetId: string,
    targetParentId: string
  ) => {
    const newData = JSON.parse(JSON.stringify(data));
    const [draggedItem, draggedParentArray] =
      findItem(newData, draggedId) || [];
    const [targetItem, targetParentArray] = findItem(newData, targetId) || [];

    if (draggedItem && draggedParentArray && targetItem && targetParentArray) {
      const draggedIndex = draggedParentArray.indexOf(draggedItem);
      if (draggedIndex !== -1) {
        draggedParentArray.splice(draggedIndex, 1);
      }

      const targetIndex = targetParentArray.indexOf(targetItem) + 1;
      targetParentArray.splice(targetIndex, 0, draggedItem);

      setData(newData);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="card-body">
        <div id="nestedSortables" className="list-group col nested-sortable">
          {data.map((item) => (
            <NestedItem
              key={item.id}
              item={item}
              moveItem={moveItem}
              parentId={null}
              level={1}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default NestedSortable;
