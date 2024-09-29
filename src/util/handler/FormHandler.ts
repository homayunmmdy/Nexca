import React from 'react'

class FormHandler {
    constructor(private setForm: React.SetStateAction<any>){}

    handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        this.setForm((prevState: any) => ({
          ...prevState,
          [name]: value,
        }));
    }
}

export default FormHandler