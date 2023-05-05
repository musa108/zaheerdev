export default function Data(props) {
    return (
      <div className="Data">
        <img src={props.img} alt=""/>
        <p>{props.Name}</p>
        <a href={props.link}>Link To Project</a>
      </div>
    );
  }