import React, { useEffect, useState } from "react";
import AddGroup from "./CreateGroup";
import NavBar from './AdminNavbar';
import ListGroup  from "./ListGroup";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



function Group() {
    const [checked, setChecked] = useState(1);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'List Group', value: '1' },
        { name: 'Add Group', value: '2' },

    ];



    return (
        <div>
            <NavBar />
            <br />
            <br />
            <h1>Manage Group</h1>
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
                <ListGroup  />
                :
                <AddGroup />
            }


        </div>
    )
}

export default Group;