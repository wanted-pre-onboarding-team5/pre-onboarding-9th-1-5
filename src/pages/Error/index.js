import { useNavigate, useRouteError } from 'react-router-dom';
import { useMovePage } from 'hooks/useMovePage';
import { USER_TOKEN_KEY } from 'constants';
import { PATH } from 'constants';
import { MESSAGE } from 'constants';
import Button from 'components/public/Button';
import { PROPERTY } from 'constants';

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  const [goSignIn, goSignUp, goTodo] = useMovePage([PATH.login, PATH.join, PATH.todo]);

  return (
    <div>
      <h2>{error.status}</h2>
      <h4>{error.statusText || error.message}</h4>
      <h5>{MESSAGE.error.occurError}</h5>
      {userToken ? (
        <Button
          props={{
            ...PROPERTY.button.goTodo,
            handleClick: goTodo,
          }}
        />
      ) : (
        <>
          <Button
            props={{
              ...PROPERTY.button.goSignIn,
              handleClick: goSignIn,
            }}
          />
          <Button
            props={{
              ...PROPERTY.button.goSignUp,
              handleClick: goSignUp,
            }}
          />
        </>
      )}

      <Button
        props={{
          ...PROPERTY.button.goHome,
          handleClick: () => navigate(-1),
        }}
      />
    </div>
  );
};
