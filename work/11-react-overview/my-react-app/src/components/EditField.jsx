import React, { useState } from 'react';

export default function EditField({ label, type, value, onSave, options }) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState('');

  const validate = () => {
    if (type === 'text') {
      if (!inputValue.trim()) {
        setError('Field cannot be empty.');
        return false;
      }
      if (label === 'Username' && inputValue.trim() === 'dog') {
        setError("You're kidding, right?");
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSave = () => {
    if (validate()) {
      onSave(inputValue);
      setEditing(false);
    }
  };

  return (
    <div className="edit-field">
      <label>{label}:</label>
      {!editing ? (
        <>
          <span>{type === 'checkbox' ? (value ? 'Yes' : 'No') : value}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      ) : (
        <>
          {type === 'text' && (
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label={label}
            />
          )}
          {type === 'checkbox' && (
            <input
              type="checkbox"
              checked={inputValue}
              onChange={(e) => setInputValue(e.target.checked)}
              aria-label={label}
            />
          )}
          {type === 'select' && (
            <select
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label={label}
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
          {error && <p className="error">{error}</p>}
        </>
      )}
    </div>
  );
}