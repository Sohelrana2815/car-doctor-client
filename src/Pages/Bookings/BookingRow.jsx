const BookingRow = ({ booking }) => {
  const { price, customerName, email, date, service, img, _id, status } =
    booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar ">
            <div className=" rounded-xl  w-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{customerName}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
