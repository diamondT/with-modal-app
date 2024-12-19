export default async function Page({searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const {type} = await searchParams

    return <div>I am a regular page of type {type}</div>
}
