import Component from '../../../src/component/Base.mjs';
import MainContainerController from "./MainContainerController.mjs";
import TabContainer from '../../../src/tab/Container.mjs';
import Viewport from '../../../src/container/Viewport.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {
        return {
            className: 'MyApp.view.MainContainer',
            autoMount: true,
            controller: MainContainerController,
            layout: {ntype: 'vbox'},

            items: [{
                module: TabContainer,
                height: 300,
                width: 500,
                style: {flex: 'none', margin: '20px'},
                reference: 'tab-container',

                itemDefaults: {
                    module: Component,
                    cls: ['neo-examples-tab-component'],
                    style: {padding: '20px'},
                },

                items: [{
                    tabButtonConfig: {
                        iconCls: 'fa fa-home',
                        text: 'Tab 1'
                    },
                    vdom: {innerHTML: 'Welcome to your new Neo App.'}
                }, {
                    tabButtonConfig: {
                        iconCls: 'fa fa-play-circle',
                        text: 'Tab 2'
                    },
                    vdom: {innerHTML: 'Have fun creating something awesome!'}
                }]
            }, {
                ntype: 'toolbar',
                style: {margin: '15px'},
                items: [{
                    ntype: 'button',
                    handler: 'onButtonClick',
                    text: 'hello'
                }, {
                    ntype: 'button',
                    handler: 'onAddButtonClick',
                    style: {marginLeft: '10px'},
                    text: 'Add Button'
                }]
            }]
        }
    }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;