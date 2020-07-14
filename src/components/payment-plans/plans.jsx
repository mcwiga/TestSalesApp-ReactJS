import React, { Component } from "react";

class PricingPlans extends Component {
  state = {};
  render() {
    return (
      <div id="prices-form" className="md:w-1/3 w-full mr-4 md:mb-8">
        <div className="text-center text-pasha font-bold text-2xl mt-4 mb-6">
          Subscribe to a plan
        </div>
        <div className="flex justify-between mb-8">
          <div
            id="basic"
            className="w-1/2 rounded overflow-hidden border rounded-md p-2 mr-4 md:mr-8"
          >
            <div className="px-2 py-2">
              <div className="text-gray-500 text-xl mb-2 font-medium">
                Basic
              </div>
              <p className="text-pasha text-2xl font-extrabold">$5.00</p>
              <div className="flex-wrap">
                <div className="leading-none text-gray-500 text-xs font-medium">
                  Per month
                </div>
                <div className="leading-none text-gray-500 text-xs font-medium mt-1">
                  Billed monthly
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  id="submit-basic"
                  onClick={() => goToPaymentPage("basic")}
                  className="bg-pasha hover:bg-white outline-none hover:text-pasha hover:border hover:border-black text-white focus:bg-white focus:text-pasha font-light py-2 px-4 rounded-lg"
                  type="submit"
                >
                  <div
                    id="submit-basic-button-text"
                    className="w-auto -mx-2 md:mx-0"
                  >
                    Select
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            id="premium"
            class="w-1/2 rounded overflow-hidden border rounded-md p-2"
          >
            <div class="px-2 py-2">
              <div class="text-gray-500 text-xl mb-2 font-medium">Premium</div>
              <p class="text-pasha text-2xl font-extrabold">$15.00</p>
              <div class="flex-wrap">
                <div class="leading-none text-gray-500 text-xs font-medium">
                  Per month
                </div>
                <div class="leading-none text-gray-500 text-xs font-medium mt-1">
                  Billed monthly
                </div>
              </div>
              <div class="flex justify-center mt-6">
                <button
                  id="submit-premium"
                  onClick="goToPaymentPage('premium')"
                  class="bg-pasha hover:bg-white outline-none hover:text-pasha hover:border hover:border-black text-white focus:bg-white focus:text-pasha font-light py-2 px-4 rounded-lg"
                  type="submit"
                >
                  <div
                    id="submit-premium-button-text"
                    class="w-auto -mx-2 md:mx-0"
                  >
                    Select
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="payment-form" className="flex justify-center hidden">
          <div className="w-full inline-block border p-4 rounded-md">
            <div className="font-bold text-xl mb-2">
              Enter your card details. Your subscription will start now.
            </div>
            <p className="text-gray-700 text-base">
              → Total due now <span id="total-due-now">$0.00</span>
            </p>
            <p id="price-selected" className="text-gray-700 text-base mb-4"></p>

            <div className="w-full">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Full name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 border rounded-md py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    placeholder="First and last name"
                    required
                  />
                </div>
              </div>
              <form id="payment-form">
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3 mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Card
                    </label>
                    <div
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-md py-3 px-2 leading-tight focus:outline-none focus:bg-white"
                      id="card-element"
                    ></div>
                    <div
                      id="card-element-errors"
                      className="text-gray-700 text-base mt-2"
                      role="alert"
                    ></div>
                  </div>
                </div>
                <button
                  id="submit-premium"
                  className="w-full bg-pasha hover:bg-white hover:shadow-outline hover:text-pasha hover:border hover:border-black focus:shadow-outline text-white focus:bg-white focus:text-pasha font-light py-2 px-4 rounded-md"
                  type="submit"
                >
                  <div className="">
                    <div id="loading" className="hidden">
                      Subscribing...
                    </div>
                    <span id="button-text" className="">
                      Subscribe
                    </span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingPlans;
