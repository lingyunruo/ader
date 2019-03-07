

export default class Action1 {

    constructor(comp) {
        this.comp = comp;
    }

    didMount = () => {
        alert('我是初始化的ooo');
    }

    didUpdate = () => {
        alert('我是didUpdate');
    }

    alertName = () => {
        this.comp.props.dispatch({
            type: 'exam/update',
            payload: {
                name: '筝'
            }
        });
    }

}