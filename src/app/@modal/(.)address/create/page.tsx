export default async function ModalPage({searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const {type} = await searchParams

    return <div>I am a modal page of type {type}</div>
}

// export const dynamic = 'force-dynamic'
