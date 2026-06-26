export const fetchUnreadNotifications = async (): Promise<void> => {
    const apiKey: string | undefined = process.env.MISSIVE_API_TOKEN;

    if (!apiKey) {
        throw new Error('Missing required environment variables');
    }

    const response = await fetch('https://api.missiveapp.com/v1/conversations?filter=unread', {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        console.log('Response Status:', response.status);
        console.log('Response Status Text:', response.statusText);
        // throw new Error(`Failed to fetch unread notifications: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Unread Notifications:', data);
}