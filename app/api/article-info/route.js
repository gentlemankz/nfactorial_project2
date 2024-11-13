//app/api/article-info/route.js
export async function GET() {
    const apiKey = process.env.API_KEY;
    const url = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        return new Response(JSON.stringify(data.results), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Ошибка при получении статей:', error);
        
        return new Response(JSON.stringify({ error: 'Ошибка при получении статей' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
