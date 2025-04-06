 export const DREAM_CONFIG = {
    BASE_URL: 'http://127.0.0.1:8000',
    header: {
        accept: '*/*',
        contentType: 'application/json',
    }
 }

 export const fetchDreams = async ({ userId }: { userId: number }) => {
     console.log(`Fetching dreams for user ${userId} from ${DREAM_CONFIG.BASE_URL}/viewFeed`);
     const requestBody = { userId };
     console.log("Request body:", requestBody); 
     try {
        const response = await fetch('http://127.0.0.1:8000/viewFeed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userId": userId
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API Error (${response.status}): ${errorText}`);
            throw new Error(`Failed to get feed: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response successful:", data);
        return data;
    } catch (error) {
         console.error("API fetch error:", error);
         throw error;
    }
}

export const postDream = async ({ userId, dreamDescription }: { userId: number, dreamDescription: string }) => {
    try {
       const response = await fetch('http://localhost:8000/viewFeed', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               "userId": userId,
               "dreamDescription": dreamDescription
           })
       });
       if (!response.ok) {
           const errorText = await response.text();
           console.error(`API Error (${response.status}): ${errorText}`);
           throw new Error(`Failed to get feed: ${response.status}`);
       }
       const data = await response.json();
       console.log("API response successful:", data);
       return data;
   } catch (error) {
        console.error("API fetch error:", error);
        throw error;
   }
}