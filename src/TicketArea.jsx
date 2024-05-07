const TicketArea = () => {
    return (
        <div className="mt-32 mx-auto border-t-2 border-primary rounded-t-[88px] bg-[#F7F8F8]">
            <div className="pb-12">
                <h1 className="text-center text-4xl font-bold pt-32">Season Travels</h1>
                <p className="text-center text-secondary pt-6">Yes, you can run unit tests and view the results directly within the app. The integrated<br/>testing features allow for a streamlined.</p>
            </div>

            {/* available area */}
            <div className="flex flex-1 bg-white py-8 mx-72 rounded-3xl gap-10 items-center justify-center">

                {/* left part */}
                <div>
                    {/* left-row-1 */}
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <img src="images/bus-logo.png" alt=""/>
                            <div>
                                <h1 className="text-4xl font-bold">Greenline Paribahan</h1>
                                <p className="text-secondary">Coach-009-WEB ! AC_Business</p>
                            </div>
                        </div>
                        {/* seats left area */}
                        <div>
                            <div className="flex gap-2 p-4 bg-[#1DD10026] text-color rounded-xl w-[180px]">
                                <img src="images/seat-green.png" alt=""/>
                                <p><span id="seatLeft">8</span> seats left</p>
                            </div>
                        </div>
                    </div>

                    {/* left-row-2 */}
                    <div className="p-8 bg-[#F7F8F8] rounded-3xl mt-6">
                        <div className="flex justify-between pb-6">
                            <p className="text-secondary">Route</p>
                            <p className="font-semibold text-black">Dhaka - Sylhet</p>
                        </div>
                        <hr className="border-dashed border-[#03071233] pt-6"/>
                        <div className="flex justify-between pb-6">
                            <p className="text-secondary">Departure Time</p>
                            <p className="font-semibold text-black">9:00 PM</p>
                        </div>
                        <hr className="border-dashed border-[#03071233]"/>
                        <div className="grid grid-flow-col gap-6 pt-6">
                            <p className="text-[#030712CC] p-4 bg-[#0307120D] rounded-xl text-center">Boarding Point - Laxmipur</p>
                            <p className="text-[#030712CC] p-4 bg-[#0307120D] rounded-xl text-center">Dropping Point - Bogura</p>
                            <p className="text-[#030712CC] p-4 bg-[#0307120D] rounded-xl text-center">Est. Time - 11 Hour</p>
                        </div>
                    </div>
                </div>

                {/* mid area */}
                <div>
                    <img src="images/info-devider.png" alt=""/>
                </div>

                {/* right area */}
                <div className="flex flex-col items-center text-center">
                    <img className="w-12" src="images/fare.png" alt=""/>
                    <h1 className="text-4xl font-bold text-black">550 Taka</h1>
                    <p className="text-2xl font-bold text-[#03071299]">Per Seat</p>
                </div>
            </div>

            {/* Ticket Cutter Area */}
            <div id="ticketArea" className="flex flex-1 gap-12 bg-white p-14 mx-72 rounded-3xl mt-7">

                {/* left area */}
                <div className="grid grid-flow-row gap-6">
                    <div className="grid grid-flow-row">
                        <h2 className="text-black text-2xl font-semibold">Select Your Seat</h2>
                        <hr className="border-dashed border-[#03071233]"/>
                        <div className="flex justify-between">
                            <div className="grid grid-flow-col gap-2">
                                <img src="images/seat-gray.png" alt=""/>
                                <p className="text-[#03071280] font-medium">Available</p>
                            </div>
                            <div className="grid grid-flow-col gap-2">
                                <img src="images/seat-green-filled.png" alt=""/>
                                <p className="text-color font-medium">Selected</p>
                            </div>
                        </div>
                        <hr className="border-dashed border-[#03071233]"/>
                    </div>

                    {/* seat selection */}
                    <div className="flex flex-col gap-6">
                        {/* driver */}
                        <div className="grid grid-flow-row place-items-end">
                            <img className="py-3 px-10 bg-[#0307121A] rounded-xl" src="images/tabler-icon-steering-wheel.png" alt=""/>
                        </div>

                        {/* Seat selection area */}
                        <div className="grid grid-cols-5 items-center gap-8">
                            <p className="text-[#03071280] text-center font-medium">A</p>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">A1</button>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">A2</button>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">A3</button>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">A4</button>
                        </div>
                        <div className="grid grid-cols-5 items-center gap-8">
                            <p className="text-[#03071280] text-center font-medium">B</p>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">B1</button>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">B2</button>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">B3</button>
                            <button className="btn border-none text-[#03071280] text-center font-medium py-4 px-11 bg-[#F7F8F8] rounded-xl">B4</button>
                        </div>
                    </div>
                </div>

                {/* mid area */}
                <img src="images/line.png" alt=""/>

                {/* right area */}
                <div className="grid grid-flow-row gap-8">
                    <div className="grid grid-flow-row gap-6">
                        <h2 className="text-black text-2xl font-semibold">Select Your Seat</h2>
                        <hr className="border-dashed border-[#03071233]"/>
                    </div>

                    {/* total-box */}
                    <div className="grid grid-flow-row gap-6 p-8 bg-[#F7F8F8] rounded-xl">
                        <div className="flex justify-between font-medium text-black">
                            <div className="grid grid-flow-col gap-1 items-center">
                                <p>Seat</p>
                                {/* seat number addition */}
                                <p id="seatInc" className="py-1 px-2 bg-color rounded-full text-white text-xs">0</p>
                            </div>
                            <p>className</p>
                            <p>Price</p>
                        </div>

                        <hr className="border-dashed border-[#03071233]"/>

                        {/* Popping Area */}
                        <div id="popper" className="flex justify-between gap-4 text-secondary">
                            <p id="seatName"></p>
                            <p>Economy</p>
                            <p>550</p>
                        </div>

                        <hr className="border-[#03071233]"/>

                        <div className="flex justify-between text-black font-medium">
                            <p>Total Price</p>
                            <p>BDT <span>0</span></p>
                        </div>

                        {/* coupon code area */}
                        <label className="input input-bordered flex items-center gap-2 p-8 border-none">
                            <input type="text" className="grow" placeholder="Have any coupon?" />
                            <button className="bg-color px-6 py-3 text-white font-semibold rounded-lg">Apply</button>
                        </label>

                        {/* Grand Total area */}
                        <div className="flex justify-between text-black font-medium">
                            <p>Grand Total</p>
                            <p>BDT <span>0</span></p>
                        </div>
                    </div>

                    {/* NEXT button */}
                    <div>
                        <button id="nextBtn" className="py-5 px-52 bg-color text-white text-xl font-extrabold rounded-2xl">Next</button>
                    </div>

                    {/* T&C CP */}
                    <div className="flex justify-center gap-10 text-secondary font-medium underline">
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Cancellation Policy</a>
                    </div>
                </div>
            </div>
            <div className="pb-32"></div>
        </div>
    );
};

export default TicketArea;