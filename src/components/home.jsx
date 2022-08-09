import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import { CheckLicense } from '@pamuditha-blockstars/check-license-react'

const Home = () =>{

    const [licenseKey, setLicenseKey] = useState('');
    const [result, setResult] = useState();

    const LicenseKeyValue = (e) =>{
        setLicenseKey(e.target.value);
    }

    const submitLicenseKey = async(e) =>{
        const resultSet = await CheckLicense(licenseKey);
        setResult(resultSet)
    }

    return(
    <div className='container'>
        <h1 className='home-title'>Check License Server Sample Site</h1>
        <div className='home-alert'>
        {result == false &&
            <div class="alert alert-danger" role="alert">
                License is Expire or Invalid License Key !!
            </div>
        }

        {result == true &&
            <div class="alert alert-success success" role="alert">
                License is Ok, <Link to="/success" className='success-redirect'>Click here Redirect to Next Page !!</Link>
            </div>
        }
        </div>
        <div className='home-form'>
        <form className="row g-3">
            <div className="mb-3">
                <label className="form-label">License Key :</label>
                <input className="form-control" onChange={LicenseKeyValue}/>
            <div className="form-text">First, Enter Your License Key for check it validation</div>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-dark" onClick={submitLicenseKey} type="button">CKECK LICENSE KEY</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Home;