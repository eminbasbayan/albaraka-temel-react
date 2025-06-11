const ProductInput = ({
  inputData,
  handleInputChange,
  label,
  type,
  inputName,
}) => {
  return (
    <div className="form-input">
      <label>
        {label}: {inputData}
      </label>
      <input type={type} onChange={handleInputChange} name={inputName} />
    </div>
  );
};

export default ProductInput;
