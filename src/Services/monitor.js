export function getAllMonitors() {
    return {
        "monitors": [{
            "id": 1,
            "name": "Monitor1",
            "service": "https://www.google.es",
            "interval": 1000,
            "thresholdDegradationTime": 450,
            "lastStatus": ["OK", "KO", "DEGRADED"]
        },
        {
            "id": 2,
            "name": "Monitor2",
            "service": "https://www.instagram.es",
            "interval": 2000,
            "thresholdDegradationTime": 450,
            "lastStatus": ["OK", "KO", "DEGRADED"]
        },
        {
            "id": 3,
            "name": "Monitor3",
            "service": "https://www.facebook.es",
            "interval": 3000,
            "thresholdDegradationTime": 450,
            "lastStatus": ["OK", "KO", "DEGRADED"]
        }],
    }
}

