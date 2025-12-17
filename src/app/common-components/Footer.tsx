"use client"
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col px-36 pt-10 bg-[#e1fee2]">
      <div className="flex items-center justify-between border-b pb-20 border-b-gray-400">
        <div className="flex flex-col gap-6">
          <img className="w-32" src="./logo.svg" alt="" />
          <p className="max-w-102.5 text-gray-500">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>
        <div className="flex gap-20 items-center ">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-base text-gray-900 ">
              Quick Links
            </h2>
            <ul className="text-sm space-y-1 text-gray-500 pt-4">
              <li>
                <a className="hover:underline transition-all " href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Offers &amp; Deals
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-base text-gray-900 ">
              Need help?
            </h2>
            <ul className="text-sm space-y-1 text-gray-500 pt-4">
              <li>
                <a className="hover:underline transition-all " href="#">
                  Delivery Information
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Payment Methods
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Track your Order
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                 Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-base text-gray-900 ">
              Follow Us
            </h2>
            <ul className="text-sm space-y-1 text-gray-500 pt-4">
              <li>
                <a className="hover:underline transition-all " href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="hover:underline transition-all" href="#">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
          <p className="py-4 text-center text-base">Copyright 2025 © GreatStack.dev All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
