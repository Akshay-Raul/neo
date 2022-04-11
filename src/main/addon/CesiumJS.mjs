import Base      from '../../core/Base.mjs';
import DomAccess from '../DomAccess.mjs';

/**
 * See: https://github.com/CesiumGS/cesium
 * @class Neo.main.addon.CesiumJS
 * @extends Neo.core.Base
 * @singleton
 */
class CesiumJS extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.addon.CesiumJS'
         * @protected
         */
        className: 'Neo.main.addon.CesiumJS',
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'create',
                'destroy'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);
        this.loadFiles();
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     */
    create(data) {
        // todo
        console.log('main.addon.CesiumJS: create()', data);

        // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
        const viewer = new Cesium.Viewer(data.id, {
            terrainProvider: Cesium.createWorldTerrain()
        });

        // Add Cesium OSM Buildings, a global 3D buildings layer.
        const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

        // Fly the camera to San Francisco at the given longitude, latitude, and height.
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
            orientation : {
                heading : Cesium.Math.toRadians(0.0),
                pitch : Cesium.Math.toRadians(-15.0),
            }
        });
    }

    /**
     * @param {Object} data
     */
    destroy(data) {
        // todo
        console.log('main.addon.CesiumJS: destroy()', data);
    }

    /**
     * @protected
     */
    loadFiles() {
        Promise.all([
            DomAccess.loadScript(    'https://cesium.com/downloads/cesiumjs/releases/1.92/Build/Cesium/Cesium.js'),
            DomAccess.loadStylesheet('https://cesium.com/downloads/cesiumjs/releases/1.92/Build/Cesium/Widgets/widgets.css')
        ]).then(() => {
            this.onFilesLoaded();
        });
    }

    /**
     *
     */
    onFilesLoaded() {
        Cesium.Ion.defaultAccessToken = Neo.config.cesiumJsToken;
    }
}

Neo.applyClassConfig(CesiumJS);

let instance = Neo.create(CesiumJS);

Neo.applyToGlobalNs(instance);

export default instance;