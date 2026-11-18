
function FormField({ label, name, type, value, onChange, error }) {
  const inputId = `form-field-${name}`;

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{label}</label>

      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />

      {error && <small>{error}</small>}
    </div>
  );
}

export default FormField;
