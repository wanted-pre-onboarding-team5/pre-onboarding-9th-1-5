export const TodoForm = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          data-testid='new-todo-input'
          autoComplete='off'
          onChange={handleChange}
          value={inputValue}
        />
        <button type='submit' data-testid='new-todo-add-button'>
          추가
        </button>
      </form>
    </>
  );
};
