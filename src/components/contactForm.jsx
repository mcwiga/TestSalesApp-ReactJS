import React from "react";

export default () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Try our Free Trial</h2>
          <h3 className="section-subheading text-muted">
            Try our 7 day free trial!!
          </h3>
        </div>
        <form id="contactForm" name="sentMessage" novalidate="novalidate">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  required="required"
                  data-validation-required-message="Please enter your name."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Password *"
                  required="required"
                  data-validation-required-message="Please enter a password"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div id="success"></div>
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
