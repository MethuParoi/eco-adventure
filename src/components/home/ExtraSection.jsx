import { FaUserCircle } from "react-icons/fa";

function ExtraSection() {
  return (
    <div>
      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center mb-6">
          User Reviews
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
          <div className="card card-side bg-neutral shadow-xl w-[90%] sm:w-[400px] h-[150px] px-5 flex justify-around items-center">
            <div className="w-28 h-28 rounded-[50%] bg-secondary flex justify-center items-center">
              <FaUserCircle className="text-[95px] text-green-300" />
            </div>
            <div className="card-body">
              <h2 className="card-title">John Doe</h2>
              <p className="w-44">
                I suggest this website before planning a trip
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card card-side bg-neutral shadow-xl w-[90%] sm:w-[400px] h-[150px] px-5 flex justify-around items-center">
            <div className="w-28 h-28 rounded-[50%] bg-secondary flex justify-center items-center">
              <FaUserCircle className="text-[95px] text-green-300" />
            </div>
            <div className="card-body">
              <h2 className="card-title">Emily Wattson</h2>
              <p className="w-44">Experience was memorable with this</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card card-side bg-neutral shadow-xl w-[90%] sm:w-[400px] h-[150px] px-5 flex justify-around items-center">
            <div className="w-28 h-28 rounded-[50%] bg-secondary flex justify-center items-center">
              <FaUserCircle className="text-[95px] text-green-300" />
            </div>
            <div className="card-body">
              <h2 className="card-title">John Doe</h2>
              <p className="w-44">
                This website is very informative for travel planning{" "}
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card card-side bg-neutral shadow-xl w-[90%] sm:w-[400px] h-[150px] px-5 flex justify-around items-center lg:hidden">
            <div className="w-28 h-28 rounded-[50%] bg-secondary flex justify-center items-center">
              <FaUserCircle className="text-[95px] text-green-300" />
            </div>
            <div className="card-body">
              <h2 className="card-title">Jorge Costa</h2>
              <p className="w-44">Exploring nature refreshes mind</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>

      {/* accordian */}
      <h2 className="text-3xl font-semibold text-center mt-16 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="w-[90%] mx-auto mb-16  text-neutral">
        <div className="collapse collapse-arrow bg-primary">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What kind of travel content can I find here?
          </div>
          <div className="collapse-content">
            <p>
              Our blog covers a wide range of travel-related topics, including
              destination guides, travel tips, packing lists, cultural insights,
              adventure activities, eco-friendly travel options, and personal
              travel stories to inspire your next trip.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I plan a trip using the resources on this blog?
          </div>
          <div className="collapse-content">
            <p>
              Start by exploring our destination guides for top attractions,
              accommodations, and local tips. Check out our travel tips section
              for advice on budgeting, packing, and itineraries. You can use our
              sample itineraries as templates and customize them to suit your
              preferences.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are the recommendations on this blog budget-friendly?
          </div>
          <div className="collapse-content">
            <p>
              Yes! We aim to include a mix of budget, mid-range, and luxury
              options to cater to all types of travelers. Look for
              budget-friendly tags on posts, or check out our dedicated "Travel
              on a Budget" section for tips and affordable destination ideas.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I stay updated with new posts and travel news?
          </div>
          <div className="collapse-content">
            <p>
              You can subscribe to our newsletter for weekly updates, follow us
              on social media platforms like Instagram and Facebook, or bookmark
              our blog to visit regularly.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer reviews of travel gear or gadgets?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we review travel gear like backpacks, cameras, travel
              accessories, and eco-friendly products to help you make informed
              purchases. Check out our "Gear Reviews" section for detailed
              insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraSection;
