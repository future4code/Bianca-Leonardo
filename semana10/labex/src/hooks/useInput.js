import { useState } from 'react';

function useInput(initialValue) {

    const [value, setValue] = useState(initialValue)

    const onChangeData = (e) => {
        setValue(e.target.value)
    }

    return [value, onChangeData]
}

export default useInput;