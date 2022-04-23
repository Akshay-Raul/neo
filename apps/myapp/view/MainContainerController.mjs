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
        console.log('onButtonClick',data);
        console.log(this);
    }


}

Neo.applyClassConfig(MainContainerController);

export default MainContainerController;
