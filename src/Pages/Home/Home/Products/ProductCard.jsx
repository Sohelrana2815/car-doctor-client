const ProductCard = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
