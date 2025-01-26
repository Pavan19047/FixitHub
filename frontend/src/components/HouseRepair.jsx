import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const HouseRepair = () => {
  const navigate = useNavigate();

  const handleCardClick = (workerType) => {
    navigate(`/workers/${workerType}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <Card
        image="/images/carpenter.jpg"
        title="Carpenter"
        onClick={() => handleCardClick('carpenter')}
      />
      <Card
        image="/images/plumber.jpg"
        title="Plumber"
        onClick={() => handleCardClick('plumber')}
      />
      <Card
        image="/images/electrician.jpg"
        title="Electrician"
        onClick={() => handleCardClick('electrician')}
      />
    </div>
  );
};

export default HouseRepair;
