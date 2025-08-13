import "../index.css";

function Footer() {
  return (
    <footer className="footer bg-primary text-white pt-[40px] pb-[20px] lg:px-[80px] sm:px-[40px] px-[20px]">
      <div className="flex lg:flex-row flex-col justify-between mb-8 lg:space-y-0 space-y-[60px]">
        <div className="max-h-[130px] max-w-[413px]">
          <img
            src="/logoFull.svg"
            alt="AT Digital Logo"
            className="h-[50px] mb-2"
          />
          <p className="text-sm">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col lg:w-[700px] sm:space-y-0 space-y-[60px] justify-between">
          <div className="space-y-[12px]">
            <h1 className=" text-[21px]">Our Technologies</h1>
            <ul className="space-y-[12px]">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="space-y-[12px]">
            <h1 className=" text-[21px]">Our Services</h1>
            <ul className="space-y-[12px]">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[630px] mx-auto">
        <hr className="border-t border-white mb-[8px]" />
        <p className="text-sm text-center">
          <span className="mr-4">Privacy Policy</span>
          <span className="mx-2">|</span>
          <span className="ml-4">Terms & Conditions</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
