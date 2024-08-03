import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';
import CartItem from '../components/CartItem';

const Cart = () => (
  <Context.Consumer>
    {(value) => {
      console.log(value);
      const {
        cartList,
        removeAllCartItems,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value;
      const onClickRemoveAll = () => {
        removeAllCartItems();
      };
      let totalCost = 0;
      cartList.forEach((each) => {
        totalCost += each.price * each.days;
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thankyou for Booking');
        removeAllCartItems();
      };

      return (
        <>
          <Header />
          <div className="property-container">
            <h1>Cart Items</h1>
            {cartList?.length === 0 ? (
              <p class="empty-cart">You Haven't Book Any Property</p>
            ) : (
              <ul className="property-list">
                {cartList?.map((each) => (
                  <CartItem
                    key={each.id}
                    item={each}
                    removeAllCartItems={removeCartItem}
                    incrementCartItemQuantity={incrementCartItemQuantity}
                    decrementCartItemQuantity={decrementCartItemQuantity}
                  />
                ))}
              </ul>
            )}
            {totalCost !== 0 && (
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div class="bill-section">
                      <h3>Contact Information</h3>
                      <label for="fname">Full Name</label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                        required
                      />

                      <label for="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                      />

                      <label for="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>

                    <div class="bill-section">
                      <h3>Payment Details</h3>
                      <label for="cname">Name on Card</label>
                      <input
                        type="text"
                        id="cname"
                        name="cardname"
                        placeholder="John More Doe"
                        required
                      />

                      <label for="ccnum">Credit Card Number</label>
                      <input
                        type="text"
                        id="ccnum"
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                        required
                      />
                    </div>
                    <div class="bill-section">
                      <h3>Rental Details</h3>
                      <label for="checkin">Check-in Date</label>
                      <input
                        type="date"
                        id="checkin"
                        name="checkin_date"
                        required
                      />

                      <label for="checkout">Check-out Date</label>
                      <input
                        type="date"
                        id="checkout"
                        name="checkout_date"
                        required
                      />
                    </div>
                  </div>
                  <p className="total-cost">Total Cost : {totalCost} Rs</p>
                  <div className="button-card">
                    <button className="book-button" type="submit">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <Footer />
        </>
      );
    }}
  </Context.Consumer>
);

export default Cart;
