
// component as a function expression - using an anonymous (nameless) function  
const Promo = function () {
    return (
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
            </div>
            <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>
        </div>
    );
}

// Changing a component from a function declaration to a function expression doesn't change its behavior, or how you write the code to render the a component.


export default Promo;