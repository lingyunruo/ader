import React from 'react';

export default ({setData, getData}) => {
    return (modelNames = []) => {
        return (HomePage) => {
            return class extends React.Component {
                constructor(props) {
                    super(props);
        
                    this.state = {};

                    const allModelInstance = getData('modelInstanceList');

                    let models = [];
                
                    if(modelNames.length === 0) {
                        models = Object.values(allModelInstance);
                    }
                    else {
                        modelNames.forEach((name) => {
                            models.push(allModelInstance[name]);
                        });
                    }
        
                    models.forEach((model) => {
                        this.state[model.name] = model.data;
        
                        model.on('change', (obj) => {
                            this.setState({
                                [model.name]: model.data
                            });
                        });
                    });
                }
        
                render() {
                    return (
                        <HomePage
                            {...this.props}
                            {...this.state}
                        />
                    );
                }
            }
        }
    }
}