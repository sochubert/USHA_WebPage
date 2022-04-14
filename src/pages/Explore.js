import React from "react";
import { Button, Pane, Text, majorScale, Combobox, AirplaneIcon } from 'evergreen-ui';

function Explore() {
    return (
        <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
            <Button>Click me!</Button>
            <Text>This is a clickable Button</Text>
            <Combobox
                items={['Banana', 'Orange', 'Apple', 'Mango']}
                onChange={selected => console.log(selected)}
                placeholder="Fruit"
                autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: 'Fruit'
                }}
            />
            <AirplaneIcon />
        </Pane>
    )
}

export default Explore;