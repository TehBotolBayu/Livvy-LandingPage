import React, { useEffect, useState } from 'react'

const SimulationCard = () => {
  
  const [harga, setHarga] = useState(0),
       [DP, setDP] = useState(0),
       [tahun, setTahun] = useState(0),
       [bunga, setBunga] = useState(0),
       [bulan, setBulan] = useState(0),
       [angsur, setAngsur] = useState(0),
       [total, setTotal] = useState(0);

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
    setAngsur(parseInt((angsuran/bulan) + (pokok/bulan)));
  }

  useEffect(() => {
    setTotal(angsur*bulan);
  }, [angsur])

  let Format = new Intl.NumberFormat();
  let id = new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
  })

  function formatHarga(e){
    let x = e.target.value;
    let n = x.replace(/\,/g, '')
    n = n.replace(/[^0-9]+/g,"")
    setHarga(parseFloat(n))
    e.target.value = Format.format(n)
  }

  function formatDP(e){
    let x = e.target.value;
    let n = x.replace(/\,/g, '')
    n = n.replace(/[^0-9]+/g,"")
    setDP(parseFloat(n))
    e.target.value = Format.format(n)
  }

  return (
    <>
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="p-4 md:text-center max-w-96 mt-20  md:w-full m-auto">
        <h1 className="font-bold text-2xl text-primary">Simulasi KPR</h1>
        <p>Cek simulasi kredit rumah dengan kalkulator KPR Livvy</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 
      md:flex-row md:items-start ">
        <div className="card  mt-2 md:mr-2 max-w-sm">
          <div className="form-container ">
            <div className="form-input">
              <label htmlFor="harga">Harga rumah</label>
              <div className="input-container">
              <div className="format-input">Rp</div>
                <input type="text" placeholder="Enter text" onChange={(e) => {
                  formatHarga(e)
                }} />
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="">Uang Muka</label>
              <div className="input-container">
                <div className="format-input">%</div>
                <input onChange={(e) => {hitungDP(e.target.value)}} type="number" name="" id="dppersen" />
                <div className="format-input">Rp</div>
                <input onChange={(e) => {formatDP(e)}} type="text" name="" id="dp" value={Format.format(DP) == "NaN" ? 0 : Format.format(DP)} />
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
        <div className="card  mt-2 w-full max-w-sm">
          <div className="result-container">
            <div className="text-center text-lg p-2 rounded-md bg-green-100 my-2">
              Angsuran per bulan:<br></br>
              <span className="text-primary text-2xl font-bold">{id.format(angsur) == "RpNaN"? "Rp 0":id.format(angsur) }</span>
            </div>
            <h2 className="font-bold my-3 border-b-2 border-gray-200">Pembayaran Pertama</h2>
            <div className="data">
              <p className="detail">Uang Muka</p>
              <p className="value">{id.format(DP) == "RpNaN"? "Rp 0":id.format(DP) }</p>
            </div>
            <div className="data">
              <p className="detail">Angsuran Pertama</p>
              <p className="value">{id.format(angsur) == "RpNaN"? "Rp 0":id.format(angsur)}</p>
            </div>
            <h2 className="font-bold my-3 border-b-2 border-gray-200">Detail Pinjaman</h2>
            <div className="data">
              <p className="detail">Pinjaman pokok</p>
              <p className="value">{id.format(harga-DP) == "RpNaN"? "Rp 0":id.format(harga-DP)}</p>
            </div>
            <div className="data">
              <p className="detail">Total margin pinjaman</p>
              <p className="value">{id.format(total) == "RpNaN"? "Rp 0":id.format(total)}</p>
            </div>
            <h2 className="font-bold my-3 border-b-2 border-gray-200">Ketentuan Penghasilan Minimal</h2>
            <div className="data">
              <p className="detail">Angsuran 30% penghasilan</p>
              <p className="value">{id.format(parseInt(angsur*3 + (angsur / 3))) == "RpNaN"? "Rp 0":id.format(parseInt(angsur*3 + (angsur / 3)))}</p>
            </div>
            <div className="data">
              <p className="detail">Angsuran 40% penghasilan</p>
              <p className="value">{id.format(parseInt(angsur*2 + (angsur / 2))) == "RpNaN"? "Rp 0":id.format(parseInt(angsur*2 + (angsur / 2)))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SimulationCard