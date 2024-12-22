import {NextRequest, NextResponse} from 'next/server';
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";


// Dummy data
const posts = [
    {
        title: 'Lorem Ipsum',
        slug: 'lorem-ipsum',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
];

export async function GET(request: NextRequest) {
    const session = await getServerSession();

    if (!session) {
        // redirect or render something else
        return redirect('/api/auth/signin');
    }
    return NextResponse.json(posts);
}