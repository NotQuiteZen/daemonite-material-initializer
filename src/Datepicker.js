import $ from 'jquery';
import * as Material from 'daemonite-material';

/**
 *
 */
export default class Datepicker {

    constructor(config) {
        this.datepickers = null;
        this.config = config;
        this.initialize();
    }

    initialize() {

        $(document).ready(() => {
            this.datepickers = $(`input[type="text"][data-material-datepicker]`);

            this.datepickers.each(function () {

                const el = $(this);

                let datepickerOptions = Object.assign({}, {
                    onClose: function () {
                        el.trigger('material.datepicker.onClose');
                    },
                    onOpen: function () {
                        el.trigger('material.datepicker.onOpen');
                    },
                }, el.data('material-datepicker') || {});

                el.pickdate(datepickerOptions);
            });
        });
    }
}
