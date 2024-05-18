import { LuArmchair } from "react-icons/lu";
import { TbBus, TbSteeringWheel } from "react-icons/tb";
import Divider from "/src/assets/images/info-devider.png";
import MiddleLine from "/src/assets/images/line.png";
import Fare from "/src/assets/images/fare.png";
import { MdOutlineChair } from "react-icons/md";
import { PiArmchairFill } from "react-icons/pi";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TicketArea = () => {
  const [listArray, setListArray] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSelected = (id) => {
    if (listArray.includes(id)) {
      setListArray(listArray.filter((item) => item !== id));
    } else {
      setListArray([...listArray, id]);
    }
    console.log(listArray);
  };

  const handleApplyCoupon = () => {
    setSuccess("");
    setError("");
    if (coupon === "NEW15") {
      setDiscount(0.15);
      setSuccess("Coupon Applied Successfully!");
    } else if (coupon === "Couple 20") {
      setDiscount(0.2);
      setSuccess("Coupon Applied Successfully!");
    } else {
      setDiscount(0);
      setError("Invalid Coupon!");
    }
  };

  const getButtonClassName = (seatId) => {
    return listArray.includes(seatId)
      ? "btn border-none text-white text-center font-medium py-4 px-11 bg-color rounded-xl"
      : "btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl";
  };

  const totalPrice = listArray.length * 550;
  const discountedPrice = totalPrice - totalPrice * discount;

  return (
    <div className="mt-32 mx-auto border-t-2 border-[#1dd100] rounded-t-[88px] bg-[#F7F8F8]">
      <div className="pb-12">
        <h1 className="text-center text-4xl font-bold pt-32">Season Travels</h1>
        <p className="text-center pt-6">
          Yes, you can run unit tests and view the results directly within the
          app. The integrated
          <br />
          testing features allow for a streamlined.
        </p>
      </div>

      {/* available area */}
      <div className="flex bg-white py-8 mx-48 rounded-3xl px-4 items-center justify-evenly">
        {/* left part */}
        <div>
          {/* left-row-1 */}
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <TbBus className="text-6xl" />

              <div>
                <h1 className="text-4xl font-bold">Greenline Paribahan</h1>
                <p>Coach-009-WEB ! AC_Business</p>
              </div>
            </div>
            {/* seats left area */}
            <span className="flex gap-2 p-4 bg-[#1DD10026] text-color rounded-xl items-center">
              <LuArmchair className="text-2xl" />
              <p>
                <span>{8 - listArray.length}</span> seats left
              </p>
            </span>
          </div>

          {/* left-row-2 */}
          <div className="p-8 bg-[#F7F8F8] rounded-3xl mt-6">
            <div className="flex justify-between pb-6">
              <p>Route</p>
              <p className="font-semibold text-black">Dhaka - Sylhet</p>
            </div>
            <hr className="border-dashed border-[#03071233] pt-6" />
            <div className="flex justify-between pb-6">
              <p>Departure Time</p>
              <p className="font-semibold text-black">9:00 PM</p>
            </div>
            <hr className="border-dashed border-[#03071233]" />
            <div className="grid grid-flow-col gap-6 pt-6">
              <p className="text-[#030712CC] p-4 bg-[#0307120D] rounded-xl text-center">
                Boarding Point - Laxmipur
              </p>
              <p className="text-[#030712CC] p-4 bg-[#0307120D] rounded-xl text-center">
                Dropping Point - Bogura
              </p>
              <p className="text-[#030712CC] p-4 bg-[#0307120D] rounded-xl text-center">
                Est. Time - 11 Hour
              </p>
            </div>
          </div>
        </div>

        {/* mid area */}
        <div>
          <img src={Divider} />
        </div>

        {/* right area */}
        <div className="flex flex-col items-center text-center">
          <img className="w-12" src={Fare} />
          <h1 className="text-4xl font-bold text-black">550 Taka</h1>
          <p className="text-2xl font-bold text-[#03071299]">Per Seat</p>
        </div>
      </div>

      {/* Ticket Cutter Area */}
      <div className="flex flex-1 gap-12 bg-white p-14 mx-48 rounded-3xl mt-7">
        {/* left area */}
        <div className="grid grid-flow-row gap-6">
          <div className="grid grid-flow-row">
            <h2 className="text-black text-2xl font-semibold">
              Select Your Seat
            </h2>
            <hr className="border-dashed border-[#03071233]" />
            <div className="flex justify-between">
              <div className="grid grid-flow-col gap-2">
                <MdOutlineChair className="text-2xl text-[#03071280]" />
                <p className="text-[#03071280] font-medium">Available</p>
              </div>
              <div className="grid grid-flow-col gap-2">
                <PiArmchairFill className="text-2xl text-color" />

                <p className="text-color font-medium">Selected</p>
              </div>
            </div>
            <hr className="border-dashed border-[#03071233]" />
          </div>

          {/* seat selection */}
          <div className="flex flex-col gap-6">
            {/* driver */}
            <div className="grid grid-flow-row place-items-end">
              <span className="py-4 bg-[#F7F8F8] rounded-xl px-8">
                <TbSteeringWheel className="text-2xl" />
              </span>
            </div>

            {/* -----------------------Seat selection area----------------------- */}

            <div className="grid grid-cols-5 items-center gap-2">
              <p className="text-[#03071280] text-center font-medium">A</p>
              <button
                onClick={() => handleSelected("A1")}
                className={getButtonClassName("A1")}
              >
                A1
              </button>
              <button
                onClick={() => handleSelected("A2")}
                className={getButtonClassName("A2")}
              >
                A2
              </button>
              <button
                onClick={() => handleSelected("A3")}
                className={getButtonClassName("A3")}
              >
                A3
              </button>
              <button
                onClick={() => handleSelected("A4")}
                className={getButtonClassName("A4")}
              >
                A4
              </button>
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <p className="text-[#03071280] text-center font-medium">B</p>
              <button
                onClick={() => handleSelected("B1")}
                className={getButtonClassName("B1")}
              >
                B1
              </button>
              <button
                onClick={() => handleSelected("B2")}
                className={getButtonClassName("B2")}
              >
                B2
              </button>
              <button
                onClick={() => handleSelected("B3")}
                className={getButtonClassName("B3")}
              >
                B3
              </button>
              <button
                onClick={() => handleSelected("B4")}
                className={getButtonClassName("B4")}
              >
                B4
              </button>
            </div>
          </div>
        </div>
        {/* ----------------------Seat selection area end---------------------- */}

        {/* mid area */}
        <img src={MiddleLine} />

        {/* right area */}
        <div className="grid grid-flow-row gap-8">
          <div className="grid grid-flow-row gap-6">
            <h2 className="text-black text-2xl font-semibold">
              Select Your Seat
            </h2>
            <hr className="border-dashed border-[#03071233]" />
          </div>

          {/* total-box */}
          <div className="grid grid-flow-row gap-6 p-8 bg-[#F7F8F8] rounded-xl">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base text-black">
                    <th>
                      Seat{" "}
                      <span className="text-white px-2 py-1 bg-color rounded-full">
                        {listArray.length}
                      </span>
                    </th>
                    <th>Class</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {listArray.map((seat) => (
                    <tr key={seat} className="text-base">
                      <td>{seat}</td>
                      <td>Economy</td>
                      <td>550 taka</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <hr className="border-dashed border-[#03071233]" /> */}
            <hr className="border-[#03071233]" />

            <div className="flex justify-between text-black font-medium">
              <p>Total Price</p>
              <p>
                BDT <span>{totalPrice}</span>
              </p>
            </div>

            {/* coupon code area */}
            <label className="input input-bordered flex items-center gap-2 p-8 border-none">
              <input
                type="text"
                className="grow"
                placeholder="Have any coupon?"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-color px-6 py-3 text-white font-semibold rounded-lg"
              >
                Apply
              </button>
            </label>
            {success && (
              <span className="text-green-500 text-center">{success}</span>
            )}
            {error && <span className="text-red-500 text-center">{error}</span>}

            {/* Grand Total area */}
            <div className="flex justify-between text-black font-medium">
              <p>Grand Total</p>
              <p>
                BDT <span>{discountedPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>

          {/* NEXT button */}
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className={
                listArray.length > 4
                  ? "py-5 px-52 text-white text-xl bg-gray-200 font-extrabold rounded-2xl disabled"
                  : "py-5 px-52 bg-color text-white text-xl font-extrabold rounded-2xl"
              }
            >
              Next
            </button>
            {listArray.length > 0 && (
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center px-12">
                  <IoMdCheckmarkCircleOutline className="text-color text-9xl mx-auto" />
                  <h3 className="font-bold text-2xl text-color">SUCCESS</h3>
                  <p className="py-4 text-gray-600 font-bold">
                    Thank you for Booking Our Bus Seats.
                    <br />
                    We are working hard to find the best service and deals for
                    you.
                  </p>
                  <p>Shortly you will find a confirmation in your email</p>
                  <div className="flex justify-center">
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn bg-color text-white px-16 rounded-full">
                          Continue
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </dialog>
            )}
          </div>

          {/* T&C CP */}
          <div className="flex justify-center gap-10  font-medium underline">
            <a href="#">Terms and Conditions</a>
            <a href="#">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketArea;
