 export const DREAM_CONFIG = {
    BASE_URL: 'http://127.0.0.1:8000',
    header: {
        accept: '*/*',
        contentType: 'application/json',
    }
 }

 // @ts-ignore
 export const fetchDreams = async ({ userId }: { userId: number }) => {
     console.log(`Fetching dreams for user ${userId} from ${DREAM_CONFIG.BASE_URL}/viewFeed`);

     // Create the request object - make sure it exactly matches the expected ViewFeedRequest format
     const requestBody = { userId };

     console.log("Request body:", requestBody); // Log the request body for debugging

     try {
         // This is exactly how Postman would format the request
         const response = await fetch('http://localhost:8000/viewFeed', {
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

         // Return the headers array from the response
         return data;
     } catch (error) {
         console.error("API fetch error:", error);
         throw error;
     }
 }