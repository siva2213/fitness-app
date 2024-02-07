import React from 'react'
import Statistics from './Statistics/Statistics'
import Watch from '../assets/watch'
import Nav from './Nav'
import '../App.css'

function Home() {
    return (
        <div className='d-flex flex-column'>
            <div className='mb-5'>
                <Nav />
                <div className='title'>
                    <div>Your <br /> Fitness Tracker</div>
                </div>
                <div className='d-flex justify-content-between action-buttons'>
                    <div><button>Connected Devices</button></div>
                    <div className='btn-statistics'><button>Statistcs</button></div>
                </div>
            </div>
            <div>
                <div className='product-container'>
                    <div className='layer1'></div>
                    <div className='layer2'></div>
                    <div className='layer3'>
                        <div className='d-flex flex-column' style={{ padding: '24px' }}>
                            <div style={{ color: '#FF8250', fontSize: '0.8rem', fontWeight: '400' }}>Smart Watch</div>
                            <div className='pb-5' style={{ color: '#FFFFFF', fontSize: '1.55rem', fontWeight: '600' }}>Fire Boltt</div>
                            <div className='pt-4 pb-4' style={{ color: '#FFFFFF', fontSize: '0.7rem', fontWeight: '300' }}>Scan the device <br /> QR to connect</div>
                            <div className='btn-scan'><button>Scan</button></div>
                        </div>
                    </div>
                    <div className='img-watch'>
                        <Watch />
                    </div>
                </div>
            </div>
            <div>
                <Statistics />
            </div>
            <div className='form-container'>
                <form className="d-flex flex-column">
                    <div className="col-auto mx-2 mb-2" style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>
                        <label>Add Details</label>
                    </div>
                    <div className="col-auto mb-3">
                        <input type="text" className="form-control" id="staticEmail2" value="" placeholder="Name" />
                    </div>
                    <div className="row g-3">
                        <div className="col-auto mb-3" style={{ width: '50%' }}>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Age" />
                        </div>
                        <div className="col-auto mb-3" style={{ width: '50%' }}>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Height" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <select className="form-select mb-3" aria-label="Large select example">
                            <option selected>Are you a gym member?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <select className="form-select mb-3" aria-label="Large select example">
                            <option selected>Do you eat meat?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <select className="form-select mb-3" aria-label="Large select example">
                            <option selected>Are you a cyclist?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="">
                        <button>Save Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home