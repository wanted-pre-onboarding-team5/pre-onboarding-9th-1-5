import CardCreate from 'components/todo/CardCreate';
import Header from 'components/todo/Header';
import ListSection from 'components/todo/ListSection';

export const Todo = () => {
  return (
    <div>
      <Header />
      <CardCreate />
      <ListSection />
    </div>
  );
};
