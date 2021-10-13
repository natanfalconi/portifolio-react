import '../styles/sectionHome.css'

import code from '../assets/code.svg'
// import programmer from '../assets/programmer.svg'

export function SectionHome() {
    return (
        <section className="home">
            <div className="content-home">

                <div className="info">
                    <h2>Natan Falconi</h2>
                    <p>Web Development</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, doloribus!</span>
                    <a href="">Sobre</a>
                </div>

                <div className="code-logo">
                    <img src={code} alt="" />
                </div>
            </div>
        </section>
    )
}