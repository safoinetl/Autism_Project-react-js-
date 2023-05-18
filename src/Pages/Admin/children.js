import React, { useEffect, useState } from "react";
import RegisterChild from './registerChild'
import ChildListPage from "./ChildListPage";
import AddChildToGroup from "./AddchildtoGroup";
import NavBar from './AdminNavbar'

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Children() {
    const [checked, setChecked] = useState(1);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Children List', value: '1' },
        { name: 'Add Child', value: '2' },
        { name: 'Add child to group', value: '3' },

    ];



    return (
        <div>
            <NavBar />
            <br />
            <br />
            <h1>Manag users</h1>
            <br />



            <br />
            <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                            setChecked(e.currentTarget.value);
                            setRadioValue(e.currentTarget.value)
                        }}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <br />

            <br />
            {checked == 1 ?
                <ChildListPage />
                : checked == 2 ?
                    <RegisterChild />
                    :
                    <AddChildToGroup />}


        </div>
    )
}

export default Children