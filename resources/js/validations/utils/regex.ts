export const kanaRegex = /^[ァ-ヶー　]+$/u;
export const emailRegex = /^[\w\-.]+@[\w\-.]+\.[a-zA-Z]{2,}$/;
export const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]).{8,}$/;
