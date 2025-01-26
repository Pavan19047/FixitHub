// eslint-disable-next-line react/prop-types
const Card = ({ image, title, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: '1px solid #ddd', padding: '16px', textAlign: 'center', cursor: 'pointer' }}>
      <img src={image} alt={title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
