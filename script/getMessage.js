export function getMessage(message) {
    let mesEmail = `Your email is ${message}. You have been subscribed`
    let mesUnavailable = 'The page is temporarily unavailable.'
    let mes = message ? mesEmail : mesUnavailable;
    alert(mes);
}