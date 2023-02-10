import React from 'react'

export default function MainMenuSidebarBtn({ text, active }) {
  return (
    <>
      {active ? (
        <div className="main-menu-btn-active">{text}</div>
      ) : (
        <div className="main-menu-btn">{text}</div>
      )}
    </>
  )
}
