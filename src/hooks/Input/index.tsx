import React, {useEffect, useRef} from "react";
import "./index.css";

interface TypesProps {
    type: string,
    label?: string,
    value?: string,
    placeholder?: string,
    focus?: boolean,
    onBlur?: (event: any) => {},
    onInput?: (event: any) => {},
    onFocus?: (event: any) => {},
    onChange?: (event: any) => {},
}

function MyInput(props: TypesProps) {
    const inputEl: any = useRef(null);
    useEffect(() => {
        // 是否自动聚焦
        if (props.focus) {
            inputEl.current.focus();
        }
    }, []);

    const _props = Object.assign({}, props);
    delete _props.focus;
    return (
        <label className={"myInput input-" + props.type}>
            {
                _props.type === 'textarea' ? (
                    <textarea className='input' ref={inputEl} {..._props}/>
                ) : (
                    <input className='input' ref={inputEl}  {..._props}/>
                )
            }
            <span className='draft'>{props.label}</span>
        </label>
    )
}

MyInput.defaultProps = {
    type: 'text',
    focus: false
};

export default MyInput;
