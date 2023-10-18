export async function getGeolocation(){

    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            return{ latitude, longitude }
        })
    }
}