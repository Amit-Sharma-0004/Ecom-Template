import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50 text-gray-700">
      {/* Top Section */}
      <div className="my-container grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
        {/* Fruit & Vegetables */}
        <div>
          <h4 className="font-bold mb-2">FRUIT & VEGETABLES</h4>
          <ul className="space-y-1 text-sm">
            <li>Fresh Vegetables</li>
            <li>Herbs & Seasonings</li>
            <li>Fresh Fruits</li>
            <li>Cuts & Sprouts</li>
            <li>Exotic Fruits & Veggies</li>
            <li>Packaged Produce</li>
            <li>Party Trays</li>
          </ul>
        </div>

        {/* Breakfast & Dairy */}
        <div>
          <h4 className="font-bold mb-2">BREAKFAST & DAIRY</h4>
          <ul className="space-y-1 text-sm">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Cheese</li>
            <li>Egg Substitutes</li>
            <li>Honey</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Yogurt</li>
          </ul>
        </div>

        {/* Meat & Seafood */}
        <div>
          <h4 className="font-bold mb-2">MEAT & SEAFOOD</h4>
          <ul className="space-y-1 text-sm">
            <li>Breakfast Sausage</li>
            <li>Dinner Sausage</li>
            <li>Beef</li>
            <li>Chicken</li>
            <li>Sliced Deli Meat</li>
            <li>Shrimp</li>
            <li>Wild Caught Fillets</li>
            <li>Crab and Shellfish</li>
          </ul>
        </div>

        {/* Beverages */}
        <div>
          <h4 className="font-bold mb-2">BEVERAGES</h4>
          <ul className="space-y-1 text-sm">
            <li>Water</li>
            <li>Sparkling Water</li>
            <li>Soda & Pop</li>
            <li>Coffee</li>
            <li>Milk & Plant-Based Milk</li>
            <li>Tea & Kombucha</li>
            <li>Craft Beer</li>
            <li>Wine</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4">
        <div className="my-container flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Contact */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="font-bold mr-2">📞 8 800 555-55</span>
            <span className="text-gray-500">Working 8:00 - 22:00</span>
          </div>

          {/* App Links */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <span>Download App on Mobile:</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="h-8"
            />
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <span>🔵</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
