import DateTimePretty from "./DateTimePrettyHocFunc";

export default function Video(props) {
    return (
        <div className="item">
            <iframe title={props.title} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
            <DateTimePretty date={props.date} />
        </div>
    )
}