function App() {
    return (
        <>
            <picture>
                <source
                    media="(min-width:680px)"
                    type="image/jpeg"
                    srcSet="image-product-desktop.jpg"
                />
                <img
                    className="perfume"
                    src="image-product-mobile.jpg"
                    alt="Perfume made by Olivier Polge."
                />
            </picture>
            <div className="info">
                <p>Perfume</p>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p>
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="pricing">
                    <span>$149.99</span>
                    <span>$169.99</span>
                </div>
                <button>
                    <img src="icon-cart.svg" />
                    Add to Cart
                </button>
            </div>
        </>
    );
}

export default App;
