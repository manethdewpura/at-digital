import TopNavigation from "../components/TopNavigation.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";
import FAQCard from "../components/FAQCard.jsx";

function Home() {
  return (
    <>
      <TopNavigation />
      <div className="relative">
        <img
          src="/heroImage.png"
          alt="Hero"
          className="w-full md:min-h-[700px] object-bottom object-cover "
        />
        <div className="md:absolute left-[80px] bottom-[40px] gap-[20px] md:max-w-[630px] bg-gradient-to-r from-analogous-3 to-analogous-2 pt-[24px] pb-[32px] px-[40px]">
          <p className="text-white text-[48px] font-semibold mb-4 leading-none">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <Button>Get free consultation</Button>
        </div>
      </div>
      <main>
        <section className=" flex flex-col md:flex-row items-center gap-12 py-16 px-8 lg:px-[180px] max-w-[1800px] mx-auto">
          <div className="md:w-1/2">
            <img
              src="/computer.png"
              alt="Computer illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-[27px] font-semibold text-primary leading-tight">
              Web & Mobile App Development
            </h2>
            <p className="text-text text-lg leading-relaxed">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button>Learn More</Button>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-12 py-16 px-8 lg:px-[180px] max-w-[1800px] mx-auto">
          <div className="md:w-1/2 md:order-2">
            <img
              src="/magnifyingGlass.png"
              alt="Magnifying Glass illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6 md:order-1 text-center md:text-left">
            <h2 className="text-[27px]  font-semibold text-primary leading-tight">
              Digital Strategy Consulting
            </h2>
            <p className="text-text text-lg leading-relaxed">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button>Learn More</Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-8 lg:px-[180px] max-w-[1800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <FAQCard
              question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />

            <FAQCard
              question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
              answer="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />

            <FAQCard
              question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
              answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
