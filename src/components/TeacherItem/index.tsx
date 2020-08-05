import React from 'react'
import whatsappIcon from '../../Assets/images/icons/whatsapp.svg'

import './styles.css'
function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://scontent.fvix1-1.fna.fbcdn.net/v/t1.0-1/p160x160/70151005_2595645817150760_5370896538253918208_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=-4hK4rZMWekAX--wDdv&_nc_ht=scontent.fvix1-1.fna&_nc_tp=6&oh=f04b9cc44ff8df1e5a855f882d6f24e9&oe=5F4DBB4E" alt=""/>
            <div>
                <strong>Vinicius Dias</strong>
                <span>Java (script) </span>
            </div>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit sit amet turpis sed iaculis. In mauris tellus, bibendum eu efficitur vitae, imperdiet ut tellus. Vivamus vel tellus sit amet nisl facilisis auctor. Nam eu urna ante. Quisque vel consequat arcu, non luctus leo. Duis eu bibendum sapien. </p>
        <footer>
            <p>Preço/hora 
                <strong>R$ 4,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="entrar em contato"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}
export default TeacherItem