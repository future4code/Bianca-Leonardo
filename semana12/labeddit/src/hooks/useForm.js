import {useState} from 'react';

function useForm(initialValue) {
    const [form, setForm] = useState(initialValue)

    // função controlada onChange
    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    // limpa campos
    const clear = () => {
        setForm(initialValue)
    }
    return [form, onChange, clear]
}

export default useForm;