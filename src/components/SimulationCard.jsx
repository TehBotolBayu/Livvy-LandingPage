import React, { useEffect, useState } from 'react'


const SimulationCard = () => {
  const [harga, setHarga] = useState(0);
  const [DP, setDP] = useState(0);
  const [tahun, setTahun] = useState(0);
  const [bunga, setBunga] = useState(0);
  const [bulan, setBulan] = useState(0);
  const [angsur, setAngsur] = useState(0);

  const hitungDP = (val) => {
    setDP(harga*val/100);
  }

  const setWaktu = (time) => {
    setTahun(time);
    setBulan(time*12);
  }

  const hitung = () => {
    let pokok = (harga - DP);
    let angsuran = (pokok * bunga/100 * tahun);
    setAngsur((angsuran/bulan) + (pokok/bulan))
  }

  return (
    <>
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="p-4 md:text-center w-96 mt-20  md:w-full m-auto">
        <h1 className="font-bold text-2xl text-primary">Simulasi KPR</h1>
        <p>Cek simulasi kredit rumah dengan kalkulator KPR Livvy</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 
      md:flex-row md:items-start">
        <div className="card w-96 mt-2 md:mr-2">
          <div className="form-container ">
            <div className="form-input">
              <label htmlFor="harga">Harga Properti</label>
              <div className="input-container">
                <div className="format-input">Rp</div>
                <input onChange={(e) => {setHarga(e.target.value)}} type="number" name="" id="harga" />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="">Uang Muka</label>
              <div className="input-container">
                <div className="format-input">%</div>
                <input onChange={(e) => {hitungDP(e.target.value)}} type="number" name="" id="dppersen" />
                <div className="format-input">Rp</div>
                <input onChange={(e) => {setDP(e.target.value)}} type="number" name="" id="dp" value={DP} />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="bunga">Margin/tahun</label>
              <div className="input-container">
                <div className="format-input">%</div>
                <input onChange={(e) => {setBunga(e.target.value)}} type="number" name="bunga" id="" className="w-1/3"/>
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="waktu">Jangka Waktu</label>
              <div className="input-container">
                <div className="format-input">Thn</div>
                <input onChange={(e) => {setWaktu(e.target.value)}} type="number" name="waktu" id="" className="w-1/3"/>
              </div>
            </div>
            <button className="button" onClick={hitung}>
              Hitung
            </button>
          </div>
        </div>
        <div className="card w-96 mt-2">
          <div className="result-container">
            <div className="text-center text-lg p-2 rounded-md bg-green-100 my-2">
              Angsuran per bulan:<br></br>
              <span className="text-primary text-2xl font-bold">Rp {angsur}</span>
            </div>
            <h2 className="font-bold my-3 border-b-2 border-gray-200">Pembayaran Pertama</h2>
            <div className="data">
              <p className="detail">Uang Muka</p>
              <p className="value">Rp {DP}</p>
            </div>
            <div className="data">
              <p className="detail">Angsuran Pertama</p>
              <p className="value">Rp {angsur}</p>
            </div>
            <h2 className="font-bold my-3 border-b-2 border-gray-200">Detail Pinjaman</h2>
            <div className="data">
              <p className="detail">Pinjaman pokok</p>
              <p className="value">Rp {}</p>
            </div>
            <div className="data">
              <p className="detail">Total margin pinjaman</p>
              <p className="value">Rp {}</p>
            </div>
            <h2 className="font-bold my-3 border-b-2 border-gray-200">Ketentuan Penghasilan Minimal</h2>
            <div className="data">
              <p className="detail">Angsuran 30% penghasilan</p>
              <p className="value">Rp {}</p>
            </div>
            <div className="data">
              <p className="detail">Angsuran 40% penghasilan</p>
              <p className="value">Rp {}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SimulationCard