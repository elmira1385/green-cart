import React from "react";

const BannerFast = () => {
  return (
    <div className="flex justify-center items-center px-32 pt-12">
      <div className="bg-[url(/bannerFast.png)] w-full rounded-lg  bg-cover bg-center flex  justify-end p-24">
        <div className="flex flex-col gap-8  ">
          <p className="text-3xl font-semibold text-primary ">
            Why We Are the Best?
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 ">
                <div>
                    <img src="./delivery_truck.svg" alt="" />
                </div>
              <div>
                <h3 className="text-xl font-semibold text-grey700">
                  Fastest Delivery
                </h3>
                <p className="text-gray-500/70 text-sm">
                  Groceries delivered in under 30 minutes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
                <div>
                    <img src="./leaf_icon.svg" alt="" />
                </div>
              <div>
                <h3 className="text-xl font-semibold text-grey700">
                  Freshness Guaranteed
                </h3>
                <p className="text-gray-500/70 text-sm">
                  Fresh produce straight from the source.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
                <div>
                    <img src="./coin_icon.svg" alt="" />
                </div>
              <div>
                <h3 className="text-xl font-semibold text-grey700">
                  Affordable Prices
                </h3>
                <p className="text-gray-500/70 text-sm">
                  Quality groceries at unbeatable prices.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
                <div>
                    <img src="./trust_icon.svg" alt="" />
                </div>
              <div>
                <h3 className="text-xl font-semibold text-grey700">
                  Trusted by Thousands
                </h3>
                <p className="text-gray-500/70 text-sm">
                  Loved by 10,000+ happy customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFast;
