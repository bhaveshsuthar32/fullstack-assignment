import React from 'react'

export default function footer() {
  return (
    <>
         <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Abstract</h3>
            <ul className="space-y-2">
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Community</h3>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <h3 className="font-bold text-xl mt-8 mb-2">Contact Us</h3>
            <p>info@abstract.com</p>
          </div>
        </div>
      </footer>

      <div className="bg-black text-white p-4 text-right text-sm">
        <p>© Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    

    </>
  )
}
