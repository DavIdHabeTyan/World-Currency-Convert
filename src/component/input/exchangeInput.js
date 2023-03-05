import React from 'react';
import PropTypes from "prop-types";

const ExchangeInput = (props) => {
    return (
        <div className='group'>
            <input
                type="text"
                value={props.amount}
                onChange={e => props.onAmountChange(e.target.value)}
            />
            <select
                value={props.currency}
                onChange={e => props.onCurrencyChange(e.target.value)}
            >
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>

        </div>
    );
};

ExchangeInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default ExchangeInput;