export function toggleClassActive() {
    [...arguments].forEach(el => {
        el.classList.toggle('active');
    });
}
