export function openModal(modalName: string) {
    const { vueApp } = useNuxtApp();

    if (typeof vueApp.config.globalProperties.$openModal === 'function') {
        vueApp.config.globalProperties.$openModal(modalName);
    } else {
        // Handle the case where $openModal is not a function
        console.error('$openModal is not a function');
    }
}

export function closeModal(modalName: string) {
    const { vueApp } = useNuxtApp();

    if (typeof vueApp.config.globalProperties.$openModal === 'function') {
        vueApp.config.globalProperties.$closeModal(modalName);
    } else {
        // Handle the case where $openModal is not a function
        console.error('$openModal is not a function');
    }
}
