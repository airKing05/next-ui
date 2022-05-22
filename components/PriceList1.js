import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import SingleProductImg from '../images/single-product-image-1.jpg';

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
                            <option>Punjab</option>
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
            <div className="d-flex text-center table-responsive-lg" style={{ maxWidth: '800px', whiteSpace: 'nowrap', margin: '0 auto' }}>
                <table class="table table-striped table-fixed table-hover" cellspacing="0">
                    <thead className="">
                        <tr>
                            <th scope="col" rowSpan="2">#</th>
                            <th scope="col" rowSpan="2"><span className='text-wrap'>Name of Crop</span></th>
                            <th scope="col" rowSpan="2"><span className='text-wrap'>Type of Crop</span></th>
                            <th className="" scope="col" rowSpan="2" ><span className='text-wrap '>Crop Image</span></th>
                            {/* <th scope="col" rowSpan="1" className="d-none d-md-block" >Crop Image</th> */}
                            {/* <th scope="col" colSpan="2">Price according to th Cities / Date</th> */}
                            <th scope="row" colSpan="2"><span className='text-wrap' style={{width:'100%', float:'left'}}>kota(Raj.), 30/10/21</span></th>
                            {/* <th scope="col" rowSpan="2" className="d-none d-md-block" >Crop Image</th> */}

                        </tr>

                        <tr>
                            <td><span  className='text-wrap'>Minimum</span></td>
                            <td>Maximum</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" rowSpan="4">1</th>
                            <td rowSpan="4">Wheat</td>
                            <td>
                                <Link href='/single-product-details'><a>Laster</a></Link>
                            </td>
                            <td className="">
                                <Link href='/single-product-details'>
                                    <a>
                                        <Image src={SingleProductImg}  layout="responsive" alt="single-product-image"/>
                                     {/* <img src="https://cdn.pixabay.com/photo/2011/08/17/12/52/wheat-8762__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }}></img> */}
                                    </a>
                                </Link>
                            </td>
                            <td>
                                <Link href='/single-product-details'><a> 1550</a></Link>
                            </td>
                            <td>
                                <Link href='/single-product-details'><a>1570</a></Link>
                            </td>
                            {/* <td className="d-none d-md-block">
                                <Link href='/single-product-details'><a><img src="https://cdn.pixabay.com/photo/2011/08/17/12/52/wheat-8762__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }}></img></a></Link>
                            </td> */}
                        </tr>
                        <tr>
                            <td>Mil</td>
                            <td className="">
                                <img src="https://media.istockphoto.com/photos/wheat-on-white-picture-id1288049289?b=1&k=20&m=1288049289&s=170667a&w=0&h=SF79IO7N0N6QQZ65IRDqrzCLzgCKBpGoDMTzdiSaF1k=" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td>
                            <td>1750</td>
                            <td>1770</td>
                            {/* <td className="d-none d-md-block">
                                <img src="https://media.istockphoto.com/photos/wheat-on-white-picture-id1288049289?b=1&k=20&m=1288049289&s=170667a&w=0&h=SF79IO7N0N6QQZ65IRDqrzCLzgCKBpGoDMTzdiSaF1k=" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td> */}

                        </tr>
                        <tr>

                            <td>Tukdi</td>
                            <td className="">
                                <img src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }}></img>
                            </td>
                            <td>1850</td>
                            <td>1870</td>
                            {/* <td className="d-none d-md-block">
                                <img src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }}></img>
                            </td> */}

                        </tr>
                        <tr>

                            <td>Bij Quality</td>
                            <td className="">
                                <img src="https://cdn.pixabay.com/photo/2021/08/10/13/46/wheat-6536039__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }}></img>
                            </td>
                            <td>1550</td>
                            <td>1570</td>
                            {/* <td className="d-none d-md-block">
                                <img src="https://cdn.pixabay.com/photo/2021/08/10/13/46/wheat-6536039__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }}></img>
                            </td> */}

                        </tr>
                        <tr>
                            <th scope="row" rowSpan="4">2</th>
                            <td rowSpan="4">Dhan</td>
                            <td>Sugandha</td>
                            <td className="">
                                <img src="https://cdn.pixabay.com/photo/2021/10/10/11/14/ch-6696389_960_720.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td>
                            <td>1600</td>
                            <td>1690</td>
                            {/* <td className="d-none d-md-block">
                                <img src="https://cdn.pixabay.com/photo/2021/10/10/11/14/ch-6696389_960_720.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td> */}

                        </tr>
                        <tr>
                            <td>1121</td>
                            <td className="">
                                <img src="https://cdn.pixabay.com/photo/2016/08/15/06/35/rice-1594612__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td>
                            <td>2050</td>
                            <td>2070</td>
                            {/* <td className="d-none d-md-block">
                                <img src="https://cdn.pixabay.com/photo/2016/08/15/06/35/rice-1594612__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td> */}

                        </tr>
                        <tr>
                            <td>Basmati</td>
                            <td className="">
                                <img src="https://cdn.pixabay.com/photo/2016/07/28/19/42/rice-1549130__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td>
                            <td>2150</td>
                            <td>2170</td>
                            {/* <td className="d-none d-md-block">
                                <img src="https://cdn.pixabay.com/photo/2016/07/28/19/42/rice-1549130__340.jpg" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            </td> */}
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PriceList;
