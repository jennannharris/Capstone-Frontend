import { Link } from "react-router-dom";

const Donation = () => {
    return (
        <section>
            id="Donation"
            className="ViewerInfo text-center"
        </section>
    );
};


   <div className="container-fluid">
        <div className="row" id="row">
            <div className="MakeDonation text-center" id="heading">
                 Make a Donation!
             </div>
        </div> 

        <div className="row" id="pleaText">
            <div className="plea" id="pleaCenter">
                Thanks to your care and generosity, Family Finder has been able to continue the hard yet rewarding work of rehoming displaced pets. Please consider making a donation today. The happiness and wellbeing of each pet, past and present family is surely worth the price of a cup of coffee.
        
            </div>
        </div>
        

        <div className="row" id="sadDog">
           
            <div className="col-4">
                Help to turn this:
            </div>
            <div className="col-4">
                <img src="images/sadDog.avif" className="img-fluid"/>
  
            </div>
        </div>
        <div className="row" id="text">
            <div className="col-1">
                PayPal
                <a href="paypal.com"></a>
            </div>
            <div className="col-2">
                <input type="submit"/>
            </div>
        
        
            <div className="col-1">
                ApplePay
                <a href="http://applepay.com"></a>
            </div>
            <div className="col-2">
                <input type="submit"/>
            </div>
            
       
            <div className="col-1">
                Venmo
                <a href="http://venmo.com"></a>
            </div>
            <div className="col-2">
                <input type="submit"/>
            </div>
       
            <div className="col-1">
                GooglePay
                <a href="http://googlepay.com"></a>
            </div>
            <div className="col-2">
                <input type="submit"/>
            </div>
           
        </div>
        <div className="row" id="happyDog">
            <div className="col-4">
                Into this!
             </div>
             <div className="col-4">
                <img src="images/happyDog.avif" className="img-fluid"/>
             </div>
        </div>
</div>

export default Donation;