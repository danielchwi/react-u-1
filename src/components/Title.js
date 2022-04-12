export default function Title({title, subtitle }){
    return (
        <div>
            <h1 className="title">{title}</h1>
            <br />
            <h3 className="subtitle">{subtitle}</h3>
        </div>
    )
}