import React from 'react';
import './index.css';

interface TypesProps {
    active: boolean,
    children: any
    onMaskTap?: () => void,
}

function MaskGround(props: TypesProps) {
    const {active, onMaskTap} = props;
    return (
        active ? (
            <div data-mask className={'mask-wrap'} onClick={(e: any) => {
                const {target} = e;
                if (target.dataset.mask) {
                    onMaskTap && onMaskTap();
                }
            }}>
                {
                    props.children()
                }
            </div>) : null
    );
}

MaskGround.defaultProps = {
    active: false,
};

export default MaskGround;
