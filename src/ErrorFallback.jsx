export default function ErrorFallback({error}) {
    return (
        <div role="alert">
            There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>
    )
}