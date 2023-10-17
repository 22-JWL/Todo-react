import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <span>menu</span>
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>

            <li><Link to = "/mytodo">mytodo</Link></li>

            <li><Link to = "login/">login</Link></li>

            <li><Link to = "register/">register</Link></li>
        </ul>
    </header>

  )
}
