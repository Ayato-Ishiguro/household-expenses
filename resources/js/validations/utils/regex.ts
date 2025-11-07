// eslint-disable-next-line no-irregular-whitespace
export const kanaRegex = /^[ァ-ヶー　]+$/u;
export const emailRegex = /^[\w\-.]+@[\w\-.]+\.[a-zA-Z]{2,}$/;
export const strongPasswordRegex =
    // eslint-disable-next-line no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/;
