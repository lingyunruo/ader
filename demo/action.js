
import childAction from './childAction';
import child2action from './chld2action';

export default class {

    static extends = [child2action, childAction]

    goAlert = () => {
        console.log(this);
        alert('action go go go')
        this.models.main.alertGo();

        this.aaa();
        this.fff();
        this.jjj();
        this.actions.su.iii();

        alert(this.models.main.get('hello'));

        this.models.main.set('hello', 'world');
        this.models.main2.set({
            mmm: 'nothing'
        });
        console.log(this.models);
    }

    didMount() {
        this.setState({
            name: 'hello world'
        });
        
        console.log(this);
        console.log(this.$instance.props);

        this.models.main.on('change:hello', (value) => {
            console.log(this.models.main.previous());
            console.log(value, '-0-0-0-0------');
        });
    }

    didInstance() {
        setTimeout(() => {
            this.setState({
                name: 'hello world'
            });
        }, 5000);
    }

}