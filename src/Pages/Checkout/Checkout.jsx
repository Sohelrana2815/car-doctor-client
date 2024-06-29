import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, title, price, img } = service;

  const handleBookServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service booked successfully!");
        }
      });
  };

  return (
    <div className="w-[1140px] mx-auto h-[700px] bg-zinc-100 rounded-xl">
      <form onSubmit={handleBookServices} className="card-body space-y-6">
        {/* 1st row */}
        <h2 className="text-center text-2xl">Book Services : {title} </h2>
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-6">
          <div className="form-control w-1/2">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* 
        <label className="label">
            <span className="label-text">Email</span>
          </label> */}
        <textarea
          name="message"
          placeholder="Your message"
          className=" w-full rounded-xl h-[250px] mx-auto p-7"
        ></textarea>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn bg-[#FF3811] text-white h-[64px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
