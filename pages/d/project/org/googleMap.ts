// googleMap.js
import { ref, onMounted } from 'vue';

export function useGoogleMap(apiKey: string, placeData: any) {
    const map = ref<google.maps.Map | null>(null);

    onMounted(() => {
        // Load the Google Maps API script
        const script = document.createElement('script');
        console.log('apiKey', apiKey);
        console.log('placeData', placeData);

        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            // Initialize the map with placeData
            map.value = new google.maps.Map(document.getElementById('map'), {
                center: { lat: placeData.location.lat, lng: placeData.location.lng },
                zoom: 15,
            });

            // Add a marker for the specified location
            new google.maps.Marker({
                position: { lat: placeData.location.lat, lng: placeData.location.lng },
                map: map.value,
                title: 'Location',
            });
        };

        document.head.appendChild(script);
    });

    return { map };
}
