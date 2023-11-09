import React from 'react'

const Footer = () => {
  return (
    <div className="footer" id="about">
      <div className="footer-content">
        <div className="text-4xl">Bingung Mulai dari mana?</div>
        <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdy6nC-pO3qkT4qVr-xnQo2SRtQIpEyqdlWRiZrYtV1cAygFw/viewform"
        className="
        border 
        border-s-gray-50 
        rounded-[100px] 
        p-2 
      bg-gray-50 
      text-secondary 
        px-10
        mt-10
        ">
          Isi survei dulu yuk 🙌
          </a>
      </div>
      <div className="footer-content">
          <div className="mb-5">Tunggu kehadiran kami di</div>
          <div><img src={'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'}/></div>
      </div>
    </div>
  )
}

export default Footer
