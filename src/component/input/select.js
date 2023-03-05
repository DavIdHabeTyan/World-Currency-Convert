import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import PropTypes from "prop-types";

const BasicSelect = (props) => {
    return (
        <Box sx={{minWidth: 120, '& > :not(style)': {m: 1, width: '25ch'},}}
        >
            <TextField
                value={props.amount}
                id="outlined-basic"
                // label="Outlined"
                variant="outlined"
                onChange={e => props.onAmountChange(e.target.value)}
                // inputProps={{style: {color: 'green',}}}

            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.currency}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.currency}
                    label="Age"
                    onChange={e => props.onCurrencyChange(e.target.value)}

                >
                    {props.currencies.map((currency => (
                        <MenuItem value={currency}>{currency}</MenuItem>
                    )))}
                </Select>
            </FormControl>
        </Box>
    );
}

BasicSelect.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default BasicSelect;