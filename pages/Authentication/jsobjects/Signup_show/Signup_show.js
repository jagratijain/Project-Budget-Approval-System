export default {
    showSignup: () => {
        SignupContainer.setVisibility(true);
        Login.setVisibility(false);
    },
    showLogin: () => {
        Login.setVisibility(true);
        SignupContainer.setVisibility(false);
    }
}