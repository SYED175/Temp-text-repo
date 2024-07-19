const Card = ({ item }) => {
  return (
    <div className="card sd-card" style={{ width: "280px" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">Item Name: {item.name}</h2>
      </div>
    </div>
  );
};

export default Card;
