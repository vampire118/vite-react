export interface SecondComponentProps{
    title: string;
    content: string;
}

const SecondComponent = (props:SecondComponentProps) => {
    return (
        <>
            <h2>{props.title}</h2>
            <h2>{props.content}</h2>
        </>
    )
}

export default SecondComponent