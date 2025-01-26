import { useParams } from 'react-router-dom';

const workerData = {
  carpenter: ['John Doe', 'Mike Smith', 'Emma Johnson'],
  plumber: ['Liam Brown', 'Noah Davis', 'Sophia Wilson'],
  electrician: ['Olivia Miller', 'James Anderson', 'Isabella Martinez'],
};

const WorkerListPage = () => {
  const { workerType } = useParams();
  const workers = workerData[workerType] || [];

  return (
    <div style={{ padding: '20px' }}>
      <h1>{workerType.charAt(0).toUpperCase() + workerType.slice(1)}s</h1>
      <ul>
        {workers.map((worker, index) => (
          <li key={index}>{worker}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkerListPage;
