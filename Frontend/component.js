'use strict';
const e = React.createElement;

class Number extends React.Component{

    constructor(props){
        super(props);
        this.state = { 'inputClass': 'font-eaves-regular text-center w-28 h-12 bg-neutral-300 text-2xl border-2 border-b-neutral-900' }

        this.minus = (min, softMin) => {
            console.log("Estoy en min");
            const input = document.getElementById('number');
            const actualValue = parseInt(input.value);

            // Verificar softMin
            if (actualValue - 1 <= softMin){
                this.setState({ 'inputClass': 'font-eaves-regular text-center w-28 h-12 bg-red-300 text-2xl border-2 border-b-red-500' });
            } else {
                this.setState({ 'inputClass': 'font-eaves-regular text-center w-28 h-12 bg-neutral-300 text-2xl border-2 border-b-neutral-900' });
            }

            // Verificar límites
            if (actualValue - 1 < min){
                input.value = actualValue.toString();
            } else {
                input.value = (actualValue - 1).toString();
            }
        }

        this.plus = (max, softMax) => {
            console.log("Estoy en max");
            const input = document.getElementById('number');
            const actualValue = parseInt(input.value);

            // Verificar softMax
            if (actualValue + 1 >= softMax){
                this.setState({ 'inputClass': 'font-eaves-regular text-center w-28 h-12 bg-red-300 text-2xl border-2 border-b-red-500' });
            } else {
                this.setState({ 'inputClass': 'font-eaves-regular text-center w-28 h-12 bg-neutral-300 text-2xl border-2 border-b-neutral-900' });
            }

            // Verificar límites
            if (actualValue + 1 > max){
                input.value = actualValue.toString();
            } else {
                input.value = (actualValue + 1).toString();
            }
        }
    }

    render(){
        return e('div', { className: 'flex flex-row justify-center items-center' }, [
            e('button', { 
                id:'button-minus',
                key: 'button-minus',
                className: 'font-eaves-ultra w-12 h-12 pt-px bg-red-600 text-white text-5xl rounded-lg mr-4 hover:bg-red-900',
                onClick: () => this.minus(this.props.min, this.props.softMin)
            }, '-'),
            e('input', { 
                id: 'number', 
                key: 'input',
                className: this.state.inputClass, 
                defaultValue: this.props.defaultNumber,
            }),
            e('button', { 
                id: 'button-plus', 
                key: 'button-plus',
                className: 'font-eaves-ultra w-12 h-12 pt-0.5 bg-red-600 text-white text-5xl rounded-lg ml-4 hover:bg-red-900', 
                onClick: () => this.plus(this.props.max, this.props.softMax)
            }, '+')
        ])
    }
}

function buttons(){
    const domContainer = document.getElementById('box');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(Number, { defaultNumber: 5, max: 10, min: 0, softMin: 1, softMax: 9, precision: 1 }));
}