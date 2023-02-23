import CardCreate from 'components/todo/CardCreate';
import Header from 'components/todo/Header';
import ListSection from 'components/todo/ListSection';
import TodoProvider from 'context/TodoProvider';

export const Todo = () => {
  return (
    <div>
      <Header />
      <TodoProvider>
        <CardCreate />
        <ListSection />
      </TodoProvider>
    </div>
  );
};
