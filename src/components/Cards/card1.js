export default function Card() {
  return (
    <div className="cardbody">
      <h2 className="works">How it Works?</h2>
      <p className="para">
        Is amazing, modern and clean landing page for showcaseyour app anything
        else.
      </p>

      <div className="cardContainer">
        <div className="card fix">
          <img
            src="./pictures/signup.svg"
            alt="signup"
            Width="123px"
            Height="137.87px"
          />
          <p className="position fix">01</p>
          <div className="signup">Sign Up:</div>
          <div className="cardContent">
            Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
          </div>
        </div>
        <div className="card ">
          <img
            src="./pictures/Group.svg"
            alt="group"
            Width="123px"
            Height="137.87px"
          />
          <div className="signup group">Subscription:</div>
          <div className="cardContent">
            Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
          </div>
        </div>
        <div className="card">
          <img
            src="./pictures/strategy.svg"
            alt="strategy"
            Width="123px"
            Height="137.87px"
          />
          <div className="signup">Explore:</div>
          <div className="cardContent">
            Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
          </div>
        </div>
      </div>
    </div>
  );
}
