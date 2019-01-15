import React, { Component } from 'react';
// @ts-ignore
import { Checkbox } from 'carbon-components-react';

class CheckboxExample extends Component {
    public render() {
        return (
            <div>
                <Checkbox defaultChecked labelText="checkbox1" id="checkbox-label-1" />
                <Checkbox defaultChecked labelText="checkbox2" id="checkbox-label-2" />
            </div>
        )
    }
}

export default CheckboxExample;