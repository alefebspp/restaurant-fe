import { HomeText } from './styles';
import { Button } from '../../components';

export const Home = () => {
  return (
    <div>
      <Button onClick={() => console.log('clicked!')}>Send</Button>
    </div>
  );
};
