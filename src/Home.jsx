import Footer from "./Footer";
import Navbar from "./Navbar";
import TicketArea from "./TicketArea";
import CouponDivider from "/src/assets/images/cupon-devider.png";

const Home = () => {
  return (
    <div className="container mx-auto mt-12">
      <Navbar />

      {/* section 1 */}
      <div className="hero container mx-auto min-h-screen bg-[url(/src/assets/images/banner.png)] rounded-3xl max-h-[550px]">
        <div className="hero-overlay bg-opacity-10 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-6xl font-extrabold">
              End-to-End Travel with
              <br />
              <span className="text-color">Green Travels</span>
            </h1>
            <p className="mb-5 text-lg">
              Yes, you can run unit tests and view the results directly within
              the app. The integrated testing features allow for a streamlined.
            </p>
            <button className="bg-color border-none text-xl font-bold px-8 py-4 rounded-xl">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-32">
        <h1 className="text-4xl font-bold text-center">Best offers for you</h1>
        <div className="flex gap-6 justify-center pt-12">
          <div className="flex justify-center items-center w-[573px] bg-[#FFBF0F] rounded-3xl">
            <div>
              <h1 className="text-5xl font-black">15% OFF</h1>
              <p className="text-xl font-semibold py-3">
                on your next purchase
              </p>
              <p className="text-lg font-medium text-[#03071280]">
                use by May 2024
              </p>
            </div>
            <div className="px-8">
              <img src={CouponDivider} />
            </div>
            <div className="gap-4 text-center">
              <h1 className="text-3xl font-bold pb-4">NEW15</h1>
              <p className="text-xl font-medium text-[#03071280]">
                Coupon Code
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[573px] bg-[#F78C9C] rounded-3xl">
            <div>
              <h1 className="text-5xl font-black">20% OFF</h1>
              <p className="text-xl font-semibold py-3">
                on your next purchase
              </p>
              <p className="text-lg font-medium text-[#03071280]">
                use by May 2024
              </p>
            </div>
            <div className="px-8">
              <img src={CouponDivider} />
            </div>
            <div className="gap-4 text-center">
              <h1 className="text-3xl font-bold pb-4">Couple 20</h1>
              <p className="text-xl font-medium text-[#03071280]">
                Coupon Code
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-12">
          <button className="btn btn-outline border-[#1dd100] text-color hover:bg-[#1dd100] hover:border-none">
            See All Offers
          </button>
        </div>
      </div>

      {/* section 3 */}
      <TicketArea />
      <Footer />
    </div>
  );
};

export default Home;
