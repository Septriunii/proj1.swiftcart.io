import React from "react";

function Footer() {
  return (
    <div className="w-full h-auto bg-slate-600 absolute bottom-0">
      <div className="flex gap-3 ">
        <div>
          CUSTOMER SERVICE
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Order Tracking</li>
            <li>Return & Refund</li>
            <li>Payment Methods</li>
            <li>Free Shipping</li>
            <li>SwiftCart Guarantee</li>
          </ul>
        </div>
        <div>
          ABOUT SWIFTCART
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Policies</li>
            <li>Privacy Policy</li>
            <li>SwiftCart Mall</li>
            <li>Seller Centre</li>
            <li>Flash Deals</li>
            <li>Media Contact</li>
          </ul>
        </div>
      </div>
      <div className="h-16 items-center flex bg-red-800">
        <div>Swiftcart 2023</div>

        <div className="flex">
          FOLLOW US
          <ul className="flex">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
