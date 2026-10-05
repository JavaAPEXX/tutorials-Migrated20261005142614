import React from 'react';

type JspShoppingCartHintComponentProps = {
    data?: Record<string, any>;
};

export const JspShoppingCartHintComponent: React.FC<JspShoppingCartHintComponentProps> = ({ data = {} }) => {

    return (
        <div className="modern-container">
            <div className="modern-card">
                <hr/>
                <p>
                    Your shopping cart is holding
                    
                        1 item.
                    
                        {(order.getItems().size())} items.
        ))}
                    <a href="/?command=Checkout">Checkout</a>
                </p>
        ))}
        ))}
            </div>
        </div>
    );
};

export default JspShoppingCartHintComponent;
