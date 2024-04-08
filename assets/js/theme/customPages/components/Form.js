import React from 'react';
import PropTypes from 'prop-types';
const Form = ( { selectedId, requestStatus, handleOnSubmit, handleInputChange } ) => {
    return (
        <>
            <h4>{'Check Order Status:'}</h4>
            <form className='form order-form'
                  onSubmit={(e) => {
                      handleOnSubmit(selectedId, e)
                  }}>
                <div className={'form-field form-field--input'}>
                    <label className="form-label" htmlFor="order-id">Your order Id:</label>
                    <input
                        name={'order-id'}
                        className='form-input'
                        type="text"
                        onChange={(e) => handleInputChange(e.target.value)}
                        value={selectedId}
                        maxLength={10}
                        placeholder="Enter Order id..."
                    />
                    {requestStatus.error && <p className={'message-error'}> {requestStatus.error} </p>}
                </div>
                <button type="submit" className='button button--primary'>
                    Get Order
                </button>
            </form>
        </>
    );
};

Form.propTypes = {
    selectedId: PropTypes.string.isRequired,
    requestStatus: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
    }).isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};
export default Form;
