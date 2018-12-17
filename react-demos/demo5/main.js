function FarmattedDate(props) {
    return  <h2>It is {props.date.toLocaleTimeString()}</h2>;
    
}

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state={date:new Date()};
        
    }
    componentDidMount(){
        //组件输出到DOM后会执行componentDidMount(),这是建立定时器的好地方
        this.timerID=setInterval(() => this.tick(), 1000);

    }
    componentWillUnmount(){
        clearInterval(this.timerID);

    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return (
            <div>
            <h1>Hello,world</h1>
            <FarmattedDate date={this.state.date}/>
            </div>
        );
    }
}

function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
            </div>
    );
}

ReactDOM.render(<App />,document.getElementById('example'));