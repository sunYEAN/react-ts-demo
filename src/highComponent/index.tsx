import * as React from 'react';


interface mouseProps {
    render: Function
}
interface mouseState {
    x: number,
    y: number,
}


 export class MouseTracker extends React.Component<mouseProps, mouseState>{
    constructor (props: mouseProps) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        }
    }
    eventClick (e: any) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render(): React.ReactNode {
        return (
            <div className='mouse-wrap' onMouseMove={this.eventClick.bind(this)}>
                {
                    this.props.render(this.state)
                }
            </div>
        );
    }
}

