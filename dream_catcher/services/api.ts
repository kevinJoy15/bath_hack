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
    console.log("Posting dream!")
    try {
       console.log("About to call api")
       const response = await fetch('http://localhost:8000/post', {
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

export const getPostData = async ({ headerId }: { headerId: number }) => {
    try {
       console.log("About to call /viewPost")
       const response = await fetch('http://localhost:8000/viewPost', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               "headerId": headerId
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