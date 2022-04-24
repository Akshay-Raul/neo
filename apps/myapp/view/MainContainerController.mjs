import ComponentController from '../../../src/controller/Component.mjs';

/**
 * @class MyApp.view.MainContainer
 * @extends Neo.controller.Component
 */
class MainContainerController extends ComponentController {
    static getConfig() {return {
        /**
         * @member {String} className='MyApp.view.MainContainer'
         * @protected
         */
        className: 'MyApp.view.MainContainer'
    }}

    /**
     * @param {Object} data
     */
    onButtonClick(data) {
      this.getReference('tab-container').activeIndex = 1;
    }

    /**
     * @param {Object} data
     */
    onAddButtonClick(data) {
        let toolbar = data.component.up();

        toolbar.add({
            ntype: 'button',
            //handler: this.onButtonClick.bind(this), // identical
            handler: 'onButtonClick',
            style: {marginLeft: '10px'},
            text: 'hello'
        });
    }


}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
