import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onEdit(task.id, editedTitle); 
    }
  };

  return (
    <li style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <button onClick={handleEdit} style={{ marginRight: "10px" }}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => onDelete(task.id)} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
