export async function GET() {
    return new Response(JSON.stringify({ message: 'Public Data' }), { status: 200 });
}

/* NOTE: This file is for testing purposes only */