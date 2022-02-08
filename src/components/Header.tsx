export function Header(props: Header.props) {
    const changeBody = (name: string) => {
        props.changer(props.allPages.get(name) ?? <div/>, name)
    }

    return (
        <div className='Header'>
            <img className='Logo' src='logo192.png'/>
            <div className="Buttons">
                {Array.from(props.allPages.keys()).map((name) => {
                    return <button name={name} key={name} onClick={() => changeBody(name)}>{name}</button>
                })}
            </div>
        </div>
    );
}
export namespace Header {
    export interface props {
        changer: (el: JSX.Element, path: string) => void;
        allPages: Map<string, JSX.Element>;
    }
}