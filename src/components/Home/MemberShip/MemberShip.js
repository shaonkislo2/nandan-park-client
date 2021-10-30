import React from 'react';

const MemberShip = () => {
    return (
        <div id="membership">
			<div className="mt-5">
				<h1 className="text-primary my-5">Membership</h1>
				<div className="contact-form p-3">
					<div className="row  d-flex justify-content-center ">
						<div className="col-md-6 mt-5">
                        <input type="text" placeholder="Your Name" />
                    <br />
                    <br />
                        <input type="text" placeholder="Your Job" />
                    <br />
                    <br />
                    <input type="text" placeholder="Your Location" />
                    <br />
                    <br />
                    <input type="text" placeholder="Your Phone No." />
                    <br />
                    <br />
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
						</div>
						<div className="col-md-6">
							<div className="contact-im">
								<img
									className="w-100"
									src="https://nandanpark.com/wp-content/uploads/2019/12/card.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default MemberShip;