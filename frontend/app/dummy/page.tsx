import Link from "next/link";

export default function Page(){
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <p>
                Hello from Dummy Route. Just for testing the app router.
            </p>
            <Link href={'/'} className="border p-4 rounded-lg bg-primary hover:opacity-75">
                Go to Home
            </Link>
        </div>
    )
}