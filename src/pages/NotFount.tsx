import { Button } from '../components/atoms/Button';
import { useNavigate } from 'react-router';

const NotFount = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold">Ooppss!</h1>
        <p className="text-base font-medium">
          Sorry we could not find the page you are looking for.
        </p>
      </div>
      <Button
        label="Back to home"
        ariaLabel="Back to home"
        onClick={goToHome}
      />
    </div>
  );
};

export default NotFount;
