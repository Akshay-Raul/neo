import MainContainer from './MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'examples/model/table/',
    mainView: MainContainer,
    name    : 'Neo.examples.model.table'
});

export {onStart as onStart};