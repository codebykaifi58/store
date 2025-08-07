    import React, { useEffect, useState } from 'react';

    function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage
    const loadCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    };

    useEffect(() => {
        loadCart();

        // Update cart on storage or custom event
        const handleStorageChange = () => loadCart();
        const handleCartUpdated = () => loadCart();

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('cartUpdated', handleCartUpdated);

        return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('cartUpdated', handleCartUpdated);
        };
    }, []);

    // Increment quantity
    const incrementQuantity = (index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // Decrement quantity
    const decrementQuantity = (index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
        }
    };

    // Delete item from cart
    const deleteItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    // Calculate grand total
    const grandTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    // Button click handler (aap backend ko call karne ke liye is function ko modify kar sakte hain)
    const handleCheckout = () => {
        alert(`Grand Total: ₨${grandTotal.toLocaleString()}\n\nYahan se backend ko call kar sakte hain.`);
    };

    return (
        <div className="container my-5" id='cart-back' style={{ minHeight: '550px' }}>
        <h2 className="mb-4">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <>
            <table className="table table-bordered align-middle">
                <thead className="table-light">
                <tr>
                    <th>Product Details</th>
                    <th style={{ minWidth: '130px' }}>Quantity</th>
                    <th>Unit Price (₨)</th>
                    <th>Total Price (₨)</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item, index) => (
                    <tr key={index}>
                    <td>
                        <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#333' }}>
                            {item.name}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '2px' }}>
                            {item.flavor} – {item.weight}
                        </div>
                        </td>

                    <td>
                        <div className="d-flex align-items-center justify-content-center">
                        <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            onClick={() => decrementQuantity(index)}
                            disabled={item.quantity <= 1}
                        >
                            −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            className="btn btn-sm btn-outline-secondary ms-2"
                            onClick={() => incrementQuantity(index)}
                        >
                            +
                        </button>
                        </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>{item.price.toLocaleString()}</td>
                    <td style={{ textAlign: 'center' }}>
                        {(item.price * item.quantity).toLocaleString()}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteItem(index)}>
                        Delete
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Grand total + Checkout button */}
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h4>
                Grand Total: <span style={{ color: '#28a745' }}>₨{grandTotal.toLocaleString()}</span>
                </h4>
                <button className="btn btn-success" onClick={handleCheckout}>
                Proceed to Checkout
                </button>
            </div>
            </>
        )}
        </div>
    );
    }

    export default Cart;
