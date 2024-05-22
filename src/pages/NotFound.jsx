import Heading from "../components/typography/Heading";

const NotFound = () => {
  return (
    <section>
      <div className="mb-16">
        <Heading>{"You're"} not supposed to be here!</Heading>
        <span>
          It looks like this page {"doesn't"} exist. Click{" "}
          <a href="/" className="text-violet-700">
            here
          </a>{" "}
          to go back to the Nook.
        </span>
      </div>
    </section>
  );
};

export default NotFound;
