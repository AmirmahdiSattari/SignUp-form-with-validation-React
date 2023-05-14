import './FormInput.css'
import { useState } from 'react';

const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { onChange, id, icon, errorMsg, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className="flex flex-col w-[90%]
        justify-center flex-wrap ">
            <div className="
            input-container
            bg-white mt-2 rounded-lg
            w-full
            flex items-center
            justify-start
            pl-3
            ">
                <div className="text-gray-500">
                    <ion-icon name={icon}></ion-icon>

                    <input
                        className="
                          inputData
                          outline-none
                          m-2 w-[80%]"
                        {...inputProps}
                        onChange={onChange}
                        onBlur={handleFocus}
                        onFocus={() =>
                            inputProps.name === "confirmPassword" && setFocused(true)
                        }
                        focused={focused.toString()} />

                    <span className="warning">{errorMsg}</span>
                </div>

            </div>
            <p>
            </p>
        </div>
    )
}
export default FormInput;