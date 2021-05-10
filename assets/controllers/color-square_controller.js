import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['colorSquare', 'select'];

    selectedColorId = null;

    connect() {
        this.selectTarget.classList.add('d-none');
    }

    selectColor(event) {
        this.setSelectColor(event.currentTarget.dataset.colorId);
    }

    setSelectColor(clickedColorId) {
        if (clickedColorId === this.selectedColorId) {
            this.findSelectedColorSquare().classList.remove('selected');
            this.selectedColorId = null;
            this.selectTarget.value = '';
            return;
        }

        this.selectedColorId = clickedColorId;

        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected');
        });
        this.findSelectedColorSquare().classList.add('selected');
        this.selectTarget.value = this.selectedColorId;
    }

    /**
     * @returns {Element | null}
     */
    findSelectedColorSquare() {
        return this.colorSquareTargets.find((element) => element.dataset.colorId === this.selectedColorId);
    }
}
