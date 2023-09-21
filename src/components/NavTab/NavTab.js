import React from 'react';
import './NavTab.css'


function NavTab() {
  const navItems = [
    { id: 1, text: 'О проекте' },
    { id: 2, text: 'Технологии' },
    { id: 3, text: 'Студент' },
  ];

  return (
    <section className='navtab'>
      <nav className='navtab__container'>
        <ul className='navtab__navigation'>
          {navItems.map((item) => (
            <li className='navtab__text' key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
// function NavTab(){
//     const AboutProjectTitle = 'О проекте'
//     const TechsTitle = 'Технологии'
//     const AboutMeText = 'Студент'

//     return(
// <section className='navtab'>
//       <nav className='navtab__container'>
//         <ul className='navtab__navigation'>
//             <li className='navtab__text'>{AboutProjectTitle}</li>
//             <li className='navtab__text'>{TechsTitle}</li>
//             <li className='navtab__text'>{AboutMeText}</li>
//         </ul>
//       </nav>
//     </section>
//     )
// }

export default NavTab;