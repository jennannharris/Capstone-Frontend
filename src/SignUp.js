import { Link } from "react-router-dom";

const SignUp = ()=> {
    return (
        
          <div classNameName="row">

                <div className="row">
                    <div className="row" id="text">
                        <div className="col-6">Sign Up</div>
                     </div>
                </div>

                <div className="row">
                    <div className>First Name:</div>
                    <input type="text" id="text" />
                </div>

                <div className="col-3">Last Name:
                    <input type="text" id="text" />
                </div>

            

                <div className="row">
                    <div className="col-1">
                        Email:
                        <input type="text" id="text" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        Contact Number:
                        <input type="text" id="text" />
                    </div>
                </div>

                <div className="col-3">
                    Date of Birth:
                    <input type="text" id="text" />
                </div>
            

                <div className="row" id="row">
                    <div className="col-3">Address:</div>

                    <div className="col-3">
                        <input type="text" id="text" placeholder="City" />
                     </div>
                </div>

                <div className="col-3">
                    <input type="text" id="text" placeholder="State" />
                </div>

                <div className="col-2">
                    <input type="text" id="text" placeholder="Zip Code" />
                </div>
                
            

                <div className="row">
                    <div className="col-3">
                        Password:
                        <input type="text" id="text" />
                    </div>
                </div>
            
                <div classNameName="row">
                    <div classNameName="Submit text-center" id="submit">
                        <input type="submit" />
                        <a href="login.html"></a>
                    </div>
                </div>  
            </div>
    );

 };

      
export default SignUp;