import React from 'react';

function PriceList() {
    return (
        <div className="container mt-5 py-5" style={{ background: '#2222' }}>
            <h1 className="d-flex justify-content-center"> See the Best price of Your Crop</h1>

            <form className="d-flex justify-content-center my-5">
                <div class=" row">
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control ">
                            <option selected>Select State</option>
                            <option>Rajasthan</option>
                            <option>Gujrat</option>
                            <option>MadhyPradesh</option>
                            <option>Hariyana</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <button type="submit" class="btn btn-success">See the Price</button>
                    </div>

                </div>
            </form>
        <div className="d-flex text-center" style={{maxWidth: '800px', whiteSpace:'nowrap', margin:'0 auto'}}>
            <table class="table table-striped table-dark table-fixed" cellspacing="0">
                <thead className="" >
                    <tr>
                        <th scope="col" rowSpan="3">#</th>
                        <th scope="col" rowSpan="3">Crop Name</th>
                        <th scope="col" rowSpan="3">Crop Type</th>
                        <th scope="col" rowSpan="3">Crop Image</th>
                        <th scope="col" colSpan="6">Price according to th Cities / Date</th>
                       
                    </tr>
                    <tr >
                        <td scope="col"  colSpan="6">30/10/21</td>
                    </tr>
                    <tr>
                        <th>Kota</th>
                        <th>Bundi</th>
                        <th>Jaipur</th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" rowSpan="4">1</th>
                        <td rowSpan="4">Wheat</td>
                        <td>Laster</td>
                        <td>
                            <img src="https://cdn.pixabay.com/photo/2011/08/17/12/52/wheat-8762__340.jpg" style={{maxWidth:'100px', maxHeight:'100px'}}></img>
                        </td>
                        <td>1550-70</td>
                        <td>1600-20</td>
                        <td>1400-80</td>
                        
                    </tr>
                    <tr>
                        <td>Mil</td>
                        <td>
                            <img src="https://media.istockphoto.com/photos/wheat-on-white-picture-id1288049289?b=1&k=20&m=1288049289&s=170667a&w=0&h=SF79IO7N0N6QQZ65IRDqrzCLzgCKBpGoDMTzdiSaF1k=" style={{maxWidth:'150px', maxHeight:'150px'}}/>
                        </td>
                        <td>1750-70</td>
                        <td>1700-20</td>
                        <td>1700-80</td>
                    </tr>
                    <tr>
                       
                        <td>Tukdi</td>
                        <td>
                            <img src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg" style={{maxWidth:'150px', maxHeight:'150px'}}></img>
                        </td>
                        <td>1850-70</td>
                        <td>1800-20</td>
                        <td>1800-80</td>
                    </tr>
                    <tr>
                      
                        <td>Bij Quality</td>
                        <td>
                            <img src="https://cdn.pixabay.com/photo/2021/08/10/13/46/wheat-6536039__340.jpg" style={{maxWidth:'150px', maxHeight:'150px'}}></img>
                        </td>
                        <td>1550-70</td>
                        <td>1600-20</td>
                        <td>1400-80</td>
                    </tr>
                    <tr>
                        <th scope="row" rowSpan="4">2</th>
                        <td rowSpan="4">Dhan</td>
                        <td>Sugandha</td>
                        <td>
                            <img src="https://cdn.pixabay.com/photo/2021/10/10/11/14/ch-6696389_960_720.jpg" style={{maxWidth:'150px', maxHeight:'150px'}}/>
                        </td>
                        <td>1600-1690</td>
                        <td>1650-1720</td>
                        <td>1680-1780</td>
                    </tr>
                    <tr>
                        <td>1121</td>
                        <td>
                        <img src="https://cdn.pixabay.com/photo/2016/08/15/06/35/rice-1594612__340.jpg" style={{maxWidth:'150px', maxHeight:'150px'}}/>
                        </td>
                        <td>2050-2070</td>
                        <td>2000-2020</td>
                        <td>2000-2080</td>
                    </tr>
                    <tr>
                        <td>Basmati</td>
                        <td>
                        <img src="https://cdn.pixabay.com/photo/2016/07/28/19/42/rice-1549130__340.jpg" style={{maxWidth:'150px', maxHeight:'150px'}}/>
                        </td>
                        <td>2150-2170</td>
                        <td>2200-2220</td>
                        <td>2200-2280</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default PriceList;
