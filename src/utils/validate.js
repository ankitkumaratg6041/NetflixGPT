export const checkValidData = (email, password) => {  
    const isEmailValid = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(password);
    if (!isEmailValid) {
        return "Please enter a valid email address";
    }
    if (!isPasswordValid) {
        return "Password must contain at least 8 characters, including letters and numbers";
    }
    return null;
}