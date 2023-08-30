

export const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
})

export const dev = window.location.origin.includes('localhost')
export const baseURL = 'https://sandbox.codeworksacademy.com'
export const useSockets = false
export const domain = 'codeworksclassroom.auth0.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
export const audience = 'https://codeworksclassroom.com'



