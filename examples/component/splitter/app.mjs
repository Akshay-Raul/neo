import MainContainer from './MainContainer.mjs';

const onStart = () => Neo.app({
    mainView: MainContainer,
    name    : 'Neo.examples.component.splitter'
});

export {onStart as onStart};