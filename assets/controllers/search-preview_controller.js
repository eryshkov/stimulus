import {Controller} from 'stimulus';
import {useClickOutside, useDebounce, useTransition } from 'stimulus-use';

export default class extends Controller {
    static debounces = ['search'];
    static targets = ['result'];
    static values ={
        url: String,
    }

    connect() {
        useClickOutside(this);
        useDebounce(this);
        useTransition(this, {
            element: this.resultTarget,
            enterActive: 'fade-enter-active',
            enterFrom: 'fade-enter-from',
            enterTo: 'fade-enter-to',
            leaveActive: 'fade-leave-active',
            leaveFrom: 'fade-leave-from',
            leaveTo: 'fade-leave-to',
            hiddenClass: 'd-none',
        });
    }

    clickOutside(event) {
        this.leave();
    }

    onSearchInput(event) {
        this.search(event.currentTarget.value);
    }

    async search(query) {
        const params = new URLSearchParams({
            q: query,
            preview: 1
        });

        const response = await fetch(`${this.urlValue}?${params.toString()}`);
        this.resultTarget.innerHTML = await response.text();
        this.enter();
    }
};
