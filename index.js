import Datepicker from './src/Datepicker';

export default class DaemoniteMaterialInitialize {

    constructor(modules) {

        let initModules = Object.assign({}, {
            Datepicker: {},
        }, modules);

        this.modules = {
            Datepicker: !initModules.Datepicker || new Datepicker(initModules.Datepicker)
        };
    }
}
