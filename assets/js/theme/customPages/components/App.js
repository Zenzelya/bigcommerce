import React, { Suspense, useContext } from 'react';
import Form from './Form';
import { OrderContext } from './OrderProvider';

const App = () => {
    const [state, dispatch ] = useContext(OrderContext);
    const content = '';

    const getOrderData = (value, e) => {
        e.preventDefault();
        if (!/^\d{1,10}$/.test(value)) {
            dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: false, error: 'Enter order ID (numbers only)' } });
            return;
        }
        const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};

        if (window.location.host === 'localhost:3000' && state.selectedId === 110) {
            dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: true, error: '' }});
            setTimeout(() => {
                dispatch({ type: 'SET_RESPONSE_DATA', payload: state.testOrder });
                dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: false, error: '' }});
            },2000 );
            return;
        }

        dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: true, error: '' } });

        fetch(`/api/storefront/orders/${value}`, options)
            .then((response) => {
                if (!response.ok) {
                    dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: false, error: `Not found order#${value}`} });
                    throw new Error(`HTTP error! Status: ${response.detail}`);
                }
                return response.json();
            })
            .then((data) => {
                dispatch({ type: 'SET_RESPONSE_DATA', payload: data });
                dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: false, error: '' } });
            })
            .catch((error) => {
                dispatch({ type: 'SET_RESPONSE_DATA', payload: null });
                console.error('Error fetching data:', error);
            });
    };

    const handleInputChange = (value) => {
        dispatch({ type: 'SET_SELECTED_ID', payload: value });

        if (!/^\d{1,10}$/.test(value)) {
            dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: false, error: 'Order ID (numbers only, max 10 numbers)' }});
        } else {
            dispatch({ type: 'SET_REQUEST_STATUS', payload: { loading: false, error: '' }});
        }
    };

    return (
        <div className="order-info">
            <Form {...state} handleOnSubmit={ getOrderData } handleInputChange={handleInputChange} />
            {state.requestStatus.loading && <Loading />}
            {!state.requestStatus.loading && state.responseData &&
                <>
                    <div className="main-data">
                        <RenderOrder { ...state.responseData } />
                        <RenderCustomer { ...state.responseData} />
                    </div>
                    <div className="products-list">
                        <RenderProducts { ...state.responseData.lineItems }
                                        currency={state.responseData.currency.symbol}
                                        discountAmount={ state.responseData.discountAmount }
                                        totalAmount={ state.responseData.orderAmount }/>
                    </div>
                </>
            }
        </div>
      );
}
export default App;

function Loading() {
    return (<h2>🌀 Loading...</h2>);
}

const RenderOrder = ({ billingAddress }) => {
    let arrayKeys = Object.keys(billingAddress);
    arrayKeys.forEach(item => {
        if (!billingAddress[item].length) {
            delete billingAddress[item];
        }
    });
    arrayKeys = Object.keys(billingAddress);
    return (
        <div className='customer-info'>
            <h5>{'Customer information:'}</h5>
            <ul>
                {arrayKeys.map((item, index) => (
                    <li key={index}><b>{`${item}:`}</b>&nbsp;{ billingAddress[item] }</li>
                ))}
            </ul>
        </div>
    );
};

const RenderCustomer = ({ orderId, customerId, status }) => {
    return (
        <div className='order-info'>
            <h5>{'Order information:'}</h5>
            <ul>
                <li><b>{'Order Id:'}</b>&nbsp;{orderId}</li>
                <li><b>{'Customer Id:'}</b>&nbsp;{customerId}</li>
                <li><b>{'Status info:'}</b>&nbsp;{status}</li>
            </ul>
        </div>
    );
};

const RenderProducts = ({ physicalItems, discountAmount, totalAmount, currency}) => {

    return (
        <div className='products-info' >
        <h5>{'Products: '}</h5>
        <table>
            <thead>
            <tr>
                <th>Count</th>
                <th>Name</th>
                <th>SKU</th>
                <th>List Price</th>
            </tr>
            </thead>
            <tbody>
            {physicalItems.map((product, index) => (
                <tr key={index}>
                    <td>{product.quantity}</td>
                    <td><a href={product.url}>{product.name}</a></td>
                    <td>{product.sku}</td>
                    <td>{product.listPrice + ' ' + currency}</td>
                </tr>
            ))}
            <tr className={'tb-footer'}>
                <td colSpan="3">Discount Amount:</td>
                <td>{discountAmount.toFixed(2) + ' ' + currency}</td>
            </tr>
            <tr className={'tb-footer'}>
                <td colSpan="3"><b>Total Amount:</b></td>
                <td><b>{totalAmount.toFixed(2) + ' ' + currency}</b></td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}
