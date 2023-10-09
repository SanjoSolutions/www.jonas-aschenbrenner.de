'use client'

import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Page() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableComponent>
        <h1>Heading</h1>
      </DraggableComponent>

      <DroppableArea />
    </DndProvider>
  )
}

function DraggableComponent({ children }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'component',
      item: () => ({
        component: children,
      }),
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [children]
  )

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  )
}

function DroppableArea({ onDrop }) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'component',
      drop: item => onDrop(item.component),
      collect: monitor => ({
        isOver: monitor.isOver(),
      }),
    }),
    [onDrop]
  )

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? 'lightgray' : 'white',
        width: 200,
        height: 200,
        border: '1px solid black',
      }}
    >
      {/* Render dropped components here */}
    </div>
  )
}
