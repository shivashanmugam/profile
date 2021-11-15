import Header from 'Components/Header/Header'
export default function Page(props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}