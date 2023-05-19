import DateTimePretty from "./DateTimePrettyHocFunc";

export default function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="https://alexwebart.github.io/ra-time-highlight">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
            <DateTimePretty date={props.date} />
        </div>
    )
};