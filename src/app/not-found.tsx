// pages/404.js
import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ padding: '100px 0', textAlign: 'center', fontSize: '24px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <p>
                <Link href="/">
                    <p>Go back home</p>
                </Link>
            </p>
        </div>
    );
}