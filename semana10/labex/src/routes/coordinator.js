export const goToBack = (history) => {
    history.goBack()
}

export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToListTripsPage = (history) => {
    history.push('/trips/list')
}

export const goToAdminHomePage = (history) => {
    history.push('/admin/trips/list')
}

export const goToCreateTripPage = (history) => {
    history.push('/admin/trips/create')
}

export const goToDetailPage = (history) => {
    history.push('/admin/trips/:id')
}

export const goToApplicationFormPage = (history) => {
    history.push('/trips/application')
}