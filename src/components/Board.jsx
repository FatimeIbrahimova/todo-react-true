import React from 'react'

const Board = ({ task }) => {
    return (
        <div>
            {task.map((t, index) => (
                <li key={index}>{t}</li>
            ))}
        </div>
    )
}

export default Board