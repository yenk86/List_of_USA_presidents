import axios from "axios";
import React, {Component} from "react";

class Bush extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
            data: '',
            searchValue: '',
        }
    }

    componentDidMount() {
        let params = {
            "action": "wbsearchentities",
            "language": "en",
            "format": "json",
            "search": "George W. Bush",
            "origin": "*",
            "limit": 1
        }

        let url = "https://www.wikidata.org/w/api.php";

        axios.get(url, {params: params}).then(result => {

            // console.log('axios result ===> ', result);
            // console.log(result.data.searchinfo.search);
            this.setState({response: result.data, search: result.data.search, searchValue: result.data.searchinfo.search})
        }).catch(err => console.log('axios error ===> ', err));

    }

    render() {
        return (
            <>
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                            <th scope="col">Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <td>{this.state.searchValue}</td>
                            <td></td>
                            <td>{this.state.search && this.state.search.map((element) => (
                                <div key={element.id}>
                                    <p>{element.id}</p>
                                    <p>{element.display.description.value}</p>
                                </div>
                            ))}</td>
                        </tr>
                        </tbody>
                    </table>
                    {/*{this.state.response.search.length}*/}



                </div>

            </>
        )
    }
}

export default Bush;