import React from "react";
import "./index.css";
import MyInput from '../Input';
import MaskBackground from '../Mask';

interface TypeProps {
    active: boolean,
    onMaskTap?: () => void
}
function InputBox(props: TypeProps) {
    const {active, onMaskTap} = props;
    return (
        <MaskBackground onMaskTap={onMaskTap} active={active}>
            {
                () => (
                    <div className={'input-box active'}>
                        <div className='input-wrap'>
                            <h3>+ 待办事项</h3>
                            <div className='item'>
                                <MyInput focus placeholder='标题'  type='text'/>
                            </div>
                            <div className='item'>
                                <MyInput placeholder='描述'  type='textarea'/>
                            </div>

                            <MyInput type='checkbox' label={'自动保存至草稿箱'}/>
                            <button className='submit'>提交</button>
                        </div>
                    </div>
                )
            }
        </MaskBackground>
    )
}
InputBox.defaultProps = {
    active: false,
    onMaskTap: () => {}
};

export default InputBox;
