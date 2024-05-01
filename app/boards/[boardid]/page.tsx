export default function BoardPage({
    params,
    searchParams,
}: {
    params: { boardid: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {

    return (
        <div>BoardPage
            <p>{params.boardid}</p>
            {JSON.stringify(searchParams)}
        </div>
    )
}