const Donation = () => {
  return (
    <section id="Donation" className="ViewerInfo text-center">
      <div className="container-fluid">
        <div className="row" id="row">
          <div className="MakeDonation text-center" id="heading">
            Make a Donation!
          </div>
        </div>

        <div className="row" id="pleaText">
          <div className="plea" id="pleaCenter">
            Thanks to your care and generosity, Family Finder has been able to
            continue the hard yet rewarding work of rehoming displaced pets.
            Please consider making a donation today. The happiness and wellbeing
            of each pet, past and present family is surely worth the price of a
            cup of coffee.
          </div>
        </div>

        <div className="row" id="sadDog">
          <div className="col-4">Help to turn this:</div>
          <div className="col-4">
            <img src="images/sadDog.avif" alt="sad dog" className="img-fluid" />
          </div>
        </div>
        <div className="row" id="text">
          <div className="col-1">
            <a href="paypal.com">PayPal</a>
          </div>
          <div className="col-2">
            <input type="submit" />
          </div>

          <div className="col-1">
            <a href="http://applepay.com">ApplePay</a>
          </div>
          <div className="col-2">
            <input type="submit" />
          </div>

          <div className="col-1">
            <a href="http://venmo.com">Venmo</a>
          </div>
          <div className="col-2">
            <input type="submit" />
          </div>

          <div className="col-1">
            <a href="http://googlepay.com">GooglePay</a>
          </div>
          <div className="col-2">
            <input type="submit" />
          </div>
        </div>
        <div className="row" id="happyDog">
          <div className="col-4">Into this!</div>
          <div className="col-4">
            <img
              src="images/happyDog.avif"
              alt="Happy Dog"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
