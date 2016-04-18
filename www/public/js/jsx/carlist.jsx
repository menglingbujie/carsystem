
class CarList extends React.Component{

  constructor(props){
    super(props);
    this.carlist = [];
  }
  getCarStatus(status){
    var str = "";
    switch(status){
      case "未使用":
      str="symbol unuse";
      break;
      case "使用中":
      str="symbol use";
      break;
      case "维修中":
      str="symbol fixed";
      break;
      default:
      str="symbol other";
      break;
    }
    return str;
  }
  render(){
    console.log("===render");
    // console.log(this.carlist);
    var items = this.carlist.map((car,index)=>{
      return (
        <tr className="car">
        <th>{index+1}</th>
        <td><img src={car.logo} /></td>
        <td>{car.carname}</td>
        <td>{car.carnum}</td>
        <td>{car.carid}</td>
        <td>{car.careng}</td>
        <td><i className={this.getCarStatus(car.status)}></i></td>
        </tr>
      )
    })
    return (
      <div>
      {items}
      </div>
    )
    // var cars = this.carlist.carlist;

  }
  componentWillMount(){
    console.log("=will mount=")
    // console.log(this.props.source)
    var that = this;

    $.ajax({
      url:this.props.source,
      type:"get",
      async:false,
      success:(data)=>{
        console.log("==1111")
        that.carlist = data.carlist;
      }
    });
  }
  componentDidMount(){
    console.log("=mounted=")
    // console.log(carlist)
  }

  componentWillUnmount(){
    console.log("=will unmount=")
  }
  getCarListData(){
    console.log("=getdata=")
  }
};
  // console.log(data)
ReactDOM.render(
  <CarList source="/carlist"  />,
  document.getElementById("carListId")
)
