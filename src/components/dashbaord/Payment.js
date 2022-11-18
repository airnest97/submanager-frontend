import React, {useState} from 'react';
import dstv from '../../assets/dstv-logo-vector.png'
import gotv from '../../assets/gotv.png'
import networks from '../../assets/MTN-AIRTEL-GLO-and-9MOBILE-logos-removebg-preview.png'
import DstvCardModal from '../../modals/DstvCardModal';
import DstvWalletModal from '../../modals/DstvWalletModal';
import Modal from "react-modal";
import GotvCardModal from '../../modals/GotvCardModal';
import GotvWalletModal from '../../modals/GotvWalletModal';
import DataCardModal from '../../modals/DataCardModal';
import DataWalletModal from '../../modals/DataWalletModal';



Modal.setAppElement("#root")
const Payment = () => {
    const [dstvCardOpen, setDstvCardOpenOpen] = useState(false);
    const [dstvWalletOpen, setDstvWalletOpenOpen] = useState(false);
    const [gotvCardOpen, setGotvCardOpen] = useState(false);
    const [gotvWalletOpen, setGotvWalletOpen] = useState(false);
    const [dataCardOpen, setDataCardOpen] = useState(false);
    const [dataWalletOpen, setDataWalletOpen] = useState(false);


    const closeDstvCardModal = () => {
        setDstvCardOpenOpen(false)
    }
    const openDstvCardModal = () => {
        setDstvCardOpenOpen(true)
    }

    const closeDstvWalletModal = () => {
        setDstvWalletOpenOpen(false)
    }
    const openDstvWalletModal = () => {
        setDstvWalletOpenOpen(true)
    }

    const closeGotvCardModal = () => {
        setGotvCardOpen(false)
    }
    const openGotvCardModal = () => {
        setGotvCardOpen(true)
    }

    const closeGotvWalletModal = () => {
        setGotvWalletOpen(false)
    }
    const openGotvWalletModal = () => {
        setGotvWalletOpen(true)
    }

    const closeDataCardModal = () => {
        setDataCardOpen(false)
    }
    const openDataCardModal = () => {
        setDataCardOpen(true)
    }

    const closeDataWalletModal = () => {
        setDataWalletOpen(false)
    }
    const openDataWalletModal = () => {
        setDataWalletOpen(true)
    }


    return (
        <div className="payments">
            <DstvCardModal accessOpen={dstvCardOpen} closeAccess = {closeDstvCardModal}/>
            <DstvWalletModal dstvWalletAccessOpen={dstvWalletOpen} closeDstvWalletAccess = {closeDstvWalletModal}/>
            <GotvCardModal GotvCardAccessOpen={gotvCardOpen} closeGotvCardAccess ={closeGotvCardModal}/>
            <GotvWalletModal gotvWalletAccessOpen={gotvWalletOpen} closeGotvWalletAccess = {closeGotvWalletModal}/>
            <DataCardModal DataCardAccessOpen={dataCardOpen} closeDataCardAccess ={closeDataCardModal}/>
            <DataWalletModal dataWalletAccessOpen={dataWalletOpen} closeDataWalletAccess ={closeDataWalletModal}/>
            <div className="card">
                <h1>DSTV</h1>
                <div className="payment-pictures"><img src={dstv} alt="dstv" /></div>
                <h3>Pay with</h3>
                <div className="payment-method">
                    <button onClick={openDstvCardModal}>Card</button>
                    <h2>Or</h2>
                    <button onClick={openDstvWalletModal}>Wallet</button>
                </div>
            </div>
            <div className="card">
                <h1>GOTV</h1>
                <div className="payment-pictures"><img src={gotv} alt="gotv"/></div>
                <h3>Pay with</h3>
                <div className="payment-method">                   
                    <button onClick={openGotvCardModal}>Card</button>
                    <h2>Or</h2>
                    <button onClick={openGotvWalletModal}>Wallet</button>
                </div>
            </div>

            <div className="card">
                <h1>Data</h1>
                <div className="payment-pictures"><img src={networks} alt="network"/></div>
                <h3>Pay with</h3>
                <div className="payment-method">
                    <button onClick={openDataCardModal}>Card</button>
                    <h2>Or</h2>
                    <button onClick={openDataWalletModal}>Wallet</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;