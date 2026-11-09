import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
