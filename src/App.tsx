import React from 'react';
import './App.css';
import {RefDom} from './refs';
import TodoListComponent from './hooks';
import {MouseTracker} from './highComponent';

/**
 * 1、ref 对于真实的HTML节点和React组件返回的内容不同 { 真实: 真实的DOM, RECT组件: 组件的挂载实例}
 *
 * 2、函数组件不能使用ref，因为它没有实例
 */

interface propsType {
    mouse: {
        x: number,
        y: number
    }
}

type mouseType = {
    x: number,
    y: number
}
interface ViewProps {
    mouse: mouseType,
    title: string
}

function View (props: ViewProps) {
    return (
        <div>
            <h1>{props.title}</h1>
            the position now is (x: {props.mouse.x}, y: {props.mouse.y})
        </div>
    )
}

class MyComponent extends React.Component {
    constructor (props: any) {
        super(props);
    }

    componentDidMount(): void {
    }

    render (): React.ReactNode {
        return  (
            <React.Profiler id={'main'} onRender={() => {
                console.log('更新了')
            }}>
                <RefDom/>
            </React.Profiler>
        )
    }
}

interface TypeProps {
    title: string
}
interface TypeState {
}

function Hoc (Component: any) {
    return class extends React.Component<TypeProps, TypeState> {
        render(): React.ReactNode {
            return (
                <MouseTracker render={(mouse: {x: number, y: number}) => (
                    <Component {...this.props} mouse={mouse}/>
                )}/>
            );
        }
    }
}
const Hoc1 = Hoc(View);


const App: React.FC = () => {
    const todoList = [
        {
            id: 1,
            title: '这是标题',
            desc: '这是描述',
            finished: false //
        },
        {
            id: 1,
            title: '这是标题',
            desc: '这是描述',
            finished: false //
        }
    ];
    return (
        <div className='app'>
            {/*<MyComponent/>*/}

            {/*<MouseTracker render={(mouse: {x: number, y: number}) => (*/}
                {/*<View title={'render&props'} mouse={mouse}/>*/}
            {/*)}/>*/}


            {/*<Hoc1 title={'Hoc高阶组件'}/>*/}
            <h3 className='title'>待办事项</h3>
            <TodoListComponent list={todoList}/>
        </div>
    )
};

export default App;
