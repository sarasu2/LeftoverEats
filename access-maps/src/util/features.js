export async function fetchMapFeatures() {
  const baseUrl = `${
    process.env.REACT_APP_BACKEND_URL
  }/features`;
    const url = new URL(baseUrl);

    const response = await fetch(url, {
        method: 'GET',
        headers: {
        'content-type': 'application/json'
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the about page');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const features = await response.json();
    return features;
}

  // Front-end NEEDS TO SEND DATA IN THIS format:
  /*
  {
    "featureType": "stairs",
    "coordinates": [
      {
s        "latitude": 34.6772208204604,
        "longitude": -82.8370558471691
      },
      {
        "latitude": 34.6771733964104,
        "longitude": -82.8370588646541
      },
      ...AND SO ON
    ]
  }
  */
export async function saveMapFeature(featureData) {
    const baseUrl = `${
      process.env.REACT_APP_BACKEND_URL
    }/features`;
    const url = new URL(baseUrl);
      
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(featureData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      const error = new Error('An error occurred while saving organization data');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
  
    return await response.json();
  }
