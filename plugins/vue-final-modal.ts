import VueFinalModal from 'vue-final-modal';

export default defineNuxtPlugin(({ vueApp }) => {
    // Initialize VueFinalModal plugin
    const vueFinalModal = VueFinalModal();
    vueApp.use(vueFinalModal, {});

    // Extend Vue instance with $openModal method
    vueApp.config.globalProperties.$openModal = (modalName: string) => {
        const vfm = vueApp.config.globalProperties.$vfm;

        if (vfm) {
            vfm.show(modalName);
        } else {
            console.error('Vue Final Modal is not available');
        }
    };

    vueApp.config.globalProperties.$closeModal = (modalName: string) => {
        const vfm = vueApp.config.globalProperties.$vfm;

        if (vfm) {
            vfm.hide(modalName);
        } else {
            console.error('Vue Final Modal is not available');
        }
    };
});
