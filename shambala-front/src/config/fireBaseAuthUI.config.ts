export const uiConfig = auth => {
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        tosUrl: '/terms-of-service',
        privacyPolicyUrl: '/privacy-policy',
        signInOptions: [
            auth.GoogleAuthProvider.PROVIDER_ID
        ]
    }
}