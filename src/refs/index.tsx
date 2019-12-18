import React from 'react';

interface RefDomProps {

}
interface RefDomState{

}

interface CardProps {
    createDom: any,
    funcDom: any
}
interface CardState {

}

class Card extends React.Component<CardProps, CardState>{
    constructor(props: CardProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <ul className="list">
                <li className="item" ref={this.props.createDom}>
                    createRef()
                </li>
                <li className="item" ref={this.props.funcDom}>
                    回调函数 (ele) => {}
                </li>
            </ul>
        );
    }

}

export class RefDom extends React.Component<RefDomProps, RefDomState>{

    cardComponentRef: React.RefObject<Card> = React.createRef();
    cardComponentFunc: any = (ele: Card) :void => {
        console.log(ele, 'func - Card');
    };
    cardRef = React.createRef();
    cardFunc = (ele: HTMLLIElement) :void => {
        console.log(ele, 'func');
    };

    constructor(props: RefDomProps) {
        super(props);
    }

    componentDidMount(): void {
        console.log(this.cardRef.current, 'createRef');
        console.log(this.cardComponentRef.current, 'createRef-CardComponent');
    }

    render(): React.ReactNode {
        return (
            <div className='refs-wrap'>
                {/*<Card ref={this.cardComponentRef} createDom={this.cardRef} funcDom={this.cardFunc}/>*/}
                <Card ref={this.cardComponentFunc} createDom={this.cardRef} funcDom={this.cardFunc}/>
            </div>
        );
    }
}
